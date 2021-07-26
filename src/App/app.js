import React, {Component} from 'react';
// import {StyleSheet, AppRegistry, View} from 'react-native';

import Routes from '../screens/navigation/Routes';
import AuthProvider from '../screens/navigation/AuthProvider';

const Provider = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Provider;