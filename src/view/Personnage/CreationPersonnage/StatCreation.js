import { useState } from "react";
import Service from "../../../../services";
import ChoixImagePersonnage from "./ChoixImagePersonnage";
import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import styles from "../../../css/homeCss";

function StatCreation(props) {
  const [Texte, setTexte] = useState("");
  const [Choix, setChoix] = useState(0);
  const [StatTotal, setStatTotal] = useState(20);
  const [StatAgi, setStatAgi] = useState(5);
  const [StatFor, setStatFor] = useState(5);
  const [StatDef, setStatDef] = useState(5);
  const [StatPV, setStatPV] = useState(5);
  const [Nom, setNom] = useState("");

  const soumettrePersonnage = async () => {
    if (StatTotal === 0 && Nom !== "" && Texte !== "") {
      let body = {
        pseudoPersonnage: Nom,
        visuel: Choix,
        stats: {
          for: StatFor,
          def: StatDef,
          agi: StatAgi,
          pv: StatPV,
          reste: StatTotal,
        },
        bio: Texte,
        vie: StatPV,
        reputation: StatAgi + StatFor + StatDef + StatPV,
      };
      let creationPersonnage = await Service.postPersonnage(body);
      if (creationPersonnage.data.success) {
        props.recupUser();
        props.setBtnParam("");
      }
    }
  };

  const statDown = (setter, data) => {
    if (data > 0) {
      setStatTotal(StatTotal + 1);
      setter(data - 1);
    }
  };

  const statUp = (setter, data) => {
    if (StatTotal > 0) {
      setStatTotal(StatTotal - 1);
      setter(data + 1);
    }
  };

  return (
    <View>
      <ChoixImagePersonnage Choix={Choix} setChoix={setChoix} />
      <View style={styles.ConteneurStatTotal}>
        <View className="ConteneurStatCreerPersonnage">
          <View style={styles.StatCreerPersonnage}>
            <Text>Nom: </Text>
            <TextInput style={styles.input} onChangeText={setNom} placeholder={"Pseudo"}></TextInput>
          </View>
          <View style={styles.StatCreerPersonnage}>
            <Text style={styles.StatCreer}>Force: </Text>
            <Pressable
              style={styles.osef}
              onPress={() => statDown(setStatFor, StatFor)}
            >
              <Image
                source={require("../../../img/Lchevron.png")}
                style={styles.PetitChevron}
              />
            </Pressable>
            <Text className="Stat">{StatFor}</Text>
            <Pressable
              style={styles.osef}
              onPress={() => statUp(setStatFor, StatFor)}
            >
              <Image
                source={require("../../../img/Rchevron.png")}
                style={styles.PetitChevron}
              />
            </Pressable>
          </View>
          <View style={styles.StatCreerPersonnage}>
            <Text style={styles.StatCreer}>Defence: </Text>
            <Pressable
              style={styles.osef}
              onPress={() => statDown(setStatDef, StatDef)}
            >
              <Image
                source={require("../../../img/Lchevron.png")}
                style={styles.PetitChevron}
              />
            </Pressable>
            <Text>{StatDef}</Text>
            <Pressable
              style={styles.osef}
              onPress={() => statUp(setStatDef, StatDef)}
            >
              <Image
                source={require("../../../img/Rchevron.png")}
                style={styles.PetitChevron}
              />
            </Pressable>
          </View>
          <View style={styles.StatCreerPersonnage}>
            <Text style={styles.StatCreer}>Agilité: </Text>
            <Pressable
              style={styles.osef}
              onPress={() => statDown(setStatAgi, StatAgi)}
            >
              <Image
                source={require("../../../img/Lchevron.png")}
                style={styles.PetitChevron}
              />
            </Pressable>
            <Text>{StatAgi}</Text>
            <Pressable
              style={styles.osef}
              onPress={() => statUp(setStatAgi, StatAgi)}
            >
              <Image
                source={require("../../../img/Rchevron.png")}
                style={styles.PetitChevron}
              />
            </Pressable>
          </View>
          <View style={styles.StatCreerPersonnage}>
            <Text style={styles.StatCreer}>Vie: </Text>
            <Pressable
              style={styles.osef}
              onPress={() => statDown(setStatPV, StatPV)}
            >
              <Image
                source={require("../../../img/Lchevron.png")}
                style={styles.PetitChevron}
              />
            </Pressable>
            <Text>{StatPV}</Text>
            <Pressable
              style={styles.osef}
              onPress={() => statUp(setStatPV, StatPV)}
            >
              <Image
                source={require("../../../img/Rchevron.png")}
                style={styles.PetitChevron}
              />
            </Pressable>
          </View>
        </View>
        <Text className="StatTotal">{StatTotal}</Text>
      </View>
      <View className="ConteneurBioCreerPersonnage">
        <Text className="TitreBioCreerPersonnage">
          Desciption rapide du personnage
        </Text>
        <TextInput onChangeText={setTexte} style={styles.input}></TextInput>
      </View>
        <Pressable onPress={soumettrePersonnage} style={styles.btnMarbre}>
          <ImageBackground
            source={require("../../../img/marbre2.jpg")}
            style={styles.Marbre}
          >
          <Text style={styles.TextA}> Créer </Text>
          </ImageBackground>
        </Pressable>
    </View>
  );
}

export default StatCreation;
