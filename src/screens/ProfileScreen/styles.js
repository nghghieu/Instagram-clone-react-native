import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textName: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: "bold",
    fontSize: 15,
  },
  buttonContainer: {
    paddingHorizontal: 15,
    flexDirection: "row",
    marginVertical: 15,
  },
  suggestedContainer: {
    height: 250,
    backgroundColor: "white",
  },
  suggestHeader: {
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    marginBottom: 10,
  },
  suggestButton: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 8,
    marginLeft: 10,
  },
  seeAllButton: {
    color: "#05a7f5",
  },
});

export default styles;
