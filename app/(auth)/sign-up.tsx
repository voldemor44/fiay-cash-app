import { useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";

import { images } from "../../constants";
import { CustomButton, FormField } from "../../components";
import React from "react";
import axiosClient from "../../axios-client";

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    axiosClient
      .post("")
      .then(({ data }) => {})
      .catch((error) => {});
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[50px]"
          />

          <Text className="text-2xl font-semibold text-gray-500 mt-10 font-psemibold">
            Inscription
          </Text>

          <FormField
            title="Nom"
            value={form.last_name}
            handleChangeText={(e) => setForm({ ...form, last_name: e })}
            otherStyles="mt-4"
          />
          <FormField
            title="Prénoms"
            value={form.first_name}
            handleChangeText={(e) => setForm({ ...form, first_name: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Pseudo"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Téléphone"
            value={form.phone}
            handleChangeText={(e) => setForm({ ...form, phone: e })}
            otherStyles="mt-10"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="S'inscrire"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2 mb-10">
            <Text className="text-gray-500 font-pregular">
              Have an account already?
            </Text>
            <Link href="/sign-in" className="font-psemibold text-secondary">
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
