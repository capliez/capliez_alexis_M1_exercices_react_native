import React from "react";
import { StyleSheet, View } from "react-native";
import Square from "../../components/Square";
const Exercice5 = () => {
  return (
    <View style={styles.container}>
      <Square title={"Square 1"} color="blue" />
      <Square title={"Square 2"} color="green" />
      <Square title={"Square 3"} color="red" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    margin: 10,
  },
});
export default Exercice5;
