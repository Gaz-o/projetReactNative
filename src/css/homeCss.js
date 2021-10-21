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
    top: 50,
    left: 30,
    width: 300,
    height: 600,
    justifyContent: "center"
  },
  containerParchemin: {
    height:"80%",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  TitreParchemin: {
    paddingHorizontal: "15%",
    fontWeight: "700",
  },
  ContenuParchemin: {
    paddingHorizontal: "15%",
    fontWeight: "500",
  },
  FooterParchemin: {
    paddingHorizontal: "15%",
    fontWeight: "500",
  },
});

export default styles;