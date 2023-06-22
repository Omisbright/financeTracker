import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {FlatList, View} from 'react-native';
import {createTables, getTransactions} from '../../database/Database';
import {AppProps} from '../../navigation/types';
import CustomText from '../components/CustomText';
import TransactionComponent from '../components/TransactionComponent';
import {transactionListStyles} from '../styles';

export interface Transaction {
  id: number;
  name: string;
  amount: string;
  type: string;
  date: string;
}

const TransactionsList: React.FC<AppProps<'TransactionsList'>> = ({
  navigation,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    createTables();
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      getTransactions(setTransactions);
    }, []),
  );

  return (
    <View style={transactionListStyles.container}>
      <FlatList
        data={transactions}
        renderItem={({item}) => <TransactionComponent item={item} />}
        keyExtractor={item => item.id.toString()}
      />
      <View style={transactionListStyles.buttonContainer}>
        <TouchableOpacity
          style={transactionListStyles.button}
          onPress={() => navigation.navigate('RecordTransactions')}>
          <CustomText customstyle={transactionListStyles.buttonText}>
            Add Transaction
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={transactionListStyles.button}
          onPress={() =>
            navigation.navigate('BalanceAndTransactionCountScreen')
          }>
          <CustomText customstyle={transactionListStyles.buttonText}>
            View Balance Report
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransactionsList;
