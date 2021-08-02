import React from "react";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const EmtyArrayPreview = ({ iconName = "person-outline" }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={60} color="black" />
      </View>
      <Text style={styles.text}>No Post Yet</Text>
    </View>
  );
};

export default EmtyArrayPreview;
