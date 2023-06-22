import React, {Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';
import {StyleProp, Text, ViewStyle} from 'react-native';
import DropDownPicker, {ItemType} from 'react-native-dropdown-picker';
import {itemPickerStyles} from '../styles';

interface ReusablePickerProps {
  open: boolean;
  value: string;
  items: ItemType<string>[];
  label: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setValue: Dispatch<SetStateAction<string>>;
  setItems: Dispatch<SetStateAction<any[]>>;
  additionalStyles?: StyleProp<ViewStyle>;
}
const ItemPicker = (Props: ReusablePickerProps) => {
  const {open, label, value, items, setOpen, setValue, setItems} = Props;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{zIndex: 1000, elevation: 1000}}>
      <Text style={itemPickerStyles.topLabel}>{label}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{...itemPickerStyles.picker}}
        labelStyle={itemPickerStyles.label}
        placeholderStyle={itemPickerStyles.placeholderStyle}
      />
    </View>
  );
};

export default ItemPicker;
