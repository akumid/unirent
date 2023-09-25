import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, ScrollView } from "react-native";
import {
  Appbar,
  Avatar,
  Button,
  Chip,
  Surface,
  Text,
  TextInput,
} from "react-native-paper";

export default function ChatScreen({ navigation, route }) {
  // const navigation = useNavigation();
  const props = route.params.props;
  const chatroomID = route.params.id;

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
            <Avatar.Text size={35} label="User1" />
            <Surface
              style={{
                padding: 8,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                marginLeft: 10,
                marginRight: 30,
              }}
              mode="flat"
              elevation={4}
            >
              <Text>Hi Nice to meet you !</Text>
            </Surface>
          </View>
          {/* <View style={{ flexDirection: "row-reverse", marginVertical: 10}}>
                        <Chip style={{marginLeft: 10, backgroundColor: "#f0d3ff",}} mode="flat" >
                            <Text>
                                Can i know there is how many bathrooms in the house ? i would like to know
                            </Text>
                             
                        </Chip>
                    </View> */}
          <Surface
            style={{
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
              backgroundColor: "#f0d3ff",
              marginLeft: 40,
              marginVertical: 10,
            }}
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
            right={<TextInput.Icon icon="send" />}
          />
        </View>
      </View>
    </View>
  );
}
