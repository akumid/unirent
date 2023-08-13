import { createStackNavigator } from "@react-navigation/stack";

import Account from "../screens/Account";
import AccountInfo from "../screens/AccountInfo";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();

export default function AccountStack({ navigation, route }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountScreen"
        component={Account}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountInfo"
        component={AccountInfo}
        options={{
          title: "Account Info",
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-left" size={30} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
