import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Row, ThemedText } from "../components";
import { useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions } from "@react-navigation/native";

const Header = ({ title }) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <Row style={styles.header} gap={16} bgcolor="#fffcfc">
      <Ionicons name="menu" size={32} color="green" onPress={openDrawer} />
      <Text className="font-semibold text-gray-500 font-psemibold text-2xl">{title}</Text>
    </Row>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 12,
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 13,
    margin: 0,
  },
});

export default Header;
