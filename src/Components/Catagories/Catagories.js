import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import HomeScreen from '../HomePage/HomeScreen';
import Store from '../Store/Store'
import MenuList from '../Menubars/MenuList'
import Singular from '../Nouns/Singular'
import Test1Nouns from '../Nouns/Test1'

const Stack = createStackNavigator();

export default function Catagories (){
    return (
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="MenuList" component={MenuList} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Store" component={Store} />
                    <Stack.Screen name="Singular" component={Singular} />
                    <Stack.Screen name="Test1Nouns" component={Test1Nouns} />
                </Stack.Navigator>
            </NavigationContainer>
    );
}
