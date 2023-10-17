import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { Divider, List, Text, TextInput, Button as PaperButton, Snackbar, } from "react-native-paper";

export default function AccountInfo({ navigation }) {
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState(false);
  const [passwordChangeFail, setPasswordChangeFail] = useState(false);
  const [passwordChangeFailMsg, setPasswordChangeFailMsg] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { user } = useAuthenticator((context) => [context.user]);
  console.log(user);

  async function changePassword(oldPassword: string, newPassword: string) {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const data = await Auth.changePassword(user, oldPassword, newPassword)
        .then((data) => {
          console.log(data);
          setPasswordChangeSuccess(true);
        })
        .catch((err) => {
          console.log("caught error ", err);
          setPasswordChangeFail(true);
          setPasswordChangeFailMsg(err);
        })
        .finally(() => {
          setCurrentPassword("");
          setNewPassword("");
          setConfirmNewPassword("");
        });
    } catch (err) {
      console.log("caught error ", err);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      setPasswordChangeFail(true);
      setPasswordChangeFailMsg(err);
    }
  }

  return (
    <List.Section>
      <List.Item title={<Text style={{ color: "#000" }}> Username </Text>} description={<Text style={{ color: "#808080" }}>{user.username}</Text>} />
      <Divider />
      <List.Item title={<Text style={{ color: "#000" }}> Email </Text>} description={<Text style={{ color: "#808080" }}>{user.attributes.email}</Text>} />
      <Divider style={{ marginBottom: 10 }} />
      {/* <List.Item title={<Text style={{ color: "#000" }}> Password </Text>} description={<Text style={{ color: "#808080" }}>Tap to edit</Text>} /> */}
      <List.Item title={<Text style={{ color: "#000" }}> Change Password </Text>} />
      <TextInput
        textColor="#FFFFFF"
        label="Current Password"
        placeholder="Enter your current password"
        value={currentPassword}
        onChangeText={setCurrentPassword}
        secureTextEntry={true}

      />
      <TextInput
        textColor="#FFFFFF"
        label="New Password"
        placeholder="Enter your new password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry={true}

      />
      <TextInput
        textColor="#FFFFFF"
        label="Confirm New Password"
        placeholder="Confirm your new password"
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
        secureTextEntry={true}
      />
      <PaperButton
        mode="contained"
        onPress={() => { changePassword(currentPassword, newPassword) }}
        style={{ marginTop: 10 }}
        disabled={confirmNewPassword != newPassword || newPassword.length == 0 || currentPassword.length == 0}
      >
        Save new Password
      </PaperButton>
      <Snackbar
        visible={passwordChangeSuccess}
        onDismiss={() => { setPasswordChangeSuccess(false) }}
        duration={5000}
        action={{
          label: 'Close',
          onPress: () => {
            setPasswordChangeSuccess(false)
          },
        }}>
        Password updated successfully
      </Snackbar>
      <Snackbar
        visible={passwordChangeFail}
        onDismiss={() => { setPasswordChangeFail(false) }}
        duration={5000}
        action={{
          label: 'Close',
          onPress: () => {
            setPasswordChangeFail(false)
          },
        }}>
        Password updated unsuccessfully: {passwordChangeFailMsg}
      </Snackbar>
      <Divider />
    </List.Section>
  );
}
