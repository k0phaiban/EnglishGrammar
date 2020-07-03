/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HomeScreen from './src/Components/HomePage/HomeScreen'
import {name as appName} from './app.json';

// import {StackNavigator} from 'react-navigation'

// const App = StackNavigator({
//     "HomeScreen":{
//         screen: HomeScreen,
//     }
// })

AppRegistry.registerComponent(appName, () => App);
