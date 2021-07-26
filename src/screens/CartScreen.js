import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
var {width} = Dimensions.get('window');
// import icons
//import Icon from 'react-native-vector-icons/Ionicons';
import FeatherAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Logo from '../screens/Logo';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Cart = ({navigation}) => {
  const [data, setData] = useState({})
  const [totalPrice, setTotalPrice] = useState(0)
  const [loading, setLoading] = useState(true)
  //let mobile = AsyncStorage.getItem('Mobile')

  useEffect(() =>{
    fetchCartData()
  }, [])

  const fetchCartData = async () =>{
    let mobile  =  await AsyncStorage.getItem('Mobile')
    database()
      .ref(`/CMSO/Users/${mobile}/Cart`)
      .on('value', snapshot => {
        setData(snapshot.val());
        let temp = 0
        snapshot.val()!= null && Object.keys(snapshot.val()).map((item, index) =>{
          console.log("this is item ", item)
          // console.log("this is price: ",snapshot.val()[item].price )
          // console.log("this is the quantitiy", snapshot.val()[item].quantity)
          temp = temp + parseInt(snapshot.val()[item].price) * parseInt( snapshot.val()[item].quantity)
        }) 
        // console.log("this is temp total", temp)
        setTotalPrice(temp)
        // console.log('This is my cart values', snapshot.val());
        setLoading(false )
      });
  }
  

  const SingleCartItem = ({path, qty, item}) =>{
    const [singleData, setSingleData] = useState()
    useEffect(()=>{
      fetchSingleCartItem()
    }, [])


    const deleteCartProduct = async () =>{
      console.log("deleting item ....")
      let mobile  =  await AsyncStorage.getItem('Mobile')
      database().ref(`/CMSO/Users/${mobile}/Cart/${item}`).remove()
      console.log("deleted successful")
    }

    const fetchSingleCartItem = () =>{
      database()
        .ref(`CMSO/Product Categories/${path}`)
        .on('value', snapshot => {
          setSingleData(snapshot.val());
          
          console.log('This is my single data', snapshot.val());
        });
    }
    return (
      <View style={styles.container1}>
          <Image
            resizeMode={'contain'}
            style={styles.image}
            source={{uri: singleData?.Image}}
          />
          <View style={styles.container2}>
            <View>
              <Text style={styles.productName}>
                {singleData?.Name}
              </Text>
              <Text style={{fontSize:17,paddingTop:4}}>Qty: {qty}</Text>
            </View>
            <View
              style={styles.container3}>
              <Text
                style={styles.price}>
                Rs.{singleData?.Price*qty}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={deleteCartProduct}>
                  <FeatherAwesomeIcon name="trash-o" size={30} color={'black'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
    )
  }

  return (
    <View style={styles.container}>
      <Logo/>
      <Text style={styles.header}> Shopping Cart </Text>
      <View style={{flex: 1}}>
        
        
        {loading 
        ?
        <ActivityIndicator color="blue" size={30}/>
        :
          <ScrollView>
        {data && Object.keys(data).map((item, index) =>{
          return <SingleCartItem key={index} item={item} path={data[item].path} qty={data[item].quantity}/>
        })
        }
        
        <View style={{height:10}}/>
        <View style={{justifyContent:'space-between',flexDirection:'row'}}>
          <Text style={styles.subTotal}>Sub Total</Text>
          <View style={styles.divider}/>
          <Text style={styles.subTotal}>{totalPrice}</Text>
        </View>
        <View style={{justifyContent:'space-between',flexDirection:'row'}}>
          <Text style={styles.subTotal}>Shipping</Text>
          <View style={styles.divider}/>
          <Text style={styles.subTotal}>0</Text>
        </View>
        <View style={styles.totalSection}>
          <Text style={styles.totalText}>Total-</Text>
          <View style={styles.divider}/>
          <Text style={styles.subTotal}>{totalPrice}</Text>
        </View>
      </ScrollView>}

      </View>
    
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={()=>navigation.navigate('CheckoutScreen')}> 
        <Text
          style={styles.checkoutText}>
          CHECKOUT
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Cart;

const styles = StyleSheet.create({
  container1: {
    width: width - 20,
    margin: 5,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#cccccc',
    paddingBottom: 0,
  },
  container2: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 10,
    justifyContent: 'space-around',
  },
  container3:{
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 28,
    color: 'black',
    backgroundColor:'orange'
  },
  image: {
    width: width / 3,
    height: width / 3,
  },
  price:{
    fontWeight: 'bold',
    color: 'seagreen',
    fontSize: 20
  },
  productName:{
    fontWeight: 'bold',
    fontSize: 20
  },
  totalSection:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  totalText:{
    fontSize:25,
  fontWeight:'bold',
  marginHorizontal:10
 

 },
 divider:{
   height:1,
   borderColor:'#dddddd',
   borderWidth:StyleSheet.hairlineWidth,
   flex:1,
   marginHorizontal:16,
   marginTop:12
 },
 subTotal:{
   fontSize:18,
   paddingHorizontal:12
 },
 checkoutButton:{
  backgroundColor: 'orange',
  width: width - 40,
  alignItems: 'center',
  padding: 7,
  borderRadius: 20,
 },
 checkoutText:{
  fontSize: 24,
  fontWeight: 'bold',
  color: 'black',
 }
});




// const saveUserDb=()=>{
//   database()
//   .ref(`/CMSO/Users/${mobilenumber}/`)
//   .set({
//   Cart: ,
  
// })
//   .then(() => console.log('Data set.'));
// }