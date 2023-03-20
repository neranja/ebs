import React,{useState,useEffect} from 'react';
import { FlatList,StyleSheet, View,Image,Button,TouchableOpacity,Text,ToastAndroid,Alert } from 'react-native';
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
//102130904100304/130904002065/837705029v

const validationSchema=Yup.object().shape({
  amount:Yup.string().required().label("Amount"),
   // password:Yup.string().required().min(4).label("Password")
  })

function Deposit({navigation,route,token,branchId1,id}) {

  

  var id=route.params.params.id;
    var token=route.params.params.token;
    var branchId=route.params.params.branchId1;
    var accountStatus2=route.params.params.accountStatus;
   var accountNumber2= route.params.params.accountNumber;
    var customerName2 =route.params.params.customerName;
    var customerCode=route.params.params.customerCode;
    var nicNumber=route.params.params.nicNumber;
    var accountBalance=route.params.params.accountBalance;
   var  reciptNo2=route.params.params.reciptNo;
   var saveBut=false;
 
  


  const [visible, setVisible] = React.useState(false);
    const toggleAlert = React.useCallback(() => {
      setVisible(!visible);
    }, [visible]);

    const [recipts,setReciptes]=useState([]);
    const [payments,setPayments]=useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [accountno, setAccountno] =useState();
    const [isLoading, setIsLoading] = useState(false);
   // setAccountno('1234');
   //console.log(selectedLanguage);
   const createTwoButtonAlert = () =>
   Alert.alert('Cancel Reciept', 'Reciept No-'+recipts, [
     {
       text: 'Cancel',
       onPress: () => console.log('Cancel Pressed'),
       style: 'cancel',
     },
     { text: 'Not Match', onPress: () => abc(id,recipts,'Not Match') },
     { text: 'Invalid Data', onPress: () => abc(id,recipts,'Invalid Data') },
   ]);



   function abc(id,recipts,reson){
    fetch('http://43.224.125.87:8181/ebs-rest/api/mobile/cancel_and_new_receipt_number', {
        method: 'post',
        headers: {
         // 'Access-Control-Allow-Origin':'http://43.224.125.87:8181',
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        },
        body: JSON.stringify({
          'receiptNumber':recipts,
          'officerId':id,
          'cancelReason':reson
        })
      }).then(function(res){ 
        return res.json(); }).then(function(data){ 
        // console.log(data)
       // var reciptNo=data; 
       setReciptes(data) 
        //  navigation.navigate("Deposit",{params:{token: token,id:id,branchId:branchId,
        //     reciptNo:reciptNo,accountNumber:accountNumber2,response:response}})
      })
     
   }

   function hideBut(){
    alert('Call');

   }

    useEffect(() => {

      console.log(accountno)
  
    }, [accountno])
    
    
   // console.log('sdsd123',token);

   var response=route.params.params.response;
   getReceipt();
   function getReceipt(){

    fetch('http://43.224.125.87:8181/ebs-rest/api/mobile/get_receipt_number/'+id, {
        method: 'get',
        headers: {
         // 'Access-Control-Allow-Origin':'http://43.224.125.87:8181',
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        }
      }).then(function(res){ 
        return res.json(); }).then(function(data){ 
         
       // var reciptNo=data; 
       setReciptes(data) 
        //  navigation.navigate("Deposit",{params:{token: token,id:id,branchId:branchId,
        //     reciptNo:reciptNo,accountNumber:accountNumber2,response:response}})
      })
    }

    return (
    
        <Screen style={styles.screen}>
          <View style={styles.container}>
      
    </View>
             <View style={styles.card} >
            <View >
            <AppText style={styles.title}>Cash Deposit</AppText>
            </View>
            
        </View>
        <Formik
             
          initialValues={{accountNo:"",amount:"",dipType:""}}
           onSubmit={ (values)=>{
            saveBut=false;

            setIsLoading(true);
              var accountNo =values.accountNo;
              var amount=values.amount;
               var dipType=selectedLanguage;
              var reciptNo=recipts;
           // console.log('dsds',branchId);

            fetch('http://43.224.125.87:8181/ebs-rest/api/mobile/add_collection',{
  method: 'POST',
  headers: {
   // 'Access-Control-Allow-Origin':'http://43.224.125.87:8181',
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token
  },
  body: JSON.stringify({
    'officerId':id,
    'accountNumber':accountNumber2,
    'receiptNo':reciptNo,
    'amount':amount,
    'tranType':dipType,
    'branchId':branchId,
  })
}).then(function(res){ 
  // alert('Anouthorized deviced');
  return res.json(); }).then(function(data){ 

  

  response =data.responseCode;
  setPayments(data) ;
  getReceipt();
  setIsLoading(false);
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
 {payments.responseCode&&<View style={styles.card} >
            <View >
            <AppText style={styles.titleSub}>Payment Status</AppText>
            </View>
            {payments.responseCode=='00'&&<View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:25,height:25}} source={require("../Images/Success.png")}></Image>
            <AppText style={{color:'#2A8453'}}>&nbsp;&nbsp;&nbsp;{"Payment  Success."}</AppText>
            </View>}
            {payments.responseCode=='01'&&<View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:25,height:25}} source={require("../Images/invalid.png")}></Image>
            <AppText style={{color:'#DF274C'}}>&nbsp;&nbsp;&nbsp;{"invalid account"}</AppText>
            </View>}
            {payments.responseCode=='02'&&<View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:25,height:25}} source={require("../Images/invalid.png")}></Image>
            <AppText style={{color:'#DF274C'}}>&nbsp;&nbsp;&nbsp;{"Existing receipt number"}</AppText>
            </View>}
            {payments.responseCode=='03'&&<View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:25,height:25}} source={require("../Images/invalid.png")}></Image>
            <AppText style={{color:'#DF274C'}}>&nbsp;&nbsp;&nbsp;{"System error"}</AppText>
            </View>}
            {payments.responseCode=='04'&&<View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:25,height:25}} source={require("../Images/invalid.png")}></Image>
            <AppText style={{color:'#DF274C'}}>&nbsp;&nbsp;&nbsp;{"User is not a field officer"}</AppText>
            </View>}
            {payments.responseCode=='05'&&<View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:25,height:25}} source={require("../Images/invalid.png")}></Image>
            <AppText style={{color:'#DF274C'}}>&nbsp;&nbsp;&nbsp;{"Customer is in not  your wasam.!"}</AppText>
            </View>}
            <View style={{ flexDirection: 'row',padding:5}}>
            <AppText style={{color:'#2A8453'}}>&nbsp;&nbsp;{payments.refNumber}</AppText>
            </View>
            {/* <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/custo.png")}></Image>
            <AppText>&nbsp;Customer Name</AppText><AppText>&nbsp;:&nbsp;{customerName2}</AppText>
            </View>
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/cusNo.png")}></Image>
            <AppText>&nbsp;Customer Number</AppText><AppText>&nbsp;:&nbsp;{customerCode}</AppText>
            </View> */}
            {/* <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/nic.png")}></Image>
            <AppText>&nbsp;NIC</AppText><AppText>&nbsp;:&nbsp;{nicNumber}</AppText>
            </View>

            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:20,height:20}} source={require("../Images/money.png")}></Image>
            <AppText>&nbsp;Account Balance</AppText><AppText>&nbsp;:&nbsp;{accountBalance}</AppText>
            </View>*/}

            
           {/* <View style={{ flexDirection: 'row'}}>
            <SubmitButton style={{width:100}} title="Withdrawal" />
            </View> */}

            <View>

            </View>

        </View>
}



           
{payments.responseCode!='00'&& <View style={styles.card}>
{saveBut&&<Image  style={{width:100,height:100,borderRadius:15}} source={require("../Images/samurdhi.jpg")}></Image>}
            <View style={{ flexDirection: 'row',padding:15}}>
            <Image  style={{width:20,height:20}} source={require("../Images/1786640.png")}></Image>
            <AppText>&nbsp;Receipt No</AppText><AppText>&nbsp;:&nbsp;{recipts}</AppText>
            <Button style={{color:Color.red}} title={'Cancel'} onPress={createTwoButtonAlert} />
            </View>

            <AppFormFild
         icon="email"
         name="accountNo"
         keyboardType='numeric'
         onValueChange={(value) => {
          setAccountno(value)
          //setSearching(search=='' ? false : true)
        }}
        
        //value = { search }
//onChangeText={handleChange("accountNo")}
value={accountNumber2}
           // setAccountno={accountno}
      //   onBlur={()=>setFieldTouched("username")}
         placeholder="Account Number"/>


             <Picker 
             name="dipType"
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
    
  }>
    <Picker.Item style={{fontSize:20,color:'#9b1c31'}} label="--Select a Deposit Type--" value="" />
  <Picker.Item style={{fontSize:20,color:'#007500'}} label="Cash deposit" value="CD" />
  <Picker.Item style={{fontSize:20,color:'#00A300'}} label="Loan payment" value="LP" />
  <Picker.Item style={{fontSize:20,color:'#21B6A8'}} label="Promotion deposit" value="PD" />
</Picker> 
         
<AppFormFild
         icon="email"
         name="amount"
         keyboardType='numeric'
onChangeText={handleChange("amount")}
      //   onBlur={()=>setFieldTouched("username")}
         placeholder="Amount"/>
{/* <ErrorMessage error={errors.username} visible={touched.username}/> */}
         
         {/* <ErrorMessage error={errors.password} visible={touched.password}/> */}
          {/* <AppButton title="Login" onPress={()=>navigation.navigate("Listing")}/>  */}
          <View>
{isLoading ? <Image  style={{width:'100%',height:100,borderRadius:15}} source={require("../Images/processing-gif-image.gif")}></Image> : <SubmitButton  title="Proceed" /> }
</View> 
         

         
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
    titleSub:{
      color:Color.blue,
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

export default Deposit;