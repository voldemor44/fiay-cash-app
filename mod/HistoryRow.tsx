import { View, Text, StyleSheet } from "react-native";
import React from "react";

type Props = {
  history: { type: string; content: string; created_at: string };
};

const HistoryContent = ({ history }: Props) => {
  const { type, content, created_at } = history;
  return (
    <View style={styles.singleItem}>
      <View style={styles.row}>
        <View style={styles.tweetContentContainer}>
          <View style={styles.rowTop}>
            <Text
              className="font-psemibold"
              numberOfLines={1}
              style={[styles.header]}
            >
              {type}
            </Text>

            <Text className="text-gray-500 font-psemibold">·</Text>
            <Text className="text-gray-500 font-psemibold">2h</Text>
          </View>
          <Text  className="font-pregular" style={[styles.description]}>{content}</Text>
        </View>
      </View>
    </View>
  );
};

const HistoryRow = ({ history_data }) => {
  return (
    <View>
      <HistoryContent history={history_data} />
    </View>
  );
};

export default HistoryRow;

const styles = StyleSheet.create({
  header: {
    fontSize: 14,
    paddingBottom: 4,
    paddingRight: 4,
    color: "#000",
  },
  description: {
    fontSize: 14,
    color: "#000",
  },
  singleItem: {
    paddingHorizontal: 16,
    minHeight: 44,
    flex: 1,
    padding: 16,
  },
  rowTop: {
    flexDirection: "row",
  },

  row: {
    flexDirection: "row",
  },

  tweetContentContainer: {
    flexShrink: 1,
    flexGrow: 1,
  },
});
