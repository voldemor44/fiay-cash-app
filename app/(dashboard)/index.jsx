import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Row } from "../../components";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedText } from "../../components/ThemedText";
import { useNavigation } from "expo-router";

const Dashboard = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Row style={styles.header} gap={16} bgcolor="#fffcfc">
        <Ionicons name="menu" size={32} color="green" onPress={openDrawer} />
        <ThemedText variant={"headline"}>Dashboard</ThemedText>
      </Row>
      <Row style={styles.header} gap={16} >
     
      </Row>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 4, gap: 16 },
  header: {
    padding: 12,
  },
  body: { flex: 1 },
  gridGap: {
    gap: 8,
  },
  list: {
    padding: 12,
  },
});

export default Dashboard;
