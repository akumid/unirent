import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";

import AuthStack from "./src/navigation/AuthStack";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AuthStack />
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  );
}
