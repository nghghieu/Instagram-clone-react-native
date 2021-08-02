import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
    resizeMode: "cover",
  },
  scrollImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
  },
});

export default styles;
