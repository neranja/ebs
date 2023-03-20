import React, { useEffect, useState } from 'react';
import { FlatList,StyleSheet, View,Image,Button,TouchableOpacity,Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Card from '../components/Card';
import CardTrans from '../components/CardTrans';
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

function AccountInquiry({navigation,route,token,branchId,id}) {

  const [Listing, setlisting] = useState([]);
    var id=route.params.params.id;
    var token=route.params.params.token;
    var branchId=route.params.params.branchId;
    var accountStatus2=route.params.params.accountStatus;
   var accountNumber2= route.params.params.accountNumber;
    var customerName2 =route.params.params.customerName;
    var customerCode=route.params.params.customerCode;
    var nicNumber=route.params.params.nicNumber;
    var accountBalance=route.params.params.accountBalance;
    var validAccNumber1=route.params.params.validAccNumber;
    var allowedWithdraw1=route.params.params.allowedWithdraw;


    
      
    //console.log('sdsd12345',validAccNumber1);
    return (
    
        <Screen style={styles.screen}>
             <View style={styles.card} >
            <View >
            <AppText style={styles.title}>Account Inquiry</AppText>
            </View>
            
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
   //console.log(data);
                       var accountStatus1=data.accountStatus;
                           //    status=1;
                          // token=data.token;
                          var validAccNumber=data.validAccNumber;
                         var allowedWithdraw=data.allowedWithdraw;
                         var accountNumber1=data.accountNumber;
                         var customerName1=data.customerDetails[0].customerName;
                          var customerCode1=data.customerDetails[0].customerCode;
                         var nicNumber1=data.customerDetails[0].nicNumber;
                         var accountBalance1=data.accountBalance;
                         var validAccNumber=data.validAccNumber;
                         var allowedWithdraw=data.allowedWithdraw;

                          navigation.navigate("Account",{params:{token: token,id:id,accountStatus:accountStatus1,validAccNumber:validAccNumber,
                            accountNumber:accountNumber1,customerName:customerName1,customerCode:customerCode1,nicNumber:nicNumber1,accountBalance:accountBalance1,branchId:branchId,allowedWithdraw:allowedWithdraw}})
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
         icon="email"
         name="accountNo"
         keyboardType='numeric'
onChangeText={handleChange("accountNo")}
      //   onBlur={()=>setFieldTouched("username")}
         placeholder="Account Number"/>
{/* <ErrorMessage error={errors.username} visible={touched.username}/> */}
         
         {/* <ErrorMessage error={errors.password} visible={touched.password}/> */}
          {/* <AppButton title="Login" onPress={()=>navigation.navigate("Listing")}/>  */}
         <SubmitButton  title="Search" /> 

         
         </View>
         {validAccNumber1!=true&&<View style={styles.card} >
            <View >
            <AppText style={styles.title}>Account Details</AppText>
            </View>
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:25,height:25}} source={require("../Images/invalid.png")}></Image>
            <AppText style={{color:'#DF274C'}}>&nbsp;&nbsp;&nbsp;{"invalid account"}</AppText>
            </View>
            </View>}
         {validAccNumber1==true&&<View style={styles.card} >
            <View >
            <AppText style={styles.title}>Account Details</AppText>
            </View>
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/1786640.png")}></Image>
            <AppText>&nbsp;Account Status</AppText><AppText>&nbsp;:&nbsp;{accountStatus2}</AppText>
            </View>
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/accNo.png")}></Image>
            <AppText>&nbsp;Account Number</AppText><AppText>&nbsp;:&nbsp;{accountNumber2}</AppText>
            </View>
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/custo.png")}></Image>
            <AppText>&nbsp;Customer Name</AppText><AppText style={{flexShrink: 2}}>&nbsp;:&nbsp;{customerName2}</AppText>
            </View>
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/cusNo.png")}></Image>
            <AppText>&nbsp;Customer Number</AppText><AppText>&nbsp;:&nbsp;{customerCode}</AppText>
            </View>
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/nic.png")}></Image>
            <AppText>&nbsp;NIC</AppText><AppText>&nbsp;:&nbsp;{nicNumber}</AppText>
            </View>

            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/money.png")}></Image>
            <AppText>&nbsp;Account Balance</AppText><AppText>&nbsp;:&nbsp;{accountBalance}</AppText>
            </View>

            

            

            
            {/* <View style={{ flexDirection: 'row'}}>
            <SubmitButton style={{width:100}} title="Withdrawal" onPress={()=>navigation.navigate("Deposit",{params:{token:token,branchId:branchId,id:id,accountNumber:accountNumber2}})} />
            </View> */}

<View style={{ flexDirection: 'row'}}>
            <TouchableOpacity style={[styles.button]} onPress={()=>navigation.navigate("Transaction List",{navigation:navigation,params:{token:token,branchId1:branchId,id:id,accountNumber:accountNumber2}})}>
            <Text style={styles.text}>Last 5 Transaction</Text>
        </TouchableOpacity>
            </View>
            
           <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity style={[styles.button]} onPress={()=>navigation.navigate("Deposit",{navigation:navigation,params:{token:token,branchId1:branchId,id:id,accountNumber:accountNumber2}})}>
            <Text style={styles.text}>Deposit</Text>
        </TouchableOpacity>
            </View>
            {allowedWithdraw1==true&&<View style={{ flexDirection: 'row'}}>
            <TouchableOpacity style={[styles.button]} onPress={()=>navigation.navigate("Withdrawal",{navigation:navigation,params:{token:token,branchId1:branchId,id:id,accountNumber:accountNumber2}})}>
            <Text style={styles.text}>Withdrawal</Text>
        </TouchableOpacity>
            
            </View>}
            
        </View>

        
}
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
        fontSize:20,
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
        fontSize:15,
        textTransform:'uppercase',
        fontWeight:'bold',
  
      }
   
    
   
})

export default AccountInquiry;