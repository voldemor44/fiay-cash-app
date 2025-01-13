import React from "react";
import { StyleSheet, Text } from "react-native";

// Custom class css-js
const styles = StyleSheet.create({
  body3: { fontSize: 10, lineHeight: 16 },
  headline: { fontSize: 22, lineHeight: 32, fontWeight: "bold" },
  caption: { fontSize: 8, lineHeight: 12 },
  subtitle1: { fontSize: 14, lineHeight: 16, fontWeight: "bold" },
  subtitle2: { fontSize: 12, lineHeight: 16, fontWeight: "bold" },
  subtitle3: { fontSize: 10, lineHeight: 16, fontWeight: "bold" },
});

export default function ThemedText({ variant, style, cls, ...rest }) {
  return (
    <Text
      style={[styles[variant || "body3"], style]}
      {...rest}
      className={`text-gray-500 ${cls}`}
    />
  );
}
