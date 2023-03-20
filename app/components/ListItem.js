import React from 'react';
import { StyleSheet, View ,Image,TouchableOpacity, TouchableHighlight} from 'react-native';
import  Swipeable  from 'react-native-gesture-handler/Swipeable';

import Color from '../conf/Color';
import AppText from './AppText';

function ListItem({title,subTitle,image,ImageComponent, onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={Color.light} onPress={onPress}>
        <View style={styles.container}>
            {ImageComponent}
            {image && <Image  style={styles.image} source={image}/>}
            <View style={styles.detailsContainer}>
            <AppText>{title}</AppText>
            {subTitle && <AppText>{subTitle}</AppText>}
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:10,
        backgroundColor:Color.white,
    },
    detailsContainer:{
        marginLeft:10,
        justifyContent:"center",
    },
    image:{
        width:50,
        height:50,
        borderRadius:35,
        marginRight:10,
    }
})

export default ListItem;