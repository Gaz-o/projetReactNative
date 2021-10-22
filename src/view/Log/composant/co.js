import React, { useState } from "react";
import { setStorageValue } from "../../../function/function";
import { View, Text, TextInput } from "react-native";
import Service from "../../../../services";

function Connection(props) {
  const [Mail, setMail] = useState("");
  const [Password, setPassword] = useState("");
  const [ErrMessage, setErrMessage] = useState("");

  const btnConnecter = async () => {
    let path = "/user/login";
    let body = {
      mail: Mail,
      password: Password,
    };
    let isConnecter = await Service.post(path, body);
    if (isConnecter?.data?.success) {
      console.log(isConnecter?.data?.token);
      setStorageValue(isConnecter?.data?.token, props.setIsConnect);
    } else {
      setErrMessage(isConnecter?.data?.message);
    }
  };

  return (
    <View className="LogInput">
      <Text className="LogInputP">Votre address mail</Text>
      <TextInput
        type="email"
        name="mail"
        value={Mail}
        onChangeText={setMail}
      />
      <Text className="LogInputP">Votre code secret</Text>
      <TextInput
        type="password"
        name="password"
        value={Password}
        onChangeText={setPassword}
      ></TextInput>
      <Text className="ErrMessage">{ErrMessage}</Text>
      <Text className="BtnLogConnect" onPress={btnConnecter}>
        Connecter
      </Text>
    </View>
  );
}

export default Connection