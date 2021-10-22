import { useEffect, useState } from "react";
import Connect from "./composant/connect";
import Deconnect from "./composant/deco";
import React from "react";
import { Text, View } from "react-native";
import { getStorageValue } from "../../function/function.js";

export default function Log() {
  const [Contenu, setContenu] = useState();
  const [Affichage, setAffichage] = useState();
  const [isConnect, setIsConnect] = useState();
  const [Jwt, setJwt] = useState()
  
  useEffect(() => {
    if (isConnect === true) {
      console.log("test");
      setAffichage("Deconnexion");
      setContenu("J'espere que les Dieux etait avec vous aujourd'hui");
    } else {
      setIsConnect(false)
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
    <View>
      <View className="ImageLogBackGround">
        <View className="ParcheminLog">
          <View className="ConteneurLog">
            <Text className="TitreLog">Bonjour Cher Sponsor</Text>
            <Text className="ContenuLog"> {Contenu} </Text>
            {Affichage !== "Deconnexion" ? (
              <Connect setIsConnect={setIsConnect}  />
            ) : (
              <Deconnect setIsConnect={setIsConnect}/>
            )}
            <Text className="FooterLog">
              {" "}
              Toute l'équipe du colisé vous remerci d'avoir prix le temps de
              nous lire{" "}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
