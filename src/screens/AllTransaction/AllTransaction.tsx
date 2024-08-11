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

const {width} = Dimensions.get('window');

const TransactionsRoute = () => (
  <View style={styles.scene}>
    {/* <View style={styles.outerAddTransaction}>
      <View
        style={{
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity
          style={styles.innerAddTransaction}
          activeOpacity={0.3}>
          <IonIcons name="add" size={30} color={'#549994'} />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            marginTop: 4,
          }}>
          Add
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity
          style={styles.innerAddTransaction}
          activeOpacity={0.3}>
          <Entypo name="edit" size={25} color={'#549994'} />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            marginTop: 4,
          }}>
          Edit
        </Text>
      </View>
    </View> */}
    {transactions.map((trans: Transaction, index: number) => (
      <View key={index}>
        <SingleTransaction transaction={trans} />
      </View>
    ))}
  </View>
);

const BillsRoute = () => (
  <View style={styles.scene}>
    {Bills.map((trans: Transaction, index: number) => (
      <View key={index}>
        <SingleTransaction transaction={trans} />
      </View>
    ))}
  </View>
);

const renderScene = SceneMap({
  transactions: TransactionsRoute,
  bills: BillsRoute,
});

function AllTransaction() {
  const route = useRoute<RouteProp<RootStackParamsList, 'AllTransaction'>>();
  const {type} = route.params;
  console.log(type);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'transactions', title: 'Transactions'},
    {key: 'bills', title: 'Upcoming Bills'},
  ]);
  const [headerText, setHeaderText] = useState('Total Expense');

  useEffect(() => {
    if (index === 0) {
      setHeaderText('Total Expense');
    } else if (index === 1) {
      setHeaderText('Pending Bill Amount');
    }
  }, [index]);

  return (
    <Layout>
      <View style={styles.imageContainer}>
        <Image source={bg} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>{type} Transactions</Text>
      </View>
      <View style={styles.formContainer}>
        <View
          style={{
            marginTop: 20,
          }}>
          <Text style={styles.totalExpenseText}>{headerText}</Text>
          <Text style={styles.totalExpenseAmount}>₹ 2,548.00</Text>
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
          <TransactionsRoute />
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
