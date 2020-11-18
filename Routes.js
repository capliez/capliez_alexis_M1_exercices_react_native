import React from "react";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";

import ListExercices from "./components/ListExercices";

//Exercices
import Exercice1 from "./pages/exercice1";
import Exercice2 from "./pages/exercice2";
import Exercice3 from "./pages/exercice3";
import Exercice4 from "./pages/exercice4";
import Exercice5 from "./pages/exercice5";
import Exercice6 from "./pages/exercice6";
import Exercice7 from "./pages/exercice7";
import Exercice8 from "./pages/exercice8";
import Exercice9 from "./pages/exercice9";
import Exercice10 from "./pages/exercice10";
import Exercice11 from "./pages/exercice11";
import Exercice12 from "./pages/exercice12";

import DATA from "./data";

const Stack = createStackNavigator();

const Routes = () => {
  const renderComponent = (id = null, props) => {
    switch (id) {
      case 1:
        return <Exercice1 {...props} />;
      case 2:
        return <Exercice2 {...props} />;
      case 3:
        return (
          <Exercice3
            {...props}
            titles={["Salut", "Comment ça va ?", "au revoir"]}
          />
        );
      case 4:
        return <Exercice4 {...props} value={5} />;
      case 5:
        return <Exercice5 {...props} />;
      case 6:
        return <Exercice6 {...props} min={1} max={16} />;
      case 7:
        return <Exercice7 {...props} />;
      case 8:
        return <Exercice8 {...props} />;
      case 9:
        return <Exercice9 {...props} />;
      case 10:
        return <Exercice10 {...props} />;
      case 11:
        return <Exercice11 {...props} />;
      case 12:
        return <Exercice12 {...props} />;
      default:
        return <ListExercices {...props} />;
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" options={{ title: "Accueil" }}>
          {(props) => renderComponent(null, props)}
        </Stack.Screen>

        {DATA &&
          DATA.map((item) => (
            <Stack.Screen
              key={item.id}
              name={"exercice-" + item.id}
              options={{ title: item.title }}
            >
              {(props) => renderComponent(item.id, props)}
            </Stack.Screen>
          ))}
      </Stack.Navigator>
      <View style={[styles.container]}>
        <Text>Alexis Capliez</Text>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Routes;
