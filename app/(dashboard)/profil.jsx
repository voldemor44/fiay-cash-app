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
  const [username, setUsername] = useState("yANCHUI");
  const [email, setEmail] = useState("yanchui@gmail.com");
  const [phone, setPhone] = useState("+14987889999");
  const [password, setPassword] = useState("evFTbyVVCd");

  const [isSubmitting, setSubmitting] = useState(false);

  const submit = () => {};
  return (
    <SafeAreaView>
      <Header title={"Profil"} />
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
            <Text style={styles.changePictureText}>Change Picture</Text>
          </TouchableOpacity>
        </View>

        {/* Form Section */}
        <View style={styles.form}>
          <FormField
            title="Username"
            value={username}
            handleChangeText={(e) => setUsername(e)}
          />
          <FormField
            title="Email I’d"
            value={email}
            handleChangeText={(e) => setEmail(e)}
          />
          <FormField
            title="Phone Number"
            value={phone}
            handleChangeText={(e) => setPhone(e)}
          />
          <FormField
            title="Password"
            value={password}
            handleChangeText={(e) => setPassword(e)}
          />
          <CustomButton
            title="Mettre à jour"
            handlePress={submit}
            isLoading={isSubmitting}
            containerStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const FormInput = ({ label, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.formGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    backgroundColor: "#ff867c",
    height: 100,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
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
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  updateButton: {
    backgroundColor: "black",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  updateButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default profil;
