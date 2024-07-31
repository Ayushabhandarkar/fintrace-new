import React from 'react';
import Layout from '../../layout/Layout';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {bg} from '../../utils/images';
import {events} from '../../utils/data';
import EventComponent from '../../Components/EventComponent';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {RootStackParamsList} from '../../types';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

type EventNavigationProp = StackNavigationProp<RootStackParamsList, 'Event'>;

function Event() {
  const {navigate} = useNavigation<EventNavigationProp>();
  return (
    <Layout>
      <View>
        <View>
          <View style={styles.imageContainer}>
            <Image source={bg} style={styles.image} resizeMode="cover" />
          </View>
          <View style={styles.header}>
            <Text style={styles.headerText}>Events</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.outerAddEvent}>
              <TouchableOpacity
                style={styles.innerAddEvent}
                activeOpacity={0.3}
                onPress={() => navigate('AddEvent')}>
                <IonIcons name="add" size={30} color={'#549994'} />
              </TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  marginTop: 4,
                }}>
                Add Event
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                marginVertical: 30,
              }}>
              {events.map((ev: any, index: number) => (
                <View key={index}>
                  <EventComponent event={ev} />
                </View>
              ))}
            </View>
          </View>
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
  },
  outerAddEvent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  innerAddEvent: {
    borderWidth: 1,
    borderColor: '#549994',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Event;
