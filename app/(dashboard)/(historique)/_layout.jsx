import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../mod/Header";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();

const TopTabs = withLayoutContext(Navigator);

const HistoriqueLayout = () => {
  return (
    <SafeAreaView>
      <Header title={"Historique"} />

      <TopTabs id={undefined} screenOptions={{}}>
        <TopTabs.Screen
          name="request-historique"
          options={{ title: "Vérifications" }}
        />
        <TopTabs.Screen
          name="withdrawal-historique"
          options={{ title: "Retraits" }}
        />
      </TopTabs>
    </SafeAreaView>
  );
};

export default HistoriqueLayout;
