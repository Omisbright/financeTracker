import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {insertTransaction} from '../../database/Database';
import {AppProps} from '../../navigation/types';
import CustomTextInput from '../components/CustomTextInput';
import CustomDatePicker from '../components/DatePicker';
import ItemPicker from '../components/ItemPicker';
import {recordTransactionsCounterStyles} from '../styles';
import {Alert} from 'react-native';
import {removeCommas} from '../../utils/utility';
import Layout from '../components/Layout';

const RecordTransactions: React.FC<AppProps<'RecordTransactions'>> = ({
  navigation,
}) => {
  const dayjs = require('dayjs');
  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [transactionType, setTransactionType] = useState<string>('');
  const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);
  const [itemPickerOpen, setItemPickerOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [items, setItems] = useState([
    {label: 'income', value: 'income'},
    {label: 'expense', value: 'expense'},
  ]);

  const handleSubmit = () => {
    // Perform validation checks on input values
    if (!name || !amount || !transactionType || !date) {
      // Display an alert for the validation error
      Alert.alert('Invalid Input', 'Please provide all required information.');
      return;
    }

    const formattedDate = dayjs(date).format('YYYY-MM-DD');
    console.log(new Date(formattedDate));
    insertTransaction(
      name,
      parseFloat(removeCommas(amount)),
      transactionType,
      formattedDate,
    );
    navigation.navigate('TransactionsList');
  };

  return (
    <Layout>
      <View style={recordTransactionsCounterStyles.container}>
        <CustomTextInput
          label={'Transaction name'}
          input={name}
          setInput={(value: string) => setName(value)}
          placeholder={'e.g Food, Salary'}
        />
        <CustomTextInput
          label={'Amount'}
          input={amount}
          keyboardType="numeric"
          setInput={(value: string) => setAmount(value)}
          placeholder={'e.g 1000, 20000'}
        />

        <ItemPicker
          open={itemPickerOpen}
          value={transactionType}
          items={items}
          label="Transaction type"
          setOpen={setItemPickerOpen}
          setValue={setTransactionType}
          setItems={setItems}
        />

        <CustomDatePicker
          date={date}
          open={datePickerOpen}
          dateOrig={'Date'}
          setOpen={setDatePickerOpen}
          setDate={setDate}
        />

        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </Layout>
  );
};

export default RecordTransactions;
