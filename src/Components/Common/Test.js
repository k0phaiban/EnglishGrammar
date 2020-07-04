import React, { Component } from 'react'
import { Text, View, StyleSheet,TouchableOpacity,ImageBackground,Image } from 'react-native'
import Question from './QuestionsTest'
import axios from 'axios'
import {firebaseConfig} from '../../firebaseConfig'

export default class Test extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[
                {
                    title: "Choose the correct form:",
                    question: "A ?",
                    answer1: "Apple",
                    answer2: "Banana",
                    answer3: "a apple",
                    answer: "Banana",
                },
                {
                    title: "Choose the correct form:",
                    question: "Whick is correct?",
                    answer1: "There are few buss on the road today.",
                    answer2: "There are few bus on the road today.",
                    answer3: "There are few buses on the road today.",
                    answer: "There are few buses on the road today.",
                },
                {
                    title: "Choose the correct form:",
                    question: "How are you?",
                    answer1: "Im fine",
                    answer2: "Sorry",
                    answer3: "Thanks",
                    answer: "Im fine",
                },
                {
                    title: "Choose the correct form:",
                    question: "What is the ___?",
                    answer1: "people",
                    answer2: "dog",
                    answer3: "a dog",
                    answer: "Im fine",
                },
                {
                    title: "Choose the correct form:",
                    question: "How old are you?",
                    answer1: "ten",
                    answer2: "first",
                    answer3: "the ten",
                    answer: "ten",
                },
                {
                    title: "Choose the correct form:",
                    question: "What your name?",
                    answer1: "Thank you",
                    answer2: "My name Cuong",
                    answer3: "Thanks",
                    answer: "My name Cuong",
                },
                {
                    title: "Choose the correct form:",
                    question: "How are you?",
                    answer1: "Im fine",
                    answer2: "Sorry",
                    answer3: "Thanks",
                    answer: "Im fine",
                },
            ],
            answerright: 0,
            answerwrong: 0,
            complete: 0,
            i: 0,
            payment: null,
        }
        //this.database = firebaseConfig.database()
        //this.Test = this.database.ref("Test").child("Test1")
    }
    caculator=(result)=>{
        if(result == 0){
            var k = this.state.answerright + 1;
            this.setState({answerright: k});
        }
        else{
            var k = this.state.answerwrong + 1;
            this.setState({answerwrong: k});
        }
        if(this.state.i<this.state.data.length-1){
            var x = this.state.i + 1;
            this.setState({i: x});
        }
        else{
            var c = this.state.answerright*100/(this.state.answerwrong+this.state.answerright)
            this.setState({complete: c})
            this.props.navigation.navigate('ResultTest',{names: ["Nouns",this.state.answerright,this.state.answerwrong,this.state.complete]});
        }
    }

    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Image
                        source={require('../Icon/accept.png')}
                        style={styles.img1}
                    />
                    <Text style={styles.text1}>
                        : {this.state.answerright}
                    </Text>
                    <Image
                        source={require('../Icon/cancel.png')}
                        style={styles.img1}
                    />
                    <Text style={styles.text2}>
                        : {this.state.answerwrong}
                    </Text>
                </View>
                <View>
                    <Question title={this.state.data[this.state.i].title} 
                                question={this.state.data[this.state.i].question}
                                answer1={this.state.data[this.state.i].answer1} 
                                answer2={this.state.data[this.state.i].answer2} 
                                answer3={this.state.data[this.state.i].answer3}  
                                answer={this.state.data[this.state.i].answer}
                                dataCallback={this.caculator} 
                                >                                
                            </Question>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        marginTop: 40,
        marginBottom: 40
    },
    img1:{
        width: 40,
        height: 40,
        marginLeft: 40,
    },
    text1:{
        color: "#8ec63f",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: 10,
        marginRight: 130
    },
    text2:{
        color: "#ed1b24",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: 10,
        marginRight: 130
    }
})