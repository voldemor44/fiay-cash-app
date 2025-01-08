import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../mod/Header";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();

const TopTabs = withLayoutContext(Navigator);

const notifications = [
  {
    id: 1,
    title: "Nouvelle transaction",
    message: "Votre transaction de 100€ a été validée.",
    createdAt: "2025-01-03T10:00:00Z",
    type: "transaction",
  },
  {
    id: 2,
    title: "Alerte sécurité",
    message: "Une tentative de connexion a échoué depuis un appareil inconnu.",
    createdAt: "2025-01-02T18:30:00Z",
    type: "alerte",
  },
  {
    id: 3,
    title: "Mise à jour disponible",
    message:
      "Une nouvelle version de l'application est disponible. Veuillez mettre à jour pour bénéficier des dernières fonctionnalités.",
    createdAt: "2025-01-01T15:20:00Z",
    type: "info",
  },
  {
    id: 4,
    title: "Paiement reçu",
    message: "Vous avez reçu un paiement de 50€ sur votre compte.",
    createdAt: "2025-01-03T08:45:00Z",
    type: "transaction",
  },
  {
    id: 5,
    title: "Mot de passe modifié",
    message: "Votre mot de passe a été modifié avec succès.",
    createdAt: "2025-01-02T09:15:00Z",
    type: "info",
  },
  {
    id: 6,
    title: "Alerte de connexion",
    message:
      "Une connexion a été détectée depuis un nouvel appareil : iPhone 13.",
    createdAt: "2025-01-01T22:10:00Z",
    type: "alerte",
  },
  {
    id: 7,
    title: "Réservation confirmée",
    message: "Votre réservation pour l'hôtel Parisien a été confirmée.",
    createdAt: "2025-01-02T12:30:00Z",
    type: "info",
  },
  {
    id: 8,
    title: "Transaction annulée",
    message: "Votre transaction de 200€ a été annulée par la banque.",
    createdAt: "2025-01-03T06:50:00Z",
    type: "transaction",
  },
  {
    id: 9,
    title: "Rappel : Facture en attente",
    message:
      "Votre facture de 75€ est en attente de paiement. Veuillez la régler au plus vite.",
    createdAt: "2025-01-01T11:00:00Z",
    type: "alerte",
  },
  {
    id: 10,
    title: "Compte vérifié",
    message: "Votre compte a été vérifié avec succès. Bienvenue parmi nous !",
    createdAt: "2025-01-03T09:30:00Z",
    type: "info",
  },
];

const HistoriqueLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={"Historique"} />
      <View style={{ flex: 1 }}>
        <TopTabs
          screenOptions={{
            tabBarStyle: { backgroundColor: "#fffcfc" },
            tabBarIndicatorStyle: { backgroundColor: "green", height: 3 },
            tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
          }}
        >
          <TopTabs.Screen
            name="request-historique"
            options={{ title: "Vérifications" }}
          />
          <TopTabs.Screen
            name="withdrawal-historique"
            options={{ title: "Retraits" }}
          />
        </TopTabs>
      </View>
    </SafeAreaView>
  );
};

export default HistoriqueLayout;
