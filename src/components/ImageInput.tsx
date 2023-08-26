import * as ImagePicker from "expo-image-picker";
import { StyleSheet, Alert, View, Image, Pressable } from "react-native";
import { IconButton } from "react-native-paper";

export default function ImageInput({ imageUri, onChangeImage }) {
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Delete the picture?", [
        { text: "Yes", onPress: () => onChangeImage() },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) onChangeImage(result.assets[0].uri);
    } catch (error) {
      console.log("error reading an iamge");
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.view}>
        {!imageUri && <IconButton icon="camera-plus-outline" size={40} />}
        {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  view: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    height: 100,
    width: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
