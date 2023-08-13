import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { View } from "react-native";
import { List } from "react-native-paper";

export default function Account({ navigation }) {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <View
      style={{
        alignItems: "flex-start",
      }}
    >
      <List.Section>
        <List.Subheader>Actions</List.Subheader>
        <List.Item
          title="Sign out"
          left={() => <List.Icon icon="logout" />}
          onPress={signOut}
        />
      </List.Section>
    </View>
  );
}
