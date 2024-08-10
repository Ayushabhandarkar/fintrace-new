import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {pieChart} from '../utils/images';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../types';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type InvestmentNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Investment'
>;

interface InvestmentProps {
  investmentGoal: {
    name: string;
    navigationTo: keyof RootStackParamsList; // Updated type
  };
}



const InvestmentGoals: React.FC<InvestmentProps> = ({investmentGoal}) => {
  const {navigate} = useNavigation<InvestmentNavigationProp>();

  return (
    <TouchableOpacity
      style={styles.investmentBox}
      activeOpacity={0.6}
      onPress={() => navigate(investmentGoal.navigationTo)} // Updated to correctly call navigate
    >
      <View>
        <Text style={styles.investmentText}>{investmentGoal.name}</Text>
      </View>
      <View
        style={{
          width: 40,
          height: 40,
        }}>
        <Image
          source={pieChart}
          alt="piechart"
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  investmentBox: {
    backgroundColor: 'white',
    borderColor: '#429690',
    borderWidth: 2,
    width: '90%',
    marginHorizontal: 'auto',
    height: 130,
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  investmentText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#429690',
  },
});

export default InvestmentGoals;
