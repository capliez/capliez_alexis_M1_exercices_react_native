import React from "react";
import { StyleSheet, FlatList, Button, View, Text } from "react-native";
import DATA from "./EmployeeData";
import Constants from "expo-constants";

const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>
);

const Exercice8 = () => {
  const renderItem = ({ item }) => {
    return <Item name={item.name} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});
export default Exercice8;
