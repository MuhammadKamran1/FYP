import React, {Component} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
//import {Colors} from 'react-native/Libraries/NewAppScreen';

class Logo extends Component {
  render() {
    return (
      <View row style={styles.cointainer}>
        <Image
          style={{ width:100,height:50,resizeMode:'stretch'}}
          source={require('../assets/logo.png')}
        />
        {/* <Text style={styles.logoText}>Build With Us</Text> */}
      </View>
    );
  }
}

export default Logo;

const styles = StyleSheet.create({
  cointainer: {
    //flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center',
    flexDirection:'row',
    backgroundColor:'white'
  },
  logoText: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.7)',
    paddingLeft:20,
    //paddingRight:30,
    //justifyContent:'center'
  },
});
