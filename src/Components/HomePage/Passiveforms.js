import React, { Component } from 'react'
import { Text, View, StyleSheet,Button,ImageBackground,TouchableOpacity } from 'react-native'

export default class Passiveforms extends Component {
    constructor(){
        super();  
        this.state ={  
          status: false,
          status2: true,
        }
      }
     
    ShowHideTextComponentView = () =>{
      if(this.state.status == true)
      {
        this.setState({status: false})
        this.setState({status2: true})
      }
      else
      {
        this.setState({status: true})
        this.setState({status2: false})
      }
    }
     
      render() {
      
        return (     
          <View>
          { this.state.status2 ? <View>
              <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                <View style={styles.item}>
                  <Text style={styles.text1}>Passive forms</Text>
                  <View style={styles.circle}></View>
                </View>
              </TouchableOpacity>
            </View> : null
          }
          { this.state.status ? <View>
              <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                <View style={styles.item2}>
                  <Text style={styles.text2}>Passive forms</Text>
                  <View style={styles.circle2}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.item3}>
                  <Text style={styles.text3}>Singular and plural nouns</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.item3}>
                  <Text style={styles.text3}>Countable and Uncountable nouns</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.item3}>
                  <Text style={styles.text3}>Countable and Uncountable nouns (2)</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.itemend}>
                
              </View>
            </View> : null
          }
          </View>
        );
      }
}

const styles = StyleSheet.create({
  item:{
    width: 403,
    height: 65,
    backgroundColor: "#5969da",
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row"
  },
  item2:{
    width: 403,
    height: 65,
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  item3:{
    width: 403,
    height: 60,
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    flexDirection: "row"
  },
  itemend:{
    width: 403,
    height: 90,
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  text1:{
    color: '#fff',
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "bold"
  },
  text2:{
    color: '#5969da',
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "bold"
  },
  text3:{
    color: '#949494',
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "bold"
  },
  text4:{
    color: '#949494',
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "italic"
  },
  circle:{
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#fff",
    position: "absolute",
    top: 15,
    right: 20,
  },
  circle2:{
    width: 30,
    height: 49,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#5969da",
    position: "absolute",
    top: 15,
    right: 20,
  }
});
