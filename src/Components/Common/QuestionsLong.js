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

    changeBackground1 = ()=>{
        if(this.props.answer == this.props.answer1){
            this.setState({background1: "2"})
            this.setState({background2: "1"})
            this.setState({background3: "1"})
        }
        else if(this.props.answer == this.props.answer2){
            this.setState({background1: "1"})
            this.setState({background2: "2"})
            this.setState({background3: "2"})
        }
    }

    render() {
        return (
            <View style={styles.div}>
                <Text style={styles.text1}>{this.props.title}</Text>
                <Text style={styles.text2}>{this.props.question}</Text>
                    <View style={{marginTop: 20}}>
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
                        {this.state.background3 =="0" ? 
                            <TouchableOpacity style={styles.button} onPress={this.changeBackground1}>
                                <Text style={styles.text3}>
                                    {this.props.answer3}
                                </Text>
                            </TouchableOpacity> : null}
                        {this.state.background3 == "1" ? <TouchableOpacity style={styles.button1}>
                            <Text style={styles.text3}>
                                {this.props.answer3}
                            </Text>
                        </TouchableOpacity> : null}
                        {this.state.background3 == "2" ?
                        <TouchableOpacity style={styles.button2}>
                            <Text style={styles.text3}>
                                {this.props.answer3}
                            </Text>
                        </TouchableOpacity> : null}
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    div:{
        width: 397,
        height: 220,
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
        width: 350,
        height: 35,
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
        height: 35,
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
        height: 35,
        backgroundColor: "#b3e37a",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center",
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 8
    }
})