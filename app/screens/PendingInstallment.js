import React, { useEffect, useState } from 'react';
import { FlatList,StyleSheet, View} from 'react-native';
import Card from '../components/CardInstallment';
import Screen from '../components/Screen';
import Color from '../conf/Color';
import Footer from '../components/Footer'
import AppText from '../components/AppText';



function PendingInstallment({navigation,route}) {

    

    const [Listing, setlisting] = useState([]);

   var token=route.params.params.token;
   var branchId=route.params.params.branchId;
   var wastId=route.params.params.wastId;


   useEffect(() => {

    fetch('http://43.224.125.87:8181/ebs-rest/api/mobile/pending_installments', {
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
    'gndId':wastId
  })
}).then(function(res){ 
  // alert('Anouthorized deviced');
  return res.json(); }).then(function(data){ 
    setlisting(data);
   //console.log(data);
                       
         // alert( JSON.stringify( data ) )
})

}, []);

    return (
        
    
        <Screen style={styles.screen}>
             <View style={styles.card} >
            <View >
            <AppText style={styles.title}>Pending Installment</AppText>
            </View>
            
        </View>
            <FlatList
            data={Listing}
            keyExtractor={listing=>listing.wastId}
            renderItem={({item})=>
            <Card
            accountNumber={item.accountNumber}
            capital={item.capital}
            interest={item.interest}
            loanHolderAddress={item.loanHolderAddress}
            loanHolderName={item.loanHolderName}
            loanHolderNic={item.loanHolderNic}
            loanNumber={item.loanNumber}
            numberOfInstallments={item.numberOfInstallments}
            penalty={item.penalty}
            total={item.capital+item.interest+item.penalty}
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
        fontSize:24,
    },
   
    
   
})

export default PendingInstallment;