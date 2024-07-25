// import React, {useEffect, useState} from 'react';
// import {StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import {
//   Camera,
//   useCameraDevices,
//   CameraDevice,
// } from 'react-native-vision-camera';
// import {useNavigation} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';
// import {RootStackParamsList} from '../../types';

// type ScanningNavigationProp = StackNavigationProp<RootStackParamsList>;

// const QRScanner: React.FC = () => {
//   const navigation = useNavigation<ScanningNavigationProp>();
//   const devices = useCameraDevices();
//   const [backCamera, setBackCamera] = useState<CameraDevice | null>(null);

//   useEffect(() => {
//     if (devices.back) {
//       setBackCamera(devices.back);
//     }
//   }, [devices]);

//   const handleScan = (e: {data: string}) => {
//     const url = e.data;

//     const params = new URLSearchParams(url.replace('upi://pay?', ''));
//     const upiID = params.get('pa') || '';
//     const name = params.get('pn') || '';
//     const amount = params.get('am') || '';

//     if (amount) {
//       // Navigate to payment app
//       Linking.openURL(url);
//     } else {
//       // Navigate to AmountPage with UPI ID and name
//       navigation.navigate('AmountPage', {upiID, name});
//     }
//   };

//   return backCamera ? (
//     <QRCodeScanner
//       onRead={handleScan}
//       cameraProps={{
//         device: backCamera,
//         isActive: true,
//       }}
//       topContent={<Text style={styles.centerText}>Scan the QR code</Text>}
//       bottomContent={
//         <TouchableOpacity style={styles.buttonTouchable}>
//           <Text style={styles.buttonText}>OK. Got it!</Text>
//         </TouchableOpacity>
//       }
//     />
//   ) : (
//     <Text>Loading Camera...</Text>
//   );
// };

// const styles = StyleSheet.create({
//   centerText: {
//     flex: 1,
//     fontSize: 18,
//     padding: 32,
//     color: '#777',
//   },
//   buttonTouchable: {
//     padding: 16,
//   },
//   buttonText: {
//     fontSize: 21,
//     color: 'rgb(0,122,255)',
//   },
// });

// export default QRScanner;
