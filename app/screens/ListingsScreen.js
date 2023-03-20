import React from 'react';
import { FlatList,StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import Color from '../conf/Color';
import Footer from '../components/Footer'
import AppText from '../components/AppText';

const Listing=[{
    id:1,
     title:'Account Inquiry',
     url:'Account',
    // price:'100',
    image:require('../Images/acc1.jpg'),
},
// {
//     id:2,
//     title:'Add New Feild Collection',
//     url:'Cash Deposit',
//     //price:'100',
//     image:require('../Images/col.jpg'),
// },
// {
//     id:2,
//     title:'Reports',
//     url:'Report',
//     //price:'100',
//     image:require('../Images/col.jpg'),
// },
{
    id:3,
    title:'Customer Inquiry',
    url:'Customer Inquiry',
   // price:'100',
    image:require('../Images/cus.jpg'),
},
{
    id:4,
    title:'GND List',
    url:'GND List',
    //price:'100',
    image:require('../Images/index.jpg'),
},
{
    id:5,
    title:'User Details',
    url:'User Details',
    //price:'100',
    image:require('../Images/USER.jpg'),
}]

function ListingsScreen({navigation,route}) {

   // console.log('sdsd1',route.params.params.branchName);
   var token=route.params.params.token;
   var branchId=route.params.params.branchId;
   var id=route.params.params.id;
   var username1=route.params.params.username1;
   var branchName=route.params.params.branchName;
   var name=route.params.params.name;

    return (
    
        <Screen style={styles.screen}>
             <View style={styles.card} >
            <View >
            <AppText style={styles.title}>Samurdhi e-Collector Dash Board</AppText>
            </View>
            
        </View>
            <FlatList
            data={Listing}
            keyExtractor={listing=>listing.id.toString()}
            renderItem={({item})=>
            <Card
            title={item.title}
            subTitle={item.price}
            image={item.image}
            url={item.url}
            navigation={navigation}
            token={token}
            branchId={branchId}
            id={id}
            username1={username1}
            branchName={branchName}
            name={name}
            
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
        fontSize:24,
    },
   
    
   
})

export default ListingsScreen;