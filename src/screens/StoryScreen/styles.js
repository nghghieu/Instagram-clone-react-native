import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 30,
    resizeMode: "contain",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  userName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  postedTime: {
    marginLeft: 10,
    color: "#808080",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  cameraButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
  },
  textInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
    color: "white",
    fontSize: 16,
  },
});

export default styles;
