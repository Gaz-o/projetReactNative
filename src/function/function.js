import AsyncStorage from "@react-native-async-storage/async-storage";

const tokenHeaders = async () => {
  try {
    const token = await AsyncStorage.getItem("save");
    if (token !== null) {
      console.log("recuperation stockage");
      return { Authorization: "Bearer " + token };
    } else {
      console.log("pas de connection enregistré");
    }
  } catch (e) {
    console.log("Erreur de token");
  }
};

const getStorageValue = async (setIsConnect) => {
  try {
    const response = await AsyncStorage.getItem("save");
    if (response !== null) {
      console.log("recuperation stockage");
      setIsConnect(true);
    } else {
      console.log("pas de connection enregistré");
      setIsConnect(false);
    }
  } catch (e) {
    setIsConnect(false);
    console.log("erreur de recuperation stockage");
  }
};

const setStorageValue = async (value) => {
  try {
    await AsyncStorage.setItem("save", value);
    console.log("création stockage");
  } catch (e) {
    console.log("erreur de création stockage");
  }
};

module.exports = {
  tokenHeaders,
  getStorageValue,
  setStorageValue,
};
