// import React, {useState} from 'react';
// import {
//   Alert,
//   Dimensions,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import Layout from '../../layout/Layout';
// import {bg} from '../../utils/images';
// import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
// import {RootStackParamsList} from '../../types';
// import {StackNavigationProp} from '@react-navigation/stack';
// import Entypo from 'react-native-vector-icons/Entypo';
// import AntDesign from 'react-native-vector-icons/AntDesign';

// const {height, width} = Dimensions.get('screen');

// type TransactionDetailsNavigationProp =
//   StackNavigationProp<RootStackParamsList>;

// const TransactionDetails = () => {
//   const {navigate} = useNavigation<TransactionDetailsNavigationProp>();
//   const route =
//     useRoute<RouteProp<RootStackParamsList, 'TransactionDetails'>>();
//   const {transaction} = route.params;

//   console.log(transaction);

//   // Function to handle deletion
//   const handleDelete = async () => {
//     try {
//       const response = await fetch(
//         `http://192.168.29.179:3000/transactions/${transaction.id}`,
//         {
//           method: 'DELETE',
//         },
//       );

//       if (response.ok) {
//         Alert.alert('Success', 'Transaction deleted successfully!');
//         navigate('Transaction'); // Navigate back to the transaction list
//       } else {
//         Alert.alert('Error', 'Failed to delete the transaction.');
//       }
//     } catch (error) {
//       console.error('Error deleting transaction:', error);
//       Alert.alert('Error', 'An error occurred while deleting the transaction.');
//     }
//   };

//   // Confirmation prompt for deletion
//   const confirmDelete = () => {
//     Alert.alert(
//       'Confirm Delete',
//       'Are you sure you want to delete this transaction?',
//       [
//         {
//           text: 'No',
//           onPress: () => console.log('Deletion canceled'),
//           style: 'cancel',
//         },
//         {
//           text: 'Yes',
//           onPress: handleDelete, // Call handleDelete function if Yes is pressed
//         },
//       ],
//       {cancelable: true},
//     );
//   };

//   return (
//     <Layout>
//       <View style={styles.imageContainer}>
//         <Image source={bg} style={styles.image} resizeMode="cover" />
//       </View>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>{transaction.name}</Text>
//       </View>
//       <View style={styles.formContainer}>
//         <View style={styles.editContainer}>
//           <TouchableOpacity
//             activeOpacity={0.7}
//             onPress={() =>
//               navigate('Scanning', {transactionId: transaction.id})
//             }
//             style={styles.button}>
//             <Entypo name="edit" size={25} color={'#549994'} />
//           </TouchableOpacity>

//           {/* Adding space between buttons */}
//           <TouchableOpacity
//             activeOpacity={0.7}
//             onPress={confirmDelete} // Use confirmDelete to show the prompt
//             style={styles.button}>
//             <AntDesign name="delete" size={25} color={'#549994'} />
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <Text style={styles.totalExpenseText}>Transaction Amount</Text>
//           <Text
//             style={[
//               styles.totalExpenseAmount,
//               {
//                 color: transaction.amount > 0 ? 'green' : 'red',
//               },
//             ]}>
//             ₹{' '}
//             {transaction.amount < 0
//               ? transaction.amount * -1
//               : transaction.amount}
//           </Text>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             marginTop: 30,
//           }}>
//           <View style={styles.horizontalMetrics}>
//             <View
//               style={{
//                 height: '100%',
//                 justifyContent: 'space-evenly',
//                 marginHorizontal: 20,
//               }}>
//               <Text style={styles.metricsStyle}>Transaction Type</Text>
//               <Text style={styles.amountStyle}>{transaction.type}</Text>
//             </View>
//           </View>
//           <View style={styles.horizontalMetrics}>
//             <View
//               style={{
//                 height: '100%',
//                 justifyContent: 'space-evenly',
//                 marginHorizontal: 20,
//               }}>
//               <Text style={styles.metricsStyle}>Date</Text>
//               <Text style={styles.amountStyle}>{transaction.date}</Text>
//             </View>
//           </View>
//         </View>
//         <View
//           style={{
//             width: '100%',
//             height: 110,
//             backgroundColor: '#EBFFFB',
//             marginTop: 20,
//             borderRadius: 6,
//             padding: 20,
//           }}>
//           <Text style={styles.metricsStyle}>Description</Text>
//           <Text style={styles.amountStyle}>{transaction.description}</Text>
//         </View>
//         <View
//           style={{
//             width: '100%',
//             height: 110,
//             backgroundColor: '#EBFFFB',
//             marginTop: 20,
//             borderRadius: 6,
//             padding: 20,
//           }}>
//           <Text style={styles.metricsStyle}>Transaction To</Text>
//           <Text style={styles.amountStyle}>{transaction.name}</Text>
//         </View>
//       </View>
//     </Layout>
//   );
// };

