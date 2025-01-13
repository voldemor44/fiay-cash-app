import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";
import { CustomButton, Row } from "../../components";
import { FontAwesome6, FontAwesome } from "@expo/vector-icons";
import DropdownComponent from "../../mod/DropdownComponent";
import * as DocumentPicker from "expo-document-picker";

const bookmakers = [
  { label: "1xBet", value: "1" },
  { label: "MelBet", value: "2" },
  { label: "WinBet", value: "3" },
];

const CheckPage = () => {
  const [bookmaker, setBookmaker] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Permet tous les types de fichiers
      });

      if (result.assets) {
        setFileName(result.assets[0].name);
        console.log(result.assets[0].name);
      } else {
        console.log("Action annulée");
      }
    } catch (error) {
      console.error("Erreur lors de la sélection du fichier :", error);
    }
  };

  return (
    <SafeAreaView>
      <Header title={"Vérifications ID"} />
      <View className="flex justify-center items-center py-20">
        {fileName ? (
          <View style={styles.container}>
            <FontAwesome
              className="text-gray-500"
              name="window-close-o"
              size={25}
              color="green"
              style={styles.rightAligned}
              onPress={() => {}}
            />
          </View>
        ) : null}
        <Row className="pt-5">
          <TouchableOpacity
            className="justify-center items-center"
            style={styles.dropZone}
            activeOpacity={0.7}
            onPress={handleFilePick}
          >
            <FontAwesome6
              name={fileName ? "file-lines" : "upload"}
              size={30}
              color="green"
            />
            <Text
              className="font-pmedium text-gray-500 mt-2"
              style={styles.text}
            >
              {fileName ? fileName : "Drag your file here"}
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
          <CustomButton
            title="Lancer le check"
            containerStyles="mt-3 mr-4 ml-4"
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
  container: {
    flexDirection: "row",
  },
  rightAligned: {
    marginLeft: 250,
  },
});

export default CheckPage;
