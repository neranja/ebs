import React ,{ Component} from 'react';
import {StyleSheet, View,Image, ImageBackground, Button} from 'react-native';
import Constants from 'expo-constants';
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Formik } from 'formik';
import * as Yup from 'yup';

import From from '../components/Form';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';
import AppFormFild from '../components/AppFormFild';
import SubmitButton from '../components/SubmitButton';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

const validationSchema=Yup.object().shape({
  username:Yup.string().required().label("Username"),
  password:Yup.string().required().min(4).label("Password")
})
//alert('',Constants.installationId);
function LoginScreen({navigation}) {
var deviceId=Constants.installationId;
//  console.log(deviceId);
    return (
      <ImageBackground source={require("../Images/login.png")}>
        <Screen style={styles.container}>
         
        {/* <Image  style={styles.logo} source={require("../Images/samurdhi.jpg")}></Image> */}
          <Formik
          initialValues={{username:"",password:""}}
           onSubmit={ (values)=>{
              var username =values.username;
              var password =values.password;


            fetch('http://43.224.125.87:8181/ebs-rest/api/auth/signin', {
  method: 'POST',
  headers: {
   // 'Access-Control-Allow-Origin':'http://43.224.125.87:8181',
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    'username':username,
    'password':password,
    'imeiNumber':deviceId
   // 'imeiNumber':"0a5f8bb6-83af-48ec-bfe6-298067c0861d"
  })
}).then(function(res){ 
  
 

  if(res.status==401){
    alert('Unauthorized device or invalid username/Password. - '+deviceId);

  }

   
  return res.json(); }).then(function(data){ 
    
  
                         //  status=1;
                        var  token=data.token;
                       var  type=data.type;
                        var   id=data.id;
                         var  username1=data.username;
                         var name=data.name;
                       var  branchName=data.branchName;
                        var  branchId=data.branchId;

                        
                         console.log(token);
                          if(token!=undefined){
                            navigation.navigate("Listing",{navigation:navigation,params: { token: token,branchId:branchId,id:id,username1:username1,name:name,branchName:branchName}})
                          }else{
                            alert('Unauthorized device or invalid username/Password. - '+deviceId);
                          }
         // alert( JSON.stringify( data ) )
})


          //  alert('call');
            }}
         // onSubmit={values=>console.log(values),alert(),()=>{if(1==1){navigation.navigate("Listing")}else{console.log('test')}}}
          validationSchema={validationSchema} >
            {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>
            <>
            <Logo/>
            <AppFormFild
         icon="email"
         name="username"
onChangeText={handleChange("username")}
      //   onBlur={()=>setFieldTouched("username")}
         placeholder="Username"/>
{/* <ErrorMessage error={errors.username} visible={touched.username}/> */}
         <AppFormFild
         icon="lock"
         name="password"
//onChangeText={handleChange("password")}
//onBlur={()=>setFieldTouched("password")}
         placeholder="Password"
         secureTextEntry={true}
         textContentType="Password"/>
         {/* <ErrorMessage error={errors.password} visible={touched.password}/> */}
          {/* <AppButton title="Login" onPress={()=>navigation.navigate("Listing")}/>  */}
         <SubmitButton  title="Login" /> 
         

            </>}
          </Formik>
         <Footer/>
         
        </Screen>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    logo: {
      flex: 1,
      width: 100,
      height:100,
      borderRadius:15,
      alignItems: "center",
      alignSelf:"center",
      marginTop:50,
      marginBottom:20,
    },
    container:{
      padding:15,
    },
  });

export default LoginScreen;