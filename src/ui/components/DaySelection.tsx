import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {dayPickerStyles} from '../styles';

interface DaySelectionProps {
  label: string;
  action: () => void;
  value?: number;
}
const DaySelection = (Props: DaySelectionProps) => {
  const {label, action} = Props;
  return (
    <>
      <TouchableOpacity
        style={dayPickerStyles.container}
        onPress={() => action()}>
        <Text style={dayPickerStyles.text}>{label}</Text>
      </TouchableOpacity>
    </>
  );
};

export default DaySelection;
