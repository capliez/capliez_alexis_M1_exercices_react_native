import React, { Component } from "react";
import { Button, StyleSheet, View, Text } from "react-native";

class Exercice11 extends Component {
  constructor(props) {
    super(props);
    this.state = { nbClick: 0 };
  }
  render() {

    const {nbClick} = this.state

    return (
      <View style={[styles.container]}>
        <Text>Vous avez cliqué : {nbClick} fois</Text>
        <Button
          onPress={() => this.setState({ nbClick: nbClick + 1 })}
          title="Clique ici"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});
export default Exercice11;
