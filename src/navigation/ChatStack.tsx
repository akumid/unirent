import { createStackNavigator } from "@react-navigation/stack";

import InboxScreen from "../screens/InboxScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator
      initialRouteName="Inbox"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Inbox" component={InboxScreen} />
      <Stack.Screen name="Chat Room" component={ChatScreen} />
    </Stack.Navigator>
  );
}
