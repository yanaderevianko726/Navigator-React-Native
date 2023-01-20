import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TapHome from './TapHome';
import TapActivity from './TapActivity';
import TapMid from './TapMid';
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

function MidStack() {
  return (
    <Stack.Navigator initialRouteName="TapMid"
      screenOptions={{headerShown: false}} >
      <Stack.Screen name="TapMid"
        component={TapMid} />
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
          headerStyle: { backgroundColor: '#87C1FF' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'home-circle';
            if (route.name === 'HomeStack') {
              iconName = focused
                ? 'home-circle'
                : 'home-circle-outline';
            } else if (route.name === 'ActivityStack') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            } else if (route.name === 'MidStack') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            } else if (route.name === 'ConnectionsStack') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            } else if (route.name === 'SettingsStack') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            }
            return (
              <MaterialCommunityIcons name={iconName}
                size={size} color={color} />
            );
          }
        })}>
        <Tab.Screen name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            title: 'Home',
          }}  />
        <Tab.Screen name="ActivityStack"
          component={ActivityStack}
          options={{
            tabBarLabel: 'Activity',
            title: 'Activity'
          }} />
        <Tab.Screen name="MidStack"
          component={MidStack}
          options={{
            tabBarLabel: 'Middle',
            title: 'Middle'
          }} />
        <Tab.Screen name="ConnectionsStack"
          component={ConnectionsStack}
          options={{
            tabBarLabel: 'Connections',
            title: 'Connections'
          }} />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            title: 'Setting'
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
});
