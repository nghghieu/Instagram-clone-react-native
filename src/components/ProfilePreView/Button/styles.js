import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    backgroundColor: "#05a7f5",
    borderColor: "#05a7f5",
    borderRadius: 5,
    borderWidth: 1,
  },
  buttonWhite: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  textButton: {
    color: "white",
    padding: 5,
    paddingHorizontal: 10,
  },
  textButtonWhite: {
    color: "black",
    padding: 5,
    paddingHorizontal: 10,
  },
});

export default styles;
