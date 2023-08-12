import { NavigationContainer } from "@react-navigation/native";
import { Amplify } from "aws-amplify";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";

import awsExports from "./src/aws-exports";
import AuthStack from "./src/navigation/AuthStack";

Amplify.configure(awsExports); // TODO: to be replace with AWS Cognito

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </PaperProvider>
  );
}
