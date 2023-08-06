import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Search" component={SearchScreen} />
      {/* <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen
      name="ResetPasswordScreen"
      component={ResetPasswordScreen}
    /> */}
    </Stack.Navigator>
  );
}
