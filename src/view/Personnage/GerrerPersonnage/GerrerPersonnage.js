import { Text, View } from "react-native";

function GerrerPersonnage(props) {
  return (
    <View className="ConteneurPersonnage">
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
          <Text className="Denomination">Inventaire</Text>
        </View>
      </View>
    </View>
  );
}

export default GerrerPersonnage;
