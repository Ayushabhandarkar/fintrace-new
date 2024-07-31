import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamsList} from '../../types';
import {StackNavigationProp} from '@react-navigation/stack';
import Layout from '../../layout/Layout';
import {bg, transactionIcon} from '../../utils/images';
import PieChart from 'react-native-pie-chart';
import TransactionComponent from '../../Components/TransactionComponent';
import SingleTransaction from '../../Components/SingleTransaction';
import PieChartComponent from '../../Components/PieChart';
import EventComponent from '../../Components/EventComponent';
import EventsComponent from '../../Components/EventsComponent';
import { useNavigation } from '@react-navigation/native';

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
  const {navigate} = useNavigation<TransactionNavigationProp>();
  const data = [10, 20, 30, 40];
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
                  <Text style={styles.metricsStyle}>
                    Limit for Expense (in ₹)
                  </Text>
                  <Text style={styles.amountStyle}>10,000</Text>
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
                    Limit for Expense (in ₹)
                  </Text>
                  <Text style={styles.amountStyle}>10,000</Text>
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
                    Limit for Expense (in ₹)
                  </Text>
                  <Text style={styles.amountStyle}>10,000</Text>
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
                    Limit for Expense (in ₹)
                  </Text>
                  <Text style={styles.amountStyle}>10,000</Text>
                </View>
              </View>
            </View>
            <PieChartComponent data={data} />
            <View
              style={{
                marginVertical: 0,
              }}>
              <TransactionComponent />
            </View>
            <View>
              <EventsComponent />
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
