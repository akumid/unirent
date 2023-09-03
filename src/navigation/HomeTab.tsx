import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

import AccountStack from "./AccountStack";
import Account from "../screens/Account";
import Home from "../screens/Home";
import ExploreStack from "./ExploreStack";
import InboxScreen from "../screens/InboxScreen";
import ChatStack from "./ChatStack";

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
        component={ExploreStack}
        options={{
          tabBarIcon: "magnify",
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Home}
        options={{
          tabBarIcon: "heart-outline",
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={ChatStack}
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
