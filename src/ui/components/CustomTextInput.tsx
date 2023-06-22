import React from 'react';
import {Text, TextInput, TextStyle, View} from 'react-native';
import {customTextStyles} from '../styles';

interface CustomTextProps {
  label: string;
  input: string;
  setInput?: ((text: string) => void) | undefined;
  customStyles?: TextStyle;
  placeholder?: string;
}
const CustomTextInput = (Props: CustomTextProps) => {
  const {customStyles, label, input, placeholder, setInput} = Props;
  return (
    <View>
      <Text style={customTextStyles.topLabel}>{label}</Text>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder={placeholder}
        style={[customTextStyles.container, customStyles]}
      />
    </View>
  );
};

export default CustomTextInput;