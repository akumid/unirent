import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Button as PaperButton, Text, TextInput } from "react-native-paper";

import Counter from "../components/Counter";

interface IAddress {
  country: string;
  postalCode: string;
}

export default function HostingStep1({ navigation, route }) {
  if (route.state) {
    navigation.setOptions({
      tabBarVisible: !(route.state.index > 0),
    });
  }
  console.log(navigation);
  console.log(route);

  const [address, setAddress] = useState<IAddress>();
  console.log(address);

  const [guest, setGuest] = useState(0);
  const [bed, setBed] = useState(0);
  const [bath, setBath] = useState(0);

  return (
    <View style={styles.view}>
      <ScrollView>
        <Text variant="headlineMedium">
          Which of these best describes your place?
        </Text>
        <PaperButton
          icon="home-outline"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          House
        </PaperButton>
        <PaperButton
          icon="home-city-outline"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Flat/apartment
        </PaperButton>

        <Text variant="headlineMedium">Where is your place?</Text>
        <TextInput
          label="Country"
          placeholder="Enter your country"
          value={address?.country}
          onChangeText={(text) => setAddress({ ...address, country: text })}
        />
        <TextInput
          label="Postal Code"
          placeholder="Enter your postal code"
          value={address?.postalCode}
          onChangeText={(text) => setAddress({ ...address, postalCode: text })}
        />

        <Text variant="headlineMedium">How many people can stay here?</Text>
        <View style={styles.counter}>
          <Text> Maximum occupancy</Text>
          <Counter
            result={guest}
            onMinus={(value) => setGuest(value)}
            onPlus={(value) => setGuest(value)}
          />
        </View>

        <View style={styles.counter}>
          <Text> No. of bedrooms</Text>
          <Counter
            result={bed}
            onMinus={(value) => setBed(value)}
            onPlus={(value) => setBed(value)}
          />
        </View>

        <View style={styles.counter}>
          <Text> No. of bathrooms</Text>
          <Counter
            result={bath}
            onMinus={(value) => setBath(value)}
            onPlus={(value) => setBath(value)}
          />
        </View>
      </ScrollView>

      <View style={styles.next}>
        <PaperButton
          mode="contained"
          onPress={() => console.log("navigate to upload pictures")}
          style={undefined}
        >
          Next
        </PaperButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  next: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
  },
});
