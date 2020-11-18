import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ItemExercice = ({ item, navigation }) => {
  
  return(
    <TouchableOpacity
      onPress={() => navigation.navigate('exercice-'+item.id)}
      style={[styles.ligne]}
  >
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
  )
  }

const styles = StyleSheet.create({
  ligne: {
    backgroundColor: "#870028",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: "white"
  },
});

export default ItemExercice;
