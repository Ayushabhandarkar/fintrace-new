// import React from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import IonIcons from 'react-native-vector-icons/Ionicons';

// function EventComponent(events: any) {
//   // const
//   const {event} = events;
//   console.log(event);
//   return (
//     <TouchableOpacity
//       style={styles.eventContainer}
//       activeOpacity={0.6}
//       onPress={() =>
//         navigate('AllTransaction', {
//           type: 'all',
//         })
//       }>
//       <View
//         style={{
//           flexDirection: 'row',
//         }}>
//         <View style={styles.boxEventText}>
//           <Text style={styles.eventTitle}>{event.name}</Text>
//           <Text style={styles.eventAmount}>
//             Total Expense : ₹{event.amount}
//           </Text>
//         </View>
//         <View style={styles.boxEventArrow}>
//           <IonIcons size={30} color="white" name="chevron-forward" />
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   eventContainer: {
//     marginHorizontal: 'auto',
//     width: '100%',
//     backgroundColor: '#429690',
//     height: 100,
//     borderRadius: 13,
//     marginVertical: 5,
//   },
//   boxEventText: {
//     width: '80%',
//     justifyContent: 'space-evenly',
//     alignContent: 'center',
//     height: '100%',
//     paddingHorizontal: 30,
//   },
//   boxEventArrow: {
//     height: '100%',
//     width: '20%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   seeAllText: {
//     color: '#666666',
//   },
//   eventTitle: {
//     color: '#fff',
//     fontWeight: '500',
//     fontSize: 18,
//   },
//   eventAmount: {
//     color: '#fff',
//   },
// });
// export default EventComponent;

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Define the RootStackParamsList type if it's not already defined in a separate file
type RootStackParamsList = {
  Home: undefined;
  Scanning: undefined;
  Transaction: undefined;
  Event: undefined;
  AllTransaction: {
    type: string;
  };
};

// Define the type for the navigation prop
type NavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'AllTransaction'
>;

interface EventComponentProps {
  event: {
    name: string;
    amount: number;
  };
}

const EventComponent: React.FC<EventComponentProps> = ({event}) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      style={styles.eventContainer}
      activeOpacity={0.6}
      onPress={() =>
        navigation.navigate('AllTransaction', {
          type: event.name,
        })
      }>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.boxEventText}>
          <Text style={styles.eventTitle}>{event.name}</Text>
          <Text style={styles.eventAmount}>
            Total Expense : ₹{event.amount}
          </Text>
        </View>
        <View style={styles.boxEventArrow}>
          <IonIcons size={30} color="white" name="chevron-forward" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    marginHorizontal: 'auto',
    width: '100%',
    backgroundColor: '#429690',
    height: 100,
    borderRadius: 13,
    marginVertical: 5,
  },
  boxEventText: {
    width: '80%',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    height: '100%',
    paddingHorizontal: 30,
  },
  boxEventArrow: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeAllText: {
    color: '#666666',
  },
  eventTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
  },
  eventAmount: {
    color: '#fff',
  },
});

export default EventComponent;
