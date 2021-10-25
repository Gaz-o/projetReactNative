import Connect from "./composant/connect";
import React, { useEffect, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import { getStorageValue } from "../../function/function.js";
import styles from "../../css/homeCss";

function Log({navigation}) {
  const [isConnect, setIsConnect] = useState();

  useEffect(() => {
    getStorageValue(setIsConnect);
  }, []);

  useEffect(() => {
    if (isConnect === true) {
      navigation.navigate("NavBar")
    }
  }, [isConnect]);

  console.log("isConnect", isConnect);
  console.log(navigation);

  let Contenu = `Si vous souhaiter créer un nouveau Sponsor 
  prennez une autre pierre`

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../img/connection.jpg")}
        style={styles.ImageHomeBackGround}
      >
        <ImageBackground
          source={require("../../img/parchemin.png")}
          style={styles.ParcheminHome}
        >
          <View style={styles.containerParchemin}>
            <View style={styles.TitreParchemin}>
              <Text style={styles.Text}>Bonjour Cher Sponsor</Text>
            </View>
            <View style={styles.ContenuParchemin}>
              <Text style={styles.Text}> {Contenu} </Text>
                <Connect navigation={navigation} />
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

export default Log