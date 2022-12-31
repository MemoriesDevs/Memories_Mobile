import { StyleSheet } from "react-native";
import COLORS from "../../../../../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    height: "70%",
    width: "100%",
    backgroundColor: COLORS.PRIMARY,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "auto",
    alignItems: "center",
    paddingTop: "5%",
  },
  image: {
    height: 100,
    width: 100,
    marginTop: "10%",
    margin: "2%",
  },
  containerCards: {
    marginTop: "5%",
    width: "90%",
  },
  containerButtons: {
    width: "90%",
    justifyContent: "space-between",
    marginTop: 70,
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default styles;
