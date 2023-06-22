/* eslint-disable @typescript-eslint/no-shadow */
import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {getTransactions} from '../../database/Database';
import {
  formatAmount,
  calculateBalance,
  getDateRange,
  generateReport,
  filterTransactions,
} from '../../utils/utility';
import CustomText from '../components/CustomText';
import CustomDateText from '../components/CustomDateText';
import DaySelection from '../components/DaySelection';
import Layout from '../components/Layout';
import TransactionComponent from '../components/TransactionComponent';
import {balanceAndTransactionCounterStyles} from '../styles';

export interface Transaction {
  id: number;
  name: string;
  amount: string;
  type: string;
  date: string;
}
const BalanceAndTransactionCountScreen = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [modifiedTransactions, setModifiedTransactions] =
    useState<Transaction[]>(transactions);

  useFocusEffect(
    React.useCallback(() => {
      getTransactions(setTransactions);
    }, []),
  );

  useEffect(() => {
    setModifiedTransactions(transactions);
  }, [transactions]);

  function generateFilteredReport(
    transactions: Transaction[],
    filterType: string,
  ) {
    const dateRange = getDateRange(filterType);
    setStartDate(dateRange.startDate);
    setEndDate(dateRange.endDate);
    const filteredTransactions = filterTransactions(
      transactions,
      dateRange.startDate,
      dateRange.endDate,
    );
    setModifiedTransactions(filteredTransactions);
    return generateReport(filteredTransactions);
  }

  return (
    <Layout>
      <View style={balanceAndTransactionCounterStyles.container}>
        <CustomDateText label={'Start date'} value={startDate} />
        <CustomDateText label={'End date'} value={endDate} />

        <View style={balanceAndTransactionCounterStyles.daySelectionContainer}>
          <DaySelection
            label={'Today'}
            action={() => generateFilteredReport(transactions, 'Today')}
          />
          <DaySelection
            label={'Yesterday'}
            action={() => generateFilteredReport(transactions, 'Yesterday')}
          />
          <DaySelection
            label={'Last week'}
            action={() => generateFilteredReport(transactions, 'Last Week')}
          />
          <DaySelection
            label={'This month'}
            action={() => generateFilteredReport(transactions, 'This Month')}
          />
          <DaySelection
            label={'All time'}
            action={() => generateFilteredReport(transactions, 'All Time')}
          />
        </View>

        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{marginVertical: 10}}>
          <CustomText>
            Balance: {formatAmount(calculateBalance(transactions))}
          </CustomText>
          <CustomText>
            Transaction Count: {modifiedTransactions.length}
          </CustomText>
        </View>

        <FlatList
          data={modifiedTransactions || transactions}
          renderItem={({item}) => <TransactionComponent item={item} />}
          keyExtractor={(item: Transaction) => item.id.toString()}
        />
      </View>
    </Layout>
  );
};

export default BalanceAndTransactionCountScreen;
