import React, { Component } from "react";
import { Button, StyleSheet, View, Text } from "react-native";

class Exercice12 extends Component {
  //Montage
  constructor(props) {
    super(props);
    this.state = { call: 1 };
    console.log("Constructor");
  }

  //Montage et Mise à jour
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedstateFromProps");
    //Met à jour l'état
    return null;
  }

  //Montage
  componentDidMount() {
    console.log("componentDidMount");

    this.setState({ call: this.state.call + 1 });
  }

  //Mise à jour
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");

    return nextState.call > this.state.call ? true : false;
  }

  //Mise à jour
  getSnapshotBeforeUpdate(prevProps, prevstate) {
    console.log("getSnapshotBeforeUpdate");

    return prevstate.call < this.state.call ? this.state.call : null;
  }

  //Mise à jour
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");

    if (snapshot !== null && snapshot === 2) {
      this.setState({ call: this.state.call + 1 });
    }
  }

  //Démontage
  componentWillUnmount() {
    console.log("componentWillUnmount");
    this.setState({call: 0});
  }

  render() {
    const { call } = this.state;
    //Montage
    console.log("render");
    return (
      <View style={[styles.container]}>
        <Text>Le listener a était appelé : {call} fois</Text>
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
export default Exercice12;
