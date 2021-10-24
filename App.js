import React from "react";
import { StatusBar, View } from "react-native";
import NavBar from "./src/navBar/navBar.js";

export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar hidden={true} />
      <NavBar />
    </View>
  );
}
