import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";

const historique = () => {
  return (
    <SafeAreaView>
      <Header title={"Historique"} />

      <Text>historique</Text>
    </SafeAreaView>
  );
};

export default historique;
