import {StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity, Appearance} from 'react-native';
import React from 'react';

const colorScheme = Appearance.getColorScheme();

const TapHome = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerview}>
        <View style={styles.containerview1}>
          <Image
            style={styles.stretch}
            source={require('../Assests/SplashIcon.png')}
          />     
          <View style={{height: 36}} />     
          <TouchableOpacity style={styles.button}
            onPress={
              () => navigation.navigate('TapConnections')
            }>
            <Text>Open Connections Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate(
                'SettingsStack', { screen: 'TapSettings' }
              )}>
            <Text>Go to Settngs Tab</Text>
          </TouchableOpacity>
          <View style={{height: 24}} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default TapHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorScheme === 'dark' ? '#2c2c2d' : 'white',
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
    width: 120,
    height: 120,
    resizeMode: 'stretch',
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
