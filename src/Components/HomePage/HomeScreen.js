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
                        <Pronouns></Pronouns>
                    </View>
                    <View style={styles.item}>
                        <Prepositions></Prepositions>
                    </View>
                    <View style={styles.item}>
                        <Adjectives></Adjectives>
                    </View>
                    <View style={styles.item}>
                        <Present></Present>
                    </View>
                    <View style={styles.item}>
                        <Past></Past>
                    </View>
                    <View style={styles.item}>
                        <PresentPerfect></PresentPerfect>
                    </View>
                    <View style={styles.item}>
                        <Future></Future>
                    </View>
                    <View style={styles.item}>
                        <Modalverbs></Modalverbs>
                    </View>
                    <View style={styles.item}>
                        <Conditionals></Conditionals>
                    </View>
                    <View style={styles.item}>
                        <Sentence></Sentence>
                    </View>
                    <View style={styles.item}>
                        <Questions></Questions>
                    </View>
                    <View style={styles.item}>
                        <Verbs></Verbs>
                    </View>
                    <View style={styles.item}>
                        <Reported></Reported>
                    </View>
                    <View style={styles.item}>
                        <Relative></Relative>
                    </View>
                    <View style={styles.item}>
                        <Linking></Linking>
                    </View>
                    <View style={styles.item}>
                        <Passiveforms></Passiveforms>
                    </View>
                    <View style={styles.item}>
                        <Words></Words>
                    </View>
                    <View style={styles.item}>
                        <Froming></Froming>
                    </View>
                    <View style={styles.item}>
                        <Spoken></Spoken>
                    </View>
                    <View style={styles.item}>
                        <Appendix></Appendix>
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