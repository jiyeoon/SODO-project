import React, {Component} from 'react';

import {StyleSheet, Text, View, Image, TextInput} from 'react-native';

import CustomButton from './CustomButton';
import create from './create'
import {createStackNavigator, createAppContainer } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

export default class Login extends Component{
  render() {
    const { navigation }=this.props;
    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={{fontSize:20,paddingBottom:20}}>DOICE</Text>
          <View style={{width:"100%",borderBottomWidth:0.5,borderColor:'#444'}} />
        </View>
        <View style={styles.content}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:15}}>ID</Text>
            <TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:15}}>PASSWARD</Text>
            <TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
        </View>
        <ScrollView scrollEventThrottle={16}>
          <View style={{flex:1,backgroundColor:'white',paddingTop:20}}>
            <Text style={{fontSize:32,fontWeight:'700',paddingHorizontal:20}}>
              BEST ANSWER
            </Text>
            <View style={{height:130,marginTop:20}}>
              <ScrollView>
                <View style={{height:130,width:130}}>
                  <View style={{flex:2}}>

                  </View>
                  <View style={{flex:1}}>
                    
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: 'white',
  },

  header: {
    width:'100%',
    height:'20%',
    justifyContent: 'center',
    alignItems:'center',
  },
  
  content: {
    flex: 1,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:30,
    //backgroundColor: '#d6ca1a',
  },
  footer: {
    width:'100%',
    height:'20%',
    //backgroundColor: '#1ad657',
  },
});