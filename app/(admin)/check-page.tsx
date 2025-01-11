import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";
import { Row } from "../../components";

const CheckPage = () => (
  <SafeAreaView>
    <Header title={"Vérifications ID"} />
    <View>
      <Row>
        <TouchableOpacity style={styles.dropZone} activeOpacity={0.7}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/000000/upload--v1.png", // Exemple d'icône
            }}
            style={styles.icon}
          />
          <Text style={styles.text}>Drag your file here</Text>
        </TouchableOpacity>
      </Row>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  dropZone: {
    width: "90%",
    height: 150,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#007BFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdfdfd",
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});

export default CheckPage;
