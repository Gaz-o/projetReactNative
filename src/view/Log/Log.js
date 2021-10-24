import { useEffect, useState } from "react";
import Connect from "./composant/connect";
import Deconnect from "./composant/deco";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { getStorageValue } from "../../function/function.js";
import styles from "../../css/homeCss";

export default function Log() {
  const [Contenu, setContenu] = useState();
  const [Affichage, setAffichage] = useState();
  const [isConnect, setIsConnect] = useState();

  useEffect(() => {
    if (isConnect === true) {
      console.log("test");
      setAffichage("Deconnexion");
      setContenu("J'espere que les Dieux etait avec vous aujourd'hui");
    } else {
      setIsConnect(false);
      setAffichage("Connexion");
      setContenu(`Si vous souhaiter créer un nouveau Sponsor 
      prennez une autre pierre`);
    }
  }, [isConnect]);

  useEffect(() => {
    getStorageValue(setIsConnect);
  }, []);

  console.log("blabla");

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
              {Affichage !== "Deconnexion" ? (
                <Connect setIsConnect={setIsConnect} />
              ) : (
                <Deconnect setIsConnect={setIsConnect} />
              )}
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
