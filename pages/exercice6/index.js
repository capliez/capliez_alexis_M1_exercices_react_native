import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Square from "../../components/Square";
const Exercice6 = ({min, max}) => {

  const renderSquareCount = () => {

    if(max < min){
      return alert('La valeur max doit être supérieur à la valeur min')
    }
    const Square = []
    for(let i = min ; i < max; i++){
       Square.push(i)
    }

    return Square
  }



  
  return (
    <ScrollView style={styles.scroll}>

    <View style={styles.container}>
          {renderSquareCount() && renderSquareCount().map((s,i) => <Square key={i} title={"Square "+ s} color="blue" />)}
         
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  scroll: { marginHorizontal: 20,}
});
export default Exercice6;
