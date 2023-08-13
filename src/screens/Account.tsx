import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { View } from "react-native";
import { Divider, List, Text } from "react-native-paper";

export default function Account({ navigation }) {
  const { signOut } = useAuthenticator((context) => [context.user]);

  return (
    <View>
      <List.Section>
        <List.Subheader>
          <Text variant="titleLarge">Settings</Text>
        </List.Subheader>
        <List.Item
          title={<Text> Account information </Text>}
          left={() => <List.Icon icon="account-outline" />}
          onPress={() => navigation.navigate("AccountInfo")}
        />
      </List.Section>
      <Divider />
      <List.Section>
        <List.Subheader>
          <Text variant="titleLarge">Hosting</Text>
        </List.Subheader>
        <List.Item
          title={<Text> Become a host </Text>}
          left={() => <List.Icon icon="home-plus-outline" />}
          onPress={() => navigation.navigate("Hosting")}
        />
      </List.Section>
      <Divider />
      <List.Item
        title={<Text> Sign out </Text>}
        left={() => <List.Icon icon="logout" />}
        onPress={signOut}
      />
      <Divider />
    </View>
  );
}
