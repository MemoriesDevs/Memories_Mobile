import { StyleSheet } from "react-native";
import COLORS from "../../../../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: 700,
    width: "100%",
    backgroundColor: COLORS.PRIMARY,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    top: 250,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    color: "black",
    marginTop: "10%",
  },
  containerCards: {
    width: "90%",
    height: "60%",
    marginBottom: "5%",
    justifyContent: "space-evenly",
  },
});

export default styles;
