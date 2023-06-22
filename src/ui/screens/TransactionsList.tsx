import React, {useEffect, useState} from 'react';
import {Button, FlatList, View} from 'react-native';
import {getTransactions, createTables} from '../../database/Database';
import {AppProps} from '../../navigation/types';
import {transactionListStyles} from '../styles';
import TransactionComponent from '../components/TransactionComponent';
import {useFocusEffect} from '@react-navigation/native';

interface Transaction {
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
      <Button
        title="Add Transaction"
        onPress={() => navigation.navigate('RecordTransactions')}
      />
      <Button
        title="View Balance Report"
        onPress={() => navigation.navigate('BalanceAndTransactionCountScreen')}
      />
    </View>
  );
};

export default TransactionsList;
