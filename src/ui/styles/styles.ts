import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const transactionListStyles = StyleSheet.create({
  amount: {
    fontWeight: '600',
    fontSize: 16,
  },
  date: {
    fontWeight: '200',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 5,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '700',
  },
  itemNameContainer: {
    marginLeft: 4,
  },
  otherDetails: {
    // width: '30%',
  },
  renderContainer: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  renderSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
});

export const balanceAndTransactionCounterStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    paddingVertical: RFValue(20),
  },
  daySelectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'scroll',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: RFValue(10),
  },
});

export const recordTransactionsCounterStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    paddingVertical: RFValue(20),
  },
});

export const datePickerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: RFValue(10),
    alignItems: 'center',
    paddingHorizontal: RFValue(10),
    height: RFValue(40),
    borderRadius: 4,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#777777',
    fontSize: RFValue(12),
  },
  date: {
    fontSize: RFValue(10),
    marginTop: RFValue(5),
    fontWeight: '400',
  },
  label: {
    fontSize: RFValue(10),
    // fontWeight: '200',
  },
  topLabel: {
    fontSize: RFValue(10),
    // fontWeight: '200',
  },
});

export const itemPickerStyles = StyleSheet.create({
  label: {
    fontWeight: '400',
  },
  picker: {
    marginVertical: RFValue(10),
    fontSize: RFValue(12),
    borderWidth: 0.5,
    borderColor: '#777777',
    borderRadius: 4,
    height: RFValue(40),
    backgroundColor: '#fff',
    fontWeight: '400',
  },
  placeholderStyle: {
    color: 'grey',
    fontWeight: '200',
  },
  topLabel: {
    fontSize: RFValue(10),
    fontWeight: '200',
  },
});

export const customTextInputStyles = StyleSheet.create({
  container: {
    marginVertical: RFValue(10),
    fontSize: RFValue(12),
    borderWidth: 0.5,
    borderColor: '#777777',
    borderRadius: 4,
    height: RFValue(40),
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    fontWeight: '400',
  },
  topLabel: {
    fontSize: RFValue(10),
    fontWeight: '200',
  },
});

export const customTextStyles = StyleSheet.create({
  container: {
    marginVertical: RFValue(10),
    fontSize: RFValue(12),
    borderWidth: 0.5,
    borderColor: '#777777',
    borderRadius: 4,
    height: RFValue(40),
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    fontWeight: '400',
    justifyContent: 'center',
  },
  topLabel: {
    fontSize: RFValue(10),
    fontWeight: '200',
  },
});

export const dayPickerStyles = StyleSheet.create({
  container: {
    marginVertical: RFValue(5),
    borderWidth: 0.5,
    borderColor: '#777777',
    borderRadius: 4,
    height: RFValue(30),
    backgroundColor: '#fff',
    width: RFValue(70),
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(5),
    marginHorizontal: RFValue(5),
  },
  text: {
    fontSize: RFValue(10),
    fontWeight: '400',
    textAlign: 'center',
  },
  topLabel: {
    fontSize: RFValue(10),
    fontWeight: '200',
  },
});
