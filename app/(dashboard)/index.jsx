import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Row, Card,ThemedText } from "../../components";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

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

      <View className="justify-center mt-10">
        <Row className="justify-center">
          <Card text="Parrainage" icon="users" value="20" />
          <Card text="Niveau" icon="star" value="3" />
        </Row>
        <Row className="justify-center">
          <Card text="Gains" icon="money" value="10000" />
          <Card text="Solde" icon="dollar" value="3000" />
        </Row>
        <Row gap={12} className="justify-center">
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "gray" }]}
            className="justify-center text-gray-500 ml-4"
          >
            <FontAwesome
              name="copy"
              size={16}
              color="#fff"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>VISE25</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              styles.retraitButton,
              { backgroundColor: "green" },
            ]}
            className="justify-center mr-4"
          >
            <FontAwesome
              name="copy"
              size={16}
              color="#fff"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Retrait</Text>
          </TouchableOpacity>
        </Row>
      </View>
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

  button: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 8, // Espacement entre l'icône et le texte
  },
});

export default Dashboard;
