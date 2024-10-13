import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  AddEvent,
  AllTransaction,
  Event,
  FireCalculator,
  GoalDetails,
  Home,
  Investment,
  InvestmentDetails,
  Scanning,
  Transaction,
  TransactionDetails,
} from './screens';
import {RootStackParamsList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamsList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Scanning"
          component={Scanning}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Event"
          component={Event}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AllTransaction"
          component={AllTransaction}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddEvent"
          component={AddEvent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Investment"
          component={Investment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FireCalculator"
          component={FireCalculator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InvestmentDetails"
          component={InvestmentDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GoalDetails"
          component={GoalDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransactionDetails"
          component={TransactionDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
