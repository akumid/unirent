import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createStackNavigator } from "@react-navigation/stack";

import Account from "../screens/Account";
import AccountInfo from "../screens/AccountInfo";
import Hosting from "../screens/Hosting";
import HostingStep1 from "../screens/HostingStep1";
import HostingStep2 from "../screens/HostingStep2";
import HostingStep3 from "../screens/HostingStep3";
import HostingStep4 from "../screens/HostingStep4";

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
      <Stack.Screen
        name="Hosting"
        component={Hosting}
        options={{
          title: "Becoming a host is easy",
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-left" size={30} />
          ),
        }}
      />
      <Stack.Screen
        name="HostingStep1"
        component={HostingStep1}
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-left" size={30} />
          ),
        }}
      />
      <Stack.Screen
        name="HostingStep2"
        component={HostingStep2}
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-left" size={30} />
          ),
        }}
      />
      <Stack.Screen
        name="HostingStep3"
        component={HostingStep3}
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-left" size={30} />
          ),
        }}
      />
      <Stack.Screen
        name="HostingStep4"
        component={HostingStep4}
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-left" size={30} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
