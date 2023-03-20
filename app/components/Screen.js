import React from 'react';
import  Constants  from 'expo-constants';
import{SafeAreaView, StyleSheet, View,ScrollView} from 'react-native';
//console.log(Constants);

function Screen({children,style}) {
    return (
        <SafeAreaView style={[styles.screen],style}>
            <ScrollView>
            <View style={style}>
            {children}
            </View>
            </ScrollView>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        paddingTop:Constants.statusBarHeight,
        flex:1,
        overflow: "scroll"
    },
})

export default Screen;