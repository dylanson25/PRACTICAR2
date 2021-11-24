import React, { Component, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
  Button,
} from "react-native";
import color from "./styles/colors.js";
import { loginStyles, splashStyles } from "./styles/styles.js";
import MyTextInput from "./components/MyTextInput";
import MyButton from "./components/MyButton.js";

export default function LoginScreen() {
  const [hidePassword, setHidePassword] = useState(true);
  const [user, setUser] = useState("");
  const [pswrd, setPswrd] = useState("");

  return (
    <View style={[loginStyles.container, { padding: 50 }]}>
      <StatusBar backgroundColor={color.BLUE} translucent={true} />

      <View style={loginStyles.logo}>
        <Image
          source={require("./react.png")}
          style={{ height: 250, width: 250 }}
        />
      </View>

      <MyTextInput
        keyboardType="email-address"
        placeholder="Correo"
        image="user"
        value={user}
        onChangeText={(user) => setUser(user)}
      />

      <MyTextInput
        keyboardType={null}
        placeholder="Contraseña"
        image="lock"
        bolGone={true}
        secureTextEntry={hidePassword}
        onPress={() => setHidePassword(!hidePassword)}
        value={pswrd}
        onChangeText={(pswrd) => setPswrd(pswrd)}
      />

      <MyButton
        titulo="Iniciar Sesión"
        onPress={() => iniciarSesion()}
      />
    </View>
  );
  function iniciarSesion() {
    if (user != "" && pswrd != "") {
      Alert.alert("Bienvenido", "Usted ah iniciado sesion exitosamente", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }else{
      Alert.alert("Vuelve a intentarlo", "El usuario o contraseña no es correcto", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  }
}
