import React from 'react';
import { TextInput, View ,StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"

import defaultStyles from '../conf/Styles';

function AppTextInput({icon,...otherProps}) {
    return (
        <View style={styles.container}>
            {icon&&<MaterialCommunityIcons name={icon} size={20} color={defaultStyles.Color.purple} style={styles.icon}/>}
            <TextInput style={defaultStyles.text}{...otherProps}/>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.Color.light,
        borderRadius:15,
        flexDirection:"row",
        width:"100%",
        padding:15,
        marginVertical:10,
    },
    icon:{
        marginRight:10,
    },
    
})
export default AppTextInput;