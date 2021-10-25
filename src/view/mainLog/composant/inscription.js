import React, { useState } from "react";
import { View, Text, TextInput, ImageBackground } from "react-native";
import Service from "../../../../services";
import styles from "../../../css/homeCss";
import { setStorageValue } from "../../../function/function";

function Inscription({navigation}) {
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
        setStorageValue(isConnecter?.data?.token);
        navigation.navigate("NavBar")
      } else {
        setErrMessage(isConnecter.data.message);
      }
    } else {
      setErrMessage(creation.data.message);
    }
  };

  return (
    <View style={styles.ConteneurMarbre}>
      <ImageBackground
        source={require("../../../img/marbre2.jpg")}
        style={styles.Marbre}
      >
        <Text style={styles.TextA}>Votre Pseudo</Text>
        <TextInput
          style={styles.input}
          type="text"
          name="pseudo"
          value={Pseudo}
          onChangeText={setPseudo}
        ></TextInput>
        <Text style={styles.TextA}>Votre address mail</Text>
        <TextInput
          style={styles.input}
          type="email"
          name="mail"
          value={Mail}
          onChangeText={setMail}
        ></TextInput>
        <Text style={styles.TextA}>Votre code secret</Text>
        <TextInput
          style={styles.input}
          type="password"
          name="password"
          value={Password}
          onChangeText={setPassword}
        ></TextInput>
        <Text style={styles.TextAErr}>{ErrMessage}</Text>
        <Text style={styles.btnMarbre} onPress={btnCreation}>
          Création
        </Text>
      </ImageBackground>
    </View>
  );
}

export default Inscription;
