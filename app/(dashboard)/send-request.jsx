import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";

const sendRequest = () => {
  return (
    <SafeAreaView>
      <Header title={"Vérification ID"} />

      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.text} className="text-red-500 font-bold">
            Avertissement
          </Text>
          <Text style={styles.paragraph}>
            Le formulaire ci dessous vous permet de soumettre une requête de
            validation. Vous devrez y renseigner l'ID du joueur que vous avez
            parrainé et sélectionner le bookmaker intermédiaire. Il s'agit d'une
            opération sérieuse. Merci de le faire consciencieusement !
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.view}></View>
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
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    textAlign: "justify",
    marginTop: 10,
  },
});

export default sendRequest;
