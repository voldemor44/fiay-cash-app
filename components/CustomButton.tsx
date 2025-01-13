import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  title: string;
  handlePress?: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
};

export default ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-gray-600 rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold ${textStyles}`}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};
