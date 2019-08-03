import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Font } from 'expo';
import { createAppContainer, createStackNavigator,createBottomTabNavigator } from 'react-navigation';



const AppTabNavigator = createBottomTabNavigator({
    HomeTab: { screen: HomeTab },
    SearchTab: { screen: SearchTab },
    AddMediaTab: { screen: AddMediaTab },
    LikesTab: { screen: LikesTab },
    ProfileTab: { screen: ProfileTab },
  });
  const AppContainer = createAppContainer(AppTabNavigator);
  export default AppContainer;//import {} x없이 사용해야한다 모듈당 한개의 default 값이 있어야한다
  