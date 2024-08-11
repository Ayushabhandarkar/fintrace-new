import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Layout from '../../layout/Layout';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamsList} from '../../types';
import {bg} from '../../utils/images';

const {height} = Dimensions.get('screen');

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
      </View>
      <View style={styles.formContainer}></View>
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
});

export default GoalDetails;
