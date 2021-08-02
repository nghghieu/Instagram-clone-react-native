import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  innerContainer: {
    width: "100%",
    height: 350,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 2,
    borderColor: "#ccc",
    backgroundColor: "white",
  },
  lineGestureContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
    marginBottom: 20,
  },
  lineGesture: {
    width: 50,
    height: 5,
    backgroundColor: "#ccc",
  },
  optionItem: {
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  backDropContainer: {
    backgroundColor: "#fff",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backDropClickScreen: {
    width: width,
    height: height,
    backgroundColor: "transparent",
  },
});

export default styles;
