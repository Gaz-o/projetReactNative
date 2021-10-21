import AsyncStorage from "@react-native-async-storage/async-storage";

const setter = (set, e) => {
  set(e.target.value);
};

const tokenHeaders = () => {
  const token = localStorage.getItem("jwt");
  return { Authorization: "Bearer " + token };
};

const getStorageValue = async (get, setIsConnect) => {
  console.log(get, "storage");
  try {
    const response = await AsyncStorage.getItem(get);
    console.log("recuperation stockage");
    setIsConnect(true)
  } catch (e) {
    setIsConnect(false)
    console.log("erreur de recuperation stockage");
  }
};

const setStorageValue = async (set, value, setIsConnect) => {
  try {
    await AsyncStorage.setItem(set, value);
    console.log("création stockage");    
    setIsConnect(true)
  } catch (e) {
    setIsConnect(false)
    console.log("erreur de création stockage");
  }
};

const removeStorageValue = async (target, setIsConnect) => {
  try {
    setIsConnect(false)
    let response = await AsyncStorage.removeItem(target);
    console.log("effacement du stockage", response);
  } catch (e) {
    setIsConnect(true)
    return console.log("erreur d'effacement du stockage");
  }  
};

module.exports = {
  setter,
  tokenHeaders,
  getStorageValue,
  setStorageValue,
  removeStorageValue,
};
