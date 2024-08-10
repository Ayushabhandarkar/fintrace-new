import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import Layout from '../../layout/Layout';
import {bg} from '../../utils/images';

const {height} = Dimensions.get('screen');

function AddEvent() {
  const [event, setEvent] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const handleSubmit = () => {
    if (event.trim() === '') {
      Alert.alert('Error', 'Event name cannot be empty');
      return;
    }
    // Handle the event submission logic here
    console.log('Event submitted:', event);
    // Clear the input field after submission
    setEvent('');
  };

  return (
    <Layout>
      <View style={styles.imageContainer}>
        <Image source={bg} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add New Event</Text>
      </View>
      <View style={styles.formContainer}>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-start',
            paddingHorizontal: 20,
            marginTop: 40,
          }}>
          <Text
            style={{
              color: 'black',
              textAlign: 'left',
            }}>
            Event Description
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            paddingHorizontal: 20,
          }}>
          <TextInput
            style={[
              styles.input,
              {borderColor: isFocused ? '#ccc' : '#E3E3E3'},
            ]}
            placeholder="example@ybl"
            placeholderTextColor={'#626262'}
            value={event}
            onChangeText={setEvent}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        <View style={{flex: 1}} />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

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
    flex: 1,
    padding: 20,
    alignItems: 'center',
    // justifyContent: 'space-between',
    height: height - 260,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 20,
    color: 'black',
  },
  submitButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#599D8D',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddEvent;
