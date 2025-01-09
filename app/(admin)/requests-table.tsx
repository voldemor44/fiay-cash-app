import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../mod/Header";
import { DataTable } from "react-native-paper";

const RequestsTable = () => {
  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = useState([2, 3, 4])

  const [items] = useState([
    {
      key: 1,
      name: "Cupcake",
      calories: 356,
      fat: 16,
    },
    {
      key: 2,
      name: "Eclair",
      calories: 262,
      fat: 16,
    },
    {
      key: 3,
      name: "Frozen yogurt",
      calories: 159,
      fat: 6,
    },
    {
      key: 4,
      name: "Gingerbread",
      calories: 305,
      fat: 3.7,
    },
  ]);

  return (
    <SafeAreaView>
      <Header title={"Listes"} />
      <Text>RequestsTable</Text>
    </SafeAreaView>
  );
};

export default RequestsTable;
