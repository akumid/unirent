import { View } from "react-native"
import { Avatar, Divider, Text } from "react-native-paper"



const ChatChannel = (props: any) => {
    return (
        <View>
        <View style={{flex: 1, flexDirection: "row", marginVertical: 20}}>
            <Avatar.Text size={50} label="User1" /> 
            <View style={{flexDirection: "column", marginHorizontal: 15}}>
                <Text variant="labelMedium" style={{color: "gray"}}> User 1 </Text>
                <Text variant="titleMedium"> Clementi Avenue 441B </Text>
                <Text variant="labelMedium" style={{color: "gray"}}> latest messages from user 1 </Text>
            </View>
            <View style={{flex: 1, flexDirection: "row-reverse"}}>
                <Text variant="labelMedium" style={{color: "gray"}}> 01/01/2023 </Text>
            </View>
        </View>
        <Divider />
    </View>
    )
}

export default ChatChannel;