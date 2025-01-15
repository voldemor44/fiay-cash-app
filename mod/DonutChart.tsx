import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { SharedValue, useDerivedValue } from "react-native-reanimated";
import { Canvas, Path, Skia } from "@shopify/react-native-skia";
import DonutPath from "./DonutPath";
import { Row } from "../components";

type Props = {
  n: number;
  gap: number;
  radius: number;
  strokeWidth: number;
  outerStrokeWidth: number;
  decimals: SharedValue<number[]>;
  colors: string[];
  totalValue: SharedValue<number>;
};

const DonutChart = ({
  n,
  gap,
  decimals,
  colors,
  totalValue,
  strokeWidth,
  outerStrokeWidth,
  radius,
}: Props) => {
  const array = Array.from({ length: n });
  const innerRadius = radius - outerStrokeWidth / 2;

  const path = Skia.Path.Make();
  path.addCircle(radius, radius, innerRadius);

  return (
    <View style={styles.containerView} className="pt-8">
      <Canvas style={styles.containerCanvas}>
        <Path
          path={path}
          color="transparent"
          style="stroke"
          strokeJoin="round"
          strokeWidth={outerStrokeWidth}
          strokeCap="round"
          start={0}
          end={1}
        />
        {array.map((_, index) => {
          return (
            <DonutPath
              key={index}
              radius={radius}
              strokeWidth={strokeWidth}
              outerStrokeWidth={outerStrokeWidth}
              color={colors[index]}
              decimals={decimals}
              index={index}
              gap={gap}
            />
          );
        })}
      </Canvas>
      <View style={styles.textView}>
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
      </View>
    </View>
  );
};

export default DonutChart;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    flexDirection : "row",
    backgroundColor: "#f9f9f9",
    width: "auto",
    height : 160,
    borderRadius: 8,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginLeft: 10,
    marginRight: 20,
    paddingLeft: 10,
    paddingTop: 9,
  },
  containerCanvas: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  textView : {paddingRight : 15, paddingTop : 45}
});
