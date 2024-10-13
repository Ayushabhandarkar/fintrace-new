import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Events, RootStackParamsList} from '../../types';
import {StackNavigationProp} from '@react-navigation/stack';
import Layout from '../../layout/Layout';
import {bg, transactionIcon} from '../../utils/images';
import PieChart from 'react-native-pie-chart';
import TransactionComponent from '../../Components/TransactionComponent';
import SingleTransaction from '../../Components/SingleTransaction';
import PieChartComponent from '../../Components/PieChart';
import EventComponent from '../../Components/EventComponent';
import EventsComponent from '../../Components/EventsComponent';
import {useNavigation} from '@react-navigation/native';

type TransactionNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Transaction'
>;

interface Transaction {
  id: string;
  name: string;
  date: string;
  amount: number;
  icon: any;
}

const {width, height} = Dimensions.get('screen');
const Transaction = () => {
  const [transactions, setTransactions] = useState<Transaction[] | null>([]);
  const [transData, setTransData] = useState([1, 1, 1, 1, 1, 1]);
  const [eventsData, setEventsData] = useState<Events[] | null>([]);
  const [eventTypeData, setEventTypeData] = useState<{[key: string]: number}>(
    {},
  );
  const fetchEvents = async () => {
    fetch('http://192.168.29.179:3000/events', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        // console.log('Success:', data);
        const tempEvents: Events[] = data.map((event: any) => ({
          mongoId: event._id,
          name: event.description + ' ' + event.location,
          amount: 0,
        }));
        setEventsData(tempEvents);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const fetchTransactionData = async () => {
    fetch('http://192.168.29.179:3000/transactions', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        // Assuming 'transactions' is the array containing the data
        const transactions: Transaction[] = data.transactions.map(
          (transaction: any) => ({
            id: transaction._id,
            name: transaction.payeeName,
            date: transaction.createdAt,
            amount: transaction.amount,
            type: transaction.type,
            eventTypeId: transaction.eventTypeId || null,
            description: transaction.description,
            transactionType: transaction.transactionType,
          }),
        );

        const typeTotals: {[key: string]: number} = {
          necessity: 0,
          food: 0,
          travel: 0,
          entertainment: 0,
          comfort: 0,
          luxury: 0,
        };
        const eventTypeTotals: {[key: string]: number} = {};
        // Accumulate sums for each transaction type
        transactions.forEach((transaction: any) => {
          if (transaction.transactionType === 'transaction') {
            if (typeTotals.hasOwnProperty(transaction.type)) {
              typeTotals[transaction.type] += transaction.amount;
            }
          }
          // Summing by eventTypeId
          if (transaction.eventTypeId) {
            if (!eventTypeTotals[transaction.eventTypeId]) {
              eventTypeTotals[transaction.eventTypeId] = 0;
            }
            eventTypeTotals[transaction.eventTypeId] += transaction.amount;
          }
        });
        setEventTypeData(eventTypeTotals);
        // console.log('Event Type Data:', eventTypeTotals);
        // Creating an array in the desired order
        const tempTransData = [
          Math.abs(typeTotals['necessity']), // Necessity
          Math.abs(typeTotals['food']), // Food
          Math.abs(typeTotals['travel']), // Travel
          Math.abs(typeTotals['entertainment']), // Entertainment
          Math.abs(typeTotals['comfort']), // Comfort
          Math.abs(typeTotals['luxury']), // Luxury
        ];

        // console.log('Data array:', tempTransData);
        setTransactions(transactions);
        setTransData(tempTransData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  useEffect(() => {
    fetchTransactionData();
    fetchEvents();
  }, []);
  const {navigate} = useNavigation<TransactionNavigationProp>();
  return (
    <Layout>
      <View>
        <View>
          <View style={styles.imageContainer}>
            <Image source={bg} style={styles.image} resizeMode="cover" />
          </View>
          <View style={styles.header}>
            <Text style={styles.headerText}>Budget</Text>
          </View>
          <View style={styles.formContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
              }}>
              <View style={styles.horizontalMetrics}>
                <View
                  style={{
                    height: '100%',
                    justifyContent: 'space-evenly',
                    marginHorizontal: 20,
                  }}>
                  <Text style={styles.metricsStyle}>Amount spent on Food</Text>
                  <Text style={styles.amountStyle}>₹ {transData[1]}</Text>
                </View>
              </View>
              <View style={styles.horizontalMetrics}>
                <View
                  style={{
                    height: '100%',
                    justifyContent: 'space-evenly',
                    marginHorizontal: 20,
                  }}>
                  <Text style={styles.metricsStyle}>
                    Amount spent on Travel
                  </Text>
                  <Text style={styles.amountStyle}>₹ {transData[2]}</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
              }}>
              <View style={styles.horizontalMetrics}>
                <View
                  style={{
                    height: '100%',
                    justifyContent: 'space-evenly',
                    marginHorizontal: 20,
                  }}>
                  <Text style={styles.metricsStyle}>
                    Amount spent on Necessity
                  </Text>
                  <Text style={styles.amountStyle}>₹ {transData[0]}</Text>
                </View>
              </View>
              <View style={styles.horizontalMetrics}>
                <View
                  style={{
                    height: '100%',
                    justifyContent: 'space-evenly',
                    marginHorizontal: 20,
                  }}>
                  <Text style={styles.metricsStyle}>
                    Amount spent on Luxury
                  </Text>
                  <Text style={styles.amountStyle}>₹ {transData[5]}</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                marginTop: 20,
              }}>
              <View style={styles.horizontalMetrics}>
                <View
                  style={{
                    height: '100%',
                    justifyContent: 'space-evenly',
                    marginHorizontal: 20,
                  }}>
                  <Text style={styles.metricsStyle}>
                    Amount spent on Comfort
                  </Text>
                  <Text style={styles.amountStyle}>₹ {transData[4]}</Text>
                </View>
              </View>
              <View style={styles.horizontalMetrics}>
                <View
                  style={{
                    height: '100%',
                    justifyContent: 'space-evenly',
                    marginHorizontal: 20,
                  }}>
                  <Text style={styles.metricsStyle}>
                    Amount spent on Entertainment
                  </Text>
                  <Text style={styles.amountStyle}>₹ {transData[3]}</Text>
                </View>
              </View>
            </View>
            <PieChartComponent data={transData} />
            <View
              style={{
                marginVertical: 0,
              }}>
              <TransactionComponent trans={transactions} />
            </View>
            <View>
              {/* <EventsComponent
                eventsData={eventsData}
                eventTypeData={eventTypeData}
              /> */}
              <EventsComponent
                eventsData={eventsData}
                eventTypeData={eventTypeData}
              />
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 247,
    marginTop: 0,
    zIndex: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  header: {
    position: 'absolute',
    zIndex: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 170,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  formContainer: {
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    marginTop: -100,
    zIndex: 100,
    marginBottom: 60,
  },
  amountStyle: {
    color: '#429690',
    fontWeight: '500',
    fontSize: 18,
  },
  metricsStyle: {
    color: '#7A7A7A',
    fontWeight: '500',
    fontSize: 14,
  },
  horizontalMetrics: {
    height: 110,
    width: width * 0.43,
    backgroundColor: '#EBFFFB',
    borderRadius: 6,
    elevation: 5,
    shadowColor: '#F9FFFE',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 4,
  },
});

export default Transaction;
