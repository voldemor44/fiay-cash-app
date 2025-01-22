import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";

import { images } from "../../constants";
import { CustomButton, FormField } from "../../components";
import React from "react";
import axiosClient from "../../axios-client";
import { areAllValuesNonEmpty } from "../../utils/simpleFunctions";
import { useStateContext } from "../../contexts/ContextProvider";

const SignUp = () => {
  const { setUser, setToken } = useStateContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    firstname: "",
    lastname: "",
    pseudo: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const submit = async () => {
    if (areAllValuesNonEmpty(form)) {
      setSubmitting(true);
      axiosClient
        .post("/users", form)
        .then(({ data }) => {
          console.log(data);
          setUser(data.data)
          setSubmitting(false);
          router.push("(dashboard)");
        })
        .catch((error) => {
          console.log(error, "attempt");
          setSubmitting(false);
        });
    }
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
            value={form.lastname}
            handleChangeText={(e) => setForm({ ...form, lastname: e })}
            otherStyles="mt-4"
          />
          <FormField
            title="Prénoms"
            value={form.firstname}
            handleChangeText={(e) => setForm({ ...form, firstname: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Pseudo"
            value={form.pseudo}
            handleChangeText={(e) => setForm({ ...form, pseudo: e })}
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

          <FormField
            title="Password Confirmation"
            value={form.password_confirmation}
            handleChangeText={(e) =>
              setForm({ ...form, password_confirmation: e })
            }
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
