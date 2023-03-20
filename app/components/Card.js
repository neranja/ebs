import React from 'react';
import {View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AppText from './AppText';
import colors from '../conf/Color';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function Card({title,subTitle,image,url,navigation,token,branchId,id,name,branchName,username1}) {
    console.log('sf',branchName);
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:colors[Colors]}]} onPress={()=>navigation.navigate(url,{navigation:navigation,params:{token:token,branchId:branchId,id,name:name,branchName:branchName,username1:username1}})}>
        <View style={styles.card}>
            <Image  style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
            
        </View>
        </TouchableOpacity>
    );
}

const styles =StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:10,
        overflow:"hidden",

    },
    detailsContainer:{
        padding:15,

    },
    title:{
        color:colors.gray,
        marginBottom:2,
        alignContent:"center",
        justifyContent:"center",
        textAlign:"center",
        fontSize:16,
    },
    subTitle:{
        color:colors.secondary,
        fontWeight:"bold",
    },
    image:{
        width:"100%",
        height:70,
        marginBottom:2,

    },
    detailsContainer:{


    }

});

export default Card;