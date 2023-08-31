import { Authenticator } from "@aws-amplify/ui-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Amplify } from "aws-amplify";
import { PaperProvider } from "react-native-paper";

import awsExports from "./src/aws-exports";
import AuthStack from "./src/navigation/AuthStack"; // Replaced with Amplify Authenticator UI
import HomeStack from "./src/navigation/HomeStack";
import { SafeAreaProvider } from "react-native-safe-area-context";

Amplify.configure(awsExports);

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          {/* <AuthStack /> */}
          <Authenticator.Provider>
            <Authenticator>
              <HomeStack />
            </Authenticator>
          </Authenticator.Provider>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
