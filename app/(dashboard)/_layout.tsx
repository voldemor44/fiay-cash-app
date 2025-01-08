import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { FontAwesome } from "@expo/vector-icons";

const DashboardLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: "#f9f9f9",
            width: 250,
          },
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
          },
          drawerActiveTintColor: "green",
          drawerInactiveTintColor: "gray", // Couleur du texte inactif
          drawerActiveBackgroundColor: "transparent",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Dashboard",
            drawerIcon: ({ size, color }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="profil"
          options={{
            drawerLabel: "Profil",
            drawerIcon: ({ size, color }) => (
              <FontAwesome name="user-circle" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="(historique)"
          options={{
            drawerLabel: "Historique",
            drawerIcon: ({ size, color }) => (
              <FontAwesome name="history" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="send-request"
          options={{
            drawerLabel: "Vérification ID",
            drawerIcon: ({ size, color }) => (
              <FontAwesome name="check-square" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DashboardLayout;
