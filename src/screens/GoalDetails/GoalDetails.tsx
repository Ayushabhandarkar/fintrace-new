import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Layout from '../../layout/Layout';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamsList} from '../../types';
import {bg} from '../../utils/images';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('screen');

const GoalDetails = () => {
  const route = useRoute<RouteProp<RootStackParamsList, 'GoalDetails'>>();
  const {name} = route.params;
  return (
    <Layout>
      <View style={styles.imageContainer}>
        <Image source={bg} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>{name}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              marginTop: 10,
              height: 40,
              backgroundColor: 'white',
              borderRadius: 20,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <EntypoIcon name="edit" size={20} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              marginTop: 10,
              height: 40,
              backgroundColor: 'white',
              borderRadius: 20,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <AntDesignIcon name="delete" size={20} color={'black'} />
          </TouchableOpacity>
        </View>
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
              <Text style={styles.metricsStyle}>Amount needed (in ₹)</Text>
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
              <Text style={styles.metricsStyle}>Invested Amount (in ₹)</Text>
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
              <Text style={styles.metricsStyle}>Interest Earned (in ₹)</Text>
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
              <Text style={styles.metricsStyle}>Period (in months)</Text>
              <Text style={styles.amountStyle}>4</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginVertical: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: 40,
              borderWidth: 1,
              borderColor: '#429690',
              backgroundColor: 'white',
              flexDirection: 'row',
              paddingHorizontal: 20,
              justifyContent: 'center',
              width: 200,
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <IonIcons name="add" size={30} color={'#549994'} />
            <Text
              style={{
                color: '#429690',
              }}>
              Add investment option
            </Text>
          </TouchableOpacity>
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
    // padding: 10,
    height: height,
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
});

export default GoalDetails;
