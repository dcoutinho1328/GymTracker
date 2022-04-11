import React from "react";
import { View, TextInput } from "react-native";
import style from "./style";

export type Props = {
  defaultValue?: string,
  placeholder?: string,
  isSecured?: boolean,
};

const defaultProps = {
  isSecured: false,
};

type PropTypes = RequiredProps & OptionalProps;

export default function InputText(props: Props): React$Element<*> {
  const { defaultValue, placeholder, isSecured } = {
    ...defaultProps,
    ...props,
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.text}
        placeholder={placeholder}
        defaultValue={defaultValue}
        secureTextEntry={isSecured}
      />
    </View>
  );
}
