import React, { Component } from 'react'
import { Text, View, StyleSheet,TouchableOpacity} from 'react-native'

export default class QuestionShort extends Component {
    constructor(props){
        super(props)
        this.state={
            background1: "0",
            background2: "0",
        }
    }

    changeBackground1 = ()=>{
        if(this.props.answer == this.props.answer1){
            this.setState({background1: "2"})
            this.setState({background2: "1"})
        }
        else{
            this.setState({background1: "1"})
            this.setState({background2: "2"})
        }
    }

    render() {
        return (
            <View style={styles.div}>
                <Text style={styles.text1}>{this.props.title}</Text>
                <Text style={styles.text2}>{this.props.question}</Text>
                <View>
                    <View style={{flexDirection: "row",marginTop: 20}}>
                        {this.state.background1 =="0" ? 
                            <TouchableOpacity style={styles.button} onPress={this.changeBackground1}>
                                <Text style={styles.text3}>
                                    {this.props.answer1}
                                </Text>
                            </TouchableOpacity> : null}
                        {this.state.background1 == "1" ? <TouchableOpacity style={styles.button1}>
                            <Text style={styles.text3}>
                                {this.props.answer1}
                            </Text>
                        </TouchableOpacity> : null}
                        {this.state.background1 == "2" ?
                        <TouchableOpacity style={styles.button2}>
                            <Text style={styles.text3}>
                                {this.props.answer1}
                            </Text>
                        </TouchableOpacity> : null}
                        {this.state.background2 =="0" ? 
                            <TouchableOpacity style={styles.button} onPress={this.changeBackground1}>
                                <Text style={styles.text3}>
                                    {this.props.answer2}
                                </Text>
                            </TouchableOpacity> : null}
                        {this.state.background2 == "1" ? <TouchableOpacity style={styles.button1}>
                            <Text style={styles.text3}>
                                {this.props.answer2}
                            </Text>
                        </TouchableOpacity> : null}
                        {this.state.background2 == "2" ?
                        <TouchableOpacity style={styles.button2}>
                            <Text style={styles.text3}>
                                {this.props.answer2}
                            </Text>
                        </TouchableOpacity> : null}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    div:{
        width: 397,
        height: 140,
        backgroundColor: "#fff",
        borderRadius: 5,
        alignItems: 'center',
        marginLeft: 8,
        marginTop: 10
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
        marginTop: 10,
        fontSize: 13
    },
    text3:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 13
    },
    button:{
        width: 120,
        height: 35,
        backgroundColor: "#49c7e2",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center",
        marginRight: 10,
        marginLeft: 10
    },
    button1:{
        width: 120,
        height: 35,
        backgroundColor: "#e896a1",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center",
        marginRight: 10,
        marginLeft: 10
    },
    button2:{
        width: 120,
        height: 35,
        backgroundColor: "#b3e37a",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center",
        marginRight: 10,
        marginLeft: 10
    }
})