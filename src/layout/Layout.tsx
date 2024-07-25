import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../types';
import {bg} from '../utils/images';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Path} from 'react-native-svg';

type LayoutNavigationProp = StackNavigationProp<RootStackParamsList>;

const Layout = ({children}: any) => {
  const {navigate} = useNavigation<LayoutNavigationProp>();
  const {name: currentRouteName} = useRoute();
  const statusBarColor = '#429690';
  const statusBarStyle = 'light-content';

  const width = Dimensions.get('window').width;
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={statusBarColor} barStyle={statusBarStyle} />
      <View style={{height: '100%', backgroundColor: '#fff'}}>
        {/* <View style={{height: 247, marginTop: 0}}>
          <Image source={bg} style={styles.image} resizeMode="cover" />
        </View> */}
        <View style={{height: '100%', backgroundColor: '#429690'}}>
          <ScrollView>{children}</ScrollView>
        </View>
        <View style={styles.navbarWrapper}>
          <View
            style={{
              width: width,
              height: 60,
              backgroundColor: 'rgba(245,245,245,1)',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={styles.iconWrapper}
              activeOpacity={0.7}
              onPress={() => navigate('Home')}>
              <FontAwesome6Icon
                name="house"
                color={currentRouteName === 'Home' ? '#429690' : '#808080'}
                size={20}
                style={[
                  styles.icon,
                  {
                    backgroundColor:
                      currentRouteName === 'Home'
                        ? '#ddd'
                        : 'rgba(225,225,225,0.1)',
                  },
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrapper} activeOpacity={0.7}>
              <MaterialCommunityIcons
                name="google-analytics"
                color={currentRouteName === 'Explore' ? '#429690' : '#808080'}
                size={20}
                style={[
                  styles.icon,
                  {
                    backgroundColor:
                      currentRouteName === 'Explore'
                        ? '#ddd'
                        : 'rgba(225,225,225,0.1)',
                  },
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconWrapper}
              activeOpacity={0.7}
              onPress={() => navigate('Scanning')}>
              <FontAwesome6Icon
                name="qrcode"
                color={currentRouteName === 'Scanning' ? '#429690' : '#808080'}
                size={20}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconWrapper}
              activeOpacity={0.7}
              onPress={() => navigate('Transaction')}>
              <FontAwesome6Icon
                name="wallet"
                color={
                  currentRouteName === 'Transaction' ? '#429690' : '#808080'
                }
                size={20}
                style={[
                  styles.icon,
                  {
                    backgroundColor:
                      currentRouteName === 'Transaction'
                        ? '#ddd'
                        : 'rgba(225,225,225,0.1)',
                  },
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrapper} activeOpacity={0.7}>
              <FontAwesome6Icon
                name="user"
                color={currentRouteName === 'User' ? '#429690' : '#808080'}
                size={20}
                style={[
                  styles.icon,
                  {
                    backgroundColor:
                      currentRouteName === 'User'
                        ? '#ddd'
                        : 'rgba(225,225,225,0.1)',
                  },
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  navbarWrapper: {
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    borderRadius: 0,
    backgroundColor: 'rgba(225,225,225,0.1)',
    zIndex: 100,
  },
  iconWrapper: {
    width: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 50,
  },
});

export default Layout;
