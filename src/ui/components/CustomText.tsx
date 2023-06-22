import React from 'react';
import {Text, View} from 'react-native';
import {customTextStyles} from '../styles';

interface CustomTextProps {
  label: string;
  value: Date;
}
const CustomTextInput = (Props: CustomTextProps) => {
  const {label, value} = Props;

  return (
    <>
      <Text>{label}</Text>
      <View style={customTextStyles.container}>
        <Text style={customTextStyles.topLabel}>
          {new Date(value).toLocaleDateString()}
        </Text>
      </View>
    </>
  );
};

export default CustomTextInput;
