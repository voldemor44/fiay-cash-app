import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";
import { Card, Row } from "../../components";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const AdminDashboard = () => {
  return (
    <SafeAreaView>
      <Header title={"Dashboard"} />

      <ScrollView>
        <View className="ml-5 mt-5">
          <Text
            className="font-semibold text-gray-500 font-psemibold"
            style={{ fontSize: 18 }}
          >
            Welcome Back !
          </Text>
          <Text className="font-semibold text-gray-500 font-psemibold text-1xl">
            Hi, Admin. This is your dashboard
          </Text>
        </View>
        <View className="justify-center mt-10">
          <Row className="justify-center">
            <Card text="Gains" icon="money" value="10000" />
            <Card text="Solde" icon="dollar" value="3000" />
          </Row>
        </View>
        <View className="justify-center mt-10">
          <Row className="justify-center"></Row>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdminDashboard;
