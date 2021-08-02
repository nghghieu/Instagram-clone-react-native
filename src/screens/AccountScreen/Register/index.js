import Entypo from "@expo/vector-icons/Entypo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { authActions } from "../../../../auth/auth.slice";
import styles from "./styles";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [errorConfirmedPassword, setErrorConfirmedPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleRegister = async (email, password, confirmedPassword) => {
    if (password != confirmedPassword) {
      setErrorConfirmedPassword("Mật khẩu không trùng");
    } else {
      await fetch("https://api-ecom.duthanhduoc.com/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          confirmedPassword: confirmedPassword,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message === "Đăng ký thành công") {
            AsyncStorage.setItem("user", res.data.access_token);
            dispatch(
              authActions.register({ email, password, confirmedPassword })
            );
          } else {
            setErrors(res.data);
          }
        })
        .done();
    }
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
          placeholder="Email"
          style={styles.input}
          onChangeText={(e) => setEmail(e)}
        />
        <Text style={styles.textError}>{errors.email}</Text>

        {/* Input password */}
        <View>
          <TextInput
            placeholder="Pass"
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

        {/* Input confirmedPassword */}
        <View>
          <TextInput
            placeholder="confirmedPassword"
            style={styles.input}
            onChangeText={(p) => setConfirmedPassword(p)}
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
          <Text style={styles.textError}>{errorConfirmedPassword}</Text>
        </View>

        {/* Submit */}
        <TouchableOpacity
          style={styles.facebookLogin}
          onPress={() => handleRegister(email, password, confirmedPassword)}
        >
          <Text style={styles.facebookLoginText}>Register</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.signInText}>
          Are you have account ?{" "}
          <Text style={styles.signInTextBold}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
