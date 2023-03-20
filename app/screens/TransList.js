import React, { useEffect, useState } from 'react';
import { FlatList,StyleSheet, View } from 'react-native';
import CardTrans from '../components/CardTrans';
import Screen from '../components/Screen';
import Color from '../conf/Color';
import Footer from '../components/Footer'
import AppText from '../components/AppText';

const Listing1=[{
    id:1,
     title:'Account Inquiry',
     url:'Account',
    // price:'100',
    image:require('../Images/acc1.jpg'),
},
{
    id:2,
    title:'Add New Feild Collection',
    url:'Deposit',
    //price:'100',
    image:require('../Images/col.jpg'),
},
{
    id:3,
    title:'Customer Inquiry',
    url:'Alert',
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

function TransList({navigation,route}) {

    const [Listing, setlisting] = useState([]);
  //console.log(Listing.wastId);
   var token=route.params.params.token;
   var branchId=route.params.params.branchId1;
   var id=route.params.params.id;
   var accountNumber2=route.params.params.accountNumber;


   useEffect(() => {
      
    fetch('http://43.224.125.87:8181/ebs-rest/api/mobile/get_lastTransaction', {
  method: 'POST',
  headers: {
   // 'Access-Control-Allow-Origin':'http://43.224.125.87:8181',
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token
  },
  body: JSON.stringify({
    'branchId':branchId,
  'accountNumber':accountNumber2,
  
  })
  }).then(function(res){ 
  // alert('Anouthorized deviced');
  return res.json(); }).then(function(data){ 
    //alert('Anouthorized deviced');
    setlisting(data.transactionDetails)
  //console.log(data.transactionDetails);
                       
         // alert( JSON.stringify( data ) )
  })
  
  }, []);

    return (
    
        <Screen style={styles.screen}>
             <View style={styles.card} >
            <View >
            <AppText style={styles.title}>Last 5 Transaction</AppText>
            </View>
            
        </View>
        <View >
            <AppText style={styles.title}>{accountNumber2}</AppText>
            </View>
        <FlatList
            data={Listing}
            keyExtractor={listing=>listing.transactionNo}
            renderItem={({item})=>
            <CardTrans
            title={item.date}
            subTitle={item.currentBalance}
            image={item.image}
            trnsType={item.trntype}
            navigation={navigation}
            token={token}
            branchId={branchId}
            amount={item.amount}
            
            />}/>
            
            <Footer style={{backgroundColor:"red"}}/>
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
   
    
   
})

export default TransList;