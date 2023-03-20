// import React,{useState,useEffect} from 'react';
// import { FlatList,StyleSheet, View,Image,Button,TouchableOpacity,Text,ToastAndroid } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import SelectDropdown from 'react-native-select-dropdown';
// import { FancyAlert } from 'react-native-expo-fancy-alerts';

// import Card from '../components/Card';
// import Screen from '../components/Screen';
// import Color from '../conf/Color';
// import AppText from '../components/AppText';
// import AppFormFild from '../components/AppFormFild';
// import SubmitButton from '../components/SubmitButton';
// import Footer from '../components/Footer';
// import Logo from '../components/Logo';
// //102130904100304

// const countries = ["Egypt", "Canada", "Australia", "Ireland"]

// const Listing=[{
//     id:1,
//      title:'Account Inquiry',
//      url:'Account',
//     // price:'100',
//     image:require('../Images/acc1.jpg'),
// },
// {
//     id:2,
//     title:'Add New Feild Collection',
//     url:'Account',
//     //price:'100',
//     image:require('../Images/col.jpg'),
// },
// {
//     id:3,
//     title:'Customer Inquiry',
//     url:'Login',
//    // price:'100',
//     image:require('../Images/cus.jpg'),
// },
// {
//     id:4,
//     title:'About Samurdhi Department',
//     url:'Account',
//     //price:'100',
//     image:require('../Images/index.jpg'),
// }]

// const validationSchema=Yup.object().shape({
//    // accountNo:Yup.string().required().label("AccountNo"),
//    // password:Yup.string().required().min(4).label("Password")
//   })

// function PaymentSuccuss({navigation,route,token,branchId,id}) {
 
//   const [visible, setVisible] = React.useState(false);
//     const toggleAlert = React.useCallback(() => {
//       setVisible(!visible);
//     }, [visible]);

//     const [comments,setComments]=useState([])

    

//     useEffect(() => {

//       console.log(comments.responseCode)
  
//     }, [comments])
    
//     var id=route.params.params.id;
//     var token=route.params.params.token;
//     var branchId=route.params.params.branchId;
//     var accountStatus2=route.params.params.accountStatus;
//    var accountNumber2= route.params.params.accountNumber;
//     var customerName2 =route.params.params.customerName;
//     var customerCode=route.params.params.customerCode;
//     var nicNumber=route.params.params.nicNumber;
//     var accountBalance=route.params.params.accountBalance;
//    var  reciptNo2=route.params.params.reciptNo;
//    // console.log('sdsd123',token);

//    var response=route.params.params.response;

//     // fetch('http://43.224.125.87:8181/ebs-rest/api/mobile/get_receipt_number/'+id, {
//     //     method: 'get',
//     //     headers: {
//     //      // 'Access-Control-Allow-Origin':'http://43.224.125.87:8181',
//     //       'Access-Control-Allow-Origin': '*',
//     //       'Accept': 'application/json',
//     //       'Content-Type': 'application/json',
//     //       'Authorization': 'Bearer '+token
//     //     }
//     //   }).then(function(res){ 
//     //     // alert('Anouthorized deviced');
//     //     return res.json(); }).then(function(data){ 
//     //     var reciptNo=data; 

//     //      navigation.navigate("Deposit",{params:{token: token,id:id,branchId:branchId,
//     //         reciptNo:reciptNo,accountNumber:accountNumber2,response:response}})
//     //   })


//     return (
    
//         <Screen style={styles.screen}>
//              <View style={styles.card} >
//             <View >
//             <AppText style={styles.title}>Cash Deposit</AppText>
//             </View>
            
//         </View>
//         <Formik
//           initialValues={{accountNo:"",amount:""}}
//            onSubmit={ (values)=>{
//             console.log('646',branchId);
//               var accountNo =values.accountNo;
//               var amount=values.amount;
//               var reciptNo=reciptNo;
              
               

//             fetch('http://43.224.125.87:8181/ebs-rest/api/mobile/add_collection1', {
//   method: 'POST',
//   headers: {
//    // 'Access-Control-Allow-Origin':'http://43.224.125.87:8181',
//     'Access-Control-Allow-Origin': '*',
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer '+token
//   },
//   body: JSON.stringify({
//     'officerId':id,
//     'accountNumber':accountNo,
//     'receiptNo':reciptNo,
//     'amount':amount,
//     'tranType':'CD',
//     'branchId':branchId,
//   })
// }).then(function(res){ 
//   // alert('Anouthorized deviced');
//   return res.json(); }).then(function(data){ 

