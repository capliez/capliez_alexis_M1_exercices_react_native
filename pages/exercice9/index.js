import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import Constants from "expo-constants";
import Axios from "axios";
const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>
);

const Exercice9 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Axios.get("https://randomuser.me/api/?results=100&inc=name")
      .then((response) => setUsers(response.data.results), setLoading(false))
      .catch((error) => console.log(error), setLoading(false));
  }, []);

  const renderItem = ({ item }) => {
    return <Item name={item.name.first + ' ' + item.name.last} />;
  };
  return (
    <View style={styles.container}>
      {!loading && users && users.length > 0 && (
        <FlatList
          data={users}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item, index) => String(index)}
        />
      )}
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
export default Exercice9;
