import React from 'react';
import {Text, View} from 'react-native';
import {customDateTextStyles} from '../styles';

interface CustomDateTextProps {
  label: string;
  value: Date;
}
const CustomDateText = (Props: CustomDateTextProps) => {
  const {label, value} = Props;

  return (
    <>
      <Text>{label}</Text>
      <View style={customDateTextStyles.container}>
        <Text style={customDateTextStyles.topLabel}>
          {new Date(value).toLocaleDateString()}
        </Text>
      </View>
    </>
  );
};

export default CustomDateText;
