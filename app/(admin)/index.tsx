import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";
import { Card, Row } from "../../components";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useSharedValue } from "react-native-reanimated";
import generateRandomNumbers from "../../utils/generateRandomNumbers";
import caluculatePercentage from "../../utils/caluculatePercentage";

type Props = {};

interface Data {
  value: number;
  percentage: number;
  color: string;
}

const AdminDashboard = () => {
  const n = 2;
  const [data, setData] = useState<Data[]>([]);
  const totalValue = useSharedValue(0);
  const decimals = useSharedValue<number[]>([]);
  const colors = [];

  const generateData = () => {
    const generateNumbers = generateRandomNumbers(n);
    const total = generateNumbers.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );

    const generatePercentage = caluculatePercentage(generateNumbers, total);
    const generateDecimals = generatePercentage.map(
      (number) => Number(number.toFixed(0)) / 100
    );

    const arrayOfObjects = generateNumbers.map(() => {});
    return { generateNumbers, total, generatePercentage, generateDecimals };
  };

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
