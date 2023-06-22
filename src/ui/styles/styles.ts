import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const transactionListStyles = StyleSheet.create({
  amount: {
    fontWeight: '400',
    fontSize: RFValue(12),
  },
  button: {
    marginVertical: RFValue(10),
    backgroundColor: 'dodgerblue',
    padding: RFValue(10),
    borderRadius: 4,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  date: {
    fontWeight: '300',
    fontSize: RFValue(10),
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 5,
  },
  itemName: {
    fontSize: RFValue(12),
    fontWeight: '500',
    color: '#000',
    opacity: 0.8,
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
    paddingHorizontal: RFValue(8),
    paddingVertical: RFValue(8),
    borderRadius: 4,
    backgroundColor: '#fff',
    borderWidth: 0.2,
    borderBottomWidth: 0.2,
    borderColor: '#777777',
    borderBottomColor: '#777777',
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
    height: RFValue(50),
    borderRadius: 4,
    backgroundColor: '#fff',
    borderWidth: 0.8,
    borderBottomWidth: 0.8,
    borderColor: '#777777',
    fontSize: RFValue(12),
    borderBottomColor: '#777777',
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
    fontWeight: '200',
  },
});

export const itemPickerStyles = StyleSheet.create({
  label: {
    fontWeight: '400',
  },
  picker: {
    marginVertical: RFValue(10),
    fontSize: RFValue(12),
    borderWidth: 0.8,
    borderBottomWidth: 0.8,
    borderColor: '#777777',
    borderBottomColor: '#777777',
    borderRadius: 4,
    height: RFValue(50),
    backgroundColor: '#fff',
    fontWeight: '400',
  },
  placeholderStyle: {
    color: 'grey',
    fontWeight: '200',
    fontSize: RFValue(10),
  },
  topLabel: {
    fontSize: RFValue(10),
    fontWeight: '200',
  },
});

export const customDateTextStyles = StyleSheet.create({
  container: {
    marginVertical: RFValue(10),
    fontSize: RFValue(12),
    borderWidth: 0.8,
    borderBottomWidth: 0.8,
    borderColor: '#777777',
    borderRadius: 4,
    borderBottomColor: '#777777',
    height: RFValue(50),
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

export const customTextStyles = StyleSheet.create({
  topLabel: {
    fontSize: RFValue(12),
    fontWeight: '300',
    color: '#000',
  },
});

export const customTextInputStyles = StyleSheet.create({
  container: {
    marginVertical: RFValue(10),
    fontSize: RFValue(12),
    borderWidth: 0.8,
    borderBottomWidth: 0.8,
    borderColor: '#777777',
    borderBottomColor: '#777777',
    borderRadius: 4,
    height: RFValue(50),
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    fontWeight: '400',
  },
  placeholderText: {
    fontSize: RFValue(10),
    fontWeight: '200',
  },
  topLabel: {
    fontSize: RFValue(10),
    fontWeight: '200',
  },
});

export const dayPickerStyles = StyleSheet.create({
  container: {
    marginVertical: RFValue(5),
    borderWidth: 0.8,
    borderBottomWidth: 0.8,
    borderColor: '#777777',
    borderBottomColor: '#777777',
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

export const layoutStyles = StyleSheet.create({
  backButton: {
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});
