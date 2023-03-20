import React, { useEffect, useState } from 'react';
import { FlatList,StyleSheet, View} from 'react-native';
import Card from '../components/Cardacclist';
import Screen from '../components/Screen';
import Color from '../conf/Color';
import Footer from '../components/Footer'
import AppText from '../components/AppText';



function AccountList({navigation,route}) {

    

    const [Listing, setlisting] = useState([]);

   var token=route.params.params.token;
   var branchId=route.params.params.branchId;
   var dipType=route.params.params.dipType1;
   var cusNo=route.params.params.customerCode2;


   useEffect(() => {

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
    'numberType':2,
    'nicNo':cusNo,
    'customerNo':cusNo,
    'branchId':branchId,
  })
}).then(function(res){ 
  // alert('Anouthorized deviced');
  return res.json(); }).then(function(data){ 
    setlisting(data.customerAccountList);
   console.log(data);
                       
         // alert( JSON.stringify( data ) )
})

}, []);

    return (
        
    
        <Screen style={styles.screen}>
             <View style={styles.card} >
            <View >
            <AppText style={styles.title}>Account details</AppText>
            </View>
            
        </View>
            <FlatList
            data={Listing}
            keyExtractor={listing=>listing.accountNumber}
            renderItem={({item})=>
            <Card
            accountNumber={item.accountNumber}
            accStatus={item.accStatus}
            accountType={item.accountType}
            balance={item.balance}
            navigation={navigation}
            token={token}
            branchId={branchId}
            
            />}/>
            <Footer style={{backgroundColor:"red"}}/>
        </Screen>
        
        
    );
}

const styles = StyleSheet.create({
    screen:{
    padding:15,
    backgroundColor:Color.light,
    overflow: "scroll"
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
        fontSize:18,
    },
   
    
   
})

export default AccountList;