import React, { useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView, Image, TouchableWithoutFeedback } from "react-native";
import { Searchbar, Card, Button, Text, Divider, Avatar } from "react-native-paper";
import AccommodationCard from "../components/AccommodationCard";


const SearchResultScreen = (props: any) => {

    const [search, setSearch] = useState('');

    return (
    <View style={{
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        top: '7%', 
        marginHorizontal: 20, 
        shadowRadius: 3, 
        shadowOpacity:  0.4, 
        shadowOffset: {width: 1, height: 1}
    }}>
        <View style={{alignItems: 'center'}}>
          <Searchbar 
            placeholder="Search Location"
            onPressIn={() => {console.warn("search again")}}
            onChangeText={(query) => { 
              setSearch(query); 
            }}
            value={search}
            style={{ width: '95%', marginBottom: 30, }}
          />
          <Divider />
        </View>

  
        <ScrollView>
          <AccommodationCard />
          <AccommodationCard />
          <AccommodationCard />
          <AccommodationCard />
        </ScrollView>
    </View>
    )
}



export default SearchResultScreen;