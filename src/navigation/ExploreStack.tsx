import { createStackNavigator } from "@react-navigation/stack";

import AccommodationDetailScreen from "../screens/AccommodationDetailScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import SearchScreen from "../screens/SearchScreen";
import Welcome from "../screens/Welcome";

const Stack = createStackNavigator();

export default function ExploreStack() {
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
      <Stack.Screen
        name="Accommodation Detail"
        component={AccommodationDetailScreen}
      />
    </Stack.Navigator>
  );
}
