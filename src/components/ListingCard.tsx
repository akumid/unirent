import React from "react";
import { View } from "react-native";
import { Card, Divider, Text } from "react-native-paper";

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
            title={"Best HDB in the world"}
            subtitle={"Very cool apartment"}
            subtitleVariant="labelMedium"
            subtitleStyle={{ color: "gray" }}
            style={{ flex: 1 }}
            />
        </View>
        <Divider />
        <Card.Content style={{ marginVertical: 10 }}>
            <Text>
                $ 1000 / month • Available From 2023-10-2
            </Text>
        </Card.Content>
        <Divider />
    </Card>
    )
}

export default ListingCard;