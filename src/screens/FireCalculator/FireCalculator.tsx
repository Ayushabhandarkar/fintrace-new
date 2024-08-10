import React, {useState} from 'react';
import Layout from '../../layout/Layout';
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {bg} from '../../utils/images';

const {height} = Dimensions.get('screen');

const FireCalculator = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [ageNow, setAgenow] = useState('');
  const [retAge, setRetAge] = useState('');
  const [expense, setExpense] = useState('');
  const [fire, setFire] = useState(0);
  const handleCalculate = () => {
    // Ensure retirement age is greater than current age
    if (Number(retAge) <= Number(ageNow)) {
      Alert.alert('Please enter retirement age greater than current age');
      return;
    }

    // Calculate the total yearly expense
    const ttlYearlyExpense = Number(expense) * 12;
    // Calculate the number of years until retirement
    const yearsUntilRetirement = Number(retAge) - Number(ageNow);
    // Define the annual inflation rate (e.g., 6% as 0.06)
    const inflationRate = 0.07;
    // Calculate the inflation-adjusted factor
    const inflationAdjustedFactor = Math.pow(
      1 + inflationRate,
      yearsUntilRetirement,
    );
    // Calculate the retirement amount
    const retirementAmount = ttlYearlyExpense / 0.04;
    // Calculate the inflation-adjusted retirement amount
    const adjustedRetirementAmount = retirementAmount * inflationAdjustedFactor;
    const amountInLakhs = (adjustedRetirementAmount / 10000000).toFixed(2);
    setFire(Number(amountInLakhs));
  };

  return (
    <Layout>
      <View style={styles.imageContainer}>
        <Image source={bg} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Fire Calculator</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={{marginTop: 20}}>
          <Text style={styles.label}>Enter the monthly amount </Text>
          <TextInput
            style={[
              styles.input,
              {borderColor: isFocused ? '#ccc' : '#E3E3E3'},
            ]}
            keyboardType="numeric"
            value={expense}
            onChangeText={setExpense}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.label}>Enter current age</Text>
          <TextInput
            style={[
              styles.input,
              {borderColor: isFocused ? '#ccc' : '#E3E3E3'},
            ]}
            keyboardType="numeric"
            value={ageNow}
            onChangeText={setAgenow}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.label}>Enter retirement age</Text>
          <TextInput
            style={[
              styles.input,
              {borderColor: isFocused ? '#ccc' : '#E3E3E3'},
            ]}
            keyboardType="numeric"
            value={retAge}
            onChangeText={setRetAge}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        <View
          style={{
            marginVertical: 20,
          }}>
          <Text
            style={{
              color: 'black',
            }}>
            Assuming the inflation to be 7%{' '}
          </Text>
        </View>
        <View
          style={{
            marginVertical: 20,
            backgroundColor: '#EBFFFB',
            padding: 20,
            borderRadius: 12,
            // elevation: 4,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#7A7A7A',
              fontWeight: '500',
              fontSize: 14,
            }}>
            Fire Number : ₹ {fire} Crores
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.calculateButton}
          onPress={handleCalculate}>
          <Text style={styles.calculateText}>Calculate</Text>
        </TouchableOpacity>
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
    padding: 20,
    // height: height,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 20,
    color: 'black',
  },
  label: {
    color: '#6D6D6D',
    fontWeight: '500',
    fontSize: 17,
  },
  calculateButton: {
    backgroundColor: '#429690',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    width: '100%',
    height: 50,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 56,
  },
  calculateText: {
    color: 'white',
    fontWeight: '500',
  },
});

export default FireCalculator;
