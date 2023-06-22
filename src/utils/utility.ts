import {Transaction} from '../ui/screens/TransactionsList';
export const formatAmount = (x: string | number) => {
  if (!x) {
    return 0;
  }

  // Convert the input to a string
  const inputStr = x.toString();

  // Check if the input string contains a comma using a regular expression
  const isFormatted = /,/.test(inputStr);

  // If the input string is already formatted, return it as is
  if (isFormatted) {
    return inputStr;
  }

  // If the input string is not formatted, format it by adding commas
  return inputStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const removeCommas = (input: string | number) => {
  const inputStr = input.toString();
  return inputStr.replace(/,/g, '');
};

export const calculateBalance = (transactions: Transaction[]) => {
  let income = 0;
  let expense = 0;
  transactions.forEach((modifiedTransactions: Transaction) => {
    if (modifiedTransactions.type === 'income') {
      income += parseFloat(modifiedTransactions.amount);
    } else if (modifiedTransactions.type === 'expense') {
      expense += parseFloat(modifiedTransactions.amount);
    }
  });
  return income - expense;
};

export function getDateRange(filterType: string) {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const lastWeek = new Date(today);
  lastWeek.setDate(today.getDate() - 7);

  const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const allTimeStart = new Date(0);

  switch (filterType) {
    case 'Today':
      const startOfDay = new Date(today);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(today);
      endOfDay.setHours(23, 59, 59, 999);
      return {startDate: startOfDay, endDate: endOfDay};
    case 'Yesterday':
      return {startDate: yesterday, endDate: yesterday};
    case 'Last Week':
      return {startDate: lastWeek, endDate: today};
    case 'This Month':
      return {startDate: thisMonthStart, endDate: today};
    case 'All Time':
      return {startDate: allTimeStart, endDate: today};
    default:
      throw new Error('Invalid filter type');
  }
}

export function generateReport(transactions: any[]) {
  let balance = 0;
  let transactionCount = 0;

  transactions.forEach((transaction: {amount: number}) => {
    balance += transaction.amount;
    transactionCount++;
  });

  return {
    balance: balance.toFixed(2),
    transactionCount: transactionCount,
  };
}

export function filterTransactions(
  transactions: Transaction[],
  startDate: Date,
  endDate: Date,
) {
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);

  return transactions.filter((transaction: {date: string}) => {
    const transactionDate = new Date(Date.parse(transaction.date));

    // Check if the transactionDate is a valid Date object
    if (isNaN(transactionDate.getTime())) {
      throw new Error('Invalid date format in transactions');
    }

    return transactionDate >= startDate && transactionDate <= endDate;
  });
}
