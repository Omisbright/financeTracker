import {
  SQLiteDatabase,
  ResultSet,
  openDatabase,
} from 'react-native-sqlite-storage';
interface Transaction {
  id: number;
  name: string;
  amount: string;
  type: string;
  date: string;
}

export const getDBConnection = async () => {
  return openDatabase({name: 'finance_tracker.db', location: 'default'});
};

let db: SQLiteDatabase;

export const createTables = () => {
  getDBConnection().then((database: SQLiteDatabase) => {
    db = database;

    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, amount REAL, type TEXT, date TEXT)',
        [],
        () => {
          console.log('Transactions table created successfully');
        },
        error => {
          console.log('Error creating transactions table:', error);
        },
      );
    });
  });
};

export const getTransactions = (
  successCallback: (transactions: Transaction[]) => void,
) => {
  getDBConnection().then((database: SQLiteDatabase) => {
    db = database;

    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM transactions',
        [],
        (_, results: ResultSet) => {
          const transactions: Transaction[] = [];
          const len = results.rows.length;
          for (let i = 0; i < len; i++) {
            transactions.push(results.rows.item(i) as Transaction);
          }
          successCallback(transactions);
        },
        error => {
          console.log('Error retrieving transactions:', error);
        },
      );
    });
  });
};

export const insertTransaction = (
  name: string,
  amount: number,
  type: string,
  date: string,
) => {
  getDBConnection().then((database: SQLiteDatabase) => {
    db = database;
    try {
      database.transaction(tx => {
        console.log('got here 2', tx);
        tx.executeSql(
          'INSERT INTO transactions (name, amount, type, date) VALUES (?, ?, ?, ?)',
          [name, amount, type, date],
          () => {
            console.log('Transaction inserted successfully');
          },
          error => {
            console.log('Error inserting transaction:', error);
          },
        );
      });
    } catch (error) {
      console.log('db error', error);
    }
  });
};
