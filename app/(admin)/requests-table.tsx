import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";
import { DataTable, PaperProvider } from "react-native-paper";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Row } from "../../components";
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const RequestsTable = () => {
  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = useState([5, 10, 15]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(
    numberOfItemsPerPageList[0]
  );

  const [items] = useState([
    {
      id: "P001",
      playerId: "J001",
      bookmaker: "Bet365",
      status: "Validé",
      sentDate: "2025-01-10",
    },
    {
      id: "P002",
      playerId: "J002",
      bookmaker: "1xBet",
      status: "En attente",
      sentDate: "2025-01-09",
    },
    {
      id: "P003",
      playerId: "J003",
      bookmaker: "Betway",
      status: "Rejeté",
      sentDate: "2025-01-08",
    },
    {
      id: "P004",
      playerId: "J004",
      bookmaker: "ParionsSport",
      status: "Validé",
      sentDate: "2025-01-07",
    },
    {
      id: "P005",
      playerId: "J005",
      bookmaker: "Bet365",
      status: "En attente",
      sentDate: "2025-01-06",
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <PaperProvider>
      <SafeAreaView className="h-full">
        <Header title={"Listes"} />
        <ScrollView>
          <View>
            <Row className="justify-end pt-5">
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "green" }]}
                className="justify-center mr-4"
                onPress={() => {
                  router.push("check-page");
                }}
              >
                <Text className="font-pregular" style={{ color: "#fff" }}>
                  Lancer un check
                </Text>
              </TouchableOpacity>
            </Row>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>N°</DataTable.Title>
                <DataTable.Title>ID Partenaire</DataTable.Title>
                <DataTable.Title>ID Joueur</DataTable.Title>
                <DataTable.Title>Bookmaker</DataTable.Title>
                <DataTable.Title>Statut</DataTable.Title>
                <DataTable.Title>Date d'envoi</DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map((item, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell>{from + index + 1}</DataTable.Cell>
                  <DataTable.Cell>{item.id}</DataTable.Cell>
                  <DataTable.Cell>{item.playerId}</DataTable.Cell>
                  <DataTable.Cell>{item.bookmaker}</DataTable.Cell>
                  <DataTable.Cell>{item.status}</DataTable.Cell>
                  <DataTable.Cell>{item.sentDate}</DataTable.Cell>
                </DataTable.Row>
              ))}

              <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(items.length / itemsPerPage)}
                onPageChange={(page) => setPage(page)}
                label={`${from + 1}-${to} sur ${items.length}`}
                numberOfItemsPerPageList={numberOfItemsPerPageList}
                numberOfItemsPerPage={itemsPerPage}
                onItemsPerPageChange={setItemsPerPage}
                showFastPaginationControls
                selectPageDropdownLabel={"Lignes par page"}
              />
            </DataTable>
          </View>
          <View className="ml-5">
            <Text className="font-pbold text-green-600">1xBet</Text>
            <Text className="font-psemibold text-gray-500">
              Nombre de requêtes validées :{" "}
            </Text>
            <Text className="font-psemibold text-gray-500">
              Nombre de requêtes rejetées :{" "}
            </Text>
          </View>
          <View className="ml-5">
            <Text className="font-pbold text-green-600">WinBet</Text>
            <Text className="font-psemibold text-gray-500">
              Nombre de requêtes validées :{" "}
            </Text>
            <Text className="font-psemibold text-gray-500">
              Nombre de requêtes rejetées :{" "}
            </Text>
          </View>
          <View className="ml-5">
            <Text className="font-pbold text-green-600">MelBet</Text>
            <Text className="font-psemibold text-gray-500">
              Nombre de requêtes validées :{" "}
            </Text>
            <Text className="font-psemibold text-gray-500">
              Nombre de requêtes rejetées :{" "}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  buttonRow: { paddingTop: 30 },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 8, // Espacement entre l'icône et le texte
  },
});

export default RequestsTable;
