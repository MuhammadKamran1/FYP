import React from 'react';
import {View,TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
//import Logo from '../screens/Logo';

const SearchBar = () => {
  return (
  
      <View
        style={{
          height: 58,
          backgroundColor: 'black',
          //justifyContent: 'center',
          paddingHorizontal: 5,
          flexDirection:'row',
          paddingTop:8
        }}>
        <Image source={require('../assets/logo.png')}
        style={{height:50,width:60,}}
        />
        <View
          style={{
            height: 40,
            backgroundColor: 'white',
            flexDirection: 'row',
            //padding:2,
            alignItems: 'center',
            //borderRadius:15,
            paddingHorizontal:5,
            borderColor:'black',
        
          }}>
          <Icon name="search" size={20} />
          <TextInput
            placeholder="Search"
            style={{fontSize: 18, paddingVertical:8,width:260,color:'black'}}
          />
        </View>
      </View>
  
  );
};

export default SearchBar;