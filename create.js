import React, {Component} from 'react';

import {StyleSheet, Text, View, Image, TextInput,KeyboardAvoidingView,ImageBackground} from 'react-native';

import CustomButton from './CustomButton';
import create from './create'
import {createStackNavigator, createAppContainer } from 'react-navigation';

export default class Login extends Component{
  render() {
    const { navigation }=this.props;
    return (
      <ImageBackground source={{uri:'http://img.chuing.net/i/pNeVVN/Preview.x.jpg'}} style={styles.backgroundContainer}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.header} />
          <View style={styles.title}>
            <Text style={{fontSize:40,fontWeight:'700',color:'white'}}>DOICE</Text>           
          </View>
          <View style={{justifyContent:'center',alignItems:'center',paddingBottom:10}}>
              <Text style={{fontSize:20,color:'white',paddingBottom:20}}>REGISTER</Text>          
          </View>
          <View style={styles.content}>
            <View style={{justifyContent:'center',alignItems:'center',paddingBottom:10}}>             
              <TextInput  onSubmitEditing={()=>this.passwordInput.focus()}
                          autoCapitalize="none"
                          style={{borderColor: '#aaa', width:'80%', height:40, borderWidth: 1, borderRadius: 20, padding:10,paddingLeft:10}}
                          placeholder='Email'
                          placeholderTextColor='white'/>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',paddingBottom:10}}>
              
              <TextInput  secureTextEntry 
                          autoCapitalize="none"
                          ref={(input)=>this.passwordInput=input}
                          style={{borderColor: '#aaa', width:'80%', height:40, borderWidth: 1, borderRadius: 20, padding:10,paddingLeft:10}}
                          placeholder='Password'
                          placeholderTextColor='white'
                          />
            </View>
          </View>
          <View style={styles.footer}>
          <CustomButton
            buttonColor={'rgba(255,255,255,0.2)'}
            title={'생성'}
            onPress={() => navigation.goBack()}/>

            <CustomButton
              buttonColor={'#444'}
              title={'취소'}
              onPress={() => navigation.goBack()}/>                      
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>  
      );
    }


  }


const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },

  container: {
    flex: 1,
    padding: 10,
    
  },

  header: {
    width:'100%',
    height:'13%',
    //backgroundColor: '#ff9a9a',
  },
  title: {
    width:'100%',
    height:'18%',
    justifyContent: 'center',
    alignItems:'center',
    //backgroundColor: '#9aa9ff',
  },
  content: {
    width:'100%',
    height:'18%',
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:30,
    //backgroundColor: '#d6ca1a',
  },
  footer: {
    width:'100%',
    height:'20%',
    justifyContent: 'center',
    alignItems:'center',
    //backgroundColor: '#1ad657',
  },
});

