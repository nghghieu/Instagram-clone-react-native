import { Platform, StyleSheet } from "react-native";
const isAndroid = Platform.OS === "android";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? 30 : 0,
  },
  searchBar: {
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 15,
    backgroundColor: "#eee",
  },
  imageItem: {
    flex: 1,
  },
  flatListRenderImage: {
    flex: 1,
  },
  touchable: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: 200,
    resizeMode: "cover",
  },
});

export default styles;
