import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../css/homeCss";

export default function Forge() {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/forge.jpg")}
        style={styles.ImageHomeBackGround}
      >
          <Text>A la Forge</Text>
      </ImageBackground>
    </View>
  );
}
