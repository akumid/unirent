import React from "react";
import { View } from "react-native";
import { Card, Divider, Text } from "react-native-paper";
import IAccommodation from "../model/IAccommodation";
import { useNavigation } from "@react-navigation/native";

const ListingCard = (props: any) => {
    const images = [
        "https://stay.greatworld.com.sg/wp-content/uploads/2022/08/serviced-apartments-singapore.jpg-scaled.jpg",
    ]
    return (
        <Card
        style={{
            backgroundColor: "#F4EDF9",
            borderColor: "#10161F",
            borderWidth: 0.3,
            marginVertical: 15,
        }}
        onPress={() => {console.warn("navigate to detail and edit screen")}}
        key={props.id}
        >
        <Card.Cover source={{ uri: images[0] }} />

        <View style={{ flex: 1, flexDirection: "row" }}>
            <Card.Title
            title={props.title}
            subtitle={props.address?.aptName}
            subtitleVariant="labelMedium"
            subtitleStyle={{ color: "gray" }}
            style={{ flex: 1 }}
            />
        </View>
        <Divider />
        <Card.Content style={{ marginVertical: 10 }}>
            <Text>
                $ {props.price} / month • Available From {props.availableDate}
            </Text>
        </Card.Content>
        <Divider />
    </Card>
  );
};

export default ListingCard;
