import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import HomeScreen from '../HomePage/HomeScreen';
import Store from '../Store/Store'
import MenuList from '../Menubars/MenuList'
import Singular from '../Nouns/Singular'

const Stack = createStackNavigator();

export default function Catagories (){
    return (
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="MenuList" component={MenuList} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Store" component={Store} />
                    <Stack.Screen name="Singular" component={Singular} />
                </Stack.Navigator>
            </NavigationContainer>
    );
}
