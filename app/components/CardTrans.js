import React from 'react';
import {View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AppText from './AppText';
import colors from '../conf/Color';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function CardTrans({title,subTitle,image,trnsType,navigation,token,branchId,amount}) {
    //console.log('sf',wastId);
    return (
        <View style={styles.card}>
            
            <View style={styles.detailsContainer}>
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:25,height:25}} source={require("../Images/depos.png")}></Image>
            <AppText style={styles.title}>&nbsp;&nbsp;&nbsp;{title}</AppText>
            <AppText style={styles.subTitleType}>&nbsp;&nbsp;&nbsp;{trnsType}&nbsp;</AppText>
            <AppText style={styles.subTitleAmount}>&nbsp;&nbsp;&nbsp;{amount}&nbsp;</AppText>
            <AppText style={styles.subTitleAmount}>&nbsp;{subTitle}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</AppText>
            </View>
            {/* <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText> */}
            </View>
            
        </View>
       
    );
}

const styles =StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:1,
        overflow: "scroll"

    },
    detailsContainer:{
        padding:10,

    },
    title:{
        color:colors.black,
        marginBottom:2,
        alignContent:"center",
        justifyContent:"center",
        textAlign:"center",
        fontSize:14,
    },
    subTitle:{
        color:colors.secondary,
        fontWeight:"bold",
        width:"22%"
    },
    subTitleType:{
        color:colors.green,
        fontWeight:"bold",
        width:"12%"
    },
    subTitleCode:{
        color:colors.gray,
        fontWeight:"bold",
        width:"32%"
    },
    subTitleAmount:{
        color:colors.blue,
        fontWeight:"bold",
        width:"32%",
        textAlign:"right"
       
    },
    
    detailsContainer:{


    }

});

export default CardTrans;