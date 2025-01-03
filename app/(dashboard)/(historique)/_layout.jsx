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
