import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Laguage */}
      <View />

      {/* Logo Instagram */}
      <View>
        <Image
          source={require("../../../../assets/images/logo.png")}
          style={styles.imageLogo}
          resizeMode="cover"
        />
      </View>
      <View>
        {/* Login Facebook */}
        <TouchableOpacity style={styles.facebookLogin}>
          <Ionicons name="logo-facebook" size={25} color="#fff" />
          <Text style={styles.facebookLoginText}>Continue with Facebook</Text>
        </TouchableOpacity>

        {/* Line */}
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={styles.lineText}>OR</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signUpText}>
            Sign up with email or phone number
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signInText}>
            Are you have account ?{" "}
            <Text style={styles.signInTextBold}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;
