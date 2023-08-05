import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";

import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function Welcome({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>React Native - Expo - Login</Header>
      <Paragraph>A simple React Native Expo Login template app.</Paragraph>
      <Button
        style={styles.button}
        labelStyle={styles.text}
        mode="contained"
        uppercase
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </Button>
      <Button
        style={styles.button}
        labelStyle={styles.text}
        mode="outlined"
        uppercase
        onPress={() => navigation.navigate("Register")}
      >
        Create an account
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },
});
