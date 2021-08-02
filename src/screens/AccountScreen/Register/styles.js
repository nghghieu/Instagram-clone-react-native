import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 2,
    fontSize: 16,
    backgroundColor: "#eee",
  },
  textError: {
    marginVertical: 5,
    alignSelf: "flex-start",
    color: "red",
  },
  imageLogo: {
    width: 200,
    height: 60,
    alignSelf: "center",
    marginBottom: 30,
  },
  facebookLogin: {
    width: "100%",
    height: 50,
    backgroundColor: "#05a7f5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    flexDirection: "row",
  },
  facebookLoginText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,
    marginLeft: 15,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  signInText: {
    color: "#ccc",
    fontSize: 16,
    alignSelf: "center",
    marginVertical: 10,
  },
  signInTextBold: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
    marginTop: 20,
  },
  eyeSecurity: {
    position: "absolute",
    right: 20,
    top: 12,
  },
});

export default styles;
