/* eslint-disable @typescript-eslint/no-shadow */
import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {getTransactions} from '../../database/Database';
import {formatAmount} from '../../utils/utility';
import CustomText from '../components/CustomText';
import DaySelection from '../components/DaySelection';
import TransactionComponent from '../components/TransactionComponent';
import {balanceAndTransactionCounterStyles} from '../styles';

interface Transaction {
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

  function filterTransactions(
    transactions: Transaction[],
    startDate: Date,
    endDate: Date,
  ) {
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    return transactions.filter((transaction: {date: string}) => {
      const transactionDate = new Date(Date.parse(transaction.date));

      // Check if the transactionDate is a valid Date object
      if (isNaN(transactionDate.getTime())) {
        throw new Error('Invalid date format in transactions');
      }

      return transactionDate >= startDate && transactionDate <= endDate;
    });
  }

  function generateReport(transactions: any[]) {
    let balance = 0;
    let transactionCount = 0;

    transactions.forEach((transaction: {amount: number}) => {
      balance += transaction.amount;
      transactionCount++;
    });

    return {
      balance: balance.toFixed(2),
      transactionCount: transactionCount,
    };
  }

  function getDateRange(filterType: string) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 7);

    const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const allTimeStart = new Date(0);

    switch (filterType) {
      case 'Today':
        const startOfDay = new Date(today);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(today);
        endOfDay.setHours(23, 59, 59, 999);
        return {startDate: startOfDay, endDate: endOfDay};
      case 'Yesterday':
        return {startDate: yesterday, endDate: yesterday};
      case 'Last Week':
        return {startDate: lastWeek, endDate: today};
      case 'This Month':
        return {startDate: thisMonthStart, endDate: today};
      case 'All Time':
        return {startDate: allTimeStart, endDate: today};
      default:
        throw new Error('Invalid filter type');
    }
  }

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

  const calculateBalance = (): number => {
    let income = 0;
    let expense = 0;
    transactions.forEach((modifiedTransactions: Transaction) => {
      if (modifiedTransactions.type === 'income') {
        income += parseFloat(modifiedTransactions.amount);
      } else if (modifiedTransactions.type === 'expense') {
        expense += parseFloat(modifiedTransactions.amount);
      }
    });
    return income - expense;
  };

  console.log('modifiedTransactions', modifiedTransactions);
  return (
    <View style={balanceAndTransactionCounterStyles.container}>
      <CustomText label={'Start date'} value={startDate} />

      <CustomText label={'End date'} value={endDate} />

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

      <Text>Balance: {formatAmount(calculateBalance())}</Text>
      <Text>Transaction Count: {modifiedTransactions.length}</Text>

      <FlatList
        data={modifiedTransactions || transactions}
        renderItem={({item}) => <TransactionComponent item={item} />}
        keyExtractor={(item: Transaction) => item.id.toString()}
      />
    </View>
  );
};

export default BalanceAndTransactionCountScreen;
