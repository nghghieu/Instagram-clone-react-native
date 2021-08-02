import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, TouchableOpacity } from "react-native";

const { width } = Dimensions.get("window");

const GridRender = ({ item, data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ width: width / 3 }}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Post", { item: item, data: data })}
    >
      <Image
        resizeMode="cover"
        source={{
          uri: item.imageUri,
        }}
        style={{ height: 200 }}
      />
    </TouchableOpacity>
  );
};

export default GridRender;
