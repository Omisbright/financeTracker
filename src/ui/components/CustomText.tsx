import React from 'react';
import {Text, TextStyle, View} from 'react-native';
import {customTextStyles} from '../styles';

interface CustomTextProps {
  children: any;
  customstyle?: TextStyle;
}
const CustomText = (Props: CustomTextProps) => {
  const {children, customstyle} = Props;

  return (
    <>
      <View>
        <Text style={[customTextStyles.topLabel, customstyle]}>{children}</Text>
      </View>
    </>
  );
};

export default CustomText;
