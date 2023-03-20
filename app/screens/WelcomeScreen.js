import React ,{Component }from 'react';
import {StyleSheet,View,Text,Image, ImageBackground}  from "react-native";

import AppButton from '../components/AppButton';


function WelcomeScreen(props) {
    return (
      <ImageBackground style={styles.backGround} source={require("../Images/login.png")}>
          <View style={styles.container}>
            <Image  style={styles.logo} source={require("../Images/samurdhi.jpg")}/> 
            <Text style={styles.logoText}>Samurdhi Recovary App</Text>
      <AppButton title="Login" onPress={()=>console.log("Tapped")}/>
      <AppButton title="Register" color="secondary" onPress={()=>console.log("Tapped")}/>
    </View>  
    </ImageBackground>
       
    );
}
const styles = StyleSheet.create({
    backGround:{
      flex:1,
      justifyContent:'flex-end',
      width:'100%',
      height:'100%',
      
    },
    container: {
      flex: 1,
     // backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
        width: 80,
        height:80,
        alignItems: "center",
        marginTop:50,
        marginBottom:20,
      },
    logoText:{
        fontSize:18,
        color:'rgba(255,255,255,0.7)',
        marginVertical:15,
    },
  });
export default WelcomeScreen; 