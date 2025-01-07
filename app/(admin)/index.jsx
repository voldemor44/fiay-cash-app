import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";

const AdminDashboard = () => {
  return (
    <SafeAreaView>
      <Header title={"Dashboard"} />
      <Text>AdminDashboard</Text>
    </SafeAreaView>
  );
};

export default AdminDashboard;
