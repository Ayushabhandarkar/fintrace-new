import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Layout from '../../layout/Layout';
import {bg} from '../../utils/images';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {pieChart} from '../../utils/images';
import InvestmentGoals from '../../Components/InvestmentGoals';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../types';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('screen');

type InveestmentNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Investment'
>;

const Investment = () => {
  const {navigate} = useNavigation<InveestmentNavigationProp>();
  return (
    <Layout>
      <View style={styles.imageContainer}>
        <Image source={bg} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Investent</Text>
      </View>
      <View style={styles.formContainer}>
        <TouchableOpacity
          style={styles.fireNumberBox}
          activeOpacity={0.6}
          onPress={() => {
            navigate('FireCalculator');
          }}>
          <View>
            <Text style={styles.fireNumberText}>Calculate FIRE Number</Text>
          </View>
          <View
            style={{
              marginLeft: 20,
            }}>
            <IonIcons size={30} color="white" name="bar-chart" />
          </View>
        </TouchableOpacity>
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
              <Text style={styles.metricsStyle}>Retirement Amount (in ₹)</Text>
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
              <Text style={styles.metricsStyle}>Monthy SIP (in ₹)</Text>
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
              <Text style={styles.metricsStyle}>Invested Amount (in ₹)</Text>
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
              <Text style={styles.metricsStyle}>Interest Earned (in ₹)</Text>
              <Text style={styles.amountStyle}>10,000</Text>
            </View>
          </View>
        </View>
        <InvestmentGoals
          investmentGoal={{
            name: 'Short Term Goal (0.5 - 2 yr)',
            navigationTo: 'Transaction',
          }}
        />
        <InvestmentGoals
          investmentGoal={{
            name: 'Medium Term Goal (3-5 yr)',
            navigationTo: 'Transaction',
          }}
        />
        <InvestmentGoals
          investmentGoal={{
            name: 'Long Term Goal (5-10 yr)',
            navigationTo: 'Transaction',
          }}
        />
        <InvestmentGoals
          investmentGoal={{
            name: 'Retirement',
            navigationTo: 'Transaction',
          }}
        />
        <InvestmentGoals
          investmentGoal={{
            name: 'Emergency Funds',
            navigationTo: 'Transaction',
          }}
        />
        <View style={{marginBottom: 30}} />
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
    // padding: 10,
    // height: height,
  },
  fireNumberBox: {
    backgroundColor: '#429690',
    width: '90%',
    marginHorizontal: 'auto',
    height: 130,
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  fireNumberText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
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
  amountStyle: {
    color: '#429690',
    fontWeight: '500',
    fontSize: 18,
  },
  investmentBox: {
    backgroundColor: 'white',
    borderColor: '#429690',
    borderWidth: 2,
    width: '90%',
    marginHorizontal: 'auto',
    height: 130,
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  investmentText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#429690',
  },
});
export default Investment;
