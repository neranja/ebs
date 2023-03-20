import React,{ Component} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ListingsScreen from "../screens/ListingsScreen";
import LoginScreen from "../screens/LoginScreen";
import Account from "../screens/AccountInquiry";
import Deposit from "../screens/Deposit";
import Withdrawal from "../screens/Withdrawal";
import GndList from "../screens/GndList";
import PendingInstallment from "../screens/PendingInstallment";
import CustomerInq from "../screens/CustomerInq";
import AccountList from "../screens/AccountList";
import Loanlist from "../screens/Loanlist";
import UserDetails from "../screens/UserDetails";
import CashDeposit from "../screens/CashDeposit";
import Report from "../screens/Report";
import TransList from "../screens/TransList";
import MobileUpdate from "../screens/MobileUpdate";

const Stack=createStackNavigator();
const AuthNavigator=()=>(
  <Stack.Navigator >
    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: true}} style={{color:'#136207'}}/>
    <Stack.Screen name="Listing" component={ListingsScreen} />
    <Stack.Screen name="Account" component={Account} />
    <Stack.Screen name="Deposit" component={Deposit} />
     <Stack.Screen name="Withdrawal" component={Withdrawal} /> 
     <Stack.Screen name="GND List" component={GndList} /> 
     <Stack.Screen name="Pending Installment" component={PendingInstallment} /> 
     <Stack.Screen name="Customer Inquiry" component={CustomerInq} /> 
     <Stack.Screen name="Account details" component={AccountList} /> 
     <Stack.Screen name="Loan Details" component={Loanlist} /> 
     <Stack.Screen name="User Details" component={UserDetails} /> 
     <Stack.Screen name="Cash Deposit" component={CashDeposit} />
     <Stack.Screen name="Report" component={Report} />
     <Stack.Screen name="Transaction List" component={TransList} />
     <Stack.Screen name="Mobile Number Update" component={MobileUpdate} />


  </Stack.Navigator>
);


export default AuthNavigator;