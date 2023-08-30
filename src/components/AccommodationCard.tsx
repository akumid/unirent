import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Card, Button, Text, Divider, Avatar } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";

const AccommodationCard = (props: any) => {
  const navigation = useNavigation();

  const images = [
    "https://media.karousell.com/media/photos/products/2019/07/02/master_room_for_rent_at_clementi_1562052953_90c3c04e0_progressive",
    "https://cdn-cms.pgimgs.com/static/2021/06/958-Hougang-Street-91-Hougang-Punggol-Sengkang-Singapore.jpg",
    "https://media.karousell.com/media/photos/products/2020/7/28/shunfu_road_hdb_room_rental_1595903271_2f1e723b_progressive",
  ];

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

      <Card.Cover source={{ uri: images[0] }} />

      <View style={{ flexDirection: "row" }}>
        <Card.Title
          title="Clementi Condominium"
          subtitle="441B Clementi Avenue"
          subtitleNumberOfLines={3}
          subtitleVariant="labelMedium"
          subtitleStyle={{ color: "gray" }}
          style={{ flex: 1 }}
        />
        <Button
          mode="outlined"
          style={{
            zIndex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            width: "auto",
            marginVertical: 20,
            marginHorizontal: 20,
          }}
          onPress={() => console.warn("Save accommodation")}
        >
          <Feather name="heart" size={20} />
        </Button>
      </View>
      <Divider />
      <Card.Content style={{ marginVertical: 10 }}>
        <Text>$1000 / month • Available from 25 Aug </Text>
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
            <Text style={{ fontSize: 14 }}>short description of the room</Text>
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
