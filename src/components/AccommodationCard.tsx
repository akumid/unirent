import { useNavigation } from "@react-navigation/native";
import { API, Auth, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
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

import { createChatRoom, createUserChatRoom } from "../graphql/mutations";
import IAccommodation from "../model/IAccommodation";
import { getCommonChatRoomWithUser } from "../services/ChatRoomService";

dayjs.extend(relativeTime);

const AccommodationCard = (props: IAccommodation) => {
  const navigation = useNavigation();
  const [saved, setSaved] = useState(false);

  const onContact = async () => {
    // check if have chatroom with user
    const existingChatRoom = await getCommonChatRoomWithUser(props.userId);
    if (existingChatRoom) {
      console.log("Chatroom already exists");
      navigation.navigate("Chat", { id: existingChatRoom.chatRoom.id });
      return;
    }

    console.log("Creating new chatroom");
    const newChatRoomData = await API.graphql(
      graphqlOperation(createChatRoom, { input: {} }),
    );
    if (!newChatRoomData.data?.createChatRoom) {
      console.log("Error creating new chat room");
    }
    const newChatRoom = newChatRoomData.data?.createChatRoom;

    // add clicked user to chatroom
    await API.graphql(
      graphqlOperation(createUserChatRoom, {
        input: { chatRoomId: newChatRoom.id, userId: props.userId },
      }),
    );

    // add auth user to chatroom
    const authUser = await Auth.currentAuthenticatedUser();
    await API.graphql(
      graphqlOperation(createUserChatRoom, {
        input: { chatRoomId: newChatRoom.id, userId: authUser.attributes.sub },
      }),
    );

    navigation.navigate("Chat", { id: newChatRoom.id });
  };

  return (
    <Card
      style={{
        flex: 1,
        backgroundColor: "#F4EDF9",
        borderColor: "#10161F",
        borderWidth: 0.3,
        marginVertical: 15,
      }}
      onPress={() =>
        navigation.navigate("Accommodation Detail", { id: props.id })
      }
    >
      <Card.Cover source={{ uri: props.images[0] }} />

      <View style={{ flex: 1, flexDirection: "row" }}>
        <Card.Title
          title={props.title}
          subtitle={props.address?.aptName}
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
        <Text style={{ color: "#000" }}>S$ {props.price} / month • Available from 25 Aug </Text>
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
              Listed By {props.User.name}
            </Text>
            <Text style={{ fontSize: 12 }}>
              {dayjs(props.createdAt).fromNow(true)} ago
            </Text>
          </View>
        </View>
        <Button mode="outlined" onPress={() => onContact()}>
          Contact
        </Button>
      </Card.Content>
    </Card>
  );
};

export default AccommodationCard;
