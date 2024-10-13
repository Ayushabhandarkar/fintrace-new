import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {transactionIcon} from '../utils/images';
import SingleTransaction from './SingleTransaction';
import {RootStackParamsList} from '../types';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {Transaction} from '../types';
// import {transactions} from '../utils/data';
type TransactionNavigationProp = StackNavigationProp<RootStackParamsList>;

const TransactionComponent = (transaction : Transaction[] | null) => {
  const {navigate} = useNavigation<TransactionNavigationProp>();
  // console.log(transaction);
  const {trans} = transaction;
  console.log(trans);
  return (
    <View style={styles.outerTransactionContainer}>
      <View style={styles.transactionsContainer}>
        <View style={styles.transactionsHeader}>
          <Text style={styles.transactionsTitle}>Transactions History</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              navigate('AllTransaction', {
                type: 'all',
                mongoId: null
              })
            }>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <View>
          {trans?.slice(0, 5).map((transaction: any) => (
            <SingleTransaction key={transaction.id} transaction={transaction} />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerTransactionContainer: {
    paddingHorizontal: 20,
    width: '100%',
    marginVertical: 0,
  },
  transactionsContainer: {
    marginTop: 30,
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
});

export default TransactionComponent;
