import React, { useState } from "react";
import { setter } from "../../../function/function";
import { View, Text, TextInput } from "react-native";
import Service from "../../../../services";

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
    let creation = await Service.post(path, body);
    if (creation.data.success) {
      let path = "/user/login";
      let body = {
        mail: Mail,
        password: Password,
      };
      let isConnecter = await Service.post(path, body);
      if (isConnecter.data.success) {
        localStorage.setItem("jwt", isConnecter.data.token);
        setIsConnect(isConnecter.data.success);
        setPseudo("");
        setMail("");
        setPassword("");
      } else {
        setErrMessage(isConnecter.data.message);
      }
    }
  };

  return (
    <View className="LogInput">
      <Text>Votre Pseudo</Text>
      <TextInput
        type="text"
        name="pseudo"
        value={Pseudo}
        onChange={(e) => setter(setPseudo, e)}
      ></TextInput>
      <Text>Votre address mail</Text>
      <TextInput
        type="email"
        name="mail"
        value={Mail}
        onChange={(e) => setter(setMail, e)}
      ></TextInput>
      <Text>Votre code secret</Text>
      <TextInput
        type="password"
        name="password"
        value={Password}
        onChange={(e) => setter(setPassword, e)}
      ></TextInput>
      <Text className="ErrMessage">{ErrMessage}</Text>
      <Text className="BtnLogConnect" onPress={btnCreation}>
        Création
      </Text>
    </View>
  );
}

export default Inscription