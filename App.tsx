import React, {useEffect} from 'react';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from "react-native-splash-screen";
import LoginScreen from './App/Screens/LoginScreen';
import SignUpScreen from './App/Screens/SignUpScreen';
import OnboardingScreen from './App/Screens/OnBoarding';
const Stack = createNativeStackNavigator();

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: "transparent",
    }
  }
  useEffect(() => {
    SplashScreen.hide(); 
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
