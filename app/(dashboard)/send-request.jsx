import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";
import DropdownComponent from "../../mod/DropdownComponent";
import { FormField, CustomButton } from "../../components";

const bookmakers = [
  { label: "1xBet", value: "1" },
  { label: "MelBet", value: "2" },
  { label: "WinBet", value: "3" },
];

const sendRequest = () => {
  const [bookmaker, setBookmaker] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [playerID, setPlayerID] = useState("");

  return (
    <SafeAreaView>
      <Header title={"Vérification ID"} />
      <View className=" flex justify-center items-center py-10">
        <View style={styles.container}>
          <View style={styles.view}>
            <DropdownComponent
              data={bookmakers}
              value={bookmaker}
              setValue={setBookmaker}
              isFocus={isFocus}
              setIsFocus={setIsFocus}
            />
            <FormField
              value={playerID}
              handleChangeText={(e) => setPlayerID(e)}
              placeholder={"ID du joueur"}
              otherStyles={"mr-4 ml-4"}
            />
            <CustomButton title="Soumettre la vérification" containerStyles="mt-4 ml-4 mr-4" />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.view}>
            <Text style={styles.text} className="text-red-500 font-psemibold">
              Avertissement
            </Text>
            <Text style={styles.paragraph} className="font-pregular">
              Le formulaire ci dessous vous permet de soumettre une requête de
              validation. Vous devrez y renseigner l'ID du joueur que vous avez
              parrainé et sélectionner le bookmaker intermédiaire. Il s'agit
              d'une opération sérieuse. Merci de le faire consciencieusement !
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  view: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
  paragraph: {
    fontSize: 13,
    lineHeight: 24,
    color: "#333",
    textAlign: "justify",
    marginTop: 10,
  },
});

export default sendRequest;
