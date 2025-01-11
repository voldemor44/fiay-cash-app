import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import DrawerLabel from "../../mod/DrawerLabel";

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
            drawerLabel: ({ color }) => (
              <DrawerLabel label="Dashboard" color={color} />
            ),
            drawerIcon: ({ size, color }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="requests-table"
          options={{
            drawerLabel: ({ color }) => (
              <DrawerLabel label="Listes" color={color} />
            ),
            drawerIcon: ({ size, color }) => (
              <FontAwesome name="table" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="check-page"
          options={{
            drawerLabel: ({ color }) => (
              <DrawerLabel label="Vérifications ID" color={color} />
            ),
            drawerIcon: ({ size, color }) => (
              <FontAwesome name="check-square" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="historique-admin"
          options={{
            drawerLabel: ({ color }) => (
              <DrawerLabel label="Historiques" color={color} />
            ),
            drawerIcon: ({ size, color }) => (
              <FontAwesome name="history" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="parameters"
          options={{
            drawerLabel: ({ color }) => (
              <DrawerLabel label="Paramètres" color={color} />
            ),
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
