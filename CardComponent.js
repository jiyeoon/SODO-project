import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity ,StatusBar} from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Title,Container,Header } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {createStackNavigator, createAppContainer } from 'react-navigation';
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";


export default class CardCompnent extends Component{
  static defaultProps = {
    onPress: () => null,
  }

  constructor(props){
    super(props);
  }

    render(){
      
      return (
       
            <View style={{ flex:1, backgroundColor: 'white'}}>                              
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={this.props.Imageuri} />
                    <Body>
                      <Text>{this.props.ID}</Text>
                      <Text note>Jan 21, 2019</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Text>
                    <Text style={{ fontWeight:'900'}}>{this.props.ID}</Text>
                      {this.props.text}
                    </Text>
                  </CardItem>
                <CardItem style={{ height:45 }}>
                  <Left>             
                    <Button transparent onPress={this.props.Message} >
                      <Ionicons name='ios-send' style={{ color:'black' }} onPress={() => { navigation.navigate('main'); }}/>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
          </View>
      );
    }
  }

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});