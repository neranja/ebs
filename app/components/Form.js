
import React, { Component } from 'react';
import { StyleSheet,View,Image,TextInput,Text, TouchableOpacity,} from 'react-native';




export default class Form extends Component {

    constructor(props) {
  
        super(props)
        this.state={
          username:'',
          password:''
          
        }
      }
    
      onLogin(){
        const {username, password} = this.state;
        navigation.navigate('Login');
        console.log(username,password);
      }

   render() {
    
    return ( 
        <View style={styles.container}>

        <TextInput 
        style={styles.textInputBox}
         placeholder='Username'
         value={this.state.username}
         onChangeText={(value)=>this.setState({username:value})}>
         </TextInput>

        <TextInput 
        style={styles.textInputBox} 
        placeholder='Password'
        secureTextEntry={true}
        value={this.state.password}
        onChangeText={(value)=>this.setState({password:value})}>
        </TextInput>

        <TouchableOpacity style={styles.button} onPress={()=>this.onLogin()}>
            <Text style={styles.buttonText}
             >Login
             </Text>
        </TouchableOpacity>

        

        </View> 
    );

   }

}

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor:'#5D1049',
    },
    textInputBox:{
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        padding:10,
        borderRadius:10,
        marginVertical:5,
    },
    button:{
        width:300,
        backgroundColor:'rgba(255,255,255,0.8)',
        borderRadius:10,
        marginVertical:10,
        paddingVertical:13,

    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#5D1049',
        textAlign:'center',

    },
    
});





