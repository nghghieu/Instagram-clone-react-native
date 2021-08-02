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
  lineGestureText: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  optionItem: {
    height: 50,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
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
  icon: {
    marginRight: 15,
  },
});

export default styles;
