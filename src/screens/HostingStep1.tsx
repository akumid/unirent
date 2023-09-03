import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {
  Button as PaperButton,
  SegmentedButtons,
  Text,
  TextInput,
} from "react-native-paper";

import Counter from "../components/Counter";
import IAddress from "../model/IAddress";
import { useHostStore } from "../store/host";

export default function HostingStep1({ navigation, route }) {
  if (route.state) {
    navigation.setOptions({
      tabBarVisible: !(route.state.index > 0),
    });
  }
  // console.log(navigation);
  // console.log(route);

  const [place, setPlace] = useState("");
  const [address, setAddress] = useState<IAddress>();
  const [guest, setGuest] = useState(0);
  const [bed, setBed] = useState(0);
  const [bath, setBath] = useState(0);

  // initialize zustand store methods
  const updatePropertyType = useHostStore((state) => state.updatePropertyType);
  const updateMaxGuest = useHostStore((state) => state.updateMaxGuest);
  const updateMaxBed = useHostStore((state) => state.updateMaxBed);
  const updateMaxBath = useHostStore((state) => state.updateMaxBath);
  const updateAddress = useHostStore((state) => state.updateAddress);

  const onNavigate = () => {
    // update zustand store
    updatePropertyType(place);
    updateMaxGuest(guest);
    updateMaxBed(bed);
    updateMaxBath(bath);
    updateAddress(address);
    navigation.navigate("HostingStep2");
  };

  return (
    <View style={styles.view}>
      <ScrollView>
        <Text variant="headlineMedium">
          Which of these best describes your place?
        </Text>

        <SegmentedButtons
          value={place}
          onValueChange={setPlace}
          buttons={[
            {
              value: "house",
              label: "House",
              icon: "home-outline",
            },
            {
              value: "flat",
              label: "Flat/apartment",
              icon: "home-city-outline",
            },
          ]}
        />

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
        <TextInput
          label="Unit Number"
          placeholder="Enter your unit number, not required for landed properties"
          value={address?.unitNo}
          onChangeText={(text) => setAddress({ ...address, unitNo: text })}
        />
        <TextInput
          label="Apt, Suite, etc (optional)"
          placeholder="Enter your apartment, suite name, etc, usually for condo properties"
          value={address?.aptName}
          onChangeText={(text) => setAddress({ ...address, aptName: text })}
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
          onPress={() => onNavigate()}
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
