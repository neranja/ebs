import React from 'react';
import { Image, View ,StyleSheet} from 'react-native';
import AppText from '../components/AppText';
import Color from '../conf/Color';
import ListItem from '../components/ListItem';
function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image}  source={require("../Images/card.jpg")}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Balance Inquery</AppText>
            <AppText style={styles.price}>Loan Inquery</AppText>
            <ListItem image={require("../Images/samurdhi.jpg")} 
            title="Neranja Gunarathne"
             subTitle="test"/>

            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:10,
    },
    detailsContainer:{
        padding:20,
    },
    title:{
        fontSize:24,
        fontWeight:"500",

    },
    price:{
        color:Color.secondary,
        fontWeight:"bold",
        fontSize:20,
        marginVertical:10,
    }
})

export default ListingDetailsScreen;