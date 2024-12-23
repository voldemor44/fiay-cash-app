import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const index = () => {
  useEffect(() => {
    setTimeout(() => {
      router.push("/sign-in");
    }, 3000);
  }, []);
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View className="flex-1 items-center justify-center bg-primary ">
          <Image
            source={images.logo}
            className="w-[150px] h-[100px]"
            resizeMode="contain"
          />

          <Text className="text-1xl font-bold text-center text-gray-500 ml-2">
            Parrainez et gagnez !
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
