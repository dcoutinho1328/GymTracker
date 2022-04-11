import React from "react";
import { View, Text } from "react-native";
import style from "./styles";

export type PropTypes = {
  label: string,
};

const defaultProps = {
  customCss: {
    textColor: "rgba(255,255,255,1)",
    backgroundColor: "rgba(255,255,255,0)",
  },
};

export default function HeaderTitle(props: PropTypes): React$Element<*> {
  const { label, customCss } = { ...defaultProps, ...props };

  return (
    <View style={style.container}>
      <Text style={style.title}>{label}</Text>
    </View>
  );
}
