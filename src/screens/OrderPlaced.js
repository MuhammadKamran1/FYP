import React from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const OrderPlaced =({navigation})=>{

    return(
        
        <View >
            <ImageBackground
              source={require('../assets/orderplaced.jpg')}
              style={{width: 360, height: 600, flex: 1}}
             />
            <Text style={{alignItems:'center', justifyContent:'center', fontSize:24, color:'green', paddingTop:250, marginHorizontal:6}}>
                ORDER PLACED SUCCESSFULLY
            </Text>
            <View style={{alignItems:'center', paddingTop:6}}>
            <Feather name="smile" color="cyan" size={40} />
            </View>
            <Button  
             color='orange'
             paddingTop='10'    
            onPress={() => navigation.navigate('Products') }
            title="Go to Home Screen" />
        </View>
    )
};
export default OrderPlaced;