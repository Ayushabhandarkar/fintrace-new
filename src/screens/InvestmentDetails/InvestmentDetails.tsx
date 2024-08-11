import React from 'react';
import Layout from '../../layout/Layout';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {bg} from '../../utils/images';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamsList} from '../../types';
import IonIcons from 'react-native-vector-icons/Ionicons';
import GoalComponent from '../../Components/GoalComponent';

const {height} = Dimensions.get('screen');

function InvestmentDetails() {
  const route = useRoute<RouteProp<RootStackParamsList, 'InvestmentDetails'>>();
  const {name} = route.params;
  console.log(name);
  return (
    <Layout>
      <View style={styles.imageContainer}>
        <Image source={bg} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>{name}</Text>
      </View>
      <View style={styles.formContainer}>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 20,
            marginHorizontal: 30,
          }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              flexDirection: 'row',
              backgroundColor: '#549994',
              borderRadius: 7,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 5,
              paddingHorizontal: 20,
            }}>
            <IonIcons name="add" size={30} color={'white'} />
            <Text
              style={{
                color: 'white',
              }}>
              Add goal
            </Text>
          </TouchableOpacity>
          <GoalComponent investmentGoal={{name: 'Watch', amount: 30000}} />
        </View>
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
    // padding: 10,
    height: height,
  },
});

export default InvestmentDetails;
