import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";

import AuthStack from "./src/navigation/AuthStack"; // TODO: to be replace with AWS Cognito

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </PaperProvider>
  );
}
