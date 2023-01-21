import React from 'react';
import {StyleSheet, Image, SafeAreaView, Appearance} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import DefaultPreference from 'react-native-default-preference';

const colorScheme = Appearance.getColorScheme();

const OnboardingScreen = ({navigation}: any) => {

  const handleSkip = () => {  
    DefaultPreference.get('app-rn-email').then((email) => {
      if(email == '' || email == null){
        navigation.replace('LoginScreen')
      }else{
        navigation.replace('HomeScreen')
      }
    }); 
  };

  const handleDone = () => {
    DefaultPreference.set('app-rn-seen-onboarding', 'seen').then(() => {
      DefaultPreference.get('app-rn-email').then((email) => {
        if(email == '' || email == null){
          navigation.replace('LoginScreen')
        }else{
          navigation.replace('HomeScreen')
        }
      }); 
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Onboarding
        onSkip={handleSkip}
        onDone={handleDone}
        pages={[
          {
            backgroundColor: colorScheme === 'dark' ? '#2c2c2d' : 'white',
            image: <Image source={require('../Assests/onboard1.png')} />,
            title: 'Slide 1',
            subtitle: 'You can create an account from this app.',
          },
          {
            backgroundColor: colorScheme === 'dark' ? '#2c2c2d' : 'white',
            image: <Image source={require('../Assests/onboard1.png')} />,
            title: 'Slide 2',
            subtitle: 'You can get service for wallet from this app.',
          },
          {
            backgroundColor: colorScheme === 'dark' ? '#2c2c2d' : 'white',
            image: <Image source={require('../Assests/onboard1.png')} />,
            title: 'Slide 3',
            subtitle: 'You can feel best app experience from this app.',
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorScheme === 'dark' ? '#2c2c2d' : 'white',
  },
});
