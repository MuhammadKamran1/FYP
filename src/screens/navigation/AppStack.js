import React from 'react';
// import {StyleSheet, AppRegistry, View} from 'react-native';

// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Feather';

import ProductCategories from '../product/ProductCategories';
import ServicesCategories from '../Services/ServicesCategories';
import SubCategoryView from'../product/SubCategoryView';
import ProfileScreen from '../ProfileScreen';
import SingleProduct from '../product/SingleProduct';
import ServiceCategoryDetails from '../Services/ServiceCategoryDetails';
import Cart from '../CartScreen';
import CheckoutScreen from '../CheckoutScreen';
import PSC1 from '../product/ProductSubCategories/PSC1';
import PSC2 from '../product/ProductSubCategories/PSC2';
import PSC3 from '../product/ProductSubCategories/PSC3';
import PSC4 from '../product/ProductSubCategories/PSC4';
import PSC5 from '../product/ProductSubCategories/PSC5';
import PSC6 from '../product/ProductSubCategories/PSC6';
import PSC7 from '../product/ProductSubCategories/PSC7';
import PSC8 from '../product/ProductSubCategories/PSC8';
import PSC9 from '../product/ProductSubCategories/PSC9';
import OrderPlaced from'../OrderPlaced';
import AboutUs from '../AboutUs';


const Stack1= createStackNavigator();

const SubCategoryStack =() =>{
  return(

    <Stack1.Navigator>
      <Stack1.Screen
        name="Products"
        component={ProductCategories}
        options={{headerShown: false}}
      />
      <Stack1.Screen
        name="PSC1"
        component={PSC1}
        options={{headerShown: false}}
      />
      <Stack1.Screen
        name="PSC2"
        component={PSC2}
        options={{headerShown: false}}
      />
            <Stack1.Screen
        name="PSC3"
        component={PSC3}
        options={{headerShown: false}}
      />
            <Stack1.Screen
        name="PSC4"
        component={PSC4}
        options={{headerShown: false}}
      />
            <Stack1.Screen
        name="PSC5"
        component={PSC5}
        options={{headerShown: false}}
      />
            <Stack1.Screen
        name="PSC6"
        component={PSC6}
        options={{headerShown: false}}
      />
            <Stack1.Screen
        name="PSC7"
        component={PSC7}
        options={{headerShown: false}}
      />
            <Stack1.Screen
        name="PSC8"
        component={PSC8}
        options={{headerShown: false}}
      />
            <Stack1.Screen
        name="PSC9"
        component={PSC9}
        options={{headerShown: false}}
      />
       <Stack1.Screen
        name="SubCategoryView"
        component={SubCategoryView}
        options={{headerShown: false}}
      />
      <Stack1.Screen
        name="SingleProduct"
        component={SingleProduct}
        options={{headerShown: false}}
      />
      <Stack1.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack1.Screen
        name='CheckoutScreen'
        component={CheckoutScreen}
        options={{headerShown: false}}
        />
        <Stack1.Screen
        name='OrderPlaced'
        component={OrderPlaced}
        options={{headerShown: false}}
        />

    </Stack1.Navigator>
  
  )

}

const Stack2= createStackNavigator();


const SubServicesCategories =() =>{
  return(

    <Stack2.Navigator>
      <Stack2.Screen
        name="Products"
        component={ServicesCategories}
        options={{headerShown: false}}
      />
      <Stack2.Screen
        name='ServiceCategoryDetails'
        component={ServiceCategoryDetails}
        options={{headerShown: false}}
      />
    
    </Stack2.Navigator>

    
  )

}


const Stack3= createStackNavigator();


const ProfileDetails =() =>{
  return(

    <Stack3.Navigator>
      <Stack3.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack3.Screen
        name='AboutUs'
        component={AboutUs}
        options={{headerShown: false}}
      />
    
    </Stack3.Navigator>

    
  )

}

const AppStack = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const MyTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Products"
          component={SubCategoryStack}
          options={{
            tabBarLabel: 'Products',
            tabBarIcon: ({color}) => (
              <EntypoIcons name="home" color={color} size={30} />
            ),
          }}></Tab.Screen>

        <Tab.Screen
          name="Services"
          component={SubServicesCategories}
          options={{
            tabBarLabel: 'Services',
            tabBarIcon: ({color}) => (
              <EntypoIcons name="tools" color={color} size={30} />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({color}) => (
              <Icon name="shopping-cart" color={color} size={30} />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="ProfileDetails"
          component={ProfileDetails}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <MaterialIcon name="account" color={color} size={30} />
            ),
          }}></Tab.Screen>
      </Tab.Navigator>
    );
  };

  return (
    
      <Stack.Navigator >
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{headerShown: false}}
        />
      
      </Stack.Navigator>
    
  );
};

export default AppStack;


  
