import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { BottomSheet } from 'react-native-btr';
import Icon from 'react-native-vector-icons/FontAwesome';

const TapMore = ({navigation}: any) => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    toggleBottomNavigationView(); 
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 20,
            textAlign: 'center'
          }}>
          Bottom Sheet in React Native
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={toggleBottomNavigationView}>
          <Text>Dark/Light</Text>
        </TouchableOpacity>
        <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}>
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  padding: 20,
                  fontSize: 20
                }}>
                Share Using
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Icon name="rocket"
                  size={30} 
                  color="#900" 
                  onPress={() => {
                    toggleBottomNavigationView();
                  }}
                />
                <Icon name="rocket"
                  size={30} 
                  color="#900" 
                  onPress={() => {
                    toggleBottomNavigationView();
                  }}
                />
                <Icon name="rocket"
                  size={30} 
                  color="#900" 
                  onPress={() => {
                    toggleBottomNavigationView();
                  }}
                />
                <Icon name="rocket"
                  size={30} 
                  color="#900" 
                  onPress={() => {
                    toggleBottomNavigationView();
                  }}
                />
                <Icon name="rocket"
                  size={30} 
                  color="#900" 
                  onPress={() => {
                    toggleBottomNavigationView();
                  }}
                />
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Icon name="rocket"
                  size={30} 
                  color="#900" 
                  onPress={() => {
                    toggleBottomNavigationView();
                  }}
                />
                <Icon name="rocket"
                  size={30} 
                  color="#900" 
                  onPress={() => {
                    toggleBottomNavigationView();
                  }}
                />
                <Icon name="rocket"
                  size={30} 
                  color="#900" 
                  onPress={() => {
                    toggleBottomNavigationView();
                  }}
                />
                <Icon name="rocket"
                  size={30} 
                  color="#900" 
                  onPress={() => {
                    toggleBottomNavigationView();
                  }}
                />
                <Icon name="rocket"
                  size={30} 
                  color="#900" 
                  onPress={() => {
                    toggleBottomNavigationView();
                  }}
                />
              </View>
            </View>
          </View>
        </BottomSheet>
      </View>
    </SafeAreaView>    
  );
}

export default TapMore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
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
