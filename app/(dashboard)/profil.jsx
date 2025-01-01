import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";
import { FontAwesome } from "@expo/vector-icons";
import { FormField, CustomButton } from "../../components";

const profil = () => {
  const [form, setForm] = useState({
    first_name: "Amen",
    last_name: "AYILO",
    username: "yANCHUI",
    phone: "+14987889999",
    email: "yanchui@gmail.com",
    password: "evFTbyVVCd",
  });

  const [isSubmitting, setSubmitting] = useState(false);

  const submit = () => {};
  return (
    <SafeAreaView className="h-full">
      <Header title={"Profil"} />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.profileSection}>
            <View style={styles.profileIconContainer}>
              <FontAwesome
                name="user"
                size={80}
                color="#fff"
                style={styles.profileIcon}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.changePictureText}>Informations</Text>
            </TouchableOpacity>
          </View>

          {/* Form Section */}
          <View style={styles.form}>
            <FormField
              title="Nom"
              value={form.last_name}
              handleChangeText={(e) => setForm({ ...form, last_name: e })}
            />
            <FormField
              title="Prénoms"
              value={form.first_name}
              handleChangeText={(e) => setForm({ ...form, first_name: e })}
            />
            <FormField
              title="Nom d'utilisateur"
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
            />
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
            />
            <FormField
              title="Téléphone"
              value={form.phone}
              handleChangeText={(e) => setForm({ ...form, phone: e })}
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
            />
            <CustomButton
              title="Mettre à jour"
              handlePress={submit}
              isLoading={isSubmitting}
              containerStyles="mt-7"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileSection: {
    alignItems: "center",
  },
  profileIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#fff",
  },
  changePictureText: {
    marginTop: 10,
    fontSize: 16,
    color: "gray",
  },
  form: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default profil;
