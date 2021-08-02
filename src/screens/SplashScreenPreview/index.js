import MaskedView from "@react-native-community/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

const SplashScreenPreview = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.push("MainRouter");
    }, 1500);
  }, []);

  const GradientText = (props) => {
    return (
      <MaskedView maskElement={<Text {...props} />}>
        <LinearGradient
          colors={[
            "#405DE6",
            "#5851DB",
            "#833AB4",
            "#C13584",
            "#E1306C",
            "#FD1D1D",
            "#F56040",
            "#F77737",
            "#FCAF45",
            "#FFDC80",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text {...props} style={[props.style, { opacity: 0 }]} />
        </LinearGradient>
      </MaskedView>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/images/logo-insta.png")} />
      <View style={styles.textContainer}>
        <Text style={{ textAlign: "center" }}>from</Text>
        <GradientText style={styles.textStyle}>FACE BOOK</GradientText>
      </View>
    </View>
  );
};

export default SplashScreenPreview;
