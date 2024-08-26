import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import EventComponent from './EventComponent';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../types';

const events = [
  {
    id: '1',
    name: 'Lonavala',
    amount: 3000,
  },
  {
    id: '2',
    name: 'Pratham Visit',
    amount: 6000,
  },
  {
    id: '3',
    name: 'Pune Travel',
    amount: 3000,
  },
  {
    id: '4',
    name: 'Ghar Groceries',
    amount: 3000,
  },
];

type TransactionNavigationProp = StackNavigationProp<RootStackParamsList>;

function EventsComponent() {
  const {navigate} = useNavigation<TransactionNavigationProp>();
  return (
    <View style={styles.outerEventcontainer}>
      <View style={styles.eventsContainer}>
        <View style={styles.eventsHeader}>
          <Text style={styles.eventsTitle}>Events </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigate('Event')}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{
            backgroundColor: 'white',
            paddingBottom: 20,
          }}>
          {events.slice(0, 3).map(event => (
            <EventComponent event={event} key={event.id} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerEventcontainer: {
    flex: 1,
    backgroundColor: 'white',
    zIndex: 200,
    paddingHorizontal: 20,
    width: '100%',
    marginVertical: 0,
    marginBottom: 40,
  },
  eventsContainer: {
    // flex: 1,
    marginTop: 60,
  },
  eventsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  eventsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
  },
  seeAllText: {
    color: '#666666',
  },
});

export default EventsComponent;
