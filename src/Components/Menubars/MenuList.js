
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet, View, Text} from 'react-native';
import HomeScreen from '../HomePage/HomeScreen'
import DrawerComponent from './DrawerComponent'
const Drawer = createDrawerNavigator();

export default function Toggle() {
  return (
    
      <Drawer.Navigator initialRouteName="Home"
      keyboardDismissMode="none"
      drawerContent={props => <DrawerComponent {...props} />}
        drawerStyle={styles.menulist}
      >
        <Drawer.Screen name="Home" component={HomeScreen}>
        </Drawer.Screen>
      </Drawer.Navigator>
    
  );
}

const styles = StyleSheet.create({
    menulist: {
        marginTop: 50,
        backgroundColor: '#3f2c52',
        width: 230,
    },
});
