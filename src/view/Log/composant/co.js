import React, { useState } from "react";
import { setStorageValue } from "../../../function/function";
import { View, Text, TextInput, ImageBackground } from "react-native";
import Service from "../../../../services";
import styles from "../../../css/homeCss";

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
    <View style={styles.ConteneurMarbre}>
      <ImageBackground
        source={require("../../../img/marbre2.jpg")}
        style={styles.Marbre}
      >
        <Text style={styles.TextA}>Votre address mail</Text>
        <TextInput
          style={styles.input}
          type="email"
          name="mail"
          value={Mail}
          onChangeText={setMail}
        />
        <Text style={styles.TextA}>Votre code secret</Text>
        <TextInput
          style={styles.input}
          type="password"
          name="password"
          value={Password}
          onChangeText={setPassword}
        ></TextInput>
        <Text style={styles.TextAErr}>{ErrMessage}</Text>
        <Text style={styles.btnMarbre} onPress={btnConnecter}>
          Connecter
        </Text>
      </ImageBackground>
    </View>
  );
}

export default Connection;
