import { View, ScrollView } from "react-native";

import ImageInput from "../components/ImageInput";

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  return (
    <ScrollView horizontal>
      <View style={{ flexDirection: "row" }}>
        {imageUris.map((uri) => (
          <View key={uri} style={{ marginRight: 10 }}>
            <ImageInput
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          </View>
        ))}
        <ImageInput
          onChangeImage={(uri) => onAddImage(uri)}
          imageUri={undefined}
        />
      </View>
    </ScrollView>
  );
}