//   // console.log('jj',data.responseCode);

//   //response =data.responseCode;
//   //setComments(data) 
//  // return response;
//   //{toggleAlert};
//                       //  var accountStatus1=data.accountStatus;
//                       //   //    status=1;
//                       //      token=data.token;
//                       //    var accountNumber1=data.accountNumber;
//                       //    var customerName1=data.customerDetails[0].customerName;
//                       //     var customerCode1=data.customerDetails[0].customerCode;
//                       //    var nicNumber1=data.customerDetails[0].nicNumber;
//                       //    var accountBalance1=data.accountBalance;
//                   //    ToastAndroid.show("shsjhdsjdhsjhdsjhdjsh");
//                           // navigation.navigate("Deposit",{params:{token: token,id:id,response:response}})
//                         //   username1=data.username;
//                         //   name=data.name;
//                         //  branchName=data.branchName;
//                         //   branchId=data.branchId;
//                         // console.log(token);
//                           if(token!=undefined){
//                            // navigation.navigate("Listing",{navigation:navigation,params: { token: token}})
//                           }else{
                            
//                           }
//          // alert( JSON.stringify( data ) )
// })
                     
//             }}
//          // onSubmit={values=>console.log(values),alert(),()=>{if(1==1){navigation.navigate("Listing")}else{console.log('test')}}}
//           validationSchema={validationSchema} >
//             {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>
//             <>
//  {comments.responseCode=='01'&&<View style={styles.card} >
//             <View >
//             <AppText style={styles.title}>Payment Status</AppText>
//             </View>
//             <View style={{ flexDirection: 'row',padding:5}}>
//             <Image  style={{width:20,height:20}} source={require("../Images/1786640.png")}></Image>
//             <AppText>&nbsp;Account Status</AppText><AppText>&nbsp;:&nbsp;{comments.responseCode}</AppText>
//             </View>
//             <View style={{ flexDirection: 'row',padding:5}}>
//             <Image  style={{width:20,height:20}} source={require("../Images/accNo.png")}></Image>
//             <AppText>&nbsp;Account Number</AppText><AppText>&nbsp;:&nbsp;{accountNumber2}</AppText>
//             </View>
//             {/* <View style={{ flexDirection: 'row',padding:5}}>
//             <Image  style={{width:20,height:20}} source={require("../Images/custo.png")}></Image>
//             <AppText>&nbsp;Customer Name</AppText><AppText>&nbsp;:&nbsp;{customerName2}</AppText>
//             </View>
//             <View style={{ flexDirection: 'row',padding:5}}>
//             <Image  style={{width:20,height:20}} source={require("../Images/cusNo.png")}></Image>
//             <AppText>&nbsp;Customer Number</AppText><AppText>&nbsp;:&nbsp;{customerCode}</AppText>
//             </View> */}
//             {/* <View style={{ flexDirection: 'row',padding:5}}>
//             <Image  style={{width:20,height:20}} source={require("../Images/nic.png")}></Image>
//             <AppText>&nbsp;NIC</AppText><AppText>&nbsp;:&nbsp;{nicNumber}</AppText>
//             </View>

//             <View style={{ flexDirection: 'row',padding:5}}>
//             <Image  style={{width:20,height:20}} source={require("../Images/money.png")}></Image>
//             <AppText>&nbsp;Account Balance</AppText><AppText>&nbsp;:&nbsp;{accountBalance}</AppText>
//             </View>*/}

//             <View style={{ flexDirection: 'row'}}>
//             <TouchableOpacity style={[styles.button]} onPress={()=>navigation.navigate("Deposit",{navigation:navigation,params:{token:token,branchId:branchId,id:id}})}>
//             <Text style={styles.text}>Add New</Text>
//         </TouchableOpacity>
            
//             </View>
//            {/* <View style={{ flexDirection: 'row'}}>
//             <SubmitButton style={{width:100}} title="Withdrawal" />
//             </View> */}

//             <View>

//             </View>

//         </View>
// }



//             <View>
            
