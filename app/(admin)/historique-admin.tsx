import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";
import HistoryRow from "../../mod/HistoryRow";

const AdminHistorique = () => {
  let count = 0;
  const historique = [
    {
      type: "Dépôt",
      content: "Dépôt de 10 000 CFA sur le compte.",
      created_at: "2025-01-15 08:45:00",
    },
    {
      type: "Paiement",
      content: "Paiement de 5 000 CFA à Shop ABC.",
      created_at: "2025-01-14 12:30:00",
    },
    {
      type: "Dépôt",
      content: "Dépôt de 20 000 CFA via mobile money.",
      created_at: "2025-01-14 10:15:00",
    },
    {
      type: "Paiement",
      content: "Paiement de 7 500 CFA pour l'abonnement TV.",
      created_at: "2025-01-13 18:00:00",
    },
    {
      type: "Dépôt",
      content: "Dépôt de 15 000 CFA à l'agence principale.",
      created_at: "2025-01-13 09:45:00",
    },
    {
      type: "Paiement",
      content: "Paiement de 3 000 CFA pour l'électricité.",
      created_at: "2025-01-12 16:30:00",
    },
    {
      type: "Dépôt",
      content: "Dépôt de 5 000 CFA sur le compte.",
      created_at: "2025-01-12 08:20:00",
    },
    {
      type: "Paiement",
      content: "Paiement de 8 000 CFA pour les courses.",
      created_at: "2025-01-11 14:50:00",
    },
    {
      type: "Dépôt",
      content: "Dépôt de 12 000 CFA en espèces.",
      created_at: "2025-01-11 11:15:00",
    },
    {
      type: "Paiement",
      content: "Paiement de 6 500 CFA pour le transport.",
      created_at: "2025-01-10 20:00:00",
    },
  ];

  return (
    <SafeAreaView>
      <Header title={"Historique"} />
      <FlatList
        data={historique}
        keyExtractor={(item) => {
          return `${count++}`;
        }}
        renderItem={({ item }) => {
          return <HistoryRow history_data={item} />;
        }}
        ListHeaderComponentStyle={{ backgroundColor: "#ccc" }}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </SafeAreaView>
  );
};

export default AdminHistorique;

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#DDD",
  },
});
