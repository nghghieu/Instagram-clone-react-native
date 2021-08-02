import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  BackHandler,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ProfilePicture from "../../components/ProfilePicture";
import storiesData from "../../data/stories";
import styles from "./styles";

const StoryScreen = ({ navigation }) => {
  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  const route = useRoute();

  const userID = route.params.userID;

  useEffect(() => {
    const userStories = storiesData.find(
      (storyData) => storyData.user.id === userID
    );
    setUserStories(userStories);
    setActiveStoryIndex(0);
  }, []);

  // Back Action

  const backAction = () => {
    navigation.navigate("Home");
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  // Navigate To User Action

  const navigateToNextUser = () => {
    navigation.push("Story", { userID: (parseInt(userID) + 1).toString() });
  };

  const navigateToPrevUser = () => {
    navigation.push("Story", { userID: (parseInt(userID) - 1).toString() });
  };

  // Handle To Next User Action

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      navigateToNextUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPrevUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  // Handle Press

  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get("window").width;

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  if (!userStories) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = userStories.stories[activeStoryIndex];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground
          source={{
            uri: activeStory.imageUri,
          }}
          style={styles.image}
        >
          <View style={styles.userInfo}>
            <ProfilePicture imageUri={userStories.user.imageUri} size={50} />
            <Text style={styles.userName}>{userStories.user.name}</Text>
            <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.cameraButton}>
              <Ionicons name="camera-outline" size={30} color="white" />
            </TouchableOpacity>

            <TextInput
              style={styles.textInput}
              placeholder="Send Messenge..."
              placeholderTextColor="white"
            />

            <TouchableOpacity>
              <Ionicons name="paper-plane-outline" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;
