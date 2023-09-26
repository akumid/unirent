import { Auth, API, graphqlOperation } from "aws-amplify";
import { useState } from "react";
import { View, Image, ScrollView, StyleSheet } from "react-native";
import { Appbar, Button, Surface, Text, TextInput } from "react-native-paper";

import { createMessage, updateChatRoom } from "../graphql/mutations";

export default function ChatScreen({ navigation, route }) {
  const props = route.params.props;
  const chatroomID = route.params.id;

  const [text, setText] = useState("");

  const onSend = async () => {
    const authUser = await Auth.currentAuthenticatedUser();

    const newMessage = {
      chatRoomId: chatroomID,
      text,
      userId: authUser.attributes.sub,
    };
    const newMessageData = await API.graphql(
      graphqlOperation(createMessage, { input: newMessage }),
    );

    setText("");

    // set the new message as LastMessage of the ChatRoom
    await API.graphql(
      graphqlOperation(updateChatRoom, {
        input: {
          chatRoomLastMessageId: newMessageData.data.createMessage.id,
          id: chatroomID,
        },
      }),
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text variant="titleLarge">props.listedBy</Text>
          <Text variant="labelMedium" style={{ color: "gray" }}>
            Active 40 minutes ago
          </Text>
        </View>
      </Appbar.Header>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Surface elevation={4} style={{ height: 95, justifyContent: "center" }}>
          <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
            {/* <Image
              source={{ uri: props.images[0] }}
              style={{ height: 65, width: 65, borderRadius: 15 }}
            /> */}
            <View>
              <Text variant="labelLarge" style={{ marginLeft: 10 }}>
                props.title
              </Text>
              <Text
                variant="labelMedium"
                style={{ marginLeft: 10, color: "gray" }}
              >
                S$ props.price / month
              </Text>
              <Button mode="contained" style={{ marginLeft: 10, marginTop: 5 }}>
                <Text variant="labelSmall" style={{ color: "white" }}>
                  Rent Now
                </Text>
              </Button>
            </View>
          </View>
        </Surface>

        <ScrollView
          style={{
            flex: 1,
            flexDirection: "column",
            marginHorizontal: 20,
            marginVertical: 15,
          }}
          contentContainerStyle={{}}
        >
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <Surface
              style={[
                styles.surface,
                {
                  alignSelf: "flex-start",
                },
              ]}
              mode="flat"
              elevation={4}
            >
              <Text>Hi Nice to meet you !</Text>
            </Surface>
          </View>

          <Surface
            style={[
              styles.surface,
              {
                backgroundColor: "#6a1b9a",
                alignSelf: "flex-end",
              },
            ]}
            mode="flat"
            elevation={4}
          >
            <Text>
              Can i know there is how many bathrooms in the house ? i would like
              to know
            </Text>
          </Surface>
        </ScrollView>

        <View style={{ flex: 1, flexDirection: "column-reverse" }}>
          <TextInput
            placeholder="Type here..."
            right={<TextInput.Icon icon="send" onPress={onSend} />}
            value={text}
            onChangeText={setText}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  surface: {
    padding: 10,
    borderRadius: 25,
    maxWidth: "80%",
  },
});
