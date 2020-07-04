import React from 'react'
import { Text, View, StyleSheet,TouchableOpacity,ImageBackground,ScrollView } from 'react-native'

import QuestionsShort from '../Common/QuestionsShort'
import QuestionsLong from '../Common/QuestionsLong'

export default function Singular({navigation}){
        return (
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ImageBackground
                            source={require('../Icon/backleft.png')}
                            style={styles.icon1}
                        />
                    </TouchableOpacity>
                    <View style={styles.logotext}>
                        <Text style={{color: '#fff', fontSize: 13}}>
                            Singular and plural nouns
                        </Text>
                    </View>
                </View>
                <ScrollView style={{backgroundColor: '#f1f0f1', marginBottom: 60}}>
                    <View style={styles.div}>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconnumber}>
                                <Text style={{fontSize: 10}}>1</Text>
                            </View>
                            <Text style={{fontSize: 12,fontWeight: "bold"}}>Nouns</Text>
                        </View>
                        <ImageBackground
                            source={require('../Image/logo.png')}
                            style={styles.logo}
                        />
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                                A nouns is a person, an animal, a place or a thing:
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>a dog  a  town  a phone  a melon</Text>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30}}>an orange  an egg  a beach</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                                In writing, names of people, places, days, months, etc. begin with a capital letter:
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginBottom: 20,marginTop: 10}}>Monday  Mr John Boston June</Text>
                        </View>
                    </View>
                    <QuestionsShort title="Choose the correct form:" question="Last summer I visited _____ ." answer1="london" answer2="London" answer="London"></QuestionsShort>
                    <View style={styles.div}>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconnumber}>
                                <Text style={{fontSize: 10}}>2</Text>
                            </View>
                            <Text style={{fontSize: 12,fontWeight: "bold"}}>Singular and plural nouns</Text>
                        </View>
                        <ImageBackground
                            source={require('../Image/apple.png')}
                            style={{width: 299, height:160,marginLeft: 40,marginTop: 20}}
                        />
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                                Most nouns can be singular (one) or plural (more than one):
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>a pizza - two pizzas  an apple-five apples</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30}}>an egg - some eggs  a melon - three melons</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                                For the plural form of most nouns, add -s:
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>bottle - bottles          pen - pens</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30}}>window - windows   coin - coins</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                                For nouns that end in s, ss,ch, and x sounds (and polato, tomato), add -es:
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>box - boxes   moss - mosses</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30}}>bus - buses   potato - potatoes</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                                For nouns ending in f or fe, change f to v and add -es:
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>bottle - bottles          pen - pens</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30}}>window - windows   coin - coins</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                                The plural form of a few nouns is different. We call these irregular nouns:
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>man - men    woman - women   fish -fish</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30}}>tooth - teeth   foot - feet   deer - deer</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30}}>child - children   mouse - mice</Text>
                        </View>
                    </View>
                    <QuestionsShort title="Choose the correct form:" question="I put two big _____ in the lunch box." answer1="potato" answer2="potatoes" answer="potatoes"></QuestionsShort>
                    <QuestionsShort title="Choose the correct form:" question="I have three ____." answer1="child" answer2="children" answer="children"></QuestionsShort>
                    <QuestionsShort title="Choose the correct form:" question="A few men wear _____." answer1="watches" answer2="watch" answer="watches"></QuestionsShort>
                    <QuestionsShort title="Choose the correct form:" question="I saw a ____ running by." answer1="mouse" answer2="mice" answer="mouse"></QuestionsShort>
                    <QuestionsLong title="Choose the correct form:" question="Whick is correct?" answer1="There are few bus on the road today." answer2="Thre is few buses on the road today." answer3="There are few buses on the road today."  answer="There are few buses on the road today."></QuestionsLong>
                    <QuestionsShort title="Choose the correct form:" question="I saw a ____ running by." answer1="mouse" answer2="mice" answer="mouse"></QuestionsShort>
                    
                </ScrollView>
            </View>
        )
}

const styles = StyleSheet.create({
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
    icon1: {
        width: 12,
        height: 22,
        marginLeft: 15,
        marginRight: 10
    },
    div:{
        backgroundColor: "#ddccf5",
        width: 397,
        marginLeft: 8,
        marginTop: 10,
        borderRadius: 5,
        padding: 10,
    },
    iconnumber:{
        width: 18,
        height: 18,
        borderRadius: 50,
        borderColor: "black",
        borderWidth: 1,
        marginTop: 1,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconrow:{
        width: 10,
        height: 10,
        borderRadius: 50,
        borderColor: "black",
        borderWidth: 1,
        marginTop: 24,
        marginRight: 5,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width: 227,
        height: 157,
        marginTop: 15,
        marginLeft: 60
    }
})