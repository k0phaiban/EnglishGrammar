import React, { Component } from 'react'
import { Text, View, StyleSheet,TouchableOpacity,ImageBackground,Image } from 'react-native'

export default class Test extends Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Image
                        source={require('../Icon/accept.png')}
                        style={styles.img1}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        marginTop: 40,
    },
    img1:{
        width: 40,
        height: 40,
        marginLeft: 40
    }
})