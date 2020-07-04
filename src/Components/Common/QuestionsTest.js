import React, { Component } from 'react'
import { Text, View, StyleSheet,TouchableOpacity} from 'react-native'

export default class QuestionShort extends Component {
    constructor(props){
        super(props)
        this.state={
            background1: "0",
            background2: "0",
            background3: "0",
        }
    }
    caculator1=()=>{
        if(this.props.answer == this.props.answer1){
            const {dataCallback} = this.props;
            dataCallback(0)
        }
        else{
            const {dataCallback} = this.props;
            dataCallback(1)
        }
    }
    caculator2=()=>{
        if(this.props.answer == this.props.answer2){
            const {dataCallback} = this.props;
            dataCallback(0)
        }
        else{
            const {dataCallback} = this.props;
            dataCallback(1)
        }
    }
    caculator3=()=>{
        if(this.props.answer == this.props.answer3){
            const {dataCallback} = this.props;
            dataCallback(0)
        }
        else{
            const {dataCallback} = this.props;
            dataCallback(1)
        }
    }
    render() {
        return (
            <View style={styles.div}>
                <Text style={styles.text1}>{this.props.title}</Text>
                <Text style={styles.text2}>{this.props.question}</Text>
                    <View style={{marginTop: 20}}> 
                        <TouchableOpacity style={styles.button} onPress={this.caculator1}>
                            <Text style={styles.text3}>
                                {this.props.answer1}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this.caculator2}>
                            <Text style={styles.text3}>
                                {this.props.answer2}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this.caculator3}>
                            <Text style={styles.text3}>
                                {this.props.answer3}
                            </Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    div:{
        width: 397,
        height: 350,
        backgroundColor: "#fff",
        borderRadius: 5,
        alignItems: 'center',
        marginLeft: 8,
        marginTop: 10,
        borderColor: "#ccc",
        borderWidth: 1,
    },
    text1:{
        color: "#6d6c6c",
        fontWeight: "bold",
        marginTop: 10,
        fontSize: 13
    },
    text2:{
        color: "#6d6c6c",
        fontStyle: "italic",
        marginTop: 35,
        fontSize: 13,
        marginBottom: 30
    },
    text3:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 13
    },
    button:{
        width: 350,
        height: 40,
        backgroundColor: "#49c7e2",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center",
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 8
    },
    button1:{
        width: 350,
        height: 40,
        backgroundColor: "#e896a1",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center",
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 8
    },
    button2:{
        width: 350,
        height: 40,
        backgroundColor: "#b3e37a",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center",
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 8
    }
})