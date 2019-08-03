import React, {Component} from 'react';

import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import login from "./login"
import CustomButton from './CustomButton';
import create from './create'
import {createStackNavigator, createAppContainer } from 'react-navigation';
import { firstFromTime } from 'uuid-js';
import MainScreen from './MainScreen';
import board from "./board";
import { componentFromProp } from 'recompose';
import MinMaxTextInput  from './AppTabNavigator/MinMaxTextInput'
import add from './AppTabNavigator/HomeTab';

const AppStackNavigator = createStackNavigator({
  main:{screen:MainScreen},
  HOME: {screen: login},
  second:{screen:create},
  card:{screen:add},
  
  },
  { initialRouteName:"HOME",headerMode:"null"}
  );//시작페이지 설정

export default createAppContainer(AppStackNavigator);//stack에 쌓아두고 이동

