import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Text } from "react-native";

const Exercice7 = () => {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text>Quel est ton nom ?</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button onPress={() => alert("Bonjour " + name)} title="Clique ici" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  input: { backgroundColor: "white", width: 200, height: 40 },
});
export default Exercice7;
