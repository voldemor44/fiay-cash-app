import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";

const RequestsTable = () => {
  return (
    <SafeAreaView>
       <Header title={"Listes"} />
      <Text>RequestsTable</Text>
    </SafeAreaView>
  );
};

export default RequestsTable;
