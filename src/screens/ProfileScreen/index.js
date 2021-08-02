import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Pressable, Text, View, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomSheetAdd from "../../components/BottomSheetPreview/BottomSheetAdd";
import ProfilePreviewBody from "../../components/ProfilePreView/Body";
import Button from "../../components/ProfilePreView/Button";
import ProfilePreviewHeader from "../../components/ProfilePreView/Header";
import Suggested from "../../components/Suggested";
import stories from "../../data/stories";
import styles from "./styles";

const ProfileScreen = () => {
  const [active, setActive] = useState(true);
  const data = stories[0];
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <ProfilePreviewHeader data={data} />
      <Text style={styles.textName}>{data.user.name}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Edit Profile" />
        <Pressable
          style={styles.suggestButton}
          onPress={() => setActive(!active)}
        >
          <Ionicons name="caret-down-outline" size={15} />
        </Pressable>
      </View>

      {active && (
        <View style={styles.suggestedContainer}>
          <View style={styles.suggestHeader}>
            <Text>Suggested for you</Text>
            <Text style={styles.seeAllButton}>See All</Text>
          </View>

          {/* FlatList Suggested */}
          <FlatList
            data={stories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.user.id}
            renderItem={({ item, idx }) => <Suggested key={idx} item={item} />}
          />
        </View>
      )}

      <ProfilePreviewBody data={data} />

      <BottomSheetAdd data={data} navigation={navigation} />
    </ScrollView>
  );
};

export default ProfileScreen;
