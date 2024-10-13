import React, {useEffect, useState, useMemo} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
  Alert,
  NativeEventEmitter,
  NativeModules,
} from 'react-native';
import {Events, RootStackParamsList, Transaction} from '../../types';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import Layout from '../../layout/Layout';
import {bg} from '../../utils/images';
import {Dropdown} from 'react-native-element-dropdown';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

type ScanningNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Scanning'
>;

type ScanningRouteProp = RouteProp<RootStackParamsList, 'Scanning'>;

const {height} = Dimensions.get('window');

const List = (type: any) => {
  return (
    <View style={styles.listContainer}>
      <View
        style={{...styles.listColor, backgroundColor: type.color || '#429690'}}
      />
      <Text style={{...styles.listText, color: type.color || 'black'}}>
        {type.label}
      </Text>
    </View>
  );
};

const Scanning: React.FC = () => {
  const {navigate} = useNavigation<ScanningNavigationProp>();
  const route = useRoute<ScanningRouteProp>();

  // Extract transactionId from route params (if editing an existing transaction)
  const transactionId = route.params?.transactionId || null;
  // console.log(transactionId);
  const [selectedType, setSelectedType] = useState('');
  const [description, setDescription] = useState('');
  const [upiId, setUpiId] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [event, setEvent] = useState('None');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState<number | null>(null);
  const [isSelected, setIsSelected] = useState('1');
  const [events, setEvents] = useState<Events[] | null>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '1',
        label: 'Transaction',
        value: 'transaction',
        selected: true,
        color: '#429690',
        labelStyle: {
          color: 'black',
        },
      },
      {
        id: '2',
        label: 'Monthly payment',
        value: 'monthly_payment',
        selected: false,
        color: '#429690',
        labelStyle: {
          color: 'black',
        },
      },
      {
        id: '3',
        label: 'Income',
        value: 'income',
        selected: false,
        color: '#429690',
        labelStyle: {
          color: 'black',
        },
      },
    ],
    [],
  );

  const types = [
    {label: 'Travel', value: 'travel', color: '#F4BE37'},
    {label: 'Necessity', value: 'necessity', color: '#0D2535'},
    {label: 'Food', value: 'food', color: '#5388D8'},
    {label: 'Entertainment', value: 'entertainment', color: '#FF9F40'},
    {label: 'Luxury', value: 'luxury', color: 'purple'},
    {label: 'Comfort', value: 'comfort', color: '#89CFF0'},
  ];

  // const events = [
  //   {label: 'Lonavala', value: 'lonavala'},
  //   {label: 'Pratham Visit', value: 'pratham visit'},
  //   {label: 'None', value: 'None'},
  // ];

  const fetchEvents = async () => {
    fetch('http://192.168.29.179:3000/events', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        // Assuming 'transactions' is the array containing the data
        const events: Events[] = data.map((event: any) => ({
          value: event._id,
          label: event.description,
        }));

        console.log(events);
        setEvents(events); // Set the state with the mapped transactions
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  // Update dayTime whenever the component mounts
  useEffect(() => {
    fetchEvents();
    if (transactionId) {
      console.log("Im in the useEffect loop" + transactionId);
      fetchTransaction(transactionId); // Fetch the transaction details for editing
    }
  }, [transactionId]);

  const fetchTransaction = async (id: string) => {
    try {
      const response = await fetch(
        `http://192.168.29.179:3000/transactions/${id}`,
      );
      const data: Transaction = await response.json();

      // Populate form fields with the fetched data
      setSelectedType(data.type);
      setEvent(data.eventTypeId || 'None');
      setUpiId(data.payeeName);
      setDescription(data.description || '');
      setAmount(data.amount);
      setIsSelected(
        radioButtons.find(button => button.value === data.transactionType)
          ?.id || '1',
      );
    } catch (error) {
      console.error('Error fetching transaction:', error);
    }
  };
  // const handleNext = () => {
  //   // Validate the input values before sending the request
  //   if (isSubmitting) {
  //     return; // Do nothing if already submitting
  //   }
  //   if (!selectedType || !upiId || !description || !amount || !isSelected) {
  //     Alert.alert('Error', 'Please fill all the fields before submitting.');
  //     return;
  //   }
  //   setIsSubmitting(true);
  //   // Set eventTypeId to null if no valid event is selected
  //   const eventTypeId = event === 'None' ? null : event; // Add actual eventTypeId values

  //   // Create the body of the request with the relevant variables
  //   const requestBody = {
  //     type: selectedType,
  //     eventTypeId: eventTypeId, // Use ObjectId or null
  //     payeeName: upiId,
  //     description: description,
  //     transactionType: radioButtons.find(button => button.id === isSelected)
  //       ?.value,
  //     amount:
  //       radioButtons.find(button => button.id === isSelected)?.value ===
  //         'transaction' || ''
  //         ? -1 * amount
  //         : amount,
  //   };

  //   // Perform the POST request
  //   fetch('http://192.168.29.179:3000/transactions', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(requestBody),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Success:', data);
  //       Alert.alert('Success', 'Transaction submitted successfully!');
  //       navigate('Transaction');
  //       setIsSubmitting(false);
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //       Alert.alert('Error', 'Failed to submit transaction.');
  //       setIsSubmitting(false);
  //     });
  // };
  const handleNext = () => {
    if (isSubmitting) {
      return; // Prevent double submission
    }
    if (!selectedType || !upiId || !description || !amount || !isSelected) {
      Alert.alert('Error', 'Please fill all the fields before submitting.');
      return;
    }
    setIsSubmitting(true);

    // Set eventTypeId to null if no valid event is selected
    const eventTypeId = event === 'None' ? null : event;

    // Create the body of the request
    const requestBody = {
      type: selectedType,
      eventTypeId,
      payeeName: upiId,
      description,
      transactionType: radioButtons.find(button => button.id === isSelected)
        ?.value,
      amount:
        radioButtons.find(button => button.id === isSelected)?.value ===
        'transaction'
          ? -1 * amount
          : amount,
    };

    // Determine if it's a POST or PUT request
    const url = transactionId
      ? `http://192.168.29.179:3000/transactions/${transactionId}` // PUT request URL for editing
      : 'http://192.168.29.179:3000/transactions'; // POST request URL for creating a new transaction
    const method = transactionId ? 'PUT' : 'POST';

    // Perform the request
    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        Alert.alert(
          'Success',
          `Transaction ${
            transactionId ? 'updated' : 'submitted'
          } successfully!`,
        );
        navigate('Transaction'); // Navigate to the Transaction screen after submission
        setIsSubmitting(false);
      })
      .catch(error => {
        console.error('Error:', error);
        Alert.alert(
          'Error',
          `Failed to ${transactionId ? 'update' : 'submit'} transaction.`,
        );
        setIsSubmitting(false);
      });
  };
  const handleAmountChange = (text: string) => {
    const numericValue = parseFloat(text);
    setAmount(isNaN(numericValue) ? null : numericValue);
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
            <View style={styles.formContainer}>
              <View style={{marginTop: 0}}>
                <View style={{paddingVertical: 20}}>
                  <Text style={styles.label}>Select the type</Text>
                </View>
                <Dropdown
                  data={types}
                  labelField="label"
                  valueField="value"
                  value={selectedType}
                  onChange={item => setSelectedType(item.value)}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={{
                    color:
                      types.find(type => type.value === selectedType)?.color ||
                      '#fff',
                  }}
                  style={styles.dropdown}
                  itemTextStyle={styles.itemText}
                  containerStyle={styles.dropdownContainer}
                  renderItem={item => <List {...item} />}
                />
              </View>
              <View style={{marginTop: 0}}>
                <View style={{paddingVertical: 20}}>
                  <Text style={styles.label}>Select an event</Text>
                </View>
                <Dropdown
                  data={events}
                  labelField="label"
                  valueField="value"
                  value={event}
                  onChange={item => setEvent(item.value)}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={{
                    color: 'black',
                  }}
                  style={styles.dropdown}
                  itemTextStyle={styles.itemText}
                  containerStyle={styles.dropdownContainer}
                  renderItem={item => <List {...item} />}
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={styles.label}>Enter the name of the payee</Text>
                <TextInput
                  style={[
                    styles.input,
                    {borderColor: isFocused ? '#ccc' : '#E3E3E3'},
                  ]}
                  placeholder="example@ybl"
                  placeholderTextColor={'#626262'}
                  value={upiId}
                  onChangeText={setUpiId}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                  style={[
                    styles.input,
                    {borderColor: isFocused ? '#ccc' : '#E3E3E3'},
                  ]}
                  placeholder="Eg travel, lunch ..."
                  placeholderTextColor={'#626262'}
                  value={description}
                  onChangeText={setDescription}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
              </View>
              <View
                style={{
                  marginTop: 20,
                }}>
                <RadioGroup
                  radioButtons={radioButtons}
                  onPress={setIsSelected}
                  selectedId={isSelected}
                  containerStyle={{
                    alignItems: 'flex-start',
                  }}
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={styles.label}>Amount</Text>
                <TextInput
                  style={[
                    styles.input,
                    {borderColor: isFocused ? '#ccc' : '#E3E3E3'},
                  ]}
                  keyboardType="numeric"
                  value={amount !== null ? amount.toString() : ''}
                  onChangeText={handleAmountChange}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
              </View>
              <View style={{marginVertical: 30, marginBottom: 70}}>
                <TouchableOpacity
                  // style={styles.buttonNext}
                  style={[
                    styles.buttonNext,
                    isSubmitting && styles.disabledButtonNext,
                  ]}
                  onPress={handleNext}
                  activeOpacity={0.8}
                  disabled={isSubmitting}>
                  <Text style={styles.buttonText}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
    // height: height + 50,
    marginTop: -100,
    zIndex: 100,
    padding: 20,
    marginBottom: 57,
  },
  label: {
    color: '#6D6D6D',
    fontWeight: '500',
    fontSize: 17,
  },
  dropdown: {
    padding: 10,
    borderRadius: 5,
    // marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E3E3E3',
  },
  placeholderStyle: {
    color: 'black',
  },
  itemText: {
    color: 'black',
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#F4F4F4',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 20,
    color: 'black',
  },
  button: {
    backgroundColor: '#429690',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: 200,
    alignItems: 'center',
    marginHorizontal: 'auto',
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonNext: {
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
  },
  disabledButtonNext: {
    backgroundColor: '#B0B0B0', // Change color to indicate it's disabled
  },
  orContainer: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orText: {
    color: '#6D6D6D',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '700',
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 50,
    paddingHorizontal: 30,
  },
  listColor: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  listText: {
    fontSize: 16,
  },
});

export default Scanning;
