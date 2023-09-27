import { useNavigation } from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import { Avatar, Divider, Text } from "react-native-paper";

import { onUpdateChatRoom } from "../graphql/subscriptions";

dayjs.extend(relativeTime);

export default function ChatRoom(props: any) {
  const navigation = useNavigation();
  const [chatRoom, setChatRoom] = useState(props.chatRoom);
  console.log(props);

  // subscribe to chatroom for updates
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onUpdateChatRoom, {
        filter: { id: { eq: props.chatRoom.id } },
      }),
    ).subscribe({
      next: ({ value }) => {
        setChatRoom((cr) => ({
          ...(cr || {}),
          ...value.data.onUpdateChatRoom,
        }));
      },
      error: (err) => console.warn(err),
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [props.chatRoom.id]);

  return (
    <Pressable
      onPress={() => navigation.navigate("Chat", { id: props.chatRoom.id })}
    >
      <View style={{ flex: 1, flexDirection: "row", marginVertical: 20 }}>
        <Avatar.Text size={50} label="User1" />
        <View style={{ flexDirection: "column", marginHorizontal: 15 }}>
          <Text variant="labelMedium" style={{ color: "gray" }}>
            {props.chatRoom.Users.items[0].user.name}
          </Text>
          <Text variant="titleMedium"> Clementi Avenue 441B </Text>
          <Text variant="labelMedium" style={{ color: "gray" }}>
            {chatRoom.LastMessage?.text}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row-reverse" }}>
          <Text variant="labelMedium" style={{ color: "gray" }}>
            {dayjs(chatRoom.LastMessage?.createdAt).fromNow(true)}
          </Text>
        </View>
      </View>
      <Divider />
    </Pressable>
  );
}
