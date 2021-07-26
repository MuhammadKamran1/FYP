import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  
} from 'react-native';
import Logo from '../screens/Logo';


const AboutUs = () => {
  return (
   
    <View style={{flex: 1}}>
      <View style={{height: 50, backgroundColor: 'orange'}}>
          <Logo/>
      </View>
      <View style={{backgroundColor: '#344955', flex: 1}}>
       
          <View>
            <View><Text style={{textAlign:'center', fontSize:24,fontWeight:'bold', color:'orange'}}>About US</Text></View>
            {/* <View style={styles.box}> */}
            <Text style={{color:'white', paddingHorizontal:10,fontSize:18, textAlign:'center', justifyContent:'center', paddingTop:10}}>
                An online marketplace 
                for construction material, relevant machinery and labour which will
                 facilitate the service providers and end user in the most cost effective and efficient manner. 
                 The application would assist the users by providing diverse products inventory, safe online payment
                 system, delivery facility, experts advice and skilled labour using Artificial Intelligence tools
                 and techniques.Our platform will be providing both the industry people and the end user a platform which 
                will enhance there shopping and servies experience in contruction industry.
                We really want to provide our hardworking and skilled labour a platform, where they 
                could easily register themselves and get hired without any hustle.</Text>
            </View>

            
            

          </View>
       
      </View>
      
  );
};

export default AboutUs;

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
    //backgroundColor: '#344955',
    
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
