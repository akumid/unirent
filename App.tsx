import { Authenticator } from "@aws-amplify/ui-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Amplify } from "aws-amplify";
import { PaperProvider } from "react-native-paper";

import awsExports from "./src/aws-exports";
import AuthStack from "./src/navigation/AuthStack"; // Replaced with Amplify Authenticator UI
import HomeStack from "./src/navigation/HomeStack";

Amplify.configure(awsExports);

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        {/* <AuthStack /> */}
        <Authenticator.Provider>
          <Authenticator>
            <HomeStack />
          </Authenticator>
        </Authenticator.Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}
