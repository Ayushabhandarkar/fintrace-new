// import React from 'react';
// import {
//   Dimensions,
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {RootStackParamsList} from '../../types';
// import {StackNavigationProp} from '@react-navigation/stack';
// import Layout from '../../layout/Layout';
// import {bg, transaction} from '../../utils/images';
// import PieChart from 'react-native-pie-chart';
// import TransactionComponent from '../../Components/TransactionComponent';

// type TransactionNavigationProp = StackNavigationProp<
//   RootStackParamsList,
//   'Transaction'
// >;

// const {width, height} = Dimensions.get('screen');
// const Transaction = () => {
//   const data = [10, 20, 30, 40];
//   const colors = ['#0D2535', '#5388D8', '#F4BE37', '#FF9F40'];

//   return (
//     <Layout>
//       <View
//         style={
//           {
//             //   height: 2 * height,
//           }
//         }>
//         <View style={{flex: 1, height: 'auto'}}>
//           <View style={styles.imageContainer}>
//             <Image source={bg} style={styles.image} resizeMode="cover" />
//           </View>
//           <View style={styles.header}>
//             <Text style={styles.headerText}>Budget</Text>
//           </View>
//           <View style={styles.formContainer}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 margin: 20,
//               }}>
//               <View style={styles.horizontalMetrics}>
//                 <View
//                   style={{
//                     height: '100%',
//                     justifyContent: 'space-evenly',
//                     marginHorizontal: 20,
//                   }}>
//                   <Text style={styles.metricsStyle}>
//                     Limit for Expense (in ₹)
//                   </Text>
//                   <Text style={styles.amountStyle}>10,000</Text>
//                 </View>
//               </View>
//               <View style={styles.horizontalMetrics}>
//                 <View
//                   style={{
//                     height: '100%',
//                     justifyContent: 'space-evenly',
//                     marginHorizontal: 20,
//                   }}>
//                   <Text style={styles.metricsStyle}>
//                     Limit for Expense (in ₹)
//                   </Text>
//                   <Text style={styles.amountStyle}>10,000</Text>
//                 </View>
//               </View>
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 marginHorizontal: 20,
//               }}>
//               <View style={styles.horizontalMetrics}>
//                 <View
//                   style={{
//                     height: '100%',
//                     justifyContent: 'space-evenly',
//                     marginHorizontal: 20,
//                   }}>
//                   <Text style={styles.metricsStyle}>
//                     Limit for Expense (in ₹)
//                   </Text>
//                   <Text style={styles.amountStyle}>10,000</Text>
//                 </View>
//               </View>
//               <View style={styles.horizontalMetrics}>
//                 <View
//                   style={{
//                     height: '100%',
//                     justifyContent: 'space-evenly',
//                     marginHorizontal: 20,
//                   }}>
//                   <Text style={styles.metricsStyle}>
//                     Limit for Expense (in ₹)
//                   </Text>
//                   <Text style={styles.amountStyle}>10,000</Text>
//                 </View>
//               </View>
//             </View>
//             <View style={styles.pieChartBox}>
//               <View
//                 style={{
//                   alignItems: 'center',
//                   height: 30,
//                   justifyContent: 'center',
//                 }}>
//                 <Text
//                   style={{
//                     color: 'white',
//                   }}>
//                   Transaction History
//                 </Text>
//               </View>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   width: '100%',
//                 }}>
//                 <View
//                   style={{
//                     height: '100%',
//                     padding: 10,
//                     width: '50%',
//                   }}>
//                   <PieChart
//                     widthAndHeight={150}
//                     series={data}
//                     sliceColor={colors}
//                   />
//                 </View>
//                 <View style={styles.pieChartMetric}>
//                   <View style={styles.pieChartDisplay}>
//                     <View
//                       style={[
//                         styles.pieChartSingleMetric,
//                         {backgroundColor: '#0D2535'},
//                       ]}
//                     />
//                     <Text
//                       style={{
//                         color: 'white',
//                         paddingHorizontal: 6,
//                       }}>
//                       Necessity
//                     </Text>
//                   </View>
//                   <View style={styles.pieChartDisplay}>
//                     <View
//                       style={[
//                         styles.pieChartSingleMetric,
//                         {backgroundColor: '#5388D8'},
//                       ]}
//                     />
//                     <Text
//                       style={{
//                         color: 'white',
//                         paddingHorizontal: 6,
//                       }}>
//                       Food
//                     </Text>
//                   </View>
//                   <View style={styles.pieChartDisplay}>
//                     <View
//                       style={[
//                         styles.pieChartSingleMetric,
//                         {backgroundColor: '#F4BE37'},
//                       ]}
//                     />
//                     <Text
//                       style={{
//                         color: 'white',
//                         paddingHorizontal: 6,
//                       }}>
//                       Travel
//                     </Text>
//                   </View>
//                   <View style={styles.pieChartDisplay}>
//                     <View
//                       style={[
//                         styles.pieChartSingleMetric,
//                         {backgroundColor: '#FF9F40'},
//                       ]}
//                     />
//                     <Text
//                       style={{
//                         color: 'white',
//                         paddingHorizontal: 6,
//                       }}>
//                       Entertainment
//                     </Text>
//                   </View>
//                 </View>
//               </View>
//             </View>
//             <View
//               style={{
//                 width: '100%',
//                 height: 600,
//               }}>
//               <TransactionComponent />
//             </View>
//           </View>
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
//     marginBottom: 57,
//   },
//   amountStyle: {
//     color: '#429690',
//     fontWeight: '500',
//     fontSize: 18,
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
//   pieChartBox: {
//     height: 206,
//     width: '90%',
//     backgroundColor: '#429690',
//     marginHorizontal: 'auto',
//     marginTop: 20,
//     borderRadius: 8,
//   },
//   pieChartMetric: {
//     width: '50%',
//     height: '100%',
//     marginVertical: 20,
//     paddingHorizontal: 20,
//   },
//   pieChartSingleMetric: {
//     width: 20,
//     height: 20,
//     borderWidth: 1.3,
//     borderColor: 'white',
//     borderRadius: 3,
//   },
//   pieChartDisplay: {
//     flexDirection: 'row',
//     width: '100%',
//     // justifyContent: 'space-around',
//     paddingVertical: 5,
//   },
//   container: {
//     backgroundColor: 'white',
//     zIndex: 102,
//     padding: 20,
//     width: '100%',
//     marginBottom: 40,
//   },
//   greeting: {
//     fontSize: 16,
//     color: 'white',
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   balanceCard: {
//     backgroundColor: '#2F7E79',
//     borderRadius: 15,
//     padding: 20,
//     marginTop: 130,
//     marginHorizontal: '5%',
//     position: 'absolute',
//     zIndex: 44,
//     width: '90%',
//     elevation: 10,
//   },
//   balanceTitle: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   balanceAmount: {
//     color: '#fff',
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   incomeExpenseRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   incomeExpenseItem: {},
//   incomeExpenseLabel: {
//     color: '#fff',
//     fontSize: 14,
//   },
//   incomeExpenseAmount: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   transactionsContainer: {
//     flex: 1,
//     marginTop: 60,
//     backgroundColor: 'white',
//   },
//   transactionsHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   transactionsTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#222222',
//     backgroundColor: 'black',
//   },
//   seeAllText: {
//     color: '#666666',
//   },
//   transactionItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: 10,
//     padding: 15,
//     // marginBottom: 10,
//   },
//   transactionIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 15,
//   },
//   transactionDetails: {
//     flex: 1,
//   },
//   transactionName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000000',
//   },
//   transactionDate: {
//     fontSize: 14,
//     color: '#888',
//   },
//   transactionAmount: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Transaction;

import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RootStackParamsList} from '../../types';
import {StackNavigationProp} from '@react-navigation/stack';
import Layout from '../../layout/Layout';
import {bg, transaction} from '../../utils/images';
import PieChart from 'react-native-pie-chart';
import TransactionComponent from '../../Components/TransactionComponent';

type TransactionNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Transaction'
>;

const {width, height} = Dimensions.get('screen');
const Transaction = () => {
  const data = [10, 20, 30, 40];
  const colors = ['#0D2535', '#5388D8', '#F4BE37', '#FF9F40'];

  return (
    <Layout>
      <View>
        <View style={{flex: 1, height: 'auto'}}>
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
            <View style={styles.pieChartBox}>
              <View
                style={{
                  alignItems: 'center',
                  height: 30,
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white'}}>Transaction History</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <View
                  style={{
                    height: '100%',
                    padding: 10,
                    width: '50%',
                  }}>
                  <PieChart
                    widthAndHeight={150}
                    series={data}
                    sliceColor={colors}
                  />
                </View>
                <View style={styles.pieChartMetric}>
                  <View style={styles.pieChartDisplay}>
                    <View
                      style={[
                        styles.pieChartSingleMetric,
                        {backgroundColor: '#0D2535'},
                      ]}
                    />
                    <Text
                      style={{
                        color: 'white',
                        paddingHorizontal: 6,
                      }}>
                      Necessity
                    </Text>
                  </View>
                  <View style={styles.pieChartDisplay}>
                    <View
                      style={[
                        styles.pieChartSingleMetric,
                        {backgroundColor: '#5388D8'},
                      ]}
                    />
                    <Text
                      style={{
                        color: 'white',
                        paddingHorizontal: 6,
                      }}>
                      Food
                    </Text>
                  </View>
                  <View style={styles.pieChartDisplay}>
                    <View
                      style={[
                        styles.pieChartSingleMetric,
                        {backgroundColor: '#F4BE37'},
                      ]}
                    />
                    <Text
                      style={{
                        color: 'white',
                        paddingHorizontal: 6,
                      }}>
                      Travel
                    </Text>
                  </View>
                  <View style={styles.pieChartDisplay}>
                    <View
                      style={[
                        styles.pieChartSingleMetric,
                        {backgroundColor: '#FF9F40'},
                      ]}
                    />
                    <Text
                      style={{
                        color: 'white',
                        paddingHorizontal: 6,
                      }}>
                      Entertainment
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: 500,
              }}>
              <TransactionComponent />
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
    marginBottom: 57,
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
  pieChartBox: {
    height: 206,
    width: '90%',
    backgroundColor: '#429690',
    marginHorizontal: 'auto',
    marginTop: 20,
    borderRadius: 8,
  },
  pieChartMetric: {
    width: '50%',
    height: '100%',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  pieChartSingleMetric: {
    width: 20,
    height: 20,
    borderWidth: 1.3,
    borderColor: 'white',
    borderRadius: 3,
  },
  pieChartDisplay: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 5,
  },
  container: {
    backgroundColor: 'white',
    zIndex: 102,
    padding: 20,
    width: '100%',
    marginBottom: 40,
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
    backgroundColor: 'white',
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
    backgroundColor: 'black',
  },
  seeAllText: {
    color: '#666666',
  },
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

export default Transaction;
