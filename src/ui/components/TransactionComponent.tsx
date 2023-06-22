/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {transactionListStyles} from '../styles';
import {formatAmount} from '../../utils/utility';

interface Transaction {
  id: number;
  name: string;
  amount: string;
  type: string;
  date: string;
}
const TransactionComponent = ({item}: {item: Transaction}) => {
  const transactionType = (type: string) => {
    if (type === 'expense') {
      return <Icon name="arrow-left" size={24} color="red" />;
    } else {
      return <Icon name="arrow-right" size={24} color="green" />;
    }
  };

  const renderAmount = (amount: string) => {
    if (item.type === 'expense') {
      return `-${formatAmount(amount)}`;
    }
    return `${formatAmount(amount)}`;
  };

  return (
    <View style={transactionListStyles.renderContainer}>
      <View style={transactionListStyles.icon}>
        {transactionType(item.type)}
      </View>
      <View style={transactionListStyles.renderSubContainer}>
        <View style={transactionListStyles.itemNameContainer}>
          <Text style={transactionListStyles.itemName}>{item.name}</Text>
        </View>
        <View style={transactionListStyles.otherDetails}>
          <Text
            style={[
              transactionListStyles.amount,
              {color: item.type === 'expense' ? 'red' : 'green'},
            ]}>
            {renderAmount(item.amount)}
          </Text>
          <Text style={transactionListStyles.date}>{item.date}</Text>
        </View>
      </View>
    </View>
  );
};

export default TransactionComponent;
