import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ImageProfileNormal from "../ImageProfileNormal";
import Spacer from "../Spacer";
import styles from "./styles";

const UserActivity = ({ following, item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.infoActivity}>
      <TouchableOpacity
        style={styles.leftContent}
        onPress={() => {
          navigation.navigate("Profile", { data: item });
        }}
      >
        <ImageProfileNormal imageUri={item.user.imageUri} size={40} />

        <Spacer right={15} />

        <View style={styles.leftContentDescContainer}>
          <TouchableOpacity>
            <Text style={styles.textNameUser}>chaudinhkhoa.97</Text>
          </TouchableOpacity>

          <Text> and</Text>

          <TouchableOpacity>
            <Text style={styles.textNameUser}>ha_van_thang16</Text>
          </TouchableOpacity>

          <Text> followed</Text>

          <TouchableOpacity>
            <Text style={styles.textNameUser}> {item.user.name}</Text>
          </TouchableOpacity>

          <Text>
            on instagam. See their posts.
            <Text style={{ color: "#ccc" }}> 5d </Text>
          </Text>
        </View>
      </TouchableOpacity>

      {following ? (
        <TouchableOpacity style={styles.buttonFollowing}>
          <Text style={styles.textButtonFollowing}> Following</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}> Follow</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserActivity;
