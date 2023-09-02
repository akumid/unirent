import { createStackNavigator } from "@react-navigation/stack";

import HomeStack from "./HomeStack";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import AccommodationDetailScreen from "../screens/AccommodationDetailScreen";
import PostAccommodationScreen from "../screens/PostAccommodationScreen";

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
      <Stack.Screen name="Search Result" component={SearchResultScreen} />
      <Stack.Screen name="Accommodation Detail" component={AccommodationDetailScreen} />
      <Stack.Screen name="Post Accommodation" component={PostAccommodationScreen} />
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
