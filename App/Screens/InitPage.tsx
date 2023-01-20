import React, {useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import Preference from 'react-native-preference';

const InitPage = ({navigation}: any) => {
  const prefSeenOnboard = Preference.get('app-rn-seen-onboarding') ?? '';
  const prefEmail = Preference.get('app-rn-email') ?? '';

  useEffect(() => {
    if(prefSeenOnboard == ''){
      navigation.navigate('OnboardingScreen')
    }else{
      if(prefEmail == ''){
        navigation.navigate('LoginScreen')
      }else{
        navigation.navigate('HomeScreen')
      }
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerview}>
        <Image
          style={styles.stretch}
          source={require('../Assests/SplashIcon.png')}
        />
      </View>
    </SafeAreaView>
  );
};

export default InitPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: 160,
    height: 160,
    resizeMode: 'stretch',
  },
});
