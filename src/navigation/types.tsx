import type {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  RecordTransactions: undefined;
  TransactionsList: undefined;
  BalanceAndTransactionCountScreen: undefined;
};

export type AppProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;
