import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Appbar, Avatar, Button, Chip, Surface, Text, TextInput } from "react-native-paper";

const ChatScreen = (props: any) => {

    const navigation = useNavigation();
    
    const images = [
        "https://media.karousell.com/media/photos/products/2019/07/02/master_room_for_rent_at_clementi_1562052953_90c3c04e0_progressive",
        "https://cdn-cms.pgimgs.com/static/2021/06/958-Hougang-Street-91-Hougang-Punggol-Sengkang-Singapore.jpg",
        "https://media.karousell.com/media/photos/products/2020/7/28/shunfu_road_hdb_room_rental_1595903271_2f1e723b_progressive",
    ]

    return (
        <View style={{flex: 1}}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => {navigation.goBack()}} />
                <View style={{marginLeft: 20}}>
                    <Text variant="titleLarge" >
                        User 1
                    </Text>
                    <Text variant="labelMedium" style={{color: "gray"}}>
                        Active 40 minutes ago
                    </Text>
                </View>
            </Appbar.Header>
            <View style={{flex: 1, flexDirection: "column"}}>
                <Surface elevation={4} style={{height: 95, justifyContent: "center"}}>
                    <View style={{marginHorizontal: 20, flexDirection: "row"}}>
                        <Image source={{uri: images[0]}} style={{height: 65, width: 65, borderRadius: 15}} />
                        <View>
                            <Text variant="labelLarge" style={{marginLeft: 10}}> Clementi Avenue 441B </Text>
                            <Text variant="labelMedium" style={{marginLeft: 10, color: "gray"}}> $1000 /month </Text>
                            <Button mode="contained" style={{marginLeft: 10, marginTop: 5,}} >
                                <Text variant="labelSmall" style={{color: "white"}}>
                                    Rent Now
                                </Text>
                            </Button>
                        </View>
                    </View>
                </Surface>
                <ScrollView style={{flex: 1, flexDirection: "column", marginHorizontal: 20, marginVertical: 15}} contentContainerStyle={{  }} >
                    <View style={{ flexDirection: "row", marginVertical: 10}}>
                        <Avatar.Text size={35} label="User1"/>
                        <Surface style={{
                                padding: 8,
                                alignItems: 'center',
                                justifyContent: 'center',
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
                    <Surface style={{
                            padding : 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25,
                            backgroundColor: "#f0d3ff",
                            marginLeft: 40,
                            marginVertical: 10
                        }} 
                        mode="flat"
                        elevation={4}
                    >
                        <Text>Can i know there is how many bathrooms in the house ? i would like to know</Text>
                    </Surface>

                </ScrollView>
                
                <View style={{flex: 1, flexDirection: "column-reverse"}}>
                    <TextInput
                        width
                        placeholder="Type here..."
                        right={<TextInput.Icon icon="send" />}
                    />
                </View>

            </View>
        </View>
    )
}

export default ChatScreen;