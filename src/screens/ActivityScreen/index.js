import {
  Inter_400Regular,
  Inter_500Medium,
  useFonts,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import React from "react";
import { ScrollView, Text } from "react-native";
import UserActivity from "../../components/UserActivity";
import stories from "../../data/stories";
import styles from "./styles";

const ActivityScreen = () => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textDate}>This Week</Text>
      {stories.map((item) => (
        <UserActivity key={item.user.id} item={item} />
      ))}

      <Text style={styles.textDate}>This Month</Text>

      {stories.map((item) => (
        <UserActivity key={item.user.id} item={item} />
      ))}

      <Text style={styles.textDate}>Earlier</Text>

      {stories.map((item) => (
        <UserActivity key={item.user.id} item={item} />
      ))}
    </ScrollView>
  );
};

export default ActivityScreen;
