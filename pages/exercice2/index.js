import React from "react";
import { StyleSheet, Button, View } from "react-native";

const Exercice2 = () => {
  return (
    <View style={styles.container}>
      <Button onPress={() => alert('Bonjour')} title="Clique ici" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  }
});
export default Exercice2;
