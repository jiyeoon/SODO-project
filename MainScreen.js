import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import create from './create';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Font } from 'expo';
import { createAppContainer, createStackNavigator,createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

export default AppTabNavigator= createBottomTabNavigator({
  HOME: { 
    screen: HomeTab,
    navigationOptions:{
      tabBarLable:'HOME',
      tabBarIcon:({tintColor})=>(<Ionicons name="ios-home" color={tintColor} size={24}/>)
    }
   },
  MESSAGE: { screen: SearchTab,
    navigationOptions:{
      tabBarLable:'MESSAGE',
      tabBarIcon:({tintColor})=>(<Feather name="message-square" color={tintColor} size={24}/>)
    } 
  },
  QUESTION: { screen: AddMediaTab,
    navigationOptions:{
      tabBarLable:'QUESTION',
      tabBarIcon:({tintColor})=>(<Ionicons name="ios-create" color={tintColor} size={24}/>)
    } 
  },
  CREATE: { screen: create,
    navigationOptions:{
      tabBarLable:'CREATE',
      tabBarIcon:({tintColor})=>(<MaterialCommunityIcons name="account-plus-outline" color={tintColor} size={24}/>)
    }
   },
   PROFILE: { screen: ProfileTab, 
    navigationOptions:{
    tabBarLable:'PROFILE',
    tabBarIcon:({tintColor})=>(<MaterialCommunityIcons name="account" color={tintColor} size={24}/>)
  } 
 }
},{tabBarOptions:{
  activeTintColor:'red',
  inactiveTintColor:'grey',
  style:{
    backgroundColor:'white',
    borderTopWidth:0,
    shadowOffset:{width:5,height:3},
    shadowColor:'black',
    shadowOpacity:0.5,
    elevation:5 
  }
}}

);
const AppContainer = createAppContainer(AppTabNavigator);
//export default AppContainer; import {} x없이 사용해야한다 모듈당 한개의 default 값이 있어야한다

 class MainScreen extends Component {
   
    // navigationOptions 코드 추가
    static navigationOptions = {
      headerLeft: <Ionicons name='ios-camera' style={{ paddingLeft:10 }}/>,
      title: 'Instagram',
      headerRight: <Ionicons name='ios-send' style={{ paddingRight:10 }}/>,
    }
  
  render(){
    const { navigation }=this.props;
    return(
      
    <AppContainer>
      
    </AppContainer>
  );
  } 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
