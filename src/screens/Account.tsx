import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { View, StyleSheet } from "react-native";
import { Divider, List, Text } from "react-native-paper";

export default function Account({ navigation }) {
  const { signOut } = useAuthenticator((context) => [context.user]);

  return (
    <View style={styles.view}>
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
          title={<Text> Add Listing </Text>}
          left={() => <List.Icon icon="home-plus-outline" />}
          onPress={() => navigation.navigate("Hosting")}
        />
        <Divider />
        <List.Item
          title={<Text> My Listing </Text>}
          left={() => <List.Icon icon="home-import-outline" />}
          onPress={() => navigation.navigate("My Listing")}
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

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 50
  },
});
