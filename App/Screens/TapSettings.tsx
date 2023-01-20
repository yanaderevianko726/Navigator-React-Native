import {StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';

const TapSettings = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerview}>
        <View style={styles.containerview1}>
          <Image
            style={styles.stretch}
            source={require('../Assests/SplashIcon.png')}
          /> 
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              marginBottom: 16
            }}>
            You are on Settings Screen
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate(
                'HomeStack', { screen: 'TapHome' }
              )}>
            <Text>Go to Home Tab</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 24}} />
      </View>
    </SafeAreaView>
  );
}

export default TapSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerview: {
    flex: 1,
    padding: 16,
  },
  containerview1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: 160,
    height: 160,
    resizeMode: 'stretch',
  },
  textstyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16
  },
  textstyle16: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey'
  },
  button: {
    width: 300,
    height: 40,
    padding: 10,  
    marginLeft: 35,
    marginRight: 35,
    marginTop: 8, 
    marginBottom: 8,
    alignItems: 'center',
    backgroundColor: '#87C1FF',
    color: '#fff', 
    borderWidth: 0,
    borderColor: '#87C1FF',
    borderRadius: 30,
  },
});
