import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ListingsScreen from "./ListingsScreen";

import Logo from "../components/Logo";
import Form from "../components/Form";
import Footer from "../components/Footer";
class Login extends Component {
  constructor(props) {
  
    super(props)
    this.state={
      username:'',
      password:''
      
    }
  }

  onLogin(){
    const {username, password} = this.state;
    const Stack=createStackNavigator();
<Stack.Navigator >
    <Stack.Screen name="Listing" component={ListingsScreen} />
  </Stack.Navigator>


    console.log(username,password);
  }

   render() {
    const {username, password} = this.state;
    return ( 

   <View style={styles.container}>
   <StatusBar backgroundColor="#4E0D3A"></StatusBar>
   <View >
   <Logo/>
   <Form/>
   <Footer/>
   </View>   
   </View>

    );

   }

}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent:"flex-end",
        alignItems: "center",
    },
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor:'#5D1049',
    },
    login:{
        fontWeight:'bold',
        fontSize:30,
        textAlign: 'center',
        color:'grey',
    },
    textInput:{
        elevation:3,
        padding:10,
        borderRadius:10,
        backgroundColor:'#FFF',
        marginBottom:10,
        width:220,
    },
    loginButton:{
        width: "100%",
        height: '70px',
        alignItems: "center",
        backgroundColor:"#ff00ff",
    },
});
export default Login;
