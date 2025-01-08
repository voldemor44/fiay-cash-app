import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import React, { useState } from "react";
import { Drawer } from "expo-router/drawer";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useSharedValue } from "react-native-reanimated";

const AdminLayout = () => {
  const [data, setData] = useState([]);
  const totalValue = useSharedValue(0);
  const decimals = useSharedValue([]);
  
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
        <Drawer.Screen
          name="payment-page"
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default AdminLayout;
