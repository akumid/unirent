import { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

import Background from "../components/Background";
import Header from "../components/Header";
import Logo from "../components/Logo";
import TextInput from "../components/TextInput";
// import { emailValidator } from "../helpers/emailValidator";
// import { passwordValidator } from "../helpers/passwordValidator";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = () => {
    // const emailError = emailValidator(email.value);
    // const passwordError = passwordValidator(password.value);
    // if (emailError || passwordError) {
    //   setEmail({ ...email, error: emailError });
    //   setPassword({ ...password, error: passwordError });
    //   return;
    // }
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  return (
    <Background>
      <Logo />
      <Header>Hello</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description={undefined}
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        description={undefined}
      />

      <Button
        style={styles.button}
        labelStyle={styles.text}
        mode="contained"
        uppercase
        onPress={onLoginPressed}
      >
        Login
      </Button>

      <Button
        style={styles.forgotPassword}
        labelStyle={styles.forgot}
        onPress={() => navigation.navigate("ResetPasswordScreen")}
      >
        Forgot your password?
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
  },
  link: {
    fontWeight: "bold",
  },
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
