import React, {useState, useContext} from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Logo from '../screens/Logo';
//import EntypoIcons from 'react-native-vector-icons/Entypo';
import {AuthContext} from '../screens/navigation/AuthProvider';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [emailError, setEmailError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  // const [show, setShow] = useState(false);
  
  // const [visible, setVisible] = useState(true);

  const {forgotPassword} = useContext(AuthContext);

  // const handleLogin = () => {
  //   if (email.length < 4 || email.length == 0) {
  //     setEmailError(true);
  //   }

  //   if (password.length < 4 || password.length == 0) {
  //     setPasswordError(true);
  //   }
  // };


  return (
    <View style={styles.cointainer}>
      <ImageBackground
        source={require('../assets/brickwall.jpg')}
        style={{width: 360, height: 650, flex: 1, opacity: 1}}
      />
      <Logo />
      <Text style={{fontSize:20,color:'white',fontStyle:'italic'}}>Build With Us</Text>

     
      <View style={styles.cointainer1}>
      <Text style={{color:'white', fontSize:24,paddingBottom:20}}>Forgot Password?</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter email to reset Password"
          placeholderTextColor="black"
          selectionColor="red"
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
        />
       
        <TouchableOpacity
          onPress={()=> forgotPassword(email)}
          style={styles.button}>
          <Text style={styles.buttonText}>Send Email</Text>
        </TouchableOpacity>
      </View>
      </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  cointainer: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:130
  },
 
  cointainer1: {
    flexGrow: 1,
    justifyContent: 'center',
    //alignItems: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: 'purple',
    marginVertical: 10,
  },
  button: {
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
  
});
