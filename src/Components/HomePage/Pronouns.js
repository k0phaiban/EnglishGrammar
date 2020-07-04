import React, { Component } from 'react'
import { Text, View, StyleSheet,Button,ImageBackground,TouchableOpacity } from 'react-native'

export default class Pronouns extends Component {
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
                  <Text style={styles.text1}>Pronouns and possessives</Text>
                  <View style={styles.circle}></View>
                </View>
              </TouchableOpacity>
            </View> : null
          }
          { this.state.status ? <View>
              <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                <View style={styles.item2}>
                  <Text style={styles.text2}>Pronouns and possessives</Text>
                  <View style={styles.circle2}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('SubjectAndObject')}>
                <View style={styles.item3}>
                  <Text style={styles.text3}>Subject and object pronouns </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('PossessiveForms')}>
                <View style={styles.item3}>
                  <Text style={styles.text3}>Possessive forms of nouns </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('PossessiveAdjectives')}>
                <View style={styles.item3}>
                  <Text style={styles.text3}>this. that, these, those </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('ThisThat')}>
                <View style={styles.item3}>
                  <Text style={styles.text3}>Reflexive pronouns  </Text>
                  <Text style={styles.text4}></Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('AnotherOne')}>
                <View style={styles.item3}>
                <Text style={styles.text3}>one/ones. anotherone  </Text>
                  <Text style={styles.text4}></Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('ReflexivePronouns')}>
                <View style={styles.item3}>
                  <Text style={styles.text3}>Reflexive pronouns </Text>
                  <Text style={styles.text4}></Text>
                  <Text style={styles.text3}></Text>
                  <Text style={styles.text4}></Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('IndefinitePronouns')}>
                <View style={styles.item3}>
                  <Text style={styles.text4}>Indefinite pronouns  </Text>
                  <Text style={styles.text3}></Text>
                  <Text style={styles.text4}></Text>
                </View>
              </TouchableOpacity>
              <View style={styles.itemend}>
              <TouchableOpacity style={styles.circletest} onPress={()=>{this.props.navigation.navigate('Test1Nouns')}}>
                  <View style={styles.circletest1}>
                    <ImageBackground
                      source={require('../Icon/Test1.png')}
                      style={styles.icon1}  
                    >                    
                    </ImageBackground>
                    <Text style={styles.texttest}>0%</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circletest} onPress={()=>{this.props.navigation.navigate('Test1Nouns')}}>
                  <View style={styles.circletest1}>
                    <ImageBackground
                      source={require('../Icon/Test2.png')}
                      style={styles.icon1}  
                    >                    
                    </ImageBackground>
                    <Text style={styles.texttest}>0%</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circletest} onPress={()=>{this.props.navigation.navigate('Test1Nouns')}}>
                  <View style={styles.circletest1}>
                    <ImageBackground
                      source={require('../Icon/Test3.png')}
                      style={styles.icon1}  
                    >                    
                    </ImageBackground>
                    <Text style={styles.texttest}>0%</Text>
                  </View>
                </TouchableOpacity>
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
    backgroundColor: "#ee9fde",
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
    color: '#ee9fde',
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
    backgroundColor: "#ee9fde",
    position: "absolute",
    top: 15,
    right: 20,
  },
  circletest:{
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 20,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circletest1:{
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: "#f1f0f1",
    marginRight: 20,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon1:{
    width: 35,
    height: 35
  },
  texttest:{
    color: "#f5b2d9",
    fontSize: 10,
    justifyContent: "center"
  }
});
