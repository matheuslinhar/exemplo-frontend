import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import LoginView from "./views/login"
import HomeView from "./views/home"

const Stack= createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
  
      <Stack.Screen name="login" component={LoginView}/>
      <Stack.Screen name="home" component={HomeView}/>

       
      </Stack.Navigator>
    </NavigationContainer>

  );
}
