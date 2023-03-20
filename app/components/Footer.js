
import React, { Component } from 'react';
import { StyleSheet,View,Image,Text} from 'react-native';


export default class Footer extends Component {

   render() {
    
    return ( 
        <View style={styles.container}>
        
         <Image  style={{width:300,height:30}} source={require("../Images/footerLogo.png")}></Image>
         
        </View> 
    );

   }

}

const styles = StyleSheet.create({
    
    container:{
        marginTop:70,
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
       // backgroundColor:"#5D1049",
    },
    logoText:{
        fontSize:18,
        color:'rgba(255,255,255,0.7)',
        marginVertical:15,
    },
});





