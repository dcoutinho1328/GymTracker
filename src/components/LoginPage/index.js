import React from "react";
import { View, Text } from "react-native";
import InputText from "../InputText";
import style from "./style";

export type OptionalProps = {
  user?: string,
  password?: string,
};

export default function LoginPage(props: OptionalProps): React$Element<*> {
  const { user, password } = { ...props };

  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>User Login</Text>
      </View>
      <View style={style.fields}>
        <View>
          <InputText placeholder={"Username"} />
        </View>
        <View>
          <InputText placeholder={"Password"} isSecured={true} />
        </View>
      </View>
    </View>
  );
}
