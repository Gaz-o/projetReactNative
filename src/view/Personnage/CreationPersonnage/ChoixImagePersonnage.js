import combattant1 from "../../../img/combattant/combattant1.jpg";
import combattant2 from "../../../img/combattant/combattant2.jpg";
import combattant3 from "../../../img/combattant/combattant3.jpg";
import combattant4 from "../../../img/combattant/combattant4.jpg";
import combattant5 from "../../../img/combattant/combattant5.jpg";
import combattant6 from "../../../img/combattant/combattant6.jpg";
import React from "react";
import { Image, Pressable, View } from "react-native";
import styles from "../../../css/homeCss";

function ChoixImagePersonnage(props) {
  let choixPersonnages = [
    combattant1,
    combattant2,
    combattant3,
    combattant4,
    combattant5,
    combattant6,
  ];
  let nombres = choixPersonnages.length;

  const imageprecedente = () => {
    if (props.Choix === 0) {
      props.setChoix(nombres - 1);
    } else {
      props.setChoix(props.Choix - 1);
    }
  };

  const imagesuivant = () => {
    if (props.Choix === nombres - 1) {
      props.setChoix(0);
    } else {
      props.setChoix(props.Choix + 1);
    }
  };

  return (
    <View>
      <View style={styles.ContenuCreerPersonnage}>
        <Pressable onPress={imageprecedente}>
          <Image
            source={require("../../../img/Lchevron.png")}
            style={styles.Chevron}
          />
        </Pressable>
        <View style={styles.ContenuImagePersonnage}>
          <Image
            source={choixPersonnages[props.Choix]}
            style={styles.ImagePersonnage}
          />
        </View>
        <Pressable style={styles.Chevron} onPress={imagesuivant}>
          <Image
            source={require("../../../img/Rchevron.png")}
            style={styles.Chevron}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default ChoixImagePersonnage;
