import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Button as PaperButton, Text, TextInput } from "react-native-paper";

import { useHostStore } from "../store/host";

export default function HostingStep3({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(undefined);

  const handlePriceChange = (text) => {
    const number = text.replace(/[^0-9]/g, "");
    setPrice(number);
  };

  // initialize zustand store methods
  const updateTitle = useHostStore((state) => state.updateTitle);
  const updateDescription = useHostStore((state) => state.updateDescription);
  const updatePrice = useHostStore((state) => state.updatePrice);

  const onNavigate = () => {
    // update zustand store
    updateTitle(title);
    updateDescription(description);
    updatePrice(price);
    navigation.navigate("HostingStep4");
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
  next: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
  },
});