// const styles = StyleSheet.create({
//   imageContainer: {
//     height: 247,
//     marginTop: 0,
//     zIndex: 20,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//   },
//   header: {
//     position: 'absolute',
//     zIndex: 40,
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 170,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: '500',
//     color: 'white',
//   },
//   formContainer: {
//     backgroundColor: 'white',
//     borderTopStartRadius: 20,
//     borderTopEndRadius: 20,
//     marginTop: -100,
//     zIndex: 100,
//     marginBottom: 60,
//     padding: 20,
//     height: height - 250,
//   },
//   editContainer: {
//     width: '100%',
//     height: 40,
//     alignItems: 'flex-end',
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//   },
//   button: {
//     marginRight: 15, // Add space between buttons
//   },
//   totalExpenseText: {
//     color: '#7A7A7A',
//     marginVertical: 10,
//     fontSize: 17,
//     textAlign: 'center',
//   },
//   totalExpenseAmount: {
//     color: 'black',
//     fontWeight: '600',
//     fontSize: 25,
//     marginVertical: 10,
//     textAlign: 'center',
//   },
//   amountStyle: {
//     color: '#429690',
//     fontWeight: '500',
//     fontSize: 18,
//     marginTop: 10,
//   },
//   metricsStyle: {
//     color: '#7A7A7A',
//     fontWeight: '500',
//     fontSize: 14,
//   },
//   horizontalMetrics: {
//     height: 110,
//     width: width * 0.43,
//     backgroundColor: '#EBFFFB',
//     borderRadius: 6,
//     elevation: 5,
//     shadowColor: '#F9FFFE',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 1,
//     shadowRadius: 4,
//   },
// });

// export default TransactionDetails;

import React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Layout from '../../layout/Layout';
import {bg} from '../../utils/images';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamsList} from '../../types';
import {StackNavigationProp} from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment'; // Import moment.js

const {height, width} = Dimensions.get('screen');

type TransactionDetailsNavigationProp =
  StackNavigationProp<RootStackParamsList>;

const TransactionDetails = () => {
  const {navigate} = useNavigation<TransactionDetailsNavigationProp>();
  const route =
    useRoute<RouteProp<RootStackParamsList, 'TransactionDetails'>>();
  const {transaction} = route.params;

  // Function to format the date
  const formatDate = (transactionDate: string) => {
    const today = moment().startOf('day');
    const transactionMoment = moment(transactionDate).startOf('day');

    if (transactionMoment.isSame(today, 'day')) {
      return 'Today';
    } else if (transactionMoment.isSame(today.subtract(1, 'day'), 'day')) {
      return 'Yesterday';
    } else {
      return moment(transactionDate).format('Do MMMM YY');
    }
  };

  // Function to handle deletion
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://192.168.29.179:3000/transactions/${transaction.id}`,
        {
          method: 'DELETE',
        },
      );
      if (response.ok) {
        Alert.alert('Success', 'Transaction deleted successfully!');
        navigate('Transaction'); // Navigate back to the transaction list
      } else {
        throw new Error('Failed to delete transaction');
      }
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  // Confirmation prompt for deletion
  const confirmDelete = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this transaction?',
      [
        {
          text: 'No',
          onPress: () => console.log('Deletion canceled'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: handleDelete,
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <Layout>
      <View style={styles.imageContainer}>
        <Image source={bg} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>{transaction.name}</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.editContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              navigate('Scanning', {transactionId: transaction.id})
            }
            style={styles.button}>
            <Entypo name="edit" size={25} color={'#549994'} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={confirmDelete}
            style={styles.button}>
            <AntDesign name="delete" size={25} color={'#549994'} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.totalExpenseText}>Transaction Amount</Text>
          <Text
            style={[
              styles.totalExpenseAmount,
              {
                color: transaction.amount > 0 ? 'green' : 'red',
              },
            ]}>
            ₹{' '}
            {transaction.amount < 0
              ? transaction.amount * -1
              : transaction.amount}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <View style={styles.horizontalMetrics}>
            <View
              style={{
                height: '100%',
                justifyContent: 'space-evenly',
                marginHorizontal: 20,
              }}>
              <Text style={styles.metricsStyle}>Transaction Type</Text>
              <Text style={styles.amountStyle}>{transaction.type}</Text>
            </View>
          </View>
          <View style={styles.horizontalMetrics}>
            <View
              style={{
                height: '100%',
                justifyContent: 'space-evenly',
                marginHorizontal: 20,
              }}>
              <Text style={styles.metricsStyle}>Date</Text>
              <Text style={styles.amountStyle}>
                {formatDate(transaction.date)}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 110,
            backgroundColor: '#EBFFFB',
            marginTop: 20,
            borderRadius: 6,
            padding: 20,
          }}>
          <Text style={styles.metricsStyle}>Description</Text>
          <Text style={styles.amountStyle}>{transaction.description}</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 110,
            backgroundColor: '#EBFFFB',
            marginTop: 20,
            borderRadius: 6,
            padding: 20,
          }}>
          <Text style={styles.metricsStyle}>Transaction To</Text>
          <Text style={styles.amountStyle}>{transaction.name}</Text>
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
    padding: 20,
    height: height - 250,
  },
  editContainer: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    marginRight: 15, // Add space between buttons
  },
  totalExpenseText: {
    color: '#7A7A7A',
    marginVertical: 10,
    fontSize: 17,
    textAlign: 'center',
  },
  totalExpenseAmount: {
    color: 'black',
    fontWeight: '600',
    fontSize: 25,
    marginVertical: 10,
    textAlign: 'center',
  },
  amountStyle: {
    color: '#429690',
    fontWeight: '500',
    fontSize: 18,
    marginTop: 10,
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

export default TransactionDetails;
