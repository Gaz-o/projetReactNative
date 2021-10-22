import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Service from "../../../../services";
import { setStorageValue } from "../../../function/function";

function Inscription(props) {
  const [Pseudo, setPseudo] = useState("");
  const [Mail, setMail] = useState("");
  const [Password, setPassword] = useState("");
  const [ErrMessage, setErrMessage] = useState("");

  const btnCreation = async () => {
    let path = "/user/add";
    let body = {
      pseudo: Pseudo,
      mail: Mail,
      password: Password,
    };
    console.log(body);
    let creation = await Service.post(path, body);
    if (creation.data.success) {
      let path = "/user/login";
      let body = {
        mail: Mail,
        password: Password,
      };
      let isConnecter = await Service.post(path, body);
      if (isConnecter?.data?.success) {
        setStorageValue(isConnecter?.data?.token, props.setIsConnect);
      } else {
        setErrMessage(isConnecter.data.message);
      }
    } else {
      setErrMessage(creation.data.message)
    }
  };

  return (
    <View className="LogInput">
      <Text>Votre Pseudo</Text>
      <TextInput
        type="text"
        name="pseudo"
        value={Pseudo}
        onChangeText={setPseudo}
      ></TextInput>
      <Text>Votre address mail</Text>
      <TextInput
        type="email"
        name="mail"
        value={Mail}
        onChangeText={setMail}
      ></TextInput>
      <Text>Votre code secret</Text>
      <TextInput
        type="password"
        name="password"
        value={Password}
        onChangeText={setPassword}
      ></TextInput>
      <Text className="ErrMessage">{ErrMessage}</Text>
      <Text className="BtnLogConnect" onPress={btnCreation}>
        Création
      </Text>
    </View>
  );
}

export default Inscription