//           <TouchableOpacity onPress={toggleAlert}>
//             <Text>Tap me</Text>
//           </TouchableOpacity>
    
//           <FancyAlert
//             visible={visible}
//             icon={<View style={{
//               flex: 1,
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               backgroundColor: 'red',
//               borderRadius: 50,
//               width: '100%',
//             }}><Text>🤓</Text></View>}
//             style={{ backgroundColor: 'white' }}
//           >
//             <Text style={{ marginTop: -16, marginBottom: 32 }}>Hello there</Text>
//             <View style={styles.content}>
//       <Text style={styles.contentText}>{'hghghghgh'}</Text>

//       <TouchableOpacity style={styles.btn} onPress={''}>
//         <Text style={styles.btnText}>OK</Text>
//       </TouchableOpacity>
//     </View>
//           </FancyAlert>
//         </View>
//             <View style={styles.card}>
//             <AppFormFild
//          icon="email"
//          name="accountNo"
//          keyboardType='numeric'
// onChangeText={handleChange("accountNo")}
//             value={accountNumber2}
//       //   onBlur={()=>setFieldTouched("username")}
//          placeholder="Account Number"/>
// <View style={{ flexDirection: 'row',padding:5}}>
//             <Image  style={{width:20,height:20}} source={require("../Images/1786640.png")}></Image>
//             <AppText>&nbsp;Receipt No</AppText><AppText>&nbsp;:&nbsp;{reciptNo2}</AppText>
//             </View>

//             <SelectDropdown
//          name="listdata"

// 	data={countries}
// 	onSelect={(selectedItem, index) => {
// 		console.log(selectedItem, index)
// 	}}
// 	value={(selectedItem, index) => {
// 		// text represented after item is selected
// 		// if data array is an array of objects then return selectedItem.property to render after item is selected
// 		return selectedItem
// 	}}
// 	rowTextForSelection={(item, index) => {
// 		// text represented for each item in dropdown
// 		// if data array is an array of objects then return item.property to represent item in dropdown
// 		return item;
// 	}}
// />
// <AppFormFild
//          icon="email"
//          name="amount"
//          keyboardType='numeric'
// onChangeText={handleChange("amount")}
//       //   onBlur={()=>setFieldTouched("username")}
//          placeholder="Amount"/>
// {/* <ErrorMessage error={errors.username} visible={touched.username}/> */}
         
//          {/* <ErrorMessage error={errors.password} visible={touched.password}/> */}
//           {/* <AppButton title="Login" onPress={()=>navigation.navigate("Listing")}/>  */}
//          <SubmitButton  title="Search" /> 

         
//          </View>

        
//             </>}
//           </Formik>
//          <Footer/>
//         </Screen>
        
        
//     );
// }

// const styles = StyleSheet.create({
//     screen:{
//     padding:15,
//     backgroundColor:Color.light,
//     },
//     card:{
//         marginTop:10,
//         borderRadius:15,
//         backgroundColor:Color.white,
//         marginBottom:10,
//         overflow:"hidden",

//     },
//     title:{
//         color:Color.purple,
//         marginBottom:2,
//         alignContent:"center",
//         justifyContent:"center",
//         textAlign:"center",
//         fontSize:24,
//     },
//     button: {
//         backgroundColor:Color.purple,
//         borderRadius:10,
//         justifyContent:'center',
//         alignItems:'center',
//         padding:10,
//         width:'100%',
//         marginBottom:10,
//       },
//       text:{
//         color:Color.white,
//         fontSize:18,
//         textTransform:'uppercase',
//         fontWeight:'bold',
  
//       },
//       alert: {
//         backgroundColor: '#EEEEEE',
//       },
//       icon: {
//         flex: 1,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#C3272B',
//         width: '100%',
//       },
//       content: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: -16,
//         marginBottom: 16,
//       },
//       contentText: {
//         textAlign: 'center',
//       },
//       btn: {
//         borderRadius: 32,
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingHorizontal: 8,
//         paddingVertical: 8,
//         alignSelf: 'stretch',
//         backgroundColor: '#4CB748',
//         marginTop: 16,
//         minWidth: '50%',
//         paddingHorizontal: 16,
//       },
//       btnText: {
//         color: '#FFFFFF',
//       },
    
   
// })

// export default PaymentSuccuss;