import React from "react";
import { View, Text } from "react-native";
import { removeStorageValue } from "../../../function/function.js";
import Service from "../../../../services";

function Deconnect(props) {
  const btnLogOut = async () => {
    try {
      let logout = await Service.postLogout();
      if (logout?.data?.success) {
        removeStorageValue("jwt", props.setIsConnect());
      }
    } catch {
      console.log(logout?.data?.message);
    }
  };

  return (
    <View className="Log">
      <View className="LogInput">
        <Text>Merci de votre</Text>
        <Text>passage</Text>
        <Text className="BtnLogConnect" onPress={btnLogOut}>
          Deconnecter
        </Text>
      </View>
    </View>
  );
}

export default Deconnect