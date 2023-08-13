import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

import Account from "../screens/Account";
import Home from "../screens/Home";
import AccountStack from "./AccountStack";

const Tab = createMaterialBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      shifting
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Explore"
        component={Home}
        options={{
          tabBarIcon: "magnify",
        }}
      />
      <Tab.Screen
        name="Trip"
        component={Home}
        options={{
          tabBarIcon: "calendar",
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Home}
        options={{
          tabBarIcon: "message-text-outline",
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          tabBarIcon: "account-outline",
        }}
      />
    </Tab.Navigator>
  );
}
