import { Text } from "react-native";
import React from "react";

type Props = {
  label: string;
 
  color: string;
};

const DrawerLabel = ({ label, color }: Props) => {
  return (
    <Text style={{ color: color }} className="font-pbold text-gray-500 mt-1">
      {label}
    </Text>
  );
};

export default DrawerLabel;
