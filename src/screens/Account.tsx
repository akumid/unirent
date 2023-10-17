import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { View, } from "react-native";
import { Divider, List, Text } from "react-native-paper";

export default function Account({ navigation }) {
  const { signOut } = useAuthenticator((context) => [context.user]);

  return (
    <View>
      <List.Section>
        <List.Subheader>
          <Text style={{ color: "#000" }} variant="titleLarge">Settings</Text>
        </List.Subheader>
        <List.Item
          title={<Text style={{ color: "#000" }}> Account information </Text>}
          left={() => <List.Icon color="#000" icon="account-outline" />}
          onPress={() => navigation.navigate("AccountInfo")}
        />
      </List.Section>
      <Divider />
      <List.Section >
        <List.Subheader>
          <Text style={{ color: "#000" }} variant="titleLarge">Hosting</Text>
        </List.Subheader>
        <List.Item
          title={<Text style={{ color: "#000" }}> Become a host </Text>}
          left={() => <List.Icon color="#000" icon="home-plus-outline" />}
          onPress={() => navigation.navigate("Hosting")}
        />
      </List.Section>
      <Divider />
      <List.Item
        title={<Text style={{ color: "#000" }}> Sign out </Text>}
        left={() => <List.Icon color="#000" icon="logout" />}
        onPress={signOut}
      />
      <Divider />
    </View>
  );
}
