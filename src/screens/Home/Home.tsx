import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Layout from '../../layout/Layout';
import {bg, transactionIcon} from '../../utils/images';
import LinearGradient from 'react-native-linear-gradient';
import TransactionComponent from '../../Components/TransactionComponent';
import SingleTransaction from '../../Components/SingleTransaction';
import {Transaction} from '../../types';

const transactions: Transaction[] = [
  {id: '1', name: 'Upwork', date: 'Today', amount: 850, icon: transactionIcon},
  {
    id: '2',
    name: 'Transfer',
    date: 'Yesterday',
    amount: -85,
    icon: transactionIcon,
  },
  {
    id: '3',
    name: 'Paypal',
    date: 'Jan 30, 2022',
    amount: 1406,
    icon: transactionIcon,
  },
  {
    id: '4',
    name: 'Youtube',
    date: 'Jan 16, 2022',
    amount: -11.99,
    icon: transactionIcon,
  },
  {
    id: '5',
    name: 'Youtube',
    date: 'Jan 16, 2022',
    amount: -11.99,
    icon: transactionIcon,
  },
  {
    id: '6',
    name: 'Youtube',
    date: 'Jan 16, 2022',
    amount: -11.99,
    icon: transactionIcon,
  },
  {
    id: '7',
    name: 'Youtube',
    date: 'Jan 16, 2022',
    amount: 30000,
    icon: transactionIcon,
  },
];

const {height} = Dimensions.get('window');
const Home = () => {
  const totalBalance = 2548423.0;
  const income = 1840.0;
  const expenses = 284.0;

  return (
    <Layout>
      <View style={{height: 247, marginTop: 0, zIndex: 20}}>
        <Image source={bg} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good afternoon,</Text>
        <Text style={styles.name}>Ayush Bhandarkar</Text>
      </View>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceTitle}>Total Balance</Text>
        <Text style={styles.balanceAmount}>₹ {totalBalance.toFixed(2)}</Text>
        <View style={styles.incomeExpenseRow}>
          <View style={styles.incomeExpenseItem}>
            <Text style={styles.incomeExpenseLabel}>Income</Text>
            <Text style={styles.incomeExpenseAmount}>
              ₹ {income.toFixed(2)}
            </Text>
          </View>
          <View style={styles.incomeExpenseItem}>
            <Text style={styles.incomeExpenseLabel}>Expenses</Text>
            <Text style={styles.incomeExpenseAmount}>
              ₹ {expenses.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.homeContainer}>
        <View style={styles.transactionsContainer}>
          <View style={styles.transactionsHeader}>
            <Text style={styles.transactionsTitle}>Transactions History</Text>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 340,
              backgroundColor: 'white',
              marginBottom: 55,
            }}>
            <ScrollView
              contentContainerStyle={{
                marginTop: 20,
                shadowColor: 'gray',
                elevation: 2,
                backgroundColor: 'white',
              }}>
              {transactions.map(transaction => (
                <SingleTransaction transaction={transaction} />
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
      {/* <TransactionComponent /> */}
    </Layout>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'white',
    zIndex: 2,
    padding: 20,
    marginBottom: 40,
  },
  header: {
    marginTop: 40,
    position: 'absolute',
    zIndex: 40,
    marginHorizontal: '6%',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  greeting: {
    fontSize: 16,
    color: 'white',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  balanceCard: {
    backgroundColor: '#2F7E79',
    borderRadius: 15,
    padding: 20,
    marginTop: 130,
    marginHorizontal: '5%',
    position: 'absolute',
    zIndex: 44,
    width: '90%',
    elevation: 10,
  },
  balanceTitle: {
    color: '#fff',
    fontSize: 16,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  incomeExpenseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  incomeExpenseItem: {},
  incomeExpenseLabel: {
    color: '#fff',
    fontSize: 14,
  },
  incomeExpenseAmount: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionsContainer: {
    flex: 1,
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

export default Home;
