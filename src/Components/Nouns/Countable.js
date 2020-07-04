import React from 'react'
import { Text, View, StyleSheet,TouchableOpacity,ImageBackground,ScrollView } from 'react-native'

import QuestionsShort from '../Common/QuestionsShort'
import QuestionsLong from '../Common/QuestionsLong'

export default function Countable({navigation}){
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
                            Countable and Uncountable nouns
                        </Text>
                    </View>
                </View>
                <ScrollView style={{backgroundColor: '#f1f0f1', marginBottom: 60}}>
                    <View style={styles.div}>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconnumber}>
                                <Text style={{fontSize: 10}}>1</Text>
                            </View>
                            <Text style={{fontSize: 14,fontWeight: "bold"}}>Countable nouns</Text>
                        </View>
                        <ImageBackground
                            source={require('../Image/countable_icon.png')}
                            style={styles.logo}
                        />
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                                In English, nouns can be countable or uncountable.
                                Countable nouns are things we can count:
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>a bruger      a  team     a banana </Text>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30}}>an orange    an egg      an apple</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                                Countable nouns can be singular. They often have a/an, the, this/that in front of them:
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginBottom: 20,marginTop: 10}}>Where's the key?</Text>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginBottom: 20}}>This apple is very hard</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                                Countable nouns also can be plural. They often have the, some, these/those in front of them:
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginBottom: 20,marginTop: 10}}>I'd like some oranges, please.</Text>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginBottom: 20}}>Those flowers look good</Text>
                        </View>
                    </View>
                    <QuestionsShort title="Choose the correct form:" question="Is there __________ bank here? " answer1="a" answer2="some" answer="a"></QuestionsShort>
                    <QuestionsShort title="Choose the correct form:" question="___________ are my friends, John and Michael " answer1="This" answer2="These" answer="These"></QuestionsShort>
                    <QuestionsShort title="Choose the correct form:" question="Who lives in ______ house? " answer1="that" answer2="those" answer="that"></QuestionsShort>
                    <View style={styles.div}>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconnumber}>
                                <Text style={{fontSize: 10}}>2</Text>
                            </View>
                            <Text style={{fontSize: 14,fontWeight: "bold"}}>Uncountable nouns</Text>
                        </View>
                        <ImageBackground
                            source={require('../Image/uncountable_icon.png')}
                            style={{width: 299, height:160,marginLeft: 40,marginTop: 20}}
                        />
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                                Uncountable nouns are things we can't count. They don't usually hava a plural form and a/an in front of them:
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,textDecorationLine: "line-through" ,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>three milks      two oils</Text>
                            
                            <Text style={{fontSize: 12,textDecorationLine: "line-through" ,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>a sugar      a salt</Text>
                        </View>
                        <View>
                            
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                                Uncountable nouns often have some infront of them:
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,textDecorationLine:"line-through" ,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>Can I have a milk in my coffee?</Text>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>Can I have some milk in my coffee?</Text>
                        </View>
                        <View>
                  
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                            Uncountable nouns are always used with verbs in the singular: 
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>There is some rice.</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30, marginTop: 10}}>Education is very important. </Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.iconrow}>
                                <Text style={{fontSize: 10}}>+</Text>
                            </View>
                            <Text style={{fontSize: 12,marginTop: 20}}>
                            Some common uncountable nouns are:
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30,marginTop: 10}}>• materials: metal, wood, plastic, paper </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30, marginTop: 10}}>• food: bread, cheese, meat, tea, coffee, sugar </Text>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30, marginTop: 10}}>• ideas and feelings: advice, love, news, education, information  </Text>
                            <Text style={{fontSize: 12,fontStyle: "italic",marginLeft: 30, marginTop: 10, marginBottom: 10}}>• school subjects and languages: art, music, English, Spanish   </Text>
                            
                        </View>

                    </View>
                    <QuestionsLong title="Which is correct? " question="" answer1="Do you have some advices for me?" answer2="Do you have some advice for me?" 
                    answer3 ="Do you have an advice for me?"  answer="Do you have some advice for me?"></QuestionsLong>
                    <QuestionsShort title="Choose the correct one: " question="I must get _______ petrol for the car." answer1="a" answer2="some" answer="some"></QuestionsShort>
                    <QuestionsShort title="Choose the correct one:" question="I haven't got a lot of ________ . " answer1="moneys" answer2="money" answer="money"></QuestionsShort>
                    <QuestionsLong title="Choose the correct one:" question="Which is countable?" answer1="furniture" answer2="history" answer3="chair"  answer="chair"></QuestionsLong>
                    <QuestionsLong title="Choose the correct one:" question="Which is uncountable?" answer1="cheese" answer2="market" answer3="man"  answer="cheese"></QuestionsLong>
                    
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