import React ,{useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';





const initialMessages=[
    {
    id:1,
    Title:"T1",
    description:"D1",
    image: require("../Images/samurdhi.jpg")
    },
    {
        id:2,
        Title:"T2",
        description:"D2",
        image: require("../Images/samurdhi.jpg")
        }
]

function MessagesScreens(props) {
 
const [messages,setMessages]=useState(initialMessages);   
const [refreshing,setRefreshing]=useState(false);  

const HandleDelete=message=>{
    // delete 
   const newMessages = messages.filter(m=>m.id !== message.id)
   setMessages(newMessages);
}
    return (
        <Screen>
        <FlatList data={messages} keyExtractor={message=> message.id.toString()} renderItem={({item})=>
        <ListItem title={item.Title}
        subTitle={item.description}
        image={item.image}
        onPress={() => console.log("msg",item)} 
        renderRightActions={()=> <ListItemDeleteAction  onPress={() => HandleDelete(item)}/>}/>} 
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={()=> setMessages([{
            id:2,
            Title:"T2",
            description:"D2",
            image: require("../Images/samurdhi.jpg")
            },

        ])}/>
        </Screen>
    );
}
const styles = StyleSheet.create({
    
    
})

export default MessagesScreens;