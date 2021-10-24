import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageHomeBackGround: {
    height:"100%",
    width:"100%"
  },
  ParcheminHome: {
    position: "relative",
    top: 5,
    left: 30,
    width: 300,
    height: 600,
    justifyContent: "center"
  },
  ConteneurMarbre: {
    width: "80%",
    marginHorizontal: "10%",
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "grey",
  },
  Marbre: {
    padding: 5,
  },
  btnMarbre: {
    width: "60%",
    marginHorizontal: "20%",
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "grey",
    textAlign: "center",
    textShadowColor: "white",
    textShadowRadius: 5,
    marginVertical: 5,
  },
  containerParchemin: {
    height:"80%",
    marginHorizontal: "15%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  TitreParchemin: {
    fontWeight: "700",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ContenuParchemin: {
    fontWeight: "500",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", 
  },
  FooterParchemin: {
    fontWeight: "500",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  Text: {
    marginBottom: 15,
    textShadowColor: "white",
    textShadowRadius: 5,
  },
  TextA: {
    marginVertical: 2,
    textAlign: "center",
    textShadowColor: "white",
    textShadowRadius: 5,
  },
  TextAErr: {
    color: "red",
    marginBottom: 15,
    textAlign: "center",
    textShadowColor: "white",
    textShadowRadius: 5,
  },
  PetitChevron: {
    width: 20,
    height: 20,
    tintColor: "rgb(114, 5, 5)",
  },
  Chevron: {
    width: 40,
    height: 40,
    tintColor: "rgb(114, 5, 5)",
  },
  StatCreerPersonnage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ConteneurStatTotal: {
    justifyContent: "space-around",
  },
  ContenuCreerPersonnage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ContenuImagePersonnage: {
    width: 100,
  },
  ImagePersonnage: {
    alignSelf: "center",
    width: 130, height: 180
  },
  StatCreer: {
    width: 55,
    textAlign: "left",
  },
  osef: {
    marginVertical: 3,
  },
  input: {
    padding: 2,
    width: "auto",
    backgroundColor: "rgba(100, 1, 1, 0.4)"
  }
  
});

export default styles;