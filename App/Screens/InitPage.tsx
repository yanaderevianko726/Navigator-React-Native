import React, {useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, Image, LogBox} from 'react-native';
import DefaultPreference from 'react-native-default-preference';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const InitPage = ({navigation}: any) => {

  useEffect(() => {
    DefaultPreference.get('app-rn-seen-onboarding').then((value) => {
      if(value == '' || value == null){
        navigation.replace('OnboardingScreen')
      }else{
        DefaultPreference.get('app-rn-email').then((email) => {
          if(email == '' || email == null){
            navigation.replace('LoginScreen')
          }else{
            navigation.replace('HomeScreen')
          }
        });
      }
    }); 
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
