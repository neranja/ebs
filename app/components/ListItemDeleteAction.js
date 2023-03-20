import React from 'react';
import { View,StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import Color from '../conf/Color';

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name="trash-can" size={35} color={Color.white}/>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
        width:70,
        justifyContent:"center",
        alignItems:"center",

    }
})
export default ListItemDeleteAction;