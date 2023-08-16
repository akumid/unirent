import React, { useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import { Searchbar, Card, Button, Text, Divider, Avatar } from "react-native-paper";
import Swiper from 'react-native-swiper'
import Feather from 'react-native-vector-icons/Feather';


const SearchResultScreen = (props: any) => {

    const [search, setSearch] = useState('');
    const images = [
        'https://media.karousell.com/media/photos/products/2019/07/02/master_room_for_rent_at_clementi_1562052953_90c3c04e0_progressive',
        'https://media.karousell.com/media/photos/products/2019/07/02/master_room_for_rent_at_clementi_1562052953_90c3c04e0_progressive',
        'https://media.karousell.com/media/photos/products/2019/07/02/master_room_for_rent_at_clementi_1562052953_90c3c04e0_progressive'
    ]

    const subtitle = () => {
        return (
            <View style={{flexDirection: 'column'}}>
                <Text>
                    441B Clementi Avenue 3
                </Text>
                <Text>
                    subtitle 1
                </Text>
            </View>
        );
    }

    return (
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', top: '7%', marginHorizontal: 20}}>
        <View style={{alignItems: 'center'}}>
          <Searchbar 
            placeholder="Search Location"
            onPressIn={() => {console.warn("search again")}}
            onChangeText={(query) => { 
              setSearch(query); 
            }}
            value={search}
            style={{ width: '95%', marginBottom: 50, }}
          />
        </View>

  
        <ScrollView>
          <Card style={{flex: 1, backgroundColor: '#F4EDF9', borderColor: '#10161F', borderWidth: 0.3}} >
            <Swiper style={{height: 250, marginTop: 5}} >
                <View>
                    <Image source={{uri: images[0]}} style={{width: '100%', height: '100%'}} />
                </View>
                <View>
                    <Image source={{uri: images[0]}} style={{width: '100%', height: '100%'}} />
                </View>
                <View>
                    <Image source={{uri: images[0]}} style={{width: '100%', height: '100%'}} />
                </View>
            </Swiper>

            <View style={{flexDirection : 'row'}}>
                <Card.Title title="Clementi Condominium" subtitle="441B Clementi Avenue" subtitleNumberOfLines={3} subtitleVariant="labelMedium" subtitleStyle={{color: 'gray'}} style={{flex: 1}}/>
                <Button mode="outlined" style={{justifyContent: 'center', alignItems: 'center', height: 50, width: 'auto', marginVertical: 20, marginHorizontal: 20,}} onPress={() => console.warn("Save accommodation")}> 
                    <Feather name='heart' size={20} /> 
                </Button>
            </View>
            <Divider />
            <Card.Content style={{ marginVertical: 10}}>
                <Text>$1000 / month • Available from 25 Aug  </Text>
            </Card.Content>
            <Divider />
            <Card.Content style={{marginVertical: 10}}>
                <View style={{flexDirection : 'row', marginBottom: 10}}>
                    <Avatar.Text size={50} label="User" />
                    <View style={{justifyContent: 'center', marginHorizontal: 10, flexDirection: 'column'}}>
                        <Text style={{fontSize: 12, fontWeight: 'bold'}}> Listed By User 1 </Text>
                        <Text style={{fontSize: 14,}}> short description of the room </Text>
                    </View>
                </View>
                <Button mode="outlined" onPress={() => console.warn("navigate to message screen")}> Contact </Button>

            </Card.Content>

          </Card>
        </ScrollView>
    </View>
    )
}



export default SearchResultScreen;