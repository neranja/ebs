import React from 'react';
import { View ,StyleSheet} from 'react-native';

import Color from '../conf/Color';

function ListItemSeparator(props) {
    return (
        <View style={styles.separator}></View>
    );
}

const styles = StyleSheet.create({
    separator:{
        width:'100%',
        height:1,
        backgroundColor:Color.light,
    }
})

export default ListItemSeparator;