import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { FontAwesome } from "@expo/vector-icons";
import DrawerLabel from "../../mod/DrawerLabel";

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
          drawerActiveTintColor: "green",
          drawerInactiveTintColor: "gray",
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
          name="profil"
          options={{
            drawerLabel: ({ color }) => (
              <DrawerLabel label="Profil" color={color} />
            ),
            drawerIcon: ({ size, color }) => (
              <FontAwesome name="user-circle" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="(historique)"
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
          name="send-request"
          options={{
            drawerLabel: ({ color }) => (
              <DrawerLabel label="Vérification ID" color={color} />
            ),
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
