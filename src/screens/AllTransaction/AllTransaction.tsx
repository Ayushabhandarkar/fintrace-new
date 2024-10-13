// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   StyleSheet,
//   Text,
//   Image,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
// import Layout from '../../layout/Layout';
// import {bg} from '../../utils/images';
// import {RootStackParamsList, Transaction} from '../../types';
// import {Bills, transactions} from '../../utils/data';
// import SingleTransaction from '../../Components/SingleTransaction';
// import {RouteProp, useRoute} from '@react-navigation/native';

// const {width} = Dimensions.get('window');

// const TransactionsRoute = (categoryTrans: any) => (
//   <View style={styles.scene}>
//     {categoryTrans.map((trans: Transaction, index: number) => (
//       <View key={index}>
//         <SingleTransaction transaction={trans} key={trans.id} />
//       </View>
//     ))}
//   </View>
// );

// const BillsRoute = () => (
//   <View style={styles.scene}>
//     {Bills.map((trans: Transaction, index: number) => (
//       <View key={index}>
//         <SingleTransaction transaction={trans} key={trans.id} />
//       </View>
//     ))}
//   </View>
// );

// const renderScene = SceneMap({
//   transactions: TransactionsRoute,
//   bills: BillsRoute,
// });

// function AllTransaction() {
//   const route = useRoute<RouteProp<RootStackParamsList, 'AllTransaction'>>();
//   const {type, mongoId} = route.params;
//   console.log(type);
//   console.log(mongoId);
//   const [index, setIndex] = useState(0);
//   const [categoryTrans, setCategoryTrans] = useState<Transaction[] | null>([]);
//   const [routes] = useState([
//     {key: 'transactions', title: 'Transactions'},
//     {key: 'bills', title: 'Upcoming Bills'},
//   ]);
//   const [headerText, setHeaderText] = useState('Total Expense');

//   const fetchTransactionData = async () => {
//     let url = 'http://192.168.29.179:3000/transactions';

//     // Check if the type is not 'all', then append the eventTypeId as a query parameter
//     if (type !== 'all') {
//       url += `?eventTypeId=${mongoId}`;
//     }

//     fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Success:', data);

//         // Assuming 'transactions' is the array containing the data
//         const transactions: Transaction[] = data.transactions.map(
//           (transaction: any) => ({
//             id: transaction._id,
//             name: transaction.payeeName,
//             date: transaction.createdAt,
//             amount: transaction.amount,
//             type: transaction.type,
//             eventTypeId: transaction.eventTypeId || null,
//             description: transaction.description,
//             transactionType: transaction.transactionType,
//           }),
//         );
//         setCategoryTrans(transactions);
//         // Uncomment these lines to set transactions to state
//         // setTransactions(transactions);
//         // setTransData(tempTransData);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };
//   useEffect(() => {
//     fetchTransactionData();
//   }, []);
//   useEffect(() => {
//     if (index === 0) {
//       setHeaderText('Total Expense');
//     } else if (index === 1) {
//       setHeaderText('Pending Bill Amount');
//     }
//   }, [index]);

//   return (
//     <Layout>
//       <View style={styles.imageContainer}>
//         <Image source={bg} style={styles.image} resizeMode="cover" />
//       </View>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>{type} Transactions</Text>
//       </View>
//       <View style={styles.formContainer}>
//         <View
//           style={{
//             marginTop: 20,
//           }}>
//           <Text style={styles.totalExpenseText}>{headerText}</Text>
//           <Text style={styles.totalExpenseAmount}>₹ 2,548.00</Text>
//         </View>
//         {type === 'all' ? (
//           <TabView
//             navigationState={{index, routes}}
//             renderScene={renderScene}
//             onIndexChange={setIndex}
//             initialLayout={{width}}
//             renderTabBar={props => (
//               <TabBar
//                 {...props}
//                 renderLabel={({route, focused}) => (
//                   <View
//                     style={[
//                       styles.tabItem,
//                       focused ? styles.activeTabItem : styles.inactiveTabItem,
//                     ]}>
//                     <Text
//                       style={
//                         focused ? styles.activeTabText : styles.inactiveTabText
//                       }>
//                       {route.title}
//                     </Text>
//                   </View>
//                 )}
//                 indicatorStyle={styles.indicator}
//                 style={styles.tabBar}
//               />
//             )}
//           />
//         ) : (
//           <TransactionsRoute categoryTrans={categoryTrans} />
//         )}
//       </View>
//     </Layout>
//   );
// }

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
//     flex: 1,
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
//   scene: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   indicator: {
//     backgroundColor: 'transparent',
//     height: 4,
//   },
//   tabBar: {
//     backgroundColor: '#F3F4F6',
//     borderRadius: 25,
//     marginHorizontal: 20,
//     marginVertical: 10,
//     elevation: 0,
//   },
//   tabItem: {
//     borderRadius: 25,
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//   },
//   activeTabItem: {
//     backgroundColor: 'white',
//   },
//   inactiveTabItem: {
//     backgroundColor: '#F3F4F6',
//   },
//   activeTabText: {
//     color: '#6B7280',
//     fontWeight: '600',
//   },
//   inactiveTabText: {
//     color: '#6B7280',
//     fontWeight: '600',
//   },
//   outerAddTransaction: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 20,
//     flexDirection: 'row',
//   },
//   innerAddTransaction: {
//     borderWidth: 1,
//     borderColor: '#549994',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default AllTransaction;

