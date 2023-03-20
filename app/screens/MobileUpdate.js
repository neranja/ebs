import React,{useState,useEffect} from 'react';
import { FlatList,StyleSheet, View,Image,Button,TouchableOpacity,Text,ToastAndroid } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
//import SelectDropdown from 'react-native-select-dropdown';
import {Picker} from '@react-native-picker/picker';
//import { FancyAlert } from 'react-native-expo-fancy-alerts';

import Card from '../components/Card';
import Screen from '../components/Screen';
import Color from '../conf/Color';
import AppText from '../components/AppText';
import AppFormFild from '../components/AppFormFild';
import SubmitButton from '../components/SubmitButton';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
//102130904100304
//0776110774






const validationSchema=Yup.object().shape({
    
  mobile:Yup.string().required().min(10).label("Mobile"),
  //mobile:Yup.string().required().max(10).label("Mobile"),
  
 // password:Yup.string().required().min(4).label("Password")
})

function MobileUpdate({navigation,route,token,branchId,id,customerCode2,customerName2}) {

  

  const [visible, setVisible] = React.useState(false);
    const toggleAlert = React.useCallback(() => {
      setVisible(!visible);
    }, [visible]);
    

    var id=route.params.params.id;
    var token=route.params.params.token;
    var branchId=route.params.params.branchId;
    var customerName =route.params.params.customerName2;
    var customerCode=route.params.params.customerCode2;

   

    

   
    
    
   
   // console.log('sdsd123',token);

 //  var response=route.params.params.response;
   
    return (
    
        <Screen style={styles.screen}>
             <View style={styles.card} >
             <View >
            <AppText style={styles.title}>Customer Details</AppText>
            </View>
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/1786640.png")}></Image>
            <AppText>&nbsp; Customer Name</AppText><AppText style={{flexShrink: 2}}>&nbsp;:&nbsp;{customerName}</AppText>
            </View>
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/accNo.png")}></Image>
            <AppText>&nbsp; Customer Code</AppText><AppText>&nbsp;:&nbsp;{customerCode}</AppText>
            </View>
            
            
        </View>
        <Formik
             
          initialValues={{mobile:""}}
           onSubmit={ (values)=>{
              var customerNo =customerCode;
              var mobileNo=values.mobile;
            

            fetch('http://43.224.125.87:8181/ebs-rest/api/mobile/update_mobileNo', {
  method: 'POST',
  headers: {
   // 'Access-Control-Allow-Origin':'http://43.224.125.87:8181',
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token
  },
  body: JSON.stringify({
  //  'officerId':id,
    'customerNo':customerNo,
    'mobileNo':mobileNo,
    'branchId':branchId,
  })
}).then(function(res){ 
  // alert('Anouthorized deviced');
  return res.json(); }).then(function(data){ 

   //console.log('jj',data);

  response =data;
  setPayments(data) ;
 // getReceipt();
 // return response;
  //{toggleAlert};
 
                      //  var accountStatus1=data.accountStatus;
                      //   //    status=1;
                      //      token=data.token;
                      //    var accountNumber1=data.accountNumber;
                      //    var customerName1=data.customerDetails[0].customerName;
                      //     var customerCode1=data.customerDetails[0].customerCode;
                      //    var nicNumber1=data.customerDetails[0].nicNumber;
                      //    var accountBalance1=data.accountBalance;
                  //    ToastAndroid.show("shsjhdsjdhsjhdsjhdjsh");
                  // navigation.navigate("Reciept",{params:{token: token,id:id,accountStatus:accountStatus2,
                  //   accountNumber:accountNumber2,customerName:customerName2,customerCode:customerCode,nicNumber:nicNumber,accountBalance:accountBalance}})
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
         
<View style={styles.card}>
            


           
<AppFormFild
         icon="calculator"
         name="mobile"
         keyboardType='numeric'
onChangeText={handleChange("mobile")}
//onChangeText={this.handleInputTextChange} 
      //  value={this.state.queryText}
      //   onBlur={()=>setFieldTouched("username")}
         placeholder="Mobile Number"/>
{/* <ErrorMessage error={errors.username} visible={touched.username}/> */}
         
         {/* <ErrorMessage error={errors.password} visible={touched.password}/> */}
          {/* <AppButton title="Login" onPress={()=>navigation.navigate("Listing")}/>  */}
         <SubmitButton  title="Proceed" /> 

         
         </View>
         {response&&<View style={styles.card} >
            <View >
            <AppText style={styles.titleSub}>Status</AppText>
            </View>
           <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:25,height:25}} source={require("../Images/Success.png")}></Image>
            <AppText style={{color:'#2A8453'}}>&nbsp;&nbsp;&nbsp;{"Mobile Number Updated."}</AppText>
            </View>
            

            <View>

            </View>

        </View>}
        
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
    titleSub:{
      color:Color.blue,
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
  
      },
      alert: {
        backgroundColor: '#EEEEEE',
      },
      icon: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C3272B',
        width: '100%',
      },
      content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -16,
        marginBottom: 16,
      },
      contentText: {
        textAlign: 'center',
      },
      btn: {
        borderRadius: 32,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 8,
        alignSelf: 'stretch',
        backgroundColor: '#4CB748',
        marginTop: 16,
        minWidth: '50%',
        paddingHorizontal: 16,
      },
      btnText: {
        color: '#FFFFFF',
      }
      
   
})

export default MobileUpdate;