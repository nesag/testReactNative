import React, { Component, PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Wallpaper from '../components/Wallpaper';
import Logo  from '../components/Logo';
import Form  from '../components/Form';
import ButtonSubmit from '../components/form/ButtonSubmit';
import SignupSection from '../components/form/SignupSection';

export default class Login extends Component<{}>{
  render(){
    return (
     <Wallpaper>
          <Logo />
          <Form />
          <SignupSection/>
          <ButtonSubmit/>
      </Wallpaper>
    )
  }
}

const styles = StyleSheet.create({
  
   container:{
     flex: 1,
     backgroundColor: '#929292',
     alignItems: 'center',
     justifyContent: 'center'
   },
  generalTex:{
    color: '#ffffff',
    fontSize: 23
  }, 
  singupTextCont:{
    flexGrow:1,
    alignItems:'flex-end',
    justifyContent:'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  singupText:{
    color:'rgba(255,255,255,0.7)',
    fontSize:16
  },
  singupButton:{
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500'
  }, 
});