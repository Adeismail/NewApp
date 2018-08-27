import React from 'react';
import{
  StyleSheet,
  Text,
  View,
  ImageBackground,

} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login/Login';
import Profile from './Login/Profile';
import Menu from './Login/MenuItem';

const Application = StackNavigator({
  Home: { screen: Login},
  Profile: { screen:Profile}
}, {
  navigationOptions: {
       header: false,
  }

});

export default class App extends React.Component {

  constructor(props){
      super(props)
      this.state={
          userName: '',
          userEmail: '', userPassword: ''
          
      }
  }

  userRegister = () => {
    alert('ok');
  }

  render(){
    return(
      
        <Application/>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayContainer:{
    flex: 1,
    backgroundColor: 'rgba(47,163,218, .4)'
  },
  top: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    color:'#fff',
    fontSize: 28,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .1)'
  },


});