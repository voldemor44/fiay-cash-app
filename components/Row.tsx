import React from "react";
import { View, ViewStyle } from "react-native";

const rowStyle = {
  flex: 0,
  flexDirection: "row",
  alignItems: "center",
} satisfies ViewStyle;

type RowProps = {
  style?: ViewStyle;
  gap?: number;
  bgcolor?: string;
  [key: string]: any;
};

export default function Row({ style, gap, bgcolor, ...rest }: RowProps) {
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
