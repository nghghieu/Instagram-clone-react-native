import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  infoProfile: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 50,
  },
  infoItem: {
    alignItems: "center",
  },
  infoCount: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default styles;
