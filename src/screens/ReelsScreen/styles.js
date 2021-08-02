import { StyleSheet, Platform, Dimensions } from "react-native";
const isAndroid = Platform.OS === "android";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? 30 : 0,
  },
  positionView: {
    position: "absolute",
    top: 10,
  },
  textReels: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default styles;
