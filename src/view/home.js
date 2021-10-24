import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../css/homeCss";

function Home() {
  let contenu = (`Nous vous proposons par cette missive d'investir dans un de nos Gladiateurs. Dans le cas ou ce serait votre premiere venue veuillez vous inscrire. En quelque phrase notre Colisé vous propose divers services, comme un appartement pour votre combattant que vous pourrez aller voir entre les combat. Un Hall of fame ou son honoré les plus grands combattants. Vous pourrez modifier votre inscription si vous le voulez a notre services administratif. Et pour certain le plus inventif nous proposer vos création qui seront etudié par nos arbitre.`);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/home.jpg")}
        style={styles.ImageHomeBackGround}
      >
        <ImageBackground
          source={require("../img/parchemin.png")}
          style={styles.ParcheminHome}
        >
          <View style={styles.containerParchemin}>
            <View style={styles.TitreParchemin}>
              <Text> Bonjour Cher Sponsor</Text>
            </View>
            <View style={styles.ContenuParchemin}>
              <Text> {contenu} </Text>
            </View>
            <View style={styles.FooterParchemin}>
              <Text>
                Toute l'équipe du colisé vous remerci d'avoir prix le temps de
                nous lire
              </Text>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

export default Home