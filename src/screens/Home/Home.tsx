import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Touchable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Layout from '../../layout/Layout';
import {bg, transactionIcon} from '../../utils/images';
import LinearGradient from 'react-native-linear-gradient';
import TransactionComponent from '../../Components/TransactionComponent';
import SingleTransaction from '../../Components/SingleTransaction';
import {RootStackParamsList, Transaction} from '../../types';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {transactions} from '../../utils/data';
import IonIcons from 'react-native-vector-icons/Ionicons';
// import {useGetTransactionsQuery} from '../../store/apiSlice';
import {fetchTransactionMessages} from '../../utils/SmsReader';

type HomeNavigationProp = StackNavigationProp<RootStackParamsList, 'Home'>;

const {height} = Dimensions.get('window');
const Home = () => {
  const {navigate} = useNavigation<HomeNavigationProp>();
  const [totalBalance, setTotalBalance] = useState(2548423.0);
  const [income, setIncome] = useState(1840.0);
  const [expenses, setExpenses] = useState(284.0);
  const [dayTime, setDayTime] = useState('Afternoon');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const fetchAndProcessMessages = async () => {
    try {
      const smsRecords = await fetchTransactionMessages();
      console.log(smsRecords); // Do something with the transactions
    } catch (error: any) {
      console.error('Error fetching SMS messages:', error.message);
    }
  };
  // Call the query hook with dynamic parameters
  // const {
  //   data: transaction,
  //   error,
  //   isLoading,
  // } = useGetTransactionsQuery({
  //   page,
  //   limit,
  // });
  // console
  // transactionType: 'food', // Example filter, adjust as needed
  const updateDayTime = () => {
    const currentHour = new Date().getHours();
    console.log(currentHour);
    if (currentHour >= 5 && currentHour < 12) {
      setDayTime('Morning');
    } else if (currentHour >= 12 && currentHour < 17) {
      setDayTime('Afternoon');
    } else if (currentHour >= 17 && currentHour < 21) {
      setDayTime('Evening');
    } else {
      setDayTime('Night');
    }
  };

  // Update dayTime whenever the component mounts
  useEffect(() => {
    updateDayTime();
    fetchAndProcessMessages();
  }, []);

  useEffect(() => {
    const calculateBalances = () => {
      let total = 0;
      let incomeTotal = 0;
      let expensesTotal = 0;

      transactions.forEach((transaction: Transaction) => {
        total += transaction.amount;

        if (transaction.amount > 0) {
          incomeTotal += transaction.amount;
        } else {
          expensesTotal += transaction.amount;
        }
      });

      setTotalBalance(total);
      setIncome(incomeTotal);
      setExpenses(Math.abs(expensesTotal));
    };

    calculateBalances();
  }, [transactions]);

  const handleRefresh = async () => {};

  // if (isLoading) {
  //   return <Text>Loading...</Text>;
  // }
  // if(!isLoading){
  //   console.log(transaction);
  // }
  return (
    <Layout>
      <View style={{height: 247, marginTop: 0, zIndex: 20}}>
        <Image source={bg} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good {dayTime},</Text>
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
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  marginRight: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={handleRefresh}>
                <IonIcons size={18} color="#666666" name="refresh" />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() =>
                  navigate('AllTransaction', {
                    type: 'all',
                  })
                }>
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>
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
                paddingBottom: 20,
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
    // backgroundColor: '#2F7E79',
    backgroundColor: '#429690',
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
