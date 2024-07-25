import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Image,
  Keyboard,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamsList} from '../../types';
import Layout from '../../layout/Layout';
import {bg} from '../../utils/images';
type ConfirmPaymentRouteProp = RouteProp<RootStackParamsList, 'ConfirmPayment'>;

const ConfirmPayment: React.FC = () => {
  const route = useRoute<ConfirmPaymentRouteProp>();
  const {url} = route.params;
  console.log(url);
  const handlePay = () => {
    console.log(url);
    Linking.openURL(url);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Layout>
          <View style={{flex: 1}}>
            <View style={styles.imageContainer}>
              <Image source={bg} style={styles.image} resizeMode="cover" />
            </View>
            <View style={styles.header}>
              <Text style={styles.headerText}>Confirm Payment</Text>
            </View>
          </View>
          <View style={styles.formContainer}>
            <Text
              style={{
                textAlign: 'center',
              }}>
              {url}
            </Text>
            <TouchableOpacity onPress={handlePay} style={styles.buttonPay}>
              <Text style={styles.buttonText}>Confirm Payment</Text>
            </TouchableOpacity>
          </View>
        </Layout>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  formContainer: {
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    height: 541,
    marginTop: -100,
    zIndex: 100,
    padding: 20,
    marginBottom: 57,
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
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonPay: {
    backgroundColor: '#429690',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
    alignItems: 'center',
    marginHorizontal: 'auto',
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 40,
  },
});

export default ConfirmPayment;
