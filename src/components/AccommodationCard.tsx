import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import { Card, Button, Text, Divider, Avatar, IconButton } from "react-native-paper";
import IAccommodation from "../model/IAccommodation";

const AccommodationCard = (props: IAccommodation) => {
  const navigation = useNavigation();
  const [saved, setSaved] = useState(false);

  console.log(props);

  // const images = [
  //   "https://media.karousell.com/media/photos/products/2019/07/02/master_room_for_rent_at_clementi_1562052953_90c3c04e0_progressive",
  //   "https://cdn-cms.pgimgs.com/static/2021/06/958-Hougang-Street-91-Hougang-Punggol-Sengkang-Singapore.jpg",
  //   "https://media.karousell.com/media/photos/products/2020/7/28/shunfu_road_hdb_room_rental_1595903271_2f1e723b_progressive",
  // ];

  return (
    <Card
      style={{
        flex: 1,
        backgroundColor: "#F4EDF9",
        borderColor: "#10161F",
        borderWidth: 0.3,
        marginVertical: 15,
      }}
      onPress={() => navigation.navigate("Accommodation Detail")}
    >
      {/* <SliderBox style={{ height: 250 }} images={images} /> */}

      <Card.Cover source={{ uri: props.images[0] }} />

      <View style={{flex: 1, flexDirection: "row" }}>
        <Card.Title
          title={props.title}
          subtitle={props.address.aptName}
          subtitleNumberOfLines={3}
          subtitleVariant="labelMedium"
          subtitleStyle={{ color: "gray" }}
          style={{ flex: 1 }}
        />
        <IconButton
          icon={saved ? "heart" : "heart-outline"}
          size={25}
          style={{
            marginVertical: 20,
            marginHorizontal: 20,
          }}
          onPress={() => {
            console.warn("Save accommodation"); 
            setSaved(!saved);
          }}
        />
      </View>
      <Divider />
      <Card.Content style={{ marginVertical: 10 }}>
        <Text>{props.price} / month • Available from 25 Aug </Text>
      </Card.Content>
      <Divider />
      <Card.Content style={{ marginVertical: 10 }}>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Avatar.Text size={50} label="User" />
          <View
            style={{
              justifyContent: "center",
              marginHorizontal: 10,
              flexDirection: "column",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              Listed By User 1
            </Text>
            <Text style={{ fontSize: 14 }}> {props.shortDescription} </Text>
          </View>
        </View>
        <Button
          mode="outlined"
          onPress={() => console.warn("navigate to message screen")}
        >
          Contact
        </Button>
      </Card.Content>
    </Card>
  );
};

export default AccommodationCard;
