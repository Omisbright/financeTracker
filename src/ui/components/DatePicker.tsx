/* eslint-disable react-native/no-inline-styles */
import moment from 'moment';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Fontisto';
import {datePickerStyles} from '../styles';

const formatDate = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  return moment(date).format('DD-MM-YYYY');
};
interface DatePickerProps {
  date: Date;
  open: boolean;
  dateOrig: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setDate: Dispatch<SetStateAction<Date>>;
}
const CustomDatePicker = (Props: DatePickerProps) => {
  const {date, open, dateOrig, setOpen, setDate} = Props;

  const [counter, setCounter] = useState<number>(0);
  const onConfirm = (value: Date) => {
    setOpen(false);
    setDate(value);
    setCounter(counter + 1);
  };

  return (
    <>
      <Text style={datePickerStyles.topLabel}>{dateOrig}</Text>
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={datePickerStyles.container}>
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          maximumDate={new Date()}
          onConfirm={onConfirm}
          androidVariant="iosClone"
          locale="en"
          onCancel={() => {
            setOpen(false);
          }}
        />
        <View>
          <Text
            style={[
              datePickerStyles.date,
              {fontWeight: counter < 1 ? '200' : '400'},
            ]}>
            {formatDate(date)}
          </Text>
        </View>
        <Icon name="date" size={16} color="black" />
      </TouchableOpacity>
    </>
  );
};

export default CustomDatePicker;
