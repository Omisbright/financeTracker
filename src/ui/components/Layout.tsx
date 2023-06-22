import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {layoutStyles} from '../styles';

const Layout = (Props: any) => {
  const {children} = Props;
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={layoutStyles.backButton}>
        <Icon name="arrowleft" size={16} color="black" />
      </TouchableOpacity>
      <View style={layoutStyles.container}>{children}</View>
    </>
  );
};

export default Layout;
