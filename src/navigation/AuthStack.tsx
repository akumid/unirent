import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Welcome from "../screens/Welcome";

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
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="RegisterScreen" component={Register} /> */}
      {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
      {/* <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      /> */}
    </Stack.Navigator>
  );
}
