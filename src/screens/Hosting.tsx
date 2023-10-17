import { View } from "react-native";
import { Divider, List, Text } from "react-native-paper";

import Button from "../components/Button";

export default function Hosting({ navigation }) {
  return (
    <View>
      <List.Section>
        <List.Item
          title={<Text style={{ color: "#000" }}>Provide information about your place</Text>}
          description={<Text style={{ color: "#808080" }}>Share some basic info, such as the location and how many students can stay.</Text>}
          left={() => <List.Icon color="#000" icon="roman-numeral-1" />}
        />
        <Divider />
        <List.Item
          title={<Text style={{ color: "#000" }}>Make it stand out</Text>}
          description={<Text style={{ color: "#808080" }}>Add photos plus a title and description.</Text>}
          left={() => <List.Icon color="#000" icon="roman-numeral-2" />}
        />
        <Divider />
        <List.Item
          title={<Text style={{ color: "#000" }}>Finalize and publish</Text>}
          description={<Text style={{ color: "#808080" }}>Set a starting price and publish your listing.</Text>}
          left={() => <List.Icon color="#000" icon="roman-numeral-3" />}
        />
      </List.Section>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("HostingStep1")}
        style={undefined}
      >
        Get started
      </Button>
    </View>
  );
}
