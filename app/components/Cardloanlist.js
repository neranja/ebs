import React from 'react';
import {View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AppText from './AppText';
import colors from '../conf/Color';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function Cardloanlist({navigation,token,branchId,accountNumber,pendingInstalment,accountType,balance}) {
   console.log(accountNumber);
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:colors[Colors]}]} >
        <View style={styles.card}>
            
            <View style={styles.detailsContainer}>
            {/* <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:25,height:25}} source={require("../Images/file.png")}></Image>
            <AppText style={styles.title}>&nbsp;&nbsp;&nbsp;{"Loan No : "}&nbsp;</AppText>
            <AppText style={{color:colors.darkBlue}}>&nbsp;&nbsp;&nbsp;{loanNumber}&nbsp;</AppText>
            </View> */}

            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:25,height:25}} source={require("../Images/acc.png")}></Image>
            <AppText style={styles.title}>&nbsp;&nbsp;&nbsp;{"Loan No : "}&nbsp;</AppText>
            <AppText style={{color:colors.gray}}>&nbsp;&nbsp;&nbsp;{accountNumber}&nbsp;</AppText>
            </View>

            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:25,height:25}} source={require("../Images/namecard.png")}></Image>
            <AppText style={styles.title}>&nbsp;&nbsp;&nbsp;{"Loan type : "}&nbsp;</AppText>
            <AppText style={{color:colors.darkBlue}}>&nbsp;&nbsp;&nbsp;{accountType}&nbsp;</AppText>
            </View>
{/* 
            <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:25,height:25}} source={require("../Images/gndIcon.png")}></Image>
            <AppText style={styles.title}>&nbsp;&nbsp;&nbsp;{"Address : "}&nbsp;</AppText>
            <AppText style={styles.subTitle1}>&nbsp;&nbsp;&nbsp;{loanHolderAddress}&nbsp;</AppText>
            </View> */}

            {/* <View style={{ flexDirection: 'row',padding:5}}>
            <Image  style={{width:25,height:25}} source={require("../Images/count.png")}></Image>
            <AppText style={styles.title}>&nbsp;&nbsp;&nbsp;{"Pending Installment : "}&nbsp;</AppText>
            <AppText style={{color:colors.royalRed}}>&nbsp;&nbsp;&nbsp;{numberOfInstallments}&nbsp;</AppText>
            </View> */}
            <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
            <View style={{ flexDirection: 'row',padding:5}}>
            <AppText style={styles.title}>&nbsp;&nbsp;&nbsp;{"Pending Inst: : "}&nbsp;</AppText>
            <AppText style={{color:colors.green}}>&nbsp;&nbsp;&nbsp;{pendingInstalment}&nbsp;</AppText>
            <AppText style={styles.title}>&nbsp;&nbsp;&nbsp;{"Outstanding : "}&nbsp;</AppText>
            <AppText style={{color:colors.yellow}}>&nbsp;&nbsp;&nbsp;{(balance).toFixed(2)}&nbsp;</AppText>
            </View>
            {/* <View style={{ flexDirection: 'row',padding:5}}>
            <AppText style={styles.title}>&nbsp;&nbsp;&nbsp;{"Penalty : "}&nbsp;</AppText>
            <AppText style={{color:colors.yellow}}>&nbsp;&nbsp;&nbsp;{penalty}&nbsp;</AppText>
            <AppText style={styles.title}>&nbsp;&nbsp;&nbsp;{"Total : "}&nbsp;</AppText>
            <AppText style={{color:colors.royalRed}}>&nbsp;&nbsp;&nbsp;{total}&nbsp;</AppText>
            </View> */}
            {/* <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText> */}
            <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
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
        fontSize:16,
        
    },
    subTitle:{
        color:colors.secondary,
        fontWeight:"bold"
    },
    subTitle1:{
        color:colors.darkBlue,
        fontWeight:"bold",
        flexShrink: 2
    },
    
    detailsContainer:{


    }

});

export default Cardloanlist;