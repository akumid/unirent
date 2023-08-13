import Background from "../components/Background";
import Button from "../components/Button";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Paragraph from "../components/Paragraph";

export default function Welcome({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>UniRent</Header>
      <Paragraph>An online rental marketplace for Students</Paragraph>
      <Button
        mode="contained"
        uppercase
        onPress={() => navigation.navigate("HomeStack")}
        style={undefined}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        uppercase
        onPress={() => navigation.navigate("Register")}
        style={undefined}
      >
        Create an account
      </Button>
    </Background>
  );
}
