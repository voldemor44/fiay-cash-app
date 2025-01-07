import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";

const AdminHistorique = () => {
  return (
    <SafeAreaView>
       <Header title={"Historique"} />
      <Text>AdminHistorique</Text>
    </SafeAreaView>
  );
};

export default AdminHistorique;
