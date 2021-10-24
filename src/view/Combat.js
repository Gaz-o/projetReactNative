import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../css/homeCss";

function Combat() {

    return (
        <View style={styles.container}>
      <ImageBackground
        source={require("../img/combat.jpg")}
        style={styles.ImageHomeBackGround}
      >
          <Text>TEST Combat</Text>
      </ImageBackground>
    </View>
  );
}

export default Combat;