import React from 'react'
import { Text, View, StyleSheet,TouchableOpacity,ImageBackground,ScrollView } from 'react-native'

import QuestionsShort from '../Common/QuestionsShort'
import QuestionsLong from '../Common/QuestionsLong'

export default function SubjectAndObject({navigation}){
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
                        <Text style={{color: '#fff', fontSize: 15}}>
                            A 'little' , a 'few', too 'much', too 'many', not 'enough'
                        </Text>
                    </View>
                </View>
                <ScrollView style={{backgroundColor: '#f1f0f1', marginBottom: 60}}>
                    <View style={styles.div}>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconnumber}>
                                <Text style={{fontSize: 10}}>1</Text>
                            </View>
                            <Text style={{fontSize: 14,fontWeight: "bold"}}>'Much', 'Many', 'A lot of' with a noun </Text>
                        </View>
                        <ImageBackground
                            source={require('../Image/littleandfew_1.png')}
                            style={styles.logo}
                        />
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                                Articles are short words which come before nouns to 
                                show whether they refer to a general or a specific object. 
                                There are several rules telling which article, if any, should 
                                be used. 

                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>I work in a library. </Text>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>I work in an office.  </Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                                Article a before words that begin with a consonant 
                                sound, and u or eu, when 
                                they sound like y: 

                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginBottom: 20,marginTop: 10}}>Where's the key?</Text>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginBottom: 20}}>An apple is very hard</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                                We DON'T use the before plural or uncountable nouns 
                                when we talk about things or people in general 

                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginBottom: 20,marginTop: 10}}>an apple an orange 
                                I like dogs. (dogs in general) 
                                I like the dogs. (the dogs in that box) 
                        </Text>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginBottom: 20}}>                                
                                Juice is good for you. (juice in general) 
                                Thejuice tastes horrible. (the juice in that bottle) 
                                an architect </Text>
                        </View>
                    </View>
                    <QuestionsShort title="Choose the correct form:" question="Is there __________ bank here? " answer1="a" answer2="the" answer="a"></QuestionsShort>
                    <QuestionsShort title="Choose the correct form:" question="Is there ____  university in Sydney?  " answer1="the" answer2="an" answer="the"></QuestionsShort>
                    <QuestionsShort title="Choose the correct form:" question="Who lives in ______ house? " answer1="the" answer2="an" answer="the"></QuestionsShort>
                    <View style={styles.div}>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconnumber}>
                                <Text style={{fontSize: 10}}>2</Text>
                            </View>
                            <Text style={{fontSize: 14,fontWeight: "bold"}}>'Too much', 'too many', 'enough' </Text>
                        </View>
                        <ImageBackground
                            source={require('../Image/littleandfew_2.png')}
                            style={{width: 299, height:160,marginLeft: 40,marginTop: 20}}
                        />
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                            We use much: 
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>• to talk about jobs: </Text>
                            
                            <Text style={{fontSize: 12 ,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>• to describe a person or thing with an adjective: </Text>
                            <Text style={{fontSize: 12 ,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>• to mean 'one' with fractions and numbers:  </Text>
                        </View>
                        <View>
                            
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                            We use many: 
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>• before plural nouns </Text>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>  Student offten listen to music </Text>
                        </View>
                  

                    </View>
                    <QuestionsLong title="Choose the correct one:" question="They're building ____ hospital in the town centre. 
                    " answer1="a" answer2="an" answer3="the"  answer="a"></QuestionsLong>
                    <QuestionsShort title="Choose the correct one:" question="I've got ___ uncle in London." answer1="a" answer2="an"  answer="an"></QuestionsShort>
                    <QuestionsLong title="Which is correct? " question="" answer1="Do you have the advices for me?" answer2="Do you have some advice for me?" 
                    answer3 ="Do you have an advice for me?"  answer="Do you have some advice for me?"></QuestionsLong>
                    <QuestionsShort title="Choose the correct one: " question="I must get _______ petrol for the car." answer1="a" answer2="some" answer="some"></QuestionsShort>
                    <QuestionsShort title="Choose the correct one:" question="I haven't got a lot of ________ . " answer1="moneys" answer2="money" answer="money"></QuestionsShort>
                    
                    
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