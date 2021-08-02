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
  imageLogo: {
    width: 200,
    height: 60,
    alignSelf: "center",
  },
  facebookLogin: {
    width: "100%",
    height: 50,
    backgroundColor: "#05a7f5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    flexDirection: "row",
    marginBottom: 50,
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
  },
  line: {
    flex: 2,
    height: 1,
    backgroundColor: "#ccc",
  },
  lineText: {
    color: "gray",
    paddingHorizontal: 20,
  },
  signUpText: {
    color: "#05a7f5",
    fontSize: 16,
    alignSelf: "center",
    marginTop: 20,
  },
  signInText: {
    color: "#ccc",
    fontSize: 16,
    alignSelf: "center",
    marginTop: 120,
  },
  signInTextBold: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default styles;
