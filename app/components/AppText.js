import React from 'react';
import { StyleSheet,Text} from 'react-native';

function AppText({children,style}) {
    return <Text style={[styles.text,style]}>{children}</Text>;
}
const styles = StyleSheet.create({
    text: {
        fontSize:14,
        fontFamily:"Roboto",
      },
})

export default AppText;