import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TransactionsList from '../ui/screens/TransactionsList';
import BalanceAndTransactionCountScreen from '../ui/screens/BalanceAndTransactionCountScreen';
import RecordTransactions from '../ui/screens/RecordTransactions';
import {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TransactionsList" component={TransactionsList} />
      <Stack.Screen name="RecordTransactions" component={RecordTransactions} />
      <Stack.Screen
        name="BalanceAndTransactionCountScreen"
        component={BalanceAndTransactionCountScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
