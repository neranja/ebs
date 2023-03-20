import React,{useState,useEffect} from 'react';
import { FlatList,StyleSheet, View,Image,Button,TouchableOpacity,Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {Picker} from '@react-native-picker/picker';

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
    accountNo:Yup.string().required().label("NIC/Customer Number"),
   // password:Yup.string().required().min(4).label("Password")
  })

function CustomerInq({navigation,route,token,branchId,id}) {

    
    var id=route.params.params.id;
    var token=route.params.params.token;
    var branchId=route.params.params.branchId;
    var accountStatus2=route.params.params.accountStatus;
   var accountNumber2= route.params.params.accountNumber;
    var customerName2 =route.params.params.customerName;
    var customerCode2=route.params.params.customerCode;
    var nicNumber=route.params.params.nicNumber;
    var dipType1=route.params.params.dipType;
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
    
        <Screen style={styles.screen}>
             <View style={styles.card} >
            <View >
            <AppText style={styles.title}>Customer Inquiry</AppText>
            </View>
            
        </View>
        <Formik
          initialValues={{accountNo:"",dipType:""}}
           onSubmit={ (values)=>{
              var cusNo =values.accountNo;
              var dipType=selectedLanguage;
             // console.log(dipType);
             // var branchId=branchId;
              


            fetch('http://43.224.125.87:8181/ebs-rest/api/mobile/search customer', {
  method: 'POST',
  headers: {
   // 'Access-Control-Allow-Origin':'http://43.224.125.87:8181',
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token
  },
  body: JSON.stringify({
    'numberType':dipType,
    'nicNo':cusNo,
    'customerNo':cusNo,
    'branchId':branchId,
    'officerId':id,
  })
}).then(function(res){ 
  // alert('Anouthorized deviced');
  return res.json(); }).then(function(data){ 
   //console.log(data.customerDetails.customerCode);
                       var  customerName=data. customerName;
                        //    status=1;
                          // token=data.token;
                         var accountNumber1=data.accountNumber;
                         var customerName1=data.customerDetails.customerName;
                          var customerCode1=data.customerDetails.customerCode;
                         var nicNumber1=data.customerDetails.nicNumber;

                          navigation.navigate("Customer Inquiry",{params:{token: token,id:id,customerName:customerName1,customerCode:customerCode1,nicNumber:nicNumber1,branchId:branchId,dipType:dipType,cusNo:cusNo}})
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
            <Picker 
             name="dipType"
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item style={{fontSize:20,color:'#007500'}} label="--Please select a Type--" value="" />
  <Picker.Item style={{fontSize:20,color:'#007500'}} label=" NIC" value="1" />
  <Picker.Item style={{fontSize:20,color:'#00A300'}} label=" Customer number" value="2" />
</Picker> 
            <AppFormFild
         icon="email"
         name="accountNo"
onChangeText={handleChange("accountNo")}
      //   onBlur={()=>setFieldTouched("username")}
         placeholder="NIC/Customer Number"/>



{/* <ErrorMessage error={errors.username} visible={touched.username}/> */}
         
         {/* <ErrorMessage error={errors.password} visible={touched.password}/> */}
          {/* <AppButton title="Login" onPress={()=>navigation.navigate("Listing")}/>  */}
         <SubmitButton  title="Search" /> 

         
         </View>

         <View style={styles.card} >
            <View >
            <AppText style={styles.title}>Customer Details</AppText>
            </View>
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/1786640.png")}></Image>
            <AppText>&nbsp; Customer Name</AppText><AppText style={{flexShrink: 2}}>&nbsp;:&nbsp;{customerName2}</AppText>
            </View>
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/accNo.png")}></Image>
            <AppText>&nbsp; Customer Code</AppText><AppText>&nbsp;:&nbsp;{customerCode2}</AppText>
            </View>
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/nic.png")}></Image>
            <AppText>&nbsp;  NIC Number</AppText><AppText>&nbsp;:&nbsp;{nicNumber}</AppText>
            </View>
            {/* <View style={{ flexDirection: 'row',padding:5}}>
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
            </View> */}

            <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity style={[styles.button]} onPress={()=>navigation.navigate("Account details",{navigation:navigation,params:{token:token,branchId:branchId,id:id,dipType1:dipType1,customerCode2:customerCode2}})}>
            <Text style={styles.text}> Account Details</Text>
        </TouchableOpacity>
            
            </View>

            <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity style={[styles.button]} onPress={()=>navigation.navigate("Loan Details",{navigation:navigation,params:{token:token,branchId:branchId,id:id,dipType1:dipType1,customerCode2:customerCode2}})}>
            <Text style={styles.text}> Loan details</Text>
        </TouchableOpacity>
            
            </View>

            <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity style={[styles.button]} onPress={()=>navigation.navigate("Mobile Number Update",{navigation:navigation,params:{token:token,branchId:branchId,id:id,customerCode2:customerCode2,customerName2:customerName2}})}>
            <Text style={styles.text}> Update Mobile Number</Text>
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
        fontSize:14,
        textTransform:'uppercase',
        fontWeight:'bold',
  
      }
   
    
   
})

export default CustomerInq;