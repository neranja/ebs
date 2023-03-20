import React,{useState} from 'react';
import { TextInput, View ,StyleSheet,TouchableWithoutFeedback, Modal, Button, FlatList} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"

import AppText from './AppText';
import defaultStyles from '../conf/Styles';
import PickerItem from './PickerItem';

function AppPicker({icon,items,placeholder}) {
    const [modalVisible,setModalVisible] = useState(false);
    return (
        <React.Fragment>
        <TouchableWithoutFeedback onPress={()=> setModalVisible(true)}>
        <View style={styles.container}>
            {icon&&<MaterialCommunityIcons name={icon} size={20} color={defaultStyles.Color.primary} style={styles.icon}/>}
            <AppText style={styles.text}>{placeholder}</AppText>
            <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.Color.primary} />
            
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Button title="Close" onPress={()=>setModalVisible(false)}/>
            <FlatList
            data={items}
            keyExtractor={item=>item.value.toString()}
            renderItem={(item)=> <PickerItem
            label={item.label}
            onPress={()=>console.log(item)}/>}/>
        </Modal>
        </React.Fragment>
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
    text: {
        fontSize:18,
        fontFamily:"Roboto",
        flex:1,
      },
    
})
export default AppPicker;