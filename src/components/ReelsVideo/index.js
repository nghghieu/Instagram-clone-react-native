import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { Video } from "expo-av";
import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Spacer from "../../components/Spacer";
import styles from "./style";

const ReelsVideo = ({ item, idx, currentItem }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const handlePlay = () => {
    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
  };
  React.useEffect(() => {
    if (item.id === currentItem) {
      handlePlay();
    } else {
      video.current.pauseAsync();
    }
  }, [currentItem]);

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      activeOpacity={1}
      onPress={handlePlay}
    >
      <Video
        ref={video}
        style={styles.video}
        source={item.videos.reelUri}
        resizeMode="cover"
        repeat
        paused={true}
        useNativeControls
        isLooping
        controls={false}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />

      <View style={styles.contentContainer}>
        <View style={styles.leftContainer}>
          {/* Profile Image */}
          <TouchableOpacity style={styles.profile}>
            <Image
              source={{
                uri: item.user.imageUri,
              }}
              style={styles.profileImage}
            />
            <Text style={styles.text}>{item.user.name}</Text>
            <View style={styles.dot}></View>
            <Text style={styles.text}>Follow</Text>
          </TouchableOpacity>

          <Spacer top={10} />

          <Text style={styles.text} numberOfLines={1}>
            {item.videos.description}
          </Text>

          <Spacer top={10} />

          <View style={styles.music}>
            <Ionicons name="musical-notes" color="white" size={18} />
            <Text style={[styles.text, { marginLeft: 5 }]}>
              {item.videos.musicName}
            </Text>
            <View style={styles.dot}></View>
            <Text style={styles.text}>Base Music</Text>
          </View>
        </View>

        {/* Profile Info */}
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.rightItem}>
            <Ionicons name="heart-outline" color="white" size={30} />
            <Text style={styles.textRight}>{item.videos.likesCount}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.rightItem}>
            <Feather name="message-circle" color="white" size={30} />
            <Text style={styles.textRight}>{item.videos.messageCount} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.rightItem}>
            <Ionicons name="paper-plane-outline" color="white" size={30} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.rightItem}>
            <Entypo name="dots-three-vertical" color="white" size={30} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={{
                uri: item.user.imageUri,
              }}
              style={[styles.profileImageRight]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReelsVideo;
