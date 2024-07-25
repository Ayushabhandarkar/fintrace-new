import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {AmountPage, ConfirmPayment, Home, Scanning, Transaction} from './screens';
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
          name="ConfirmPayment"
          component={ConfirmPayment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AmountPage"
          component={AmountPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
