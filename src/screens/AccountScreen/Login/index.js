import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { authActions } from "../../../../auth/auth.slice";
import styles from "./styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async (email, password) => {
    await fetch("https://api-ecom.duthanhduoc.com/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "Đăng nhập thành công") {
          AsyncStorage.setItem("user", res.data.access_token);
          dispatch(authActions.login({ email, password }));
        } else {
          setErrors(res.data);
        }
      })
      .done();
  };

  return (
    <View style={styles.container}>
      {/* Language */}
      <View />

      <View>
        {/* Logo Instagram */}
        <View>
          <Image
            source={require("../../../../assets/images/logo.png")}
            style={styles.imageLogo}
            resizeMode="cover"
          />
        </View>

        {/* Input Email */}
        <TextInput
          placeholder="Phone, email or username"
          style={styles.input}
          onChangeText={(e) => setEmail(e)}
        />
        <Text style={styles.textError}>{errors.email}</Text>

        {/* Input Password */}
        <View>
          <TextInput
            placeholder="Password"
            style={styles.input}
            onChangeText={(p) => setPassword(p)}
            secureTextEntry={showPassword ? false : true}
          />

          <TouchableOpacity
            style={styles.eyeSecurity}
            onPress={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Entypo name="eye-with-line" size={25} color="black" />
            ) : (
              <Entypo name="eye" size={25} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.textError}>{errors.password}</Text>

        {/* Submit */}
        <TouchableOpacity
          style={styles.facebookLogin}
          onPress={() => handleLogin(email, password)}
        >
          <Text style={styles.facebookLoginText}>Login</Text>
        </TouchableOpacity>

        {/* Need Help Text */}
        <Text style={styles.signInText}>
          Forget information about login ?{" "}
          <Text style={styles.signInTextBold}>Help</Text>
        </Text>

        {/* Line */}
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={styles.lineText}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* Login Facebook */}
        <TouchableOpacity style={styles.facebookLogin}>
          <Ionicons name="logo-facebook" size={25} color="#fff" />
          <Text style={styles.facebookLoginText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("MainAccount")}>
        <Text style={styles.signInText}>
          Aren't you have account ?{" "}
          <Text style={styles.signInTextBold}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
