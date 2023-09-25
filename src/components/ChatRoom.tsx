import { useNavigation } from "@react-navigation/native";
import { Pressable, View } from "react-native";
import { Avatar, Divider, Text } from "react-native-paper";

export default function ChatRoom(props: any) {
  const navigation = useNavigation();

  console.log(props);

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
            {props.chatRoom.LastMessage}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row-reverse" }}>
          <Text variant="labelMedium" style={{ color: "gray" }}>
            {props.chatRoom.updatedAt}
          </Text>
        </View>
      </View>
      <Divider />
    </Pressable>
  );
}
