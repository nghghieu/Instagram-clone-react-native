import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  infoActivity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginVertical: 10,
  },
  leftContent: {
    flexDirection: "row",
    flex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    backgroundColor: "#05a7f5",
    borderRadius: 5,
  },
  buttonFollowing: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 5,
  },
  textButton: {
    color: "white",
    padding: 5,
    paddingHorizontal: 10,
  },
  textButtonFollowing: {
    color: "black",
    padding: 5,
    paddingHorizontal: 10,
  },
  textNameUser: {
    fontWeight: "bold",
  },
  leftContentDescContainer: {
    flexDirection: "row",
    width: 220,
    flexWrap: "wrap",
  },
});

export default styles;
