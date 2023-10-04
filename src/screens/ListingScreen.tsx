import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Avatar, Card, Divider, IconButton, Text } from "react-native-paper";
import ListingCard from "../components/ListingCard";
import { ScrollView } from "react-native-gesture-handler";

const ListingScreen = (props: any) => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <ScrollView>
        <ListingCard />
        <ListingCard />
        <ListingCard />
        {/* If no listing available */}
        {/* <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
                    <Avatar.Icon size={80} icon="emoticon-sad" color='#f1e9e9' style={{backgroundColor: 'white'}} />
                </View>
                <Text style={{verticalAlign: 'middle'}}>
                    You do not have any accommodation listing right now 
                </Text> */}
      </ScrollView>
    </View>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
  },
});
