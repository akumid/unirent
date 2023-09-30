import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { Auth } from "aws-amplify";
import { Divider, List, Text } from "react-native-paper";

async function changePassword(oldPassword: string, newPassword: string) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const data = await Auth.changePassword(user, oldPassword, newPassword);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

export default function AccountInfo({ navigation }) {
  const { user } = useAuthenticator((context) => [context.user]);
  console.log(user);

  return (
    <List.Section>
      <List.Item title={<Text style={{ color: "#000" }}> Username </Text>} description={<Text style={{ color: "#808080" }}>{user.username}</Text>} />
      <Divider />
      <List.Item title={<Text style={{ color: "#000" }}> Email </Text>} description={<Text style={{ color: "#808080" }}>{user.attributes.email}</Text>} />
      <Divider />
      <List.Item title={<Text style={{ color: "#000" }}> Password </Text>} description={<Text style={{ color: "#808080" }}>Tap to edit</Text>} />
      <Divider />
    </List.Section>
  );
}
