import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import {
  Card,
  Button,
  Text,
  Divider,
  Avatar,
  IconButton,
} from "react-native-paper";

import IAccommodation from "../model/IAccommodation";

const AccommodationCard = (props: IAccommodation) => {
  const navigation = useNavigation();
  const [saved, setSaved] = useState(false);

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
      <Card.Cover source={{ uri: props.images[0] }} />

      <View style={{ flex: 1, flexDirection: "row" }}>
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
        <Text>S$ {props.price} / month • Available from 25 Aug </Text>
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
              Listed By {props.listedBy}
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
