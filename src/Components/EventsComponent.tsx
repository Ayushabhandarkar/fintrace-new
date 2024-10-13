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
import {Events, RootStackParamsList} from '../types';

const events = [
  {
    mongoId: '1',
    name: 'Lonavala',
    amount: 3000,
  },
  {
    mongoId: '2',
    name: 'Pratham Visit',
    amount: 6000,
  },
  {
    mongoId: '3',
    name: 'Pune Travel',
    amount: 3000,
  },
  {
    mongoId: '4',
    name: 'Ghar Groceries',
    amount: 3000,
  },
];

type TransactionNavigationProp = StackNavigationProp<RootStackParamsList>;

function EventsComponent({
  eventsData,
  eventTypeData,
}: {
  eventsData: Events[] | null;
  eventTypeData: {[key: string]: number};
}) {
  if (!eventsData) {
    return null;
  }

  console.log('Events data:', eventsData);
  console.log('Event Type Data:', eventTypeData);

  const {navigate} = useNavigation<TransactionNavigationProp>();

  return (
    <View style={styles.outerEventcontainer}>
      <View style={styles.eventsContainer}>
        <View style={styles.eventsHeader}>
          <Text style={styles.eventsTitle}>Events</Text>
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
          {eventsData.slice(0, 3).map((event: any) => {
            // Get the amount from eventTypeData if it exists for this mongoId
            const eventAmount = eventTypeData[event.mongoId] || 0;

            return (
              <EventComponent
                event={{...event, amount: eventAmount}}
                key={event.mongoId}
              />
            );
          })}
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
