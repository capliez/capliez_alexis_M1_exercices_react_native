import React, { useState } from "react";
import { StyleSheet, Button, View, Text } from "react-native";

const Exercice2 = ({ value }) => {
  const [time, setTime] = useState(value && Number(value) ? value : 10);

  const handleChangeTime = () => {
    if (time > 0) {
      setTime(time - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Tu peux appuyer sur le boutton : {time} fois</Text>
      <Button
        disabled={time > 0 ? false : true}
        onPress={() => handleChangeTime()}
        title="Clique ici"
      />
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
});
export default Exercice2;
