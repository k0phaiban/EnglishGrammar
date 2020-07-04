import React, { Component } from 'react'

import Nouns from './Nouns'
import Pronouns from './Pronouns'
import Prepositions from './Prepositions'
import Adjectives from './Adjectives'
import Present from './Present'
import Past from './Past'
import PresentPerfect from './PresentPerfect'
import Future from './Future'
import Modalverbs from './Modalverbs'
import Conditionals from './Conditionals'
import Sentence from './Sentence'
import Questions from './Questions'
import Verbs from './Verbs'
import Reported from './Reported'
import Relative from './Relative'
import Linking from './Linking'
import Words from './Words'
import Froming from './Froming'
import Spoken from './Spoken'
import Appendix from './Appendix'
import Passiveforms from './Passiveforms'

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
  } from 'react-native';

export default function HomeScreen({navigation}){ 
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <ImageBackground
                            source={require('../Icon/bars.png')}
                            style={styles.icon1}
                        />
                    </TouchableOpacity>
                    <View style={styles.logotext}>
                        <Text style={{color: '#fff', fontSize: 13}}>
                            English Grammar
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Store')}>
                        <ImageBackground 
                            source={require('../Icon/shoping-bag-white.png')}
                            style={styles.icon2}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.content}>
                    <View style={styles.item}>
                        <Nouns navigation={navigation}></Nouns>
                    </View>
                    <View style={styles.item}>
                        <Pronouns navigation={navigation}></Pronouns>
                    </View>
                    <View style={styles.item}>
                        <Prepositions navigation={navigation}></Prepositions>
                    </View>
                    <View style={styles.item}>
                        <Adjectives navigation={navigation}></Adjectives>
                    </View>
                    <View style={styles.item}>
                        <Present navigation={navigation}></Present>
                    </View>
                    <View style={styles.item}>
                        <Past navigation={navigation}></Past>
                    </View>
                    <View style={styles.item}>
                        <PresentPerfect navigation={navigation}></PresentPerfect>
                    </View>
                    <View style={styles.item}>
                        <Future navigation={navigation}></Future>
                    </View>
                    <View style={styles.item}>
                        <Modalverbs navigation={navigation}></Modalverbs>
                    </View>
                    <View style={styles.item}>
                        <Conditionals navigation={navigation}></Conditionals>
                    </View>
                    <View style={styles.item}>
                        <Sentence navigation={navigation}></Sentence>
                    </View>
                    <View style={styles.item}>
                        <Questions navigation={navigation}></Questions>
                    </View>
                    <View style={styles.item}>
                        <Verbs navigation={navigation}></Verbs>
                    </View>
                    <View style={styles.item}>
                        <Reported navigation={navigation}></Reported>
                    </View>
                    <View style={styles.item}>
                        <Relative navigation={navigation}></Relative>
                    </View>
                    <View style={styles.item}>
                        <Linking navigation={navigation}></Linking>
                    </View>
                    <View style={styles.item}>
                        <Passiveforms navigation={navigation}></Passiveforms>
                    </View>
                    <View style={styles.item}>
                        <Words navigation={navigation}></Words>
                    </View>
                    <View style={styles.item}>
                        <Froming navigation={navigation}></Froming>
                    </View>
                    <View style={styles.item}>
                        <Spoken navigation={navigation}></Spoken>
                    </View>
                    <View style={styles.item}>
                        <Appendix navigation={navigation}></Appendix>
                    </View>
                </ScrollView>
            </View>         
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f0f1"
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
    },
    content: {
        backgroundColor: '#f1f0f1',
    },
    img1: {
        width: 405,
        height: 65,
        marginLeft: 3,
        marginTop: 3,
        marginBottom: 1,
        borderColor: '#fff',
        borderWidth: 1.5,
        borderRadius: 6
    },
    icon1: {
        width: 20,
        height: 20,
        marginLeft: 15,
        marginRight: 10
    },
    icon2: {
        width: 30,
        height: 29,
        marginLeft: 15,
        marginRight: 10
    },
    item:{
        width: 403,
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 3,
        borderRadius: 5
    }
})