import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Row, Card } from "../../components";
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

      <View className="ml-5">
        <ThemedText variant={"headline"}>Welcome Back !</ThemedText>
        <ThemedText variant={"subtitle1"} cls="mt-2">
          Hi, AYILO Amen
        </ThemedText>
      </View>
      <Row>
        <Card text="Parrainage" icon="users" value="20" />
        <Card text="Niveau" icon="star" value="3" />
      </Row>
      <Row>
        <Card text="Gains" icon="money" value="10000" />
        <Card text="Solde" icon="dollar" value="3000" />
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
