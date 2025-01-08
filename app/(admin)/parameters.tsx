import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";

const Parameters = () => {
  return (
    <SafeAreaView>
       <Header title={"Paramètres"} />
      <Text>Parameters</Text>
    </SafeAreaView>
  );
};

export default Parameters;
