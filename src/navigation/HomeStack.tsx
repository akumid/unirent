import { createStackNavigator } from "@react-navigation/stack";

import HomeTab from "./HomeTab";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
