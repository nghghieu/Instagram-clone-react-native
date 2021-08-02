import React, { useEffect, useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomSheetPreview from "../../components/BottomSheetPreview";
import ProfilePreviewBody from "../../components/ProfilePreView/Body";
import Button from "../../components/ProfilePreView/Button";
import ProfilePreviewHeader from "../../components/ProfilePreView/Header";
import Spacer from "../../components/Spacer";
import Suggested from "../../components/Suggested";
import TextName from "../../components/TextName";
import stories from "../../data/stories";
import styles from "./styles";

const ProfileActivityScreen = ({ navigation, route }) => {
  const [active, setActive] = useState(false);
  const { data } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${data.user.name}`,
    });
  }, []);

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Profile */}
        <ProfilePreviewHeader data={data} />

        {/* Profile infomation */}
        <View style={styles.texContainer}>
          <Text style={styles.profileInfoName}>{data.user.name}</Text>
          <View style={styles.profileInfoDescription}>
            <Text>Followed by </Text>

            <TextName name="chaukhoa97" />

            <Text> and </Text>

            <TextName name="ha_van_thang16" />
          </View>
        </View>

        {/* Button container */}
        <View style={styles.buttonContainer}>
          <Button primary />

          <Spacer left={5} />

          <Button title="Message" />

          <Spacer left={5} />

          <View>
            <Pressable
              style={styles.suggestedButton}
              onPress={() => setActive(!active)}
            >
              <Ionicons name="caret-down-outline" size={15} />
            </Pressable>
          </View>
        </View>

        {/* Suggested container */}
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
              renderItem={({ item, idx }) => (
                <Suggested key={idx} item={item} />
              )}
            />
          </View>
        )}

        {/* Body container */}
        <ProfilePreviewBody data={data} />

        {/* Bottom Sheet */}
        <BottomSheetPreview navigation={navigation} />
      </ScrollView>
    </>
  );
};

export default ProfileActivityScreen;
