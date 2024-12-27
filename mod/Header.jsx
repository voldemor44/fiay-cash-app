import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Row, ThemedText } from "../components";
import { useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = ({ title }) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <Row style={styles.header} gap={16} bgcolor="#fffcfc">
      <Ionicons name="menu" size={32} color="green" onPress={openDrawer} />
      <ThemedText variant={"headline"}>{title}</ThemedText>
    </Row>
  );
};

const styles = StyleSheet.create({
  header: { paddind: 12, paddingTop: 13, paddingBottom: 13, margin : 0 },
});

export default Header;
