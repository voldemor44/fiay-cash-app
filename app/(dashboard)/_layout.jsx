import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";

const DashboardLayout = () => {
  return <Drawer screenOptions={{headerShown : false}}/>;
};

export default DashboardLayout;
