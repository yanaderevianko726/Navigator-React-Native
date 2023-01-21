import React from 'react';
import {StyleSheet, Image, SafeAreaView} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import DefaultPreference from 'react-native-default-preference';

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
            backgroundColor: '#fff',
            image: <Image source={require('../Assests/onboard1.png')} />,
            title: 'Slide 1',
            subtitle: 'You can create an account from this app.',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../Assests/onboard1.png')} />,
            title: 'Slide 2',
            subtitle: 'You can get service for wallet from this app.',
          },
          {
            backgroundColor: '#fff',
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
    backgroundColor: 'white',
  },
});
