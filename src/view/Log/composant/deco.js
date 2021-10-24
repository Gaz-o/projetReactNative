import React from "react";
import { View, Text, ImageBackground, Button } from "react-native";
import { removeStorageValue } from "../../../function/function.js";
import styles from "../../../css/homeCss";
import Service from "../../../../services";

function Deconnect(props) {
  const btnLogOut = async () => {
    try {
      let logout = await Service.postLogout();
      if (logout?.data?.success) {
        removeStorageValue(props.setIsConnect);
        alert(logout?.data?.message);
      }
    } catch {
      console.log(logout?.data?.message);
    }
  };

  return (
    <View style={styles.ConteneurMarbre}>
      <ImageBackground
        source={require("../../../img/marbre2.jpg")}
        style={styles.Marbre}
      >
        <View>
          <Text style={styles.TextA}>Merci de votre passage</Text>
          <Text style={styles.btnMarbre} onPress={btnLogOut}>
            Déconnecter
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Deconnect;
