import React from "react";
import { View } from "react-native";
import Logo from "./assets/logo.svg";
import style from "./styles";

export default function LogoContainer(): React$Element<*> {
  return (
    <View style={style.container}>
      <Logo width={300} heigth={300} />
    </View>
  );
}
