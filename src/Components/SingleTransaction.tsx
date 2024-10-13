import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  bg,
  transactionIcon,
  travel,
  food,
  luxury,
  comfort,
  necessity,
  entertainment,
} from '../utils/images';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../types';
import {useNavigation} from '@react-navigation/native';

type TransactionDetailsNavigationProp =
  StackNavigationProp<RootStackParamsList>;

function SingleTransaction(trans: any, index: any) {
  const {navigate} = useNavigation<TransactionDetailsNavigationProp>();
  const {transaction} = trans;
  const getIconForTransactionType = (type: string) => {
    switch (type) {
      case 'travel':
        return travel;
      case 'food':
        return food;
      case 'luxury':
        return luxury;
      case 'comfort':
        return comfort;
      case 'necessity':
        return necessity;
    case 'entertainment':
        return entertainment;
      default:
        return transactionIcon; // default icon if none of the above match
    }
  };

  return (
    <TouchableOpacity
      key={transaction.id}
      style={styles.transactionItem}
      activeOpacity={0.6}
      onPress={() => navigate('TransactionDetails', trans)}>
      <Image
        source={getIconForTransactionType(transaction.type)}
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
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

export default SingleTransaction;
