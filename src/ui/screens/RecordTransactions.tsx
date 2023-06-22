import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {insertTransaction} from '../../database/Database';
import {AppProps} from '../../navigation/types';
import CustomTextInput from '../components/CustomText';
import CustomDatePicker from '../components/DatePicker';
import ItemPicker from '../components/ItemPicker';
import {recordTransactionsCounterStyles} from '../styles';

const RecordTransactions: React.FC<AppProps<'RecordTransactions'>> = ({
  navigation,
}) => {
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
    insertTransaction(
      name,
      parseFloat(amount),
      transactionType,
      date.toDateString(),
    );
    navigation.goBack();
  };

  return (
    <View style={recordTransactionsCounterStyles.container}>
      <CustomTextInput
        label={'Transaction name'}
        input={name}
        setInput={(value: string) => setName(value)}
        customStyles={undefined}
        placeholder={'E.g Food, Salary'}
      />
      <CustomTextInput
        label={'Amount'}
        input={amount}
        setInput={(value: string) => setAmount(value)}
        placeholder={'E.g 1000, 20000'}
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
  );
};

export default RecordTransactions;
