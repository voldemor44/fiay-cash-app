import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";

const profil = () => {
  return (
    <SafeAreaView>
      <Header title={"Profil"} />

      <Text>profil</Text>
    </SafeAreaView>
  );
};

export default profil;
