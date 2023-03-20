import React from 'react';
import { FlatList,StyleSheet, View,Image,Button,TouchableOpacity,Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Constants from 'expo-constants';

import Card from '../components/Card';
import Screen from '../components/Screen';
import Color from '../conf/Color';
import AppText from '../components/AppText';
import AppFormFild from '../components/AppFormFild';
import SubmitButton from '../components/SubmitButton';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
//102130904100304
const Listing=[{
    id:1,
     title:'Account Inquiry',
     url:'Account',
    // price:'100',
    image:require('../Images/acc1.jpg'),
},
{
    id:2,
    title:'Add New Feild Collection',
    url:'Account',
    //price:'100',
    image:require('../Images/col.jpg'),
},
{
    id:3,
    title:'Customer Inquiry',
    url:'Login',
   // price:'100',
    image:require('../Images/cus.jpg'),
},
{
    id:4,
    title:'About Samurdhi Department',
    url:'Account',
    //price:'100',
    image:require('../Images/index.jpg'),
}]

const validationSchema=Yup.object().shape({
    accountNo:Yup.string().required().label("AccountNo"),
   // password:Yup.string().required().min(4).label("Password")
  })

function UserDetails({navigation,route,token,branchId,id,name,branchName,username1}) {

   // console.log('dff',Constants);
    var id=route.params.params.id;
    var token=route.params.params.token;
    var branchId=route.params.params.branchId;
    var name=route.params.params.name;
   var branchName= route.params.params.branchName;
    var username1 =route.params.params.username1;
    //console.log('sdsd1234',branchId);
    return (
    
        <Screen style={styles.screen}>
             <View style={styles.card} >
            
            
        </View>
        <Formik
          initialValues={{accountNo:""}}
           onSubmit={ (values)=>{
              var accountNo =values.accountNo;
             // var branchId=branchId;
              


            fetch('http://43.224.125.87:8181/ebs-rest/api/mobile/acc _details', {
  method: 'POST',
  headers: {
   // 'Access-Control-Allow-Origin':'http://43.224.125.87:8181',
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token
  },
  body: JSON.stringify({
    'accountNumber':accountNo,
    'branchId':branchId,
  })
}).then(function(res){ 
  // alert('Anouthorized deviced');
  return res.json(); }).then(function(data){ 
   //console.log(data.customerDetails[0].customerCode);
                       var accountStatus1=data.accountStatus;
                        //    status=1;
                          // token=data.token;
                         var accountNumber1=data.accountNumber;
                         var customerName1=data.customerDetails[0].customerName;
                          var customerCode1=data.customerDetails[0].customerCode;
                         var nicNumber1=data.customerDetails[0].nicNumber;
                         var accountBalance1=data.accountBalance;

                          navigation.navigate("Account",{params:{token: token,id:id,accountStatus:accountStatus1,
                            accountNumber:accountNumber1,customerName:customerName1,customerCode:customerCode1,nicNumber:nicNumber1,accountBalance:accountBalance1,branchId:branchId}})
                        //   username1=data.username;
                        //   name=data.name;
                        //  branchName=data.branchName;
                        //   branchId=data.branchId;
                        // console.log(token);
                          if(token!=undefined){
                           // navigation.navigate("Listing",{navigation:navigation,params: { token: token}})
                          }else{
                            
                          }
         // alert( JSON.stringify( data ) )
})
            
            }}
         // onSubmit={values=>console.log(values),alert(),()=>{if(1==1){navigation.navigate("Listing")}else{console.log('test')}}}
          validationSchema={validationSchema} >
            {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>
            <>
          
            
         <View style={styles.card} >
            <View >
            <AppText style={styles.title}>User Details</AppText>
            </View>
            
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/accNo.png")}></Image>
            <AppText>&nbsp;Username</AppText><AppText>&nbsp;:&nbsp;{username1}</AppText>
            </View>
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/custo.png")}></Image>
            <AppText>&nbsp;Officer Name</AppText><AppText>&nbsp;:&nbsp;{name}</AppText>
            </View>
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/cusNo.png")}></Image>
            <AppText>&nbsp;branchName</AppText><AppText>&nbsp;:&nbsp;{branchName}</AppText>
            </View>
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/cusNo.png")}></Image>
            <AppText>&nbsp;Deviece Name</AppText><AppText>&nbsp;:&nbsp;{Constants.deviceName}</AppText>
            </View>
           

           
            <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity style={[styles.button]} onPress={()=>navigation.navigate("Login")}>
            <Text style={styles.text}>LogOut</Text>
        </TouchableOpacity>
            
            </View>

            
            {/* <View style={{ flexDirection: 'row'}}>
            <SubmitButton style={{width:100}} title="Withdrawal" onPress={()=>navigation.navigate("Deposit",{params:{token:token,branchId:branchId,id:id,accountNumber:accountNumber2}})} />
            </View> */}

            <View>

            </View>
            
        </View>

            </>}
          </Formik>
         <Footer/>
        </Screen>
        
        
    );
}

const styles = StyleSheet.create({
    screen:{
    padding:15,
    backgroundColor:Color.light,
    },
    card:{
        marginTop:10,
        borderRadius:15,
        backgroundColor:Color.white,
        marginBottom:10,
        overflow:"hidden",

    },
    title:{
        color:Color.purple,
        marginBottom:2,
        alignContent:"center",
        justifyContent:"center",
        textAlign:"center",
        fontSize:24,
    },
    button: {
        backgroundColor:Color.purple,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        width:'100%',
        marginBottom:10,
      },
      text:{
        color:Color.white,
        fontSize:18,
        textTransform:'uppercase',
        fontWeight:'bold',
  
      }
   
    
   
})

export default UserDetails;