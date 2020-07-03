import React from 'react';
import {View, StyleSheet, Text,TouchableOpacity, ImageBackground} from 'react-native';
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

export default function DrawerComponent({props,navigation}) {
  return (
    <DrawerContentScrollView {...props} style={styles.menulist}>
        <TouchableOpacity style={styles.item}>
          <ImageBackground
            source={require('../Icon/star.png')}
            style={styles.img}
          />
          <View style={styles.text}>
            <Text style={styles.font}>Rate</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Store')}>
          <ImageBackground
            source={require('../Icon/store.png')}
            style={styles.img}
          />
          <View style={styles.text}>
            <Text style={styles.font}>Store</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <ImageBackground
            source={require('../Icon/ourproducts.png')}
            style={styles.img}
          />
          <View style={styles.text}>
            <Text style={styles.font}>Our Products</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <ImageBackground
            source={require('../Icon/feedback.png')}
            style={styles.img}
          />
          <View style={styles.text}>
            <Text style={styles.font}>Feedback</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <ImageBackground
            source={require('../Icon/share.png')}
            style={styles.img}
          />
          <View style={styles.text}>
            <Text style={styles.font}>Share</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <ImageBackground
            source={require('../Icon/followus.png')}
            style={styles.img}
          />
          <View style={styles.text}>
            <Text style={styles.font}>Follow us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <ImageBackground
            source={require('../Icon/about.png')}
            style={styles.img}
          />
          <View style={styles.text}>
            <Text style={styles.font}>About</Text>
          </View>
        </TouchableOpacity>
      {/* <View style={styles.item1}><DrawerItemList {...props} /></View> */}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  menulist: {
    backgroundColor: '#3f2c52',
    width: 230,
    padding: 25,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: 180,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    width: 100,
    alignContent: "center",
    alignItems: 'center',
  },
  font:{
    color: '#84578e',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: "bold",
  },
  img:{
    width: 30,
    height: 30,
    marginLeft: 20
  },
});
