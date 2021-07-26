import React,{useContext, useEffect,useState} from 'react';
import {
  TouchableOpacity,
  Alert,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  Share
} from 'react-native';
import {
  Avatar,
  Title,
  Text,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Feather';
import FeatherAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';

import {AuthContext} from '../screens/navigation/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import { Linking, Platform } from 'react-native';
// import { SocialIcon } from 'react-native-elements'
// import AboutUs from '../screens/AboutUs';



const ProfileScreen = ({navigation}) => {

  const [data, setData] = useState('');
  
  const {logout} = useContext(AuthContext);
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData= async () =>{
    const Mobile = await AsyncStorage.getItem('Mobile')
    database()
      .ref(`CMSO/Users/${Mobile}`)
      .on('value', snapshot => {
        setData(snapshot.val());
        console.log('This is my snapshot value', snapshot.val());
      }); 
  }

  // const myCustomShare= async()=>{
  //   const shareOptions ={
  //     message:'This is the Text message for my CMSO App',
  //   }
  //   try{
  //     const shareResponse = await Share.Open(shareOptions);
  //     console.log(JSON.stringify(shareResponse));
  //   } catch(e){
  //     console.log(e)
  //   }
  // };


   const makeCall = phone => {
  console.log('callNumber ----> ', data.Call);
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${data.Call}`;
  }
  else  {
    phoneNumber = `tel:03002566357`;
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
  
    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            'An online marketplace for construction material, relevant machinery and labour which will facilitate the service providers and end user in the most cost effective and efficient manner. The application would assist the users by providing diverse products inventory, safe online payment system, delivery facility, experts advice and skilled labour using Artificial Intelligence tools and techniques.',
            
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) { 
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };

const fb=()=>{
    Linking
  .openURL('https://web.facebook.com/?_rdc=1&_rdr')
  .catch(err => console.error('Error', err));
}

const instagram=()=>{
  Linking
.openURL('https://www.instagram.com/')
.catch(err => console.error('Error', err));
}

const twitter=()=>{
  Linking
.openURL('https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor')
.catch(err => console.error('Error', err));
}
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image source={require('../assets/profilepic.png')} size={90} />
          <View style={{marginLeft: 20}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}>
              <Text>{data.Name}</Text>
            </Title>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-pin" color="black" size={20} />
          <Text style={{color: 'black', marginLeft: 20, fontSize: 16}}>
            Lahore, PAKISTAN
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="black" size={20} />
          <Text style={{color: 'black', marginLeft: 20, fontSize: 16}}>
        {data.Mobile}
          </Text>
        </View>
        <View style={styles.row}>
          <EntypoIcons name="email" color="black" size={20} />
          <Text style={{color: 'black', marginLeft: 20, fontSize: 16}}>
            {data.Email}
          </Text>
        </View>
      </View>

      

      <View style={styles.menuWrapper}>
        <View style={styles.menuItem}>
          <EntypoIcons name="open-book" color="black" size={25} />
          <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
            <Text style={styles.menuItemText}>About us</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuItem}>
          <FeatherAwesomeIcon name="share" color="black" size={25} />
          <TouchableOpacity onPress={onShare}>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuItem}>
          <MaterialIcons name="support-agent" color="black" size={25} />
          <TouchableOpacity onPress={makeCall}>
            <Text style={styles.menuItemText}>Support</Text>
          </TouchableOpacity>
        </View>

        <View style={{paddingHorizontal: 80, size: 200}}>
          <Button
            title="Log Out"
            color="black"
            onPress={() => logout()}
          />
        </View>
        
          <Text style={{fontSize:17,marginHorizontal:12,paddingTop:15}}>Follow Us On </Text>
          <View style={{flexDirection:'row', justifyContent:'space-around', paddingTop:10}}>

           <TouchableOpacity 
           onPress={fb}
           >
           
          <FeatherAwesomeIcon name="facebook-square" color="blue" size={50} />
          </TouchableOpacity>

          <TouchableOpacity onPress={instagram}>
          <FeatherAwesomeIcon name="instagram" color="red" size={50} />
          </TouchableOpacity>

          <TouchableOpacity onPress={twitter}>
          <FeatherAwesomeIcon name="twitter-square" color="skyblue" size={50} />
          </TouchableOpacity> 

          {/* <SocialIcon
          type='facebook'
          raised={true}
          openURL="https://reactnativeelements.com/docs/social_icon/"
          />
          <SocialIcon
           type='instagram'
           iconColor='red'
          />

          <SocialIcon
           
           type='twitter'
          /> */}




        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    //backgroundColor:"#f08080"
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: 'black',
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 26,
  },
});



{/* <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          <Title>20000</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Orders</Caption>
        </View>
      </View> */}