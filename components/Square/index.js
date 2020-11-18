import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Square = ({ title, color }) => {
  const styles = StyleSheet.create({
    square: {
      backgroundColor: color ? color : "#f9c2ff",
      marginVertical: 8,
      marginHorizontal: 16,
      height: 100,
      width: 100,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    text: { margin: 3 },
  });

  return (
    <View style={[styles.square]}>
      <Text style={[styles.text]}>{title && title}</Text>
    </View>
  );
};

export default Square;
