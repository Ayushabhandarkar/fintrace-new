import React, {useEffect, useState} from 'react';
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
import {RootStackParamsList} from '../../types';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import Layout from '../../layout/Layout';
import {bg} from '../../utils/images';
import {Dropdown} from 'react-native-element-dropdown';
import {
  launchImageLibrary,
  ImageLibraryOptions,
  Asset,
} from 'react-native-image-picker';
// import TextRecognition from 'react-native-text-recognition';
import RNFS from 'react-native-fs';

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
const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample);

const Scanning: React.FC = () => {
  const {navigate} = useNavigation<ScanningNavigationProp>();
  const route = useRoute<ScanningRouteProp>();
  const [selectedType, setSelectedType] = useState('');
  const [description, setDescription] = useState('');
  const [upiId, setUpiId] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [event, setEvent] = useState('');
  const [name, setName] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [image, setImage] = useState(null);
  // const [text, setText]
  const types = [
    {label: 'Travel', value: 'travel', color: '#F4BE37'},
    {label: 'Necessity', value: 'necessity', color: '#0D2535'},
    {label: 'Food', value: 'food', color: '#5388D8'},
    {label: 'Entertainment', value: 'entertainment', color: '#FF9F40'},
  ];

  useEffect(() => {
    const subscription = eventEmitter.addListener('ImageShared', event => {
      const {imageUri} = event;
      // Handle the received image URI
      console.log('Received image URI: ', imageUri);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const events = [
    {label: 'Lonavala', value: 'lonavala'},
    {label: 'Pratham Visit', value: 'pratham visit'},
    {label: 'None', value: 'None'},
  ];
  // useEffect(() => {
  //   if (route.params?.imageUri) {
  //     setImageUri(route.params.imageUri);
  //   }
  // }, [route.params?.imageUri]);

  // useEffect(() => {
  //   const options: ImageLibraryOptions = {
  //     mediaType: 'photo', // valid values are 'photo', 'video', or 'mixed'
  //     quality: 1,
  //   };
  //   12;

  //   launchImageLibrary(options, response => {
  //     console.log(response);
  //     setImage(response);
  //   });
  // }, []);
  // useEffect(() => {
  //   if(image){
  //     console.log(image)
  //   }
  //   console.log(imageUri);
  // }, [image]);

  const extractDetails = (text: any) => {
    const amountPattern = /₹\s?\d+(\.\d{2})?/;
    const payeePattern = /Paid to\s(.*)/;
    const descriptionPattern = /Description:\s?(.*)/;

    const amount = text.match(amountPattern)[0];
    const payee = text.match(payeePattern)[1];
    const description = text.match(descriptionPattern)[1];

    return {amount, payee, description};
  };
  const handleUploadImage = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary({mediaType: 'photo'}, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0];
        setImageUri(selectedImage.uri);
        console.log('Image selected: ', selectedImage.uri);
        const base64Image = await RNFS.readFile(selectedImage.uri, 'base64');
        const fileExtension = selectedImage.uri.split('.').pop();
        const contentType = `image/${
          fileExtension === 'jpg' ? 'jpeg' : fileExtension
        }`;
        const base64ImageWithContentType = `data:${contentType};base64,${base64Image}`;
        getTextByUrl(base64ImageWithContentType);
        getTextByUrl(base64Image);
      }
    });
  };

  const getTextByUrl = (base64: any) => {
    // console.log(base64);
    const url = 'https://api.ocr.space/parse/image';
    const subscriptionKey = 'K84675454588957';
    const data = new FormData();
    data.append('apikey', subscriptionKey);
    data.append('language', 'eng');
    data.append('isOverlayRequired', 'true');
    data.append('base64Image', base64);
    data.append('OCREngine', '2');
    console.log(url, ' the url is');
    console.log('data : ', data);
    fetch(url, {
      method: 'POST',
      headers: {
        'Cache-Control': 'no-cache',
      },
      body: data,
    })
      .then(response => response.json())
      .then(responseJson => {
        // console.log('OCR Response: ', responseJson);
        // Alert.alert('OCR Response', JSON.stringify(responseJson));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleNext = () => {
    // console.log(upiId, ' upi id and name : ', name);
    // navigate('AmountPage', {
    //   upiID: upiId,
    //   name: name,
    // });
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
              {/* <View
                style={{
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleUploadImage}>
                  <Text style={styles.buttonText}>Upload Image</Text>
                </TouchableOpacity>
              </View>
              {imageUri && (
                <View style={{alignItems: 'center', marginTop: 20}}>
                  <Image
                    source={{uri: imageUri}}
                    style={{width: 100, height: 100, borderRadius: 10}}
                  />
                </View>
              )} */}
              <View style={{marginVertical: 30, marginBottom: 70}}>
                <TouchableOpacity
                  style={styles.buttonNext}
                  onPress={handleNext}>
                  <Text style={styles.buttonText}>Next</Text>
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
    marginBottom: 20,
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
