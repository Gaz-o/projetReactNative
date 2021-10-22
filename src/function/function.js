import AsyncStorage from "@react-native-async-storage/async-storage";

const tokenHeaders = () => {
  const token = localStorage.getItem("jwt");
  return { Authorization: "Bearer " + token };
};

const getStorageValue = async (setIsConnect) => {
  console.log("save", "storage");
  try {
    const response = await AsyncStorage.getItem("save");
    console.log(response);
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

const setStorageValue = async (value, setIsConnect) => {
  console.log("save", setIsConnect, "storage");
  try {
    await AsyncStorage.setItem("save", value);
    console.log("création stockage");
    setIsConnect(true);
  } catch (e) {
    setIsConnect(false);
    console.log("erreur de création stockage");
  }
};

const removeStorageValue = async (setIsConnect) => {
  try {
    await AsyncStorage.removeItem("save");
    console.log("effacement du stockage");
    setIsConnect(false);
  } catch (e) {
    setIsConnect();
    return console.log("erreur d'effacement du stockage");
  }
};

module.exports = {
  tokenHeaders,
  getStorageValue,
  setStorageValue,
  removeStorageValue,
};
