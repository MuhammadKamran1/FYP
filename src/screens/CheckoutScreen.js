import React,{useState} from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  Text,
  StyleSheet  
} from 'react-native';
//import {useState} from 'react/cjs/react.development';
import Logo from '../screens/Logo';
//import EntypoIcons from 'react-native-vector-icons/Entypo';
//import login from '../screens/Login';
//import {AuthContext} from '../screens/navigation/AuthProvider';
import database from '@react-native-firebase/database';
//import uuid from 'react-native-uuid';
import {Picker} from '@react-native-picker/picker';
// import OrderPlaced from '../screens/OrderPlaced';
//import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';





const CheckoutScreen = ({navigation}) => {
  
  const [selectedValue, setSelectedValue] = useState("Cash on Delivery");

  const [address,setAddress] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [instructions, setInstructon] = useState('');
  

  // const [addressError, setAddressError] = useState(false);
  // const [mobilenumberError, setMobileNumberError] = useState(false);
  // const[validated, setValidated]=useState(false);
  // const[validated1, setValidated1]=useState(false);

  
  const HandleCheckout = () => {
   if (address.length == 0 || mobilenumber.length == 0 ) {
      alert('Invlaid Address or Mobile Number')
    }
    else{

      saveUserDb()
      navigation.navigate('OrderPlaced')
    }
    
  };

  // const LocalOrder = () => {
  //   HandlSignup()
   
      
  //   }
   
  

  const saveUserDb= async()=>{
    let mobile  = await AsyncStorage.getItem('Mobile')
    database()
    .ref(`/CMSO/Users/${mobile}/Cart/Orders`)
    .set({
    Address: address,
    CellNumber: mobilenumber,
    Instructions: instructions
  })
    .then(() => console.log('Data set.'))
    //.then(()=> Alert.alert('Order Placed'))
  }



  return (
    <View style={styles.cointainer1}>
     
     <Logo/>
      <Text style={styles.header}> Checkout </Text>

      <View style={styles.cointainer}>
        
        <View><Text style={{fontSize:20, color:'white'}}>Payment Method</Text></View>
        <View style={styles.container2}>
         <Picker
        selectedValue={selectedValue}
        style={{ height: 40, width: 250 , alignItems:'center', marginBottom:5}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Cash On Delivery" value="Cash On Delivery" alignItems='center' justifyContent='center' />
        
      </Picker>
    </View>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your Address"
          keyboardType='ascii-capable'
          placeholderTextColor="black"
          selectionColor="red"
          value={address}
          onChangeText={setAddress}
        />

        {/* {addressError && alert('Invalid Address ')} */}

        <TextInput
          style={styles.inputBox}
          placeholder="Mobile Number"
          keyboardType="numeric"
          placeholderTextColor="black"
          selectionColor="red"
          value={mobilenumber}
          onChangeText={setMobileNumber}
        />
        {/* {mobilenumberError && (
          alert('Invalid Mobile Number ')
        )} */}
        <TextInput
          style={styles.inputBox}
          placeholder="Any Instructions (optional)"
          keyboardType='email-address'
          placeholderTextColor="black"
          selectionColor="red"
          value={instructions}
          onChangeText={setInstructon}
        />

        
        <TouchableOpacity
          onPress={HandleCheckout}
          style={styles.button}>
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  cointainer1: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
   // paddingVertical: 11,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
    marginBottom: 6,
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  cointainer: {
    flexGrow: 1,
    justifyContent: 'center',
    //alignItems:'center',
    backgroundColor:'#455a64',
    paddingBottom:60,
    marginTop:16
  },
  inputBox: {
    width: 300,
    height:50,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: 'green',
    marginVertical: 8,
  },
  header: {
    fontSize: 28,
    color: 'black',
    backgroundColor:'white',
    borderRadius:10,
    marginTop:5
  },
  button:{
    backgroundColor: '#1c313a',
    borderRadius: 25,
    width: 300,
    marginVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    paddingVertical: 12,
  },
  container2: {
   backgroundColor:'white',
    paddingTop: 20,
    alignItems: "center",
    marginBottom:12
  },

  errorText: {
    color: 'yellow',
    textAlign: 'left',
    fontSize: 18,
  },
  btnEye: {
    //position: 'absolute',
    left: 260,
    top: -50,
  },
});
