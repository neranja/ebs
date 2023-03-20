import React from 'react';
import { StyleSheet,Text, TouchableOpacity} from 'react-native';

import colors from '../conf/Color';

function AppButton({title,onPress,color="purple"}) {
    return (
      <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor:colors.purple,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      padding:10,
      width:'100%',
      marginBottom:10,
    },
    text:{
      color:colors.white,
      fontSize:15,
      textTransform:'uppercase',
      fontWeight:'bold',

    }
    
  });

export default AppButton;