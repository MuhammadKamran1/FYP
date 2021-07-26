import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';
//import {black} from 'react-native-paper/lib/typescript/styles/colors';
import Logo from '../Logo';
import database from '@react-native-firebase/database';
import Ionicon from 'react-native-vector-icons/Ionicons';
import  Fontisto from 'react-native-vector-icons/Fontisto';
import { Linking, Platform } from 'react-native';


const SingleService = ({route}) => {

  const [data, setData] = useState({});

  useEffect(async () => {
    console.log('Here i am ');
    console.log('This is the value of the route ', route?.params?.subCategory);
    database()
      .ref(`CMSO/Service Categories/${route?.params?.subCategory}`)
      .on('value', snapshot => {
        setData(snapshot.val());
        console.log('This is my snapshot value ', snapshot.val());
      });
  }, []);
  

 

 const makeCall = phone => {
  console.log('callNumber ----> ', data.Call);
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${data.Call}`;
  }
  else  {
    phoneNumber = `tel:${data.Call}`;
  }
  Linking.canOpenURL(phoneNumber)
  .then(supported => {
    if (!supported) {
      Alert.alert('Phone number is not available');
    } else {
      return Linking.openURL(phoneNumber);
    }
  })
  .catch(err => console.log(err));
};


  return (
    console.log('Hi the value of email is' , data.Email),
    <View style={{flex: 1}}>
      <View style={{height: 50, backgroundColor: 'orange'}}>
        <Logo />
      </View>
      <View style={{backgroundColor: 'orange', flex: 1}}>
        <ScrollView>
          <View>
            <View><Text style={{textAlign:'center', fontSize:20,fontWeight:'bold'}}>{data.Name}</Text></View>
            <View style={styles.box}>
            <Image style={styles.image} source={{uri: data.Image}} />
            </View>

            <View style={styles.container}>
              <Text style={styles.text}>Description</Text>
              <Text style={styles.description}>
                {data.Description}
              </Text>
            </View>
            <View style={styles.contact}>
                <Text style={{fontWeight:'bold', fontSize:18, paddingHorizontal:12,marginBottom:15, color:'white'}}>
                 For Services/Hiring 
                 </Text>

                 <TouchableOpacity
                   style={{backgroundColor:'orange',padding:12,borderRadius:25,marginHorizontal:50,paddingTop:8, flexDirection:'row',paddingLeft:70}}
                   onPress={makeCall}> 
                   <Ionicon name='call' size={20} />
                 <Text
                    style={{textAlign:'center',fontWeight:'bold', marginHorizontal:30, }}>
                        CALL
                 </Text>
                
                 </TouchableOpacity>
                 <View style={{ flexDirection:'row', justifyContent:'space-around' ,paddingTop:11, paddingHorizontal:5, marginHorizontal:5}}>
                 <View style={{flexDirection:'row',paddingTop:4}}>
                 <Text style={{fontWeight:'bold', fontSize:16,paddingTop:3, color:'white'}}>Email    </Text>
                 <Fontisto name='email' size={25} color='white' paddingTop={3} />
                 {/* <Text style={{paddingHorizontal:8 , color:'white'}}>{data.Email}</Text> */}
                 </View>
                 <Button  
                
                 onPress={() => Linking.openURL('mailto:cmsobuilders@gmail.com?subject=For Services/Hiring&body=') }
                 title="Click to send Email" />
                 </View>
                </View>
               

          </View>
        </ScrollView>
      </View>
      
    </View>
  );
};

export default SingleService;

const styles = StyleSheet.create({
  image: {
    width: 330,
    height: 175,
    //borderColor: 'black',
    borderWidth: 3,
    resizeMode:'stretch',
    borderRadius:6

  },
  box: {
    alignItems: 'center',
    paddingTop: 8,
    width: 360,
    height: 210,
    backgroundColor: '#344955',
  },

  logo: {
    width: '10%',
    height: '10%',
  },
  text: {
    fontWeight: '700',
    fontSize: 18,
    color: '#483d8b',
    paddingHorizontal: 10,
    height: 30,
  },
  description: {
    paddingHorizontal: 15,
    fontSize: 15,
    //height: 50,
  },
  container: {
    paddingTop: 5,
    backgroundColor: 'white',
    borderColor: 'black',
    height:140,

    
  },
  
  contact: {
    //paddingTop: ,
    backgroundColor: '#344955',
    height: 200,
    paddingTop: 10,
  },
  button: {
    backgroundColor: '#1c313a',
    borderRadius: 25,
    width: 300,
    marginVertical: 17,
  }
   
});
