import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";
import { Card, Row } from "../../components";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useSharedValue, withTiming } from "react-native-reanimated";
import generateRandomNumbers from "../../utils/generateRandomNumbers";
import caluculatePercentage from "../../utils/caluculatePercentage";
import DonutChart from "../../mod/DonutChart";
import { useFont } from "@shopify/react-native-skia";

type Props = {};

interface Data {
  value: number;
  percentage: number;
  color: string;
}

const RADUIS = 80;
const STROKE_WIDTH = 15;
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
            <Card text="Solde" icon="sack-dollar" value="10000" type="icon" />
            <Card
              text="Transferts"
              icon="money-bill-transfer"
              value="3000"
              type="icon"
            />
          </Row>
        </View>
        <Row className="justify-center  mt-10" style={styles.donutContainer}>
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
        </Row>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdminDashboard;

const styles = StyleSheet.create({
  donutContainer: { width: RADUIS * 2, height: RADUIS * 2 },
});
