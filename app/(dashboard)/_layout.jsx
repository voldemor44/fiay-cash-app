import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";

const DashboardLayout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#f9f9f9", // Couleur d'arrière-plan du Drawer
          width: 250, // Largeur du Drawer
        },
        drawerLabelStyle: {
          fontSize: 16, // Taille du texte des labels
          fontWeight: "bold", // Poids de la police
        },
        drawerActiveTintColor: "green", // Couleur du texte actif
        drawerInactiveTintColor: "gray", // Couleur du texte inactif
        drawerActiveBackgroundColor: "transparent", // Couleur de fond actif
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
  );
};

export default DashboardLayout;
