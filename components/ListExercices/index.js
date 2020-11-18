import React from "react";
import { FlatList, StatusBar, StyleSheet } from "react-native";
import DATA from "../../data";
import ItemExercices from "../ItemExercice";

const ListExercices = ({navigation}) => {
  const renderItem = ({ item }) => {
 
    return (
      <ItemExercices
        item={item}
        navigation={navigation}
      />
    );
  };

  return (
      <FlatList
        data={DATA}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(item) => String(item.id)}
      />
  );
};



export default ListExercices;
