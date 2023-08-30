import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Image } from "react-native";
import { Appbar, Button, Text } from "react-native-paper";
import { SliderBox } from "react-native-image-slider-box";
import Feather from "@expo/vector-icons/Feather";
import * as ImagePicker from "expo-image-picker";

const PostAccommodationScreen = (props: any) => {
  const navigation = useNavigation();

  const [selectedImage, setSelectedImage] = useState([]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      allowsMultipleSelection: true,
      base64: false,
    });

    console.log(result);
    // const image = await fetchImageFromUri(result);
    // console.log(image);

    if (!result.canceled) {
      for (let i = 0; i < result.assets.length; i++) {
        setSelectedImage((selectedImage) => [
          ...selectedImage,
          result.assets[i].uri,
        ]);
      }
      console.log(selectedImage);
    }
  };

  const fetchImageFromUri = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  };

  return (
    <View style={{ flex: 1, flexDirection: "column", marginBottom: 20 }}>
      <Appbar.Header mode="small">
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content
          title="Post Accommodation"
          titleStyle={{ fontSize: 16, alignSelf: "center" }}
        />
        <Appbar.Action icon="" />
      </Appbar.Header>
      {selectedImage ? (
        <View style={{ flex: 1 }}>
          <SliderBox images={selectedImage} />
        </View>
      ) : (
        <></>
      )}
      <View style={{ justifyContent: "center", flex: 1, flexDirection: "row" }}>
        <Button onPress={pickImage} mode="contained" style={{ height: 40 }}>
          Open Image
        </Button>
      </View>
    </View>
  );
};

export default PostAccommodationScreen;
