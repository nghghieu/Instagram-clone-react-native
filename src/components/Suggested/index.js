import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ImageProfileNormal from "../ImageProfileNormal";
import styles from "./styles";

const Suggested = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <ImageProfileNormal imageUri={item.user.imageUri} size={90} />

      <Text style={styles.nameText}>{item.user.name}</Text>

      <Text style={{ fontSize: 12 }}>Follows you</Text>

      <TouchableOpacity style={styles.buttonFollow}>
        <Text style={{ color: "white" }}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Suggested;
