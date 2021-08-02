import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 20,
    marginTop: 10,
  },
  profileInfoName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  profileInfoDescription: {
    flexDirection: "row",
    alignItems: "center",
  },
  suggestedButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  texContainer: {
    paddingHorizontal: 15,
    marginTop: 10,
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
  seeAllButton: {
    color: "#05a7f5",
  },
});

export default styles;
