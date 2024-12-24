import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Row } from "../../components";
import Ionicons from "@expo/vector-icons/Ionicons";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Row style={styles.header} gap={16}>
        <Text>Dashboard</Text>
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
