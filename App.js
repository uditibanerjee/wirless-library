import React, { Component } from 'react';
import { Text,View } from 'react-native';
import {createAppContainer, CreateAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import transactionscreen from './screens/transactionscreen'
import searchscreen from './screens/searchscreen'

export default class App extends Component{
   render(){
     return(
      <AppContainer/>
     )
 
   }
}

const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:transactionscreen},
  Search:{screen:searchscreen},
})

const AppContainer=createAppContainer(TabNavigator);




