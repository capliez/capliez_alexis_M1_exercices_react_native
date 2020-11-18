import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ButtonText = ({ title }) => {
  return (
    <TouchableOpacity onPress={() => alert(title)} style={styles.button}>
      <Text style={styles.title}>{title && title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: { backgroundColor: "pink", padding: 15, margin: 10 },
  title: { fontSize: 30 },
});
export default ButtonText;
