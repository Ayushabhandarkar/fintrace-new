import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {RootStackParamsList} from '../types';

interface InvestmentProps {
  investmentGoal: {
    name: string;
    amount: string;
  };
}
type GaolComponentNavigationProp = StackNavigationProp<RootStackParamsList>;

const GoalComponent: React.FC<InvestmentProps> = ({investmentGoal}) => {
  const {navigate} = useNavigation<GaolComponentNavigationProp>();
  return (
    <TouchableOpacity
      style={styles.goalBody}
      activeOpacity={0.6}
      onPress={() =>
        navigate('GoalDetails', {
          name: investmentGoal.name,
        })
      }>
      <View>
        <Text
          style={[
            styles.goalText,
            {
              fontSize: 20,
            },
          ]}>
          {investmentGoal.name}
        </Text>
        <Text style={styles.goalText}>Amount : ₹ {investmentGoal.amount}</Text>
      </View>
      <IonIcons size={30} color="white" name="chevron-forward" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalBody: {
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#549994',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: 50,
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 15,
  },
  goalText: {
    color: 'white',
    marginVertical: 10,
  },
});

export default GoalComponent;