import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Layout from '../../layout/Layout';
import {bg} from '../../utils/images';
import {RootStackParamsList, Transaction} from '../../types';
import {Bills, transactions} from '../../utils/data';
import SingleTransaction from '../../Components/SingleTransaction';
import {RouteProp, useRoute} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const TransactionsRoute = ({categoryTrans}: {categoryTrans: Transaction[]}) => (
  <View style={styles.scene}>
    {categoryTrans.map((trans: Transaction, index: number) => (
      <View key={trans.id}>
        <SingleTransaction transaction={trans} />
      </View>
    ))}
  </View>
);

const BillsRoute = () => (
  <View style={styles.scene}>
    {Bills.map((trans: Transaction, index: number) => (
      <View key={trans.id}>
        <SingleTransaction transaction={trans} />
      </View>
    ))}
  </View>
);

function AllTransaction() {
  const route = useRoute<RouteProp<RootStackParamsList, 'AllTransaction'>>();
  const {type, mongoId} = route.params;
  console.log(type);
  console.log(mongoId);
  const [totalExpense, setTotalExpense] = useState(0);
  const [index, setIndex] = useState(0);
  const [categoryTrans, setCategoryTrans] = useState<Transaction[]>([]);
  const [routes] = useState([
    {key: 'transactions', title: 'Transactions'},
    {key: 'bills', title: 'Upcoming Bills'},
  ]);
  const [headerText, setHeaderText] = useState('Total Expense');

  const fetchTransactionData = async () => {
    let url = 'http://192.168.29.179:3000/transactions';

    if (type !== 'all') {
      url += `?eventTypeId=${mongoId}`;
    }

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
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
      const total = transactions.reduce(
        (sum, transaction) => sum + transaction.amount,
        0,
      );

      // Set the total expense in the state
      setTotalExpense(total);
      setCategoryTrans(transactions);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchTransactionData();
  }, []);

  useEffect(() => {
    if (index === 0) {
      setHeaderText('Total Expense');
    } else if (index === 1) {
      setHeaderText('Pending Bill Amount');
    }
  }, [index]);

  const renderScene = ({route}: {route: any}) => {
    switch (route.key) {
      case 'transactions':
        return <TransactionsRoute categoryTrans={categoryTrans} />;
      case 'bills':
        return <BillsRoute />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <View style={styles.imageContainer}>
        <Image source={bg} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>{type} Transactions</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={{marginTop: 20}}>
          <Text style={styles.totalExpenseText}>{headerText}</Text>
          <Text style={styles.totalExpenseAmount}>₹ {totalExpense}</Text>
        </View>
        {type === 'all' ? (
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width}}
            renderTabBar={props => (
              <TabBar
                {...props}
                renderLabel={({route, focused}) => (
                  <View
                    style={[
                      styles.tabItem,
                      focused ? styles.activeTabItem : styles.inactiveTabItem,
                    ]}>
                    <Text
                      style={
                        focused ? styles.activeTabText : styles.inactiveTabText
                      }>
                      {route.title}
                    </Text>
                  </View>
                )}
                indicatorStyle={styles.indicator}
                style={styles.tabBar}
              />
            )}
          />
        ) : (
          <TransactionsRoute categoryTrans={categoryTrans} />
        )}
      </View>
    </Layout>
  );
}

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
    flex: 1,
    height: height,
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
  scene: {
    flex: 1,
    paddingHorizontal: 20,
  },
  indicator: {
    backgroundColor: 'transparent',
    height: 4,
  },
  tabBar: {
    backgroundColor: '#F3F4F6',
    borderRadius: 25,
    marginHorizontal: 20,
    marginVertical: 10,
    elevation: 0,
  },
  tabItem: {
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  activeTabItem: {
    backgroundColor: 'white',
  },
  inactiveTabItem: {
    backgroundColor: '#F3F4F6',
  },
  activeTabText: {
    color: '#6B7280',
    fontWeight: '600',
  },
  inactiveTabText: {
    color: '#6B7280',
    fontWeight: '600',
  },
  outerAddTransaction: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    flexDirection: 'row',
  },
  innerAddTransaction: {
    borderWidth: 1,
    borderColor: '#549994',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AllTransaction;
