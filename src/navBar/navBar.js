   import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();

import Home from "../view/home";
import Forge from "../view/Forge";
import Log from "../view/Log/Log";

export default function NavBar() {
  return (
    <NavigationContainer style={stylesApp.body}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Forge" component={Forge} />
        <Tab.Screen name="Connexion" component={Log} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const stylesApp = StyleSheet.create({
  body: {},
});
