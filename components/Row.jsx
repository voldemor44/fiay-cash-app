import React from "react";
import { View } from "react-native";

const rowStyle = {
  flex: 0,
  flexDirection: "row",
  alignItems: "center",
};

export default function Row({ style, gap, bgcolor, ...rest }) {
  return (
    <View
      style={[
        rowStyle,
        style,
        gap ? { gap: gap } : undefined,
        { backgroundColor: bgcolor },
      ]}
      {...rest}
    />
  );
}
