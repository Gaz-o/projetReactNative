import FeuillePersonnage from "./VotrePersonnage/FeuillePersonnage.js";
import GerrerPersonnage from "./GerrerPersonnage/GerrerPersonnage.js";
import StatCreation from "./CreationPersonnage/StatCreation.js";
import CongedierPersonnage from "./Autre/Congedier.js";
import { useEffect, useState } from "react";
import Service from "../../../services";
import { getStorageValue } from "../../function/function.js";
import { ImageBackground, Text, View } from "react-native";
import styles from "../../css/homeCss.js";
import React from "react";

function Personnage({route, navigation}) {
  const [Combattant, setCombattant] = useState({});
  const [BtnParam, setBtnParam] = useState("");
  const [isConnect, setIsConnect] = useState();

  useEffect(() => {
    getStorageValue(setIsConnect);
  }, []);

  const recupUser = async () => {
    let result = await Service.getPersonnage();
    setCombattant(result.data);
  };

  const btnChange = (e) => {
    if (BtnParam === e.target.innerText) {
      setBtnParam("");
    } else {
      setBtnParam(e.target.innerText);
    }
  };

  useEffect(() => {
    recupUser();
  }, []);

  console.log(BtnParam);

  function affichage() {
    if (Combattant.success === true && BtnParam === "Gerrer") {
      return <GerrerPersonnage Combattant={Combattant.data} />;
    } else if (Combattant.success === true && BtnParam === "Congédier") {
      return (
        <CongedierPersonnage
          Combattant={Combattant.data}
          recupUser={recupUser}
          setBtnParam={setBtnParam}
        />
      );
    } else if (Combattant.success === true) {
      return <FeuillePersonnage Combattant={Combattant.data} />;
    } else if (Combattant.success === false) {
      return <StatCreation recupUser={recupUser} setBtnParam={setBtnParam} />;
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../img/personnage.jpg")}
        style={styles.ImageHomeBackGround}
      >
        <ImageBackground
          source={require("../../img/parchemin.png")}
          style={styles.ParcheminHome}
        >
          <View style={styles.containerParchemin}>
            <View style={styles.TitreParchemin}>
              {BtnParam === "Gerrer" ? (
                <Text
                  className="BtnHautParchemin"
                  onPress={(e) => btnChange(e)}
                >
                  Personnage
                </Text>
              ) : (
                <Text
                  className="BtnHautParchemin"
                  onPress={(e) => btnChange(e)}
                >
                  Gerrer
                </Text>
              )}
              {Combattant.success ? (
                <Text
                  className="BtnHautParchemin"
                  onPress={(e) => btnChange(e)}
                >
                  Congédier
                </Text>
              ) : (
                <Text
                  className="BtnHautParchemin"
                  onPress={(e) => btnChange(e)}
                >
                  Créer
                </Text>
              )}
            </View>
            <View style={styles.ContenuParchemin}>{affichage()}</View>
            <View style={styles.FooterParchemin}>
              <Text className="BtnBasParchemin" onPress={(e) => btnChange(e)}>
                R.I.P
              </Text>
              <Text className="BtnBasParchemin" onPress={(e) => btnChange(e)}>
                H.O.F
              </Text>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

export default Personnage;
