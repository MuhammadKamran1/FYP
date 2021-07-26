import React from 'react';
// import {StyleSheet} from 'react-native';

import Login from '../Login';
import Signup from '../Signup';
import {createStackNavigator} from '@react-navigation/stack';
import ForgotPassword from '../ForgotPassword';

import Splash from '../SplashScreen';

const AuthStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>

        <Stack.Screen
          name="SplashScreen"
          component={Splash}
          options={{headerShown: false}}
        />
      
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignupScreen"
        component={Signup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};


export default AuthStack;

