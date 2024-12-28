import { View, Text } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { Drawer } from "expo-router/drawer";

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
        <Drawer.Screen name="index" options={{ drawerLabel: "Dashboard" }} />
        <Drawer.Screen name="profil" options={{ drawerLabel: "Profil" }} />
        <Drawer.Screen
          name="historique"
          options={{ drawerLabel: "Historique" }}
        />
        <Drawer.Screen
          name="send-request"
          options={{ drawerLabel: "Vérification ID" }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DashboardLayout;
