import React, { Component } from 'react'
import { Text, View, StyleSheet,Button,ImageBackground,TouchableOpacity } from 'react-native'

export default class PresentPerfect extends Component {
    constructor(props){
        super(props);  
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
        const {navigation} = this.props;
        return (     
          <View>
          { this.state.status2 ? <View>
              <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                <View style={styles.item}>
                  <Text style={styles.text1}>Present perfect</Text>
                  <View style={styles.circle}></View>
                </View>
              </TouchableOpacity>
            </View> : null
          }
          { this.state.status ? <View>
              <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                <View style={styles.item2}>
                  <Text style={styles.text2}>Present perfect</Text>
                  <View style={styles.circle2}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('PPForPastExp')}>
                <View style={styles.item3}>
                  <Text style={styles.text3}>Present perfect for past experiences </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('PPForPreRes')}>
                <View style={styles.item3}>
                  <Text style={styles.text3}>Present perfect with present results </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('JustAlreadyYet')}>
                <View style={styles.item3}>
                  <Text style={styles.text3}>Present perfect with just. already, yet </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('ForSince')}>
                <View style={styles.item3}>
                  <Text style={styles.text3}>Present perfect With far, Since, etc. </Text>
                  <Text style={styles.text4}></Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('PPorPastS')}>
                <View style={styles.item3}>
                <Text style={styles.text3}>Present perfect or past simple? </Text>
                  <Text style={styles.text4}></Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('PPContinuous')}>
                <View style={styles.item3}>
                  <Text style={styles.text3}>Present perfect continuous </Text>
                  <Text style={styles.text4}></Text>
                  <Text style={styles.text3}></Text>
                  <Text style={styles.text4}></Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('PPorPPContinuous')}>
                <View style={styles.item3}>
                  <Text style={styles.text4}>Present perfect or present perfect continuous? </Text>
                  <Text style={styles.text3}></Text>
                  <Text style={styles.text4}></Text>
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
    backgroundColor: "#c853ee",
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
    color: '#c853ee',
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
    backgroundColor: "#c853ee",
    position: "absolute",
    top: 15,
    right: 20,
  }
});
