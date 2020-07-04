import React from 'react'
import { Text, View, StyleSheet,TouchableOpacity,ImageBackground,Image } from 'react-native'

export default function ResultTest({navigation,route}){
    return(
        <View style={styles.div}>
            <View style={styles.header}>
                <Text style={styles.text1}>
                    Result for:
                </Text>
                <Text style={styles.text2}>
                    {route.params.names[0]}
                </Text>
                <Image
                    source={require('../Icon/icontest.png')}
                    style={styles.img}>
                </Image>
                <Text style={styles.text3}>
                    ------------------------ Answer Right: {route.params.names[1] +1} -----------------------------
                </Text>
                <Text style={styles.text4}>
                    ------------------------- Answer Wrong: {route.params.names[2] +1} -----------------------------
                </Text>
                <Text style={styles.text5}>
                    ---------------------------- Complete: {route.params.names[3]}% -------------------------------
                </Text>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
                    <Text style={styles.text6}>
                        Back to Topics
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    div:{
        width: 397,
        height: 600,
        borderRadius: 5,
        marginLeft: 8,
        backgroundColor: "#fff",
        marginTop: 20,
    },
    header:{
        width: 397,
        marginTop: 20,
        alignItems: "center",
    },
    text1:{
        fontWeight: "bold",
        color: "gray",
        marginTop: 30
    },
    text2:{
        fontWeight: "bold",
        color: "gray",
        marginTop: 5
    },
    text3:{
        color: "#a1ee7d",
        marginTop: 5,
        marginLeft: 30
    },
    text4:{
        color: "#ff3a3a",
        marginTop: 20,
        marginLeft: 30
    },
    text5:{
        color: "#f0c58b",
        marginTop: 20,
        marginLeft: 30
    },
    text6:{
        color: "#fff",
        fontWeight: 'bold'
    },
    img:{
        marginTop: 30,
        width: 73,
        height: 70,
        marginBottom: 30
    },
    button:{
        width: 220,
        height: 40,
        backgroundColor: "#f9a808",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
    }
})