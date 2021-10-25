import React from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import NavBar from "./src/navBar/navBar.js";
import MainLog from "./src/view/mainLog/MainLog.js";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function App() {

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <NavigationContainer style={stylesApp.body}>
        <Stack.Navigator
          screenOptions={{ headerShown : false}}
          >
          <Stack.Screen name="MainLog" component={MainLog} />
          <Stack.Screen name="NavBar" component={NavBar} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;

const stylesApp = StyleSheet.create({
  body: {},
});