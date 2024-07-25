import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {bg, transaction} from '../utils/images';

interface Transaction {
  id: string;
  name: string;
  date: string;
  amount: number;
  icon: any;
}

const transactions: Transaction[] = [
  {id: '1', name: 'Upwork', date: 'Today', amount: 850, icon: transaction},
  {
    id: '2',
    name: 'Transfer',
    date: 'Yesterday',
    amount: -85,
    icon: transaction,
  },
  {
    id: '3',
    name: 'Paypal',
    date: 'Jan 30, 2022',
    amount: 1406,
    icon: transaction,
  },
  {
    id: '4',
    name: 'Youtube',
    date: 'Jan 16, 2022',
    amount: -11.99,
    icon: transaction,
  },
  {
    id: '5',
    name: 'Youtube',
    date: 'Jan 16, 2022',
    amount: -11.99,
    icon: transaction,
  },
  {
    id: '6',
    name: 'Youtube',
    date: 'Jan 16, 2022',
    amount: -11.99,
    icon: transaction,
  },
  {
    id: '7',
    name: 'Youtube',
    date: 'Jan 16, 2022',
    amount: 30000,
    icon: transaction,
  },
];

const TransactionComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.transactionsContainer}>
        <View style={styles.transactionsHeader}>
          <Text style={styles.transactionsTitle}>Transactions History</Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 320,
            backgroundColor: 'white',
          }}>
          <ScrollView
            contentContainerStyle={{
              shadowColor: 'gray',
              elevation: 2,
              backgroundColor: 'white',
              height: '100%'
            }}>
            {transactions.map(transaction => (
              <View key={transaction.id} style={styles.transactionItem}>
                <Image
                  source={transaction.icon}
                  style={styles.transactionIcon}
                />
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionName}>{transaction.name}</Text>
                  <Text style={styles.transactionDate}>{transaction.date}</Text>
                </View>
                <Text
                  style={[
                    styles.transactionAmount,
                    {color: transaction.amount >= 0 ? 'green' : 'red'},
                  ]}>
                  {transaction.amount >= 0 ? '+' : '-'} ₹{' '}
                  {Math.abs(transaction.amount).toFixed(2)}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    zIndex: 2,
    padding: 20,
    width: '100%',
    marginBottom: 40,
  },

  incomeExpenseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  transactionsContainer: {
    // flex: 1,
    marginTop: 60,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
  },
  seeAllText: {
    color: '#666666',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    // marginBottom: 10,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  transactionDate: {
    fontSize: 14,
    color: '#888',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TransactionComponent;
