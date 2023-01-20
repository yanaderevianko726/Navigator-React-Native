import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';

const TapMore = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerview}>
        <View style={styles.containerview1}>
        <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              marginBottom: 16
            }}>
            You are on More Screen
          </Text>
          <TouchableOpacity style={styles.button}
            onPress={
              () => navigation.navigate('TapConnections')
            }>
            <Text>Open Connections Screen</Text>
          </TouchableOpacity>
          <View style={{height: 24}} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default TapMore;

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