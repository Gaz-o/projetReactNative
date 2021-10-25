import { Image, StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

import Home from "../view/home";
import Forge from "../view/Forge";
import Combat from "../view/Combat";
import Deconnect from "../view/Deconnect.js";
import Personnage from "../view/Personnage/Personnage.js";

function NavBar({navigation}) {
  return (
      <Tab.Navigator
        tabBarPosition={"bottom"}
        screenOptions={{
          tabBarShowIcon: true,
          tabBarShowLabel: false,
          tabBarPressColor: "rgb(120, 0, 0)",
          tabBarStyle: {
            backgroundColor: "rgba(200, 180, 50, 0.5)",
            borderColor: "rgb(120, 0, 0)",
            borderTopWidth: 2,
          },
          tabBarIndicatorStyle: {
            backgroundColor: "rgb(120, 0, 0)",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require(`../img/5137915.png`)}
                  style={{ width: 20, height: 20 }}
                  tintColor={focused ? "rgb(195, 0, 0)" : "rgb(65, 65, 65)"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Personnage"
          component={Personnage}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require(`../img/2370778.png`)}
                  style={{ width: 20, height: 20 }}
                  tintColor={focused ? "rgb(195, 0, 0)" : "rgb(65, 65, 65)"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Combat"
          component={Combat}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require(`../img/2665769.png`)}
                  style={{ width: 20, height: 20 }}
                  tintColor={focused ? "rgb(195, 0, 0)" : "rgb(65, 65, 65)"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Forge"
          component={Forge}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require(`../img/4265780.png`)}
                  style={{ width: 20, height: 20 }}
                  tintColor={focused ? "rgb(195, 0, 0)" : "rgb(65, 65, 65)"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Deconnect"
          component={Deconnect}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require(`../img/5089783.png`)}
                  style={{ width: 20, height: 20 }}
                  tintColor={focused ? "rgb(195, 0, 0)" : "rgb(65, 65, 65)"}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
  );
}

export default NavBar;

const stylesApp = StyleSheet.create({
  body: {},
});
