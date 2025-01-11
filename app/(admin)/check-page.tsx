import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";
import { Row } from "../../components";
import { FontAwesome6 } from "@expo/vector-icons";

const CheckPage = () => (
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
          <Text className="font-pmedium text-gray-500 mt-2" style={styles.text}>
            Drag your file here
          </Text>
        </TouchableOpacity>
      </Row>
      <Row></Row>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  dropZone: {
    width: "90%",
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
});

export default CheckPage;
