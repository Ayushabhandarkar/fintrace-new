// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableWithoutFeedback,
//   Image,
//   Keyboard,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';
// import {RouteProp} from '@react-navigation/native';
// import {RootStackParamsList} from '../../types';
// import Layout from '../../layout/Layout';
// import {bg} from '../../utils/images';
// import RNUpiPayment from 'react-native-upi-payment';

// type AmountPageNavigationProp = StackNavigationProp<
//   RootStackParamsList,
//   'AmountPage'
// >;
// type AmountPageRouteProp = RouteProp<RootStackParamsList, 'AmountPage'>;

// const {height} = Dimensions.get('screen');

// const AmountPage = () => {
//   const {navigate} = useNavigation<AmountPageNavigationProp>();
//   const route = useRoute<AmountPageRouteProp>();
//   const {upiID, name} = route.params;
//   const [amount, setAmount] = useState('');
//   const [isFocused, setIsFocused] = useState(false);
//   const successCallback = (response: any) => {
//     console.log('Payment Success', response);
//     // Handle success response
//   };

//   const failureCallback = (error: any) => {
//     console.log('Payment Failure', error);
//     // Handle failure response
//   };
//   const handleProceed = () => {
//     // const url = `upi://pay?pa=${upiID}&am=${amount}&cu=INR`;
//     // const url = `upi://pay?pa=${upiID}&pn=${name}&am=${amount}&cu=INR`;
//     // navigate('ConfirmPayment', {url});
//     RNUpiPayment.initializePayment(
//       {
//         vpa: 'anushkaab76@oksbi', // or can be john@ybl or mobileNo@upi
//         payeeName: 'Anushka Bhandarkar',
//         amount: '1',
//         transactionRef: 'aasf-332-aoei-fn',
//       },
//       successCallback,
//       failureCallback,
//     );
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={{flex: 1}}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <Layout>
//           <View style={{flex: 1}}>
//             <View style={styles.imageContainer}>
//               <Image source={bg} style={styles.image} resizeMode="cover" />
//             </View>
//             <View style={styles.header}>
//               <Text style={styles.headerText}>Payment</Text>
//             </View>
//           </View>
//           <View style={styles.formContainer}>
//             <View style={{marginTop: 40}}>
//               <Text style={styles.label}>Enter Amount to pay</Text>
//               <TextInput
//                 style={[
//                   styles.input,
//                   {borderColor: isFocused ? '#ccc' : '#E3E3E3'},
//                 ]}
//                 placeholder="amount"
//                 placeholderTextColor={'#626262'}
//                 value={amount}
//                 onChangeText={setAmount}
//                 onFocus={() => setIsFocused(true)}
//                 onBlur={() => setIsFocused(false)}
//               />
//             </View>
//             <TouchableOpacity onPress={handleProceed} style={styles.buttonPay}>
//               <Text style={styles.buttonText}>Pay</Text>
//             </TouchableOpacity>
//           </View>
//         </Layout>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   imageContainer: {
//     height: 247,
//     marginTop: 0,
//     zIndex: 20,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//   },
//   formContainer: {
//     backgroundColor: 'white',
//     borderTopStartRadius: 20,
//     borderTopEndRadius: 20,
//     height: 541,
//     marginTop: -100,
//     zIndex: 100,
//     padding: 20,
//     marginBottom: 57,
//   },
//   header: {
//     position: 'absolute',
//     zIndex: 40,
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 170,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: '500',
//     color: 'white',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   label: {
//     color: '#6D6D6D',
//     fontWeight: '500',
//     fontSize: 17,
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingLeft: 10,
//     marginTop: 20,
//     color: 'black',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   buttonPay: {
//     backgroundColor: '#429690',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 20,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//     width: 300,
//     alignItems: 'center',
//     marginHorizontal: 'auto',
//     borderWidth: 2,
//     borderColor: 'white',
//     marginTop: 40,
//   },
// });

// export default AmountPage;

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
import RNUpiPayment from 'react-native-upi-payment';

type AmountPageNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'AmountPage'
>;
type AmountPageRouteProp = RouteProp<RootStackParamsList, 'AmountPage'>;

const {height} = Dimensions.get('screen');

const AmountPage = () => {
  const {navigate} = useNavigation<AmountPageNavigationProp>();
  const route = useRoute<AmountPageRouteProp>();
  const {upiID, name} = route.params;
  const [amount, setAmount] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const successCallback = (response: any) => {
    console.log('Payment Success', response);
    // Handle success response
  };

  const failureCallback = (error: any) => {
    console.log('Payment Failure', error);
    // Handle failure response
  };

  const handleProceed = () => {
    // const url =
    //   'upi://pay?mode=02&pa=Q327471105@ybl&purpose=00&mc=0000&pn=PhonePeMerchant&orgid=180001&sign=MEUCIQDp22UgGd76xrJ9mCNbs5iqgIl8EKUE9nHMuC9sPTI+nQIgP0l1N6XRi5saSz2/ygIZzHMbIJbj3AkM07qM4fU0L7Q=';
    const url = 'upi://pay?pa=paytmqrenxsj00azz@paytm&pn=Paytm';
    Linking.openURL(url);
    console.log('You have clicked ');
    return;
    RNUpiPayment.initializePayment(
      {
        vpa: 'Q327471105@ybl', // or can be john@ybl or mobileNo@upi
        payeeName: 'PhonePeMerchant',
        amount: amount,
        transactionRef: 'aasf-332-aoei-fn',
        categoryCode: '4722',
      },
      successCallback,
      failureCallback,
    );
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
              <Text style={styles.headerText}>Payment</Text>
            </View>
          </View>
          <View style={styles.formContainer}>
            <View style={{marginTop: 40}}>
              <Text style={styles.label}>Enter Amount to pay</Text>
              <TextInput
                style={[
                  styles.input,
                  {borderColor: isFocused ? '#ccc' : '#E3E3E3'},
                ]}
                placeholder="amount"
                placeholderTextColor={'#626262'}
                value={amount}
                onChangeText={setAmount}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </View>
            <TouchableOpacity onPress={handleProceed} style={styles.buttonPay}>
              <Text style={styles.buttonText}>Pay</Text>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    color: '#6D6D6D',
    fontWeight: '500',
    fontSize: 17,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 20,
    color: 'black',
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

export default AmountPage;
