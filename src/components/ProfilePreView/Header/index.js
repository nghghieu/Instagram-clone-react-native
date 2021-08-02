import React from "react";
import { Text, View } from "react-native";
import ImageProfileNormal from "../../ImageProfileNormal";
import styles from "./styles";

const ProfilePreviewHeader = ({ data }) => {
  return (
    <View style={styles.container}>
      <View>
        <ImageProfileNormal imageUri={data.user.imageUri} size={90} />
      </View>
      <View style={styles.infoProfile}>
        <View style={styles.infoItem}>
          <Text style={styles.infoCount}>{data.stories.length}</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoCount}>65</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoCount}>35</Text>
          <Text>Following</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfilePreviewHeader;
