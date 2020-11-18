import React from "react";
import { StyleSheet, View } from "react-native";
import ButtonText from "../../components/ButtonText";
const Exercice3 = ({ titles }) => {

  return (
    <View style={styles.container}>
      {titles &&
        titles.map((t, i) => (
          <ButtonText key={i} title={t} />
        ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  }
});
export default Exercice3;
