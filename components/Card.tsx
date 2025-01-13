import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

export default function Card({ text, icon, value, type }) {
  return (
    <View style={styles.card}>
      {type === "icon" && (
        <>
          <FontAwesome6
            name={icon}
            size={32}
            color="green"
            style={styles.icon}
          />
          <Text className="font-pregular" style={styles.text}>
            {text}
          </Text>
          <Text className="font-psemibold" style={styles.value}>
            {value}
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 16,
    width: 150,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    margin: 8,
  },
  icon: {
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  value: {
    fontSize: 18,

    color: "#111",
  },
});
