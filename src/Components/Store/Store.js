import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    alert,
    ImageBackground,
    TouchableOpacity,
  } from 'react-native';

export default function Store({navigation}){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ImageBackground
                            source={require('../Icon/backleft.png')}
                            style={styles.icon1}
                        />
                    </TouchableOpacity>
                    <View style={styles.logotext}>
                        <Text style={{color: '#fff', fontSize: 13}}>
                            Store
                        </Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <ImageBackground
                            source={require('./Image/RemoveAds.png')}
                            style={styles.icon2}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <ImageBackground
                            source={require('./Image/Unlock.png')}
                            style={styles.icon2}
                        />
                    </TouchableOpacity>
                </View>
                
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#84578e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logotext: {
        flex: 5,
        alignContent: "center",
        alignItems: 'center',
    },
    content: {
        backgroundColor: '#fff',
    },
    body: {
        height: 1000,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    icon1: {
        width: 12,
        height: 22,
        marginLeft: 15,
        marginRight: 10
    },
    icon2: {
        width: 270,
        height: 160,
        marginTop: 10,
        marginRight: 0
    }
})
