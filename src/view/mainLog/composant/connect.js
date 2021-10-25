import { useState } from "react";
import React from "react";
import Inscription from "./inscription";
import Connection from "./co";
import { Text, View } from "react-native";
import styles from "../../../css/homeCss";

function Connect({navigation}) {
  const [BtnLog, setBtnLog] = useState("Inscription");

  console.log(navigation);

  const btnLog = () => {
    if (BtnLog === "Inscription") {
      setBtnLog("Connexion");
    } else {
      setBtnLog("Inscription");
    }
  };

  return (
    <View className="Log">
      {BtnLog === "Inscription" ? (
        <Text style={styles.btnMarbre} onPress={btnLog}>
          {BtnLog}
        </Text>
      ) : (
        <Text style={styles.btnMarbre} onPress={btnLog}>
          {BtnLog}
        </Text>
      )}
      {BtnLog !== "Inscription" ? (
        <Inscription navigation={navigation} />
      ) : (
        <Connection navigation={navigation} />
      )}
    </View>
  );
}

export default Connect;