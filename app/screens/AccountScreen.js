import React from 'react';
import { StyleSheet, View ,FlatList} from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import Color from '../conf/Color';

const menuItems =[{
    title:"My Listing",
    icon:{
        name:"format-list-bulleted",
        backgroundColor:Color.primary,
    }
},
{
    title:"My Msg",
    icon:{
        name:"email",
        backgroundColor:Color.secondary,
    }
}]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
            <ListItem
            title="Neranja Gunarathne" 
            subTitle="9229neranja@gmail.com"
            image={require("../Images/samurdhi.jpg")}/>
            </View>

            <View style={styles.container}>
            <FlatList data={menuItems}
            keyExtractor={menuItem=>menuItem.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({item})=>
            <ListItem 
            title={item.title}
            ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}
            />
            }/>
            </View>
            <View style={styles.container}>
            <ListItem
            title="Log Out" 
            ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />}/>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20,
    },
    screen:{
        backgroundColor:Color.light,

    }
})

export default AccountScreen;