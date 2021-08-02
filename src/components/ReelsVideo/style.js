import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  itemContainer: {
    width: width,
    height: height - 85,
    justifyContent: "flex-end",
  },
  video: {
    width: width,
    height: height,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  leftContainer: {
    flex: 8,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "white",
    marginHorizontal: 7,
  },
  text: {
    color: "white",
    fontSize: 13,
    fontWeight: "500",
    fontWeight: "bold",
  },
  music: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    flex: 2,
    alignItems: "center",
    marginRight: -15,
  },
  rightItem: {
    marginVertical: 10,
    alignItems: "center",
  },
  textRight: {
    color: "white",
    fontSize: 12,
  },
  profileImageRight: {
    width: 40,
    height: 40,
    borderRadius: 6,
    borderColor: "white",
    borderWidth: 2,
    marginTop: 10,
  },
});

export default styles;
