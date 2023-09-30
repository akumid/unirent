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
import EPropertyType from "../model/EPropertyType";

export default function HostingStep1({ navigation, route }) {
  if (route.state) {
    navigation.setOptions({
      tabBarVisible: !(route.state.index > 0),
    });
  }
  // console.log(navigation);
  // console.log(route);

  const [propertyType, setPropertyType] = useState("");
  const [address, setAddress] = useState<IAddress>();
  // const [guest, setGuest] = useState(0);
  // const [bed, setBed] = useState(0);
  // const [bath, setBath] = useState(0);

  // initialize zustand store methods
  const updatePropertyType = useHostStore((state) => state.updatePropertyType);
  // const updateMaxGuest = useHostStore((state) => state.updateMaxGuest);
  // const updateMaxBed = useHostStore((state) => state.updateMaxBed);
  // const updateMaxBath = useHostStore((state) => state.updateMaxBath);
  const updateAddress = useHostStore((state) => state.updateAddress);

  const onNavigate = () => {
    // update zustand store
    updatePropertyType(propertyType);
    // updateMaxGuest(guest);
    // updateMaxBed(bed);
    // updateMaxBath(bath);
    updateAddress(address);
    navigation.navigate("HostingStep2");
  };

  return (
    <View style={styles.view}>
      <ScrollView>
        <Text variant="headlineMedium" style={{ color: "#000" }}>
          Which of these best describes your place?
        </Text>

        <SegmentedButtons
          value={propertyType}
          onValueChange={setPropertyType}
          buttons={[
            {
              value: EPropertyType.Condo,
              label: EPropertyType.Condo,
              icon: "home-city-outline",
              uncheckedColor: "#000"
            },
            {
              value: EPropertyType.Landed,
              label: EPropertyType.Landed,
              icon: "home-outline",
              uncheckedColor: "#000"
            },
            {
              value: EPropertyType.HDB,
              label: EPropertyType.HDB,
              icon: "office-building-outline",
              uncheckedColor: "#000"
            },
          ]}
        />

        <Text variant="headlineMedium" style={{ color: "#000" }}>Where is your place?</Text>
        <TextInput
          textColor="#FFFFFF"
          label="Country"
          placeholder="Enter your country"
          value={address?.country}
          onChangeText={(text) => setAddress({ ...address, country: text })}
        />
        <TextInput
          textColor="#FFFFFF"
          label="Postal Code"
          placeholder="Enter your postal code"
          value={address?.postalCode}
          onChangeText={(text) => setAddress({ ...address, postalCode: text })}
        />
        <TextInput
          textColor="#FFFFFF"
          label="Unit Number"
          placeholder="Enter your unit number, not required for landed properties"
          value={address?.unitNo}
          onChangeText={(text) => setAddress({ ...address, unitNo: text })}
        />
        <TextInput
          textColor="#FFFFFF"
          label="Apt, Suite, etc (optional)"
          placeholder="Enter your apartment, suite name, etc, usually for condo properties"
          value={address?.aptName}
          onChangeText={(text) => setAddress({ ...address, aptName: text })}
        />

        {/* <Text variant="headlineMedium">How many people can stay here?</Text>
        <View style={styles.counter}>
          <Text style={{color: "#000"}}> Maximum occupancy</Text>
          <Counter
            result={guest}
            onMinus={(value) => setGuest(value)}
            onPlus={(value) => setGuest(value)}
          />
        </View>

        <View style={styles.counter}>
          <Text style={{color: "#000"}}> No. of bedrooms</Text>
          <Counter
            result={bed}
            onMinus={(value) => setBed(value)}
            onPlus={(value) => setBed(value)}
          />
        </View>

        <View style={styles.counter}>
          <Text style={{color: "#000"}}> No. of bathrooms</Text>
          <Counter
            result={bath}
            onMinus={(value) => setBath(value)}
            onPlus={(value) => setBath(value)}
          />
        </View> */}
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
