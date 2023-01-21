import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import TapHome from './TapHome';
import TapActivity from './TapActivity';
import TapMore from './TapMore';
import TapConnections from './TapConnections';
import TapSettings from './TapSettings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="TapHome"
      screenOptions={{headerShown: false}} >
      <Stack.Screen name="TapHome"
        component={TapHome} />
      <Stack.Screen name="TapConnections"
        component={TapConnections} />
    </Stack.Navigator>
  );
}

function ActivityStack() {
  return (
    <Stack.Navigator initialRouteName="TapActivity"
      screenOptions={{headerShown: false}} >
      <Stack.Screen name="TapActivity"
        component={TapActivity} />
    </Stack.Navigator>
  );
}

function MoreStack() {
  return (
    <Stack.Navigator initialRouteName="TapMore"
      screenOptions={{headerShown: false}} >
      <Stack.Screen name="TapMore"
        component={TapMore} />
      <Stack.Screen name="TapConnections"
        component={TapConnections} />
    </Stack.Navigator>
  );
}

function ConnectionsStack() {
  return (
    <Stack.Navigator initialRouteName="TapConnections"
      screenOptions={{headerShown: false}} >
      <Stack.Screen name="TapConnections"
        component={TapConnections} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator initialRouteName="TapSettings"
      screenOptions={{headerShown: false}} >
      <Stack.Screen name="TapSettings"
        component={TapSettings} />
    </Stack.Navigator>
  );
}


const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Tab.Navigator initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#4a98eb' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            title: 'Home',
            headerTitleAlign: 'center',
            tabBarIcon: (tabInfo) => {
              return (
                <View style={{
                  width: 32,
                  height: 32,
                  marginTop: 5,
                  alignItems: 'center'
                }}>
                  <Image
                    style={{
                      width: tabInfo.focused ? 30 : 26,
                      height: tabInfo.focused ? 30 : 26,
                    }}
                    source={require('../Assests/ic_home.png')}
                  />
                </View>                
              );
            },
          }}  />
        <Tab.Screen name="ActivityStack"
          component={ActivityStack}
          options={{
            tabBarLabel: 'Activity',
            title: 'Activity',
            headerTitleAlign: 'center',
            tabBarIcon: (tabInfo) => {
              return (
                <View style={{
                  width: 32,
                  height: 32,
                  marginTop: 5,
                  alignItems: 'center'
                }}>
                  <Image
                    style={{
                      width: tabInfo.focused ? 30 : 26,
                      height: tabInfo.focused ? 30 : 26,
                    }}
                    source={require('../Assests/ic_activity.png')}
                  />
                </View> 
              );
            },
          }} />
        <Tab.Screen name="ConnectionsStack"
          component={ConnectionsStack}
          options={{
            tabBarLabel: 'Connections',
            title: 'Connections',
            headerTitleAlign: 'center',
            tabBarIcon: (tabInfo) => {
              return (
                <View style={{
                  width: 32,
                  height: 32,
                  marginTop: 5,
                  alignItems: 'center'
                }}>
                  <Image
                    style={{
                      width: tabInfo.focused ? 30 : 26,
                      height: tabInfo.focused ? 30 : 26,
                    }}
                    source={require('../Assests/ic_connections.png')}
                  />
                </View> 
              );
            },
          }} />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            title: 'Setting',
            headerTitleAlign: 'center',
            tabBarIcon: (tabInfo) => {
              return (
                <View style={{
                  width: 32,
                  height: 32,
                  marginTop: 5,
                  alignItems: 'center'
                }}>
                  <Image
                    style={{
                      width: tabInfo.focused ? 30 : 26,
                      height: tabInfo.focused ? 30 : 26,
                    }}
                    source={require('../Assests/ic_settings.png')}
                  />
                </View> 
              );
            },
          }} />
        <Tab.Screen name="MoreStack"
          component={MoreStack}
          options={{
            tabBarLabel: 'More',
            title: 'More',
            headerTitleAlign: 'center',
            tabBarIcon: (tabInfo) => {
              return (
                <View style={{
                  width: 32,
                  height: 32,
                  marginTop: 5,
                  alignItems: 'center'
                }}>
                  <Image
                    style={{
                      width: tabInfo.focused ? 26 : 24,
                      height: tabInfo.focused ? 26 : 24,
                    }}
                    source={require('../Assests/ic_more.png')}
                  />
                </View> 
              );
            },
          }} />
      </Tab.Navigator>
    </View>    
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconstyle: {
    width: 28,
    height: 28,
  },
});
