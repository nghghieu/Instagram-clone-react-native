import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  leftIcons: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likes: {
    margin: 3,
    fontWeight: "bold",
  },
  caption: {
    margin: 3,
  },
  postAt: {
    margin: 3,
    color: "#8c8c8c",
  },
});

export default styles;
