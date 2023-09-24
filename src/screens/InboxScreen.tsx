import { ScrollView, View } from "react-native";
import { Avatar, Divider, Text } from "react-native-paper";

import ChatRoom from "../components/ChatRoom";

export default function InboxScreen(props: any) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        top: "5%",
        marginHorizontal: 20,
      }}
    >
      <View>
        <Text variant="displaySmall"> Inbox </Text>
        <Divider style={{ marginTop: 10 }} />
      </View>
      {/* <View style={{flex: 1,}}>
                <Text variant="titleMedium" style={{}}> You have no unread messages </Text>
                <Text variant="bodyMedium" style={{ color: "gray"}}> When you contact a host, you will see your messages here</Text>
            </View> */}
      <ScrollView
        style={{ flex: 1, flexDirection: "column", marginBottom: 25 }}
      >
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
      </ScrollView>
    </View>
  );
}
