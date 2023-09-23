import { Authenticator } from "@aws-amplify/ui-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { API, Amplify, Auth, graphqlOperation } from "aws-amplify";
import { useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import awsExports from "./src/aws-exports";
import { createUser } from "./src/graphql/mutations";
import { getUser } from "./src/graphql/queries";
import HomeStack from "./src/navigation/HomeStack";

Amplify.configure(awsExports);

export default function App() {
  useEffect(() => {
    const syncUser = async () => {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      const userData = await API.graphql(
        graphqlOperation(getUser, { id: authUser.attributes.sub }),
      );

      if (userData.data.getUser) {
        console.log("User already exists");
        return;
      }

      console.log("Creating new User");
      const newUser = {
        id: authUser.attributes.sub,
        name: authUser.username,
      };
      await API.graphql(graphqlOperation(createUser, { input: newUser }));
    };

    syncUser();
  }, []);

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
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
