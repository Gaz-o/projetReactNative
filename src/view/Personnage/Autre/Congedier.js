import { Image, Text, View } from "react-native";
import combattant1 from "../../../img/combattant/combattant1.jpg";
import combattant2 from "../../../img/combattant/combattant2.jpg";
import combattant3 from "../../../img/combattant/combattant3.jpg";
import combattant4 from "../../../img/combattant/combattant4.jpg";
import combattant5 from "../../../img/combattant/combattant5.jpg";
import combattant6 from "../../../img/combattant/combattant6.jpg";
import Service from "../../../../services";

function CongedierPersonnage(props) {

  /* let choixPersonnages = [
    combattant1,
    combattant2,
    combattant3,
    combattant4,
    combattant5,
    combattant6,
  ];

  const btnCongedier = async () => {
    let body = {
        proprietaire: props.Combattant.proprietaire,
      };
      let congedier = await Service.congedierPersonnage(body);
      if (congedier.data.success) {
        props.recupUser()
        props.setBtnParam("")
      }
  } */

  return (
    <View className="ConteneurPersonnage">
      {/*<View className="ContenuPersonnage">
         <Image
          className="ImageCombattant"
          source={choixPersonnages[props.Combattant.visuel]}
          alt="un combattant"
        /> 
        <View className="ConteneurStat">
          <Text className="StatP">
            Nom:{" "}
            <Text className="StatSpan">
              {props.Combattant.pseudoPersonnage}
            </Text>
          </Text>
          <Text className="StatP">
            Force:{" "}
            <Text className="StatSpan">{props.Combattant.stats.for}</Text>
          </Text>
          <Text className="StatP">
            Defence:{" "}
            <Text className="StatSpan">{props.Combattant.stats.def}</Text>
          </Text>
          <Text className="StatP">
            Agiliter:{" "}
            <Text className="StatSpan">{props.Combattant.stats.agi}</Text>
          </Text>
          <Text className="StatP">
            Vie: <Text className="StatSpan">{props.Combattant.stats.pv}</Text>
          </Text>
        </View>
      </View>
      <View className="ConteneurBio">
        <Text className="TitreBio">Desciption rapide du personnage</Text>
        <Text className="ContenuBio">{props.Combattant.bio}</Text>
      </View>
      <View className="ConteneurEquipement">
        <View className="TitreEquipement">
          <Text className="Denomination">Equipement</Text>
          <Text className="EquipementP">
            Main Droit:
            <Text className="EquipementSpan">{props.Combattant.armeD}</Text>
          </Text>
          <Text className="DescriptifP"></Text>
          <Text className="EquipementP">
            Main Gauche:
            <Text className="EquipementSpan">{props.Combattant.armeG}</Text>
          </Text>
          <Text className="DescriptifP"></Text>
          <Text className="EquipementP">
            Tete:
            <Text className="EquipementSpan">{props.Combattant.tete}</Text>
          </Text>
          <Text className="DescriptifP"></Text>
          <Text className="EquipementP">
            Epaule:
            <Text className="EquipementSpan">{props.Combattant.epaule}</Text>
          </Text>
          <Text className="DescriptifP"></Text>
          <Text className="EquipementP">
            Torse:
            <Text className="EquipementSpan">{props.Combattant.torse}</Text>
          </Text>
          <Text className="DescriptifP"></Text>
          <Text className="EquipementP">
            Jambes:
            <Text className="EquipementSpan">{props.Combattant.jambes}</Text>
          </Text>
          <Text className="DescriptifP"></Text>
          <Text className="Denomination">Ressource</Text>
          <Text className="RessourceP">
            Réputation:
            <Text className="RessourceSpan">{props.Combattant.reputation}</Text>
          </Text>
          <Text className="RessourceP">
            Argent:
            <Text className="RessourceSpan">{props.Combattant.argent}</Text>
          </Text>
        </View>
      </View>
      <Text className="BtnCongedier" onPress={btnCongedier} >Congedier</Text>*/}
    </View>
  );
}

export default CongedierPersonnage;
