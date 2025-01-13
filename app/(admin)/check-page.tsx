import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";
import { Row } from "../../components";
import { FontAwesome6 } from "@expo/vector-icons";
import DropdownComponent from "../../mod/DropdownComponent";

const bookmakers = [
  { label: "1xBet", value: "1" },
  { label: "MelBet", value: "2" },
  { label: "WinBet", value: "3" },
];

const CheckPage = () => {
  const [bookmaker, setBookmaker] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <SafeAreaView>
      <Header title={"Vérifications ID"} />
      <View className="justify-center items-center">
        <Row className="pt-5">
          <TouchableOpacity
            className="justify-center items-center"
            style={styles.dropZone}
            activeOpacity={0.7}
          >
            <FontAwesome6 name="upload" size={30} color="green" />
            <Text
              className="font-pmedium text-gray-500 mt-2"
              style={styles.text}
            >
              Drag your file here
            </Text>
          </TouchableOpacity>
        </Row>
        <View style={styles.dropdownRow}>
          <DropdownComponent
            data={bookmakers}
            value={bookmaker}
            setValue={setBookmaker}
            isFocus={isFocus}
            setIsFocus={setIsFocus}
            placeholder={"Choisir le Bookmaker"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  dropZone: {
    width: "80%",
    height: 150,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "green",
    borderRadius: 8,
    backgroundColor: "#fdfdfd",
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
  dropdownRow: {
    width: "100%",
    padding: 20,
  },
});

export default CheckPage;
