import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Card, Checkbox, Button as PaperButton, Text, TextInput } from "react-native-paper";

import { useHostStore } from "../store/host";
import IUnitFeature from "../model/IUnitFeature";
import { convertUnitFeatureToArray } from "../utils/UnitFeatureUtil";

const featureLabels = [
  "Air-Conditioning",
  "WIFI",
  "Cooker Hood",
  "Fridge",
  "Washing Machine",
  "Dryer",
  "Near Public Transport",
  "Balcony",
];

export default function HostingStep3({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(undefined);
  const [unitFeature, setUnitFeature] = useState<IUnitFeature>({});

  const handlePriceChange = (text) => {
    const number = text.replace(/[^0-9]/g, "");
    setPrice(number);
  };

  // initialize zustand store methods
  const updateTitle = useHostStore((state) => state.updateTitle);
  const updateDescription = useHostStore((state) => state.updateDescription);
  const updatePrice = useHostStore((state) => state.updatePrice);
  const updateUnitFeature = useHostStore((state) => state.updateUnitFeature);

  const onNavigate = () => {
    // update zustand store
    updateTitle(title);
    updateDescription(description);
    updatePrice(price);
    updateUnitFeature(convertUnitFeatureToArray(unitFeature));
    navigation.navigate("HostingStep4");
  };

  const CheckboxGroup = ({ unitFeature, setUnitFeature }) => {
    return (
      <View style={styles.checkboxRowGroup}>
        <View style={styles.checkboxColumnGroup}>
          {featureLabels.map((label) => (
            <Checkbox.Item
              key={label}
              label={label}
              status={unitFeature[label] ? "checked" : "unchecked"}
              onPress={() => {
                console.log(unitFeature);
                setUnitFeature((prevUnitFeature) => ({
                  ...prevUnitFeature,
                  [label]: !prevUnitFeature[label],
                }));
              }}
            />
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.view}>
      <ScrollView>
        <Text variant="headlineMedium">Add a title for your place</Text>
        <TextInput
          label="Title"
          placeholder="Enter Title"
          onChangeText={(text) => setTitle(text)}
          value={title}
        />

        <Text variant="headlineMedium">Add a description</Text>
        <TextInput
          label="Description"
          placeholder="Enter Description"
          multiline
          numberOfLines={5}
          maxLength={100}
          onChangeText={(text) => setDescription(text)}
          value={description}
        />

        <Text variant="headlineMedium">Set price</Text>
        <TextInput
          label="Price"
          placeholder="Enter Price"
          left={<TextInput.Affix text="S$  " />}
          keyboardType="number-pad"
          onChangeText={(text) => handlePriceChange(text)}
          value={price}
        />

        <Text variant="headlineMedium">Unit Feature</Text>
        <Text variant="labelLarge"> Select the unit features provided by your accommodation </Text>
        <Card>
          <CheckboxGroup unitFeature={unitFeature} setUnitFeature={setUnitFeature} />
        </Card>
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
    marginHorizontal: 20
  },
  scroll: {
    flex: 1,
  },
  checkboxRowGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  checkboxColumnGroup: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  next: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
  },
});
