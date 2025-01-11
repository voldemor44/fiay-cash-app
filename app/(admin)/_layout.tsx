import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const AdminLayout = () => {
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
          name="requests-table"
          options={{
            drawerLabel: "Listes",
            drawerIcon: ({ size, color }) => (
              <FontAwesome name="table" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="check-page"
          options={{
            drawerLabel: "Vérifications",
            drawerIcon: ({ size, color }) => (
              <FontAwesome name="check-square" size={size} color={color} />
            ),
           
          }}
        />
        <Drawer.Screen
          name="historique-admin"
          options={{
            drawerLabel: "Historique",
            drawerIcon: ({ size, color }) => (
              <FontAwesome name="history" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="parameters"
          options={{
            drawerLabel: "Paramètres",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default AdminLayout;
