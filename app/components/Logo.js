
import React, { Component } from 'react';
import { StyleSheet,View,Image,Text} from 'react-native';
import Color from '../conf/Color';


export default class Logo extends Component {

   render() {
    
    return ( 
        <View style={styles.container}>
         <Image  style={{width:100,height:100,borderRadius:15}} source={require("../Images/samurdhi.jpg")}></Image>
         <Text style={styles.logoText}>Samurdhi e-Collector</Text>
        </View> 
    );

   }

}

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        marginTop:150,
        paddingBottom:100,
    },
    logoText:{
        fontSize:24,
        color:Color.purple,
        marginVertical:15,
    },
});





