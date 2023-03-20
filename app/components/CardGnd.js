import React from 'react';
import {View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AppText from './AppText';
import colors from '../conf/Color';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function CardGnd({title,subTitle,image,url,navigation,token,branchId,wastId}) {
    console.log('sf',wastId);
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:colors[Colors]}]} onPress={()=>navigation.navigate("Pending Installment",{navigation:navigation,params:{token:token,branchId:branchId,wastId:wastId}})}>
        <View style={styles.card}>
            
            <View style={styles.detailsContainer}>
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:30,height:30}} source={require("../Images/gndIcon.png")}></Image>
            <AppText style={styles.title}>&nbsp;&nbsp;&nbsp;{title}</AppText>
            <AppText style={styles.subTitle}>&nbsp;&nbsp;(&nbsp;{subTitle}&nbsp;)</AppText>
            </View>
            {/* <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText> */}
            </View>
            
        </View>
        </TouchableOpacity>
    );
}

const styles =StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:5,
        overflow:"hidden",

    },
    detailsContainer:{
        padding:10,

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
    
    detailsContainer:{


    }

});

export default CardGnd;