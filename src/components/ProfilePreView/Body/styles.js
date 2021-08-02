import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  optionContainer: {
    height: 40,
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  optionItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: "50%",
    height: 1,
    backgroundColor: "black",
  },
  bodyContainer: {
    flex: 1,
  },
  gridContainer: {
    width: width,
    flexDirection: "row",
    flexWrap: "wrap",
    minHeight: height / 2,
  },
});

export default styles;
