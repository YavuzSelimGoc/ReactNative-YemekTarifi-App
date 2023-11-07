import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Categories from './src/Screens/Categories';
import Foods from './src/Screens/Foods';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={TabNavigator}  />
            <Stack.Screen name='Categories' component={Categories} />
            <Stack.Screen name='Foods' component={Foods} /> 
        </Stack.Navigator>
    )
}
const TabNavigator = () =>{
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Categories" component={Categories}   />
        <Tab.Screen name="Foods" component={Foods}   />
      </Tab.Navigator>
    )
}

const Router = () => {
  return (
    <NavigationContainer >
    <StackNavigator/>
  </NavigationContainer>
  )
}

export default Router