import { View } from "react-native";
import { Divider, List, Text } from "react-native-paper";

import Button from "../components/Button";

export default function HostingStep1({ navigation, route }) {
  if (route.state) {
    navigation.setOptions({
      tabBarVisible: !(route.state.index > 0),
    });
  }
  console.log(navigation);
  console.log(route);

  return (
    <View>
      <Text variant="headlineMedium">
        Which of these best describes your place?
      </Text>
    </View>
  );
}
