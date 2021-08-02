import React from "react";
import { Dimensions, FlatList, Image, ScrollView } from "react-native";
import Feed from "../../components/Feed";
import Footer from "../../components/Post/components/Footer";
import Header from "../../components/Post/components/Header";
import styles from "./styles";

const DiscoveryDetailScreen = ({ route }) => {
  const { user, stories } = route.params.user;
  const { width } = Dimensions.get("window");

  return (
    <ScrollView styles={styles.container}>
      <Header imageUri={user.imageUri} name={user.name} />
      <ScrollView
        style={styles.scrollImage}
        horizontal
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={width}
      >
        {stories.map((item, idx) => {
          return (
            <Image
              style={styles.image}
              key={idx}
              source={{
                uri: item.imageUri,
              }}
            />
          );
        })}
      </ScrollView>
      <Footer
        likesCount={stories[0].likesCount}
        caption={stories[0].caption}
        postedAt={stories[0].postedTime}
      />
      <Feed />
    </ScrollView>
  );
};

export default DiscoveryDetailScreen;
