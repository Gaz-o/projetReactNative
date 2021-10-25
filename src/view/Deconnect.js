import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Service from "../../services";
import styles from "../css/homeCss";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Deconnect({navigation}) {
  let contenu = "J'espere que les Dieux etait avec vous aujourd'hui";

  console.log("Dans Deco",navigation);

  const btnLogOut = async () => {
    console.log("BTN");
    try {
      let logout = await Service.postLogout();
      console.log(logout?.data?.success);
      if (logout?.data?.success) {
        await AsyncStorage.removeItem("save");
        console.log("ICI");
        alert(logout?.data?.message);
        navigation.navigate("MainLog")
      }
    } catch {
      console.log(logout?.data?.message);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/connection.jpg")}
        style={styles.ImageHomeBackGround}
      >
        <ImageBackground
          source={require("../img/parchemin.png")}
          style={styles.ParcheminHome}
        >
          <View style={styles.containerParchemin}>
            <View style={styles.TitreParchemin}>
              <Text style={styles.Text}>Bonjour Cher Sponsor</Text>
            </View>
            <View style={styles.ContenuParchemin}>
              <Text style={styles.Text}> {contenu} </Text>
              <View style={styles.ConteneurMarbre}>
                <ImageBackground
                  source={require("../img/marbre2.jpg")}
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
            </View>
            <View style={styles.FooterParchemin}>
              <Text className="FooterLog">
                {" "}
                Toute l'équipe du colisé vous remerci d'avoir prix le temps de
                nous lire{" "}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

export default Deconnect;
