import React from "react";
import { View, Text } from "react-native";

export type CustomCss = {
  textColor: string,
  backgroundColor: string
};

export type RequiredProps = {
  label: string,
};

export type OptionalProps = {
  customCss?: CustomCss,
};

const defaultProps = {
  customCss: {
    textColor: "rgba(255,255,255,1)",
    backgroundColor: "rgba(255,255,255,0)"
  },
};

type PropTypes = RequiredProps & OptionalProps;

export default function MainTitle(props: PropTypes): React$Element<*> {
  const { label, customCss } = { ...defaultProps, ...props }

  return (
    <View>
      <Text
        style={{
          color: customCss.textColor,
          backgroundColor: customCss.backgroundColor
        }}
      >
        {label}
      </Text>
    </View>
  );
}
