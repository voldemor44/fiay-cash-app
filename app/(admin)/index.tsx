import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";
import { Card, Row } from "../../components";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useSharedValue, withTiming } from "react-native-reanimated";
import generateRandomNumbers from "../../utils/generateRandomNumbers";
import caluculatePercentage from "../../utils/caluculatePercentage";
import DonutChart from "../../mod/DonutChart";
import { router } from "expo-router";

type Props = {};

interface Data {
  value: number;
  percentage: number;
  color: string;
}

const RADUIS = 70;
const STROKE_WIDTH = 13;
const OUTER_STROKE_WIDTH = 25;
const GAP = 0.04;

const AdminDashboard = () => {
  const n = 2;
  const [data, setData] = useState<Data[]>([]);
  const totalValue = useSharedValue(0);
  const decimals = useSharedValue<number[]>([]);
  const colors = ["#6b7280", "#16a34a"];

  const generateData = () => {
    const generateNumbers = generateRandomNumbers(n);
    const total = generateNumbers.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );

    const generatePercentage = caluculatePercentage(generateNumbers, total);
    const generateDecimals = generatePercentage.map(
      (number) => Number(number.toFixed(0)) / 100
    );

    const arrayOfObjects = generateNumbers.map((value, index) => ({
      value,
      percentage: generatePercentage[index],
      color: colors[index],
    }));

    totalValue.value = withTiming(total, { duration: 1000 });
    decimals.value = [...generateDecimals];
    setData(arrayOfObjects);
  };

  useEffect(() => {
    generateData();
  }, []);
  return (
    <SafeAreaView className="h-full">
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
            <Card text="Solde" icon="sack-dollar" value="10000" />
            <Card text="Transferts" icon="money-bill-transfer" value="3000" />
          </Row>
          <Row className="justify-center">
            <Card text="Partners" icon="users" value="100" />
            <Card text="Requêtes" icon="wpforms" value="25/40" />
          </Row>
        </View>
        <Row
          className="justify-center items-center mt-8"
          style={styles.donutContainer}
        >
          <DonutChart
            n={n}
            totalValue={totalValue}
            decimals={decimals}
            radius={RADUIS}
            gap={GAP}
            strokeWidth={STROKE_WIDTH}
            outerStrokeWidth={OUTER_STROKE_WIDTH}
            colors={colors}
          />
          {/* <View>
            <Row>
              <Text className="font-pmedium text-green-600  text-1xl">
                Taux de dépot :{" "}
              </Text>
              <Text className="font-pmedium text-green-600  text-1xl">34%</Text>
            </Row>
            <Row>
              <Text className="font-pmedium text-gray-500  text-1xl">
                Taux de d'envoi :{" "}
              </Text>
              <Text className="font-pmedium text-gray-500  text-1xl">66%</Text>
            </Row>
          </View> */}
        </Row>
        <Row gap={12} className="justify-center mb-5" style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "gray" }]}
            className="justify-center text-gray-500 ml-4"
            onPress={() => {
              router.push("requests-table");
            }}
          >
            <FontAwesome name="copy" size={16} color="#fff" />
            <Text style={styles.buttonText}>Liste</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "green" }]}
            className="justify-center mr-4"
            onPress={() => {
              router.push("check-page");
            }}
          >
            <FontAwesome name="copy" size={16} color="#fff" />
            <Text className="font-pregular" style={styles.buttonText}>
              Check
            </Text>
          </TouchableOpacity>
        </Row>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdminDashboard;

const styles = StyleSheet.create({
  donutContainer: { width: "auto", height: "auto", marginLeft: 15 },
  buttonRow: { paddingTop: 45 },
  button: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 8,
  },
});
