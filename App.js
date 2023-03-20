
import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React,{ Component} from "react";
import { StyleSheet, Text, View } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreens from "./app/screens/MessagesScreens";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import AuthNavigator from "./app/Navigation/AuthNavigator";

export default function App() {
  // const categories=[
  //   {label:"Furniture",value:1},
  //   {label:"Cars",value:2},
  //   {label:"Bike",value:3},
  // ]
  // const Tweest=()=>(
  //   <Screen>
  //     <Text>Tweest</Text>
  //   </Screen>

  // );

  // const TweestDetail=()=>(
  //   <Screen>
  //     <Text>TweestDetail</Text>
  //   </Screen>

  // );
  // const Stack=createStackNavigator();
  // const StackNavigator=()=>(
  //   <Stack.Navigator initialRouteName="Tweest">
  //     <Stack.Screen name="Tweest" component={Tweest} />
  //     <Stack.Screen name="TweestDetail" component={TweestDetail} />
  //   </Stack.Navigator>
  // );
  return (
       <NavigationContainer>
           <AuthNavigator/>
       </NavigationContainer>



   // <ListingsScreen/>
   //<LoginScreen/>



    // <Screen>
    //    <AppPicker items={categories} icon="apps" placeholder="Category"/>
    //     <AppTextInput placeholder="Username" icon="email"/>
    // </Screen>
    // <ListingsScreen/>
   // <AccountScreen/>
  // <Screen> 
  // <ListItem 
  // title="My Title" 
  // ImageComponent={<Icon name="email" />}/>
  // </Screen> 
  );
  // <Screen>
  //   <Icon  name="email"
  //   size={50}
  //   backgroundColor="red"
  //   iconColor="white"/>
  // </Screen>;
  // <MessagesScreens/>;
  // (<View style={{backgroundColor:"#f8f4f4",badding:20,paddingTop:100}}>
  //   <Card title="Balance Inquery" subTitle="Loan Inquery" image={require("./app/Images/card.jpg")}></Card>
  // </View>
  //<WelcomeScreen/>;
    // <View style={styles.container}>
      
    //   <AppText title="Login" onPress={()=>console.log("Tapped")}/>
    //   <MaterialCommunityIcons name="account" size={200} color='#5D1049' />
    // </View>

  
 // );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
