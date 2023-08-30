import React from "react";
import { ScrollView, View } from "react-native";
import { Appbar, Text, Chip, Divider, Card, Avatar, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Feather from 'react-native-vector-icons/Feather';
import { SliderBox } from "react-native-image-slider-box";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const AccommodationDetailScreen = (props: any) => {

    const navigation = useNavigation();

    const images = [
        'https://media.karousell.com/media/photos/products/2019/07/02/master_room_for_rent_at_clementi_1562052953_90c3c04e0_progressive',
        'https://cdn-cms.pgimgs.com/static/2021/06/958-Hougang-Street-91-Hougang-Punggol-Sengkang-Singapore.jpg',
        'https://media.karousell.com/media/photos/products/2020/7/28/shunfu_road_hdb_room_rental_1595903271_2f1e723b_progressive'
    ]

    return (
        <View style={{flex: 1, flexDirection: 'column', marginBottom: 20}}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => {navigation.goBack()}} />
                <View style={{flexDirection: 'row-reverse', flex: 1}}>
                    <Appbar.Action icon={() => <Feather name='heart' size={20} /> } onPress={() => {console.warn("Save accommodation")}} />
                </View>
            </Appbar.Header>
            <ScrollView>
                <View style={{marginHorizontal: 10, marginVertical: 10}}>
                    <Text variant='headlineMedium' style={{fontWeight: 'bold'}}> Clementi Condominium </Text>
                    {/* <Text variant='titleMedium'> 441B Clementi Avenue </Text> */}
                </View>
                <SliderBox images={images} style={{height: 310}} />
                <View style={{marginHorizontal: 10, marginTop: 10}}>
                    <Text variant='titleLarge' style={{fontWeight: 'bold'}}> $1000 / month</Text>
                    <View style={{flexDirection: 'row', flex: 1, marginVertical: 10}}>
                        <Chip style={{marginRight: 10, alignSelf: 'flex-start'}}> Condo </Chip>
                        <Chip style={{marginRight: 10, alignSelf: 'flex-start'}}> Available Now </Chip>
                    </View>
                </View>
                <View style={{marginHorizontal: 10, marginVertical: 10}}>
                    <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
                        <Text variant='bodyMedium'> Available Date </Text>
                        <Text variant='bodyMedium'>{`\u2022 `}</Text>
                        <Text variant='bodyMedium'>10 Aug 2023 </Text>
                    </View>
                    
                    <Text variant='bodyMedium'> 441B Clementi Avenue </Text>
                    <Text variant='bodyMedium'> Clementi Road 1 </Text>
                </View>
                <Divider />
                <View style={{marginHorizontal: 10, marginVertical: 15,}}>
                    <Text variant='titleLarge' style={{fontWeight: 'bold', marginBottom: 10}}> Description </Text>
                    <Text variant='bodyMedium' style={{fontWeight: 'bold', marginBottom: 10}}> short description </Text>
                    <Text variant='bodyMedium' >
                        CTwo Common Rooms for rent

                        ✅ This is a 4-room HDB with 3 Bedrooms + 2 Bathroom + Utility Room + closed kitchen
                        ✅ Newly nicely renovated
                        ✅ Landlord is single lady, professional. Looking for single ladies to stay in the common rooms.
                        ✅ The room comes with built-in wardrobe, aircon and single bed. Study table and chair can be requested.
                        ✅ Rent inclusive of WiFi and utility
                        ✅ Prefer no cooking, but negotiable
                        ✅ Next to Clementi MRT station and Clementi Mall
                                                
                    </Text>
                </View>
                <Divider />
                <View style={{marginHorizontal: 10, marginVertical: 10,}}>
                    <Text variant='titleLarge' style={{fontWeight: 'bold', marginBottom: 10}}> Unit Features </Text>
                    <Text variant='bodyMedium'>{`\u2022 Air-Conditioning `}</Text>
                    <Text variant='bodyMedium'>{`\u2022 Renovated `}</Text>
                    <Text variant='bodyMedium'>{`\u2022 Fridge `}</Text>
                    <Text variant='bodyMedium'>{`\u2022 Cooker Hob/Hood `}</Text>
                    <Text variant='bodyMedium'>{`\u2022 Washing Machine `}</Text>
                </View>
                <Divider />
                <View style={{marginHorizontal: 10, marginVertical: 15,}}>
                    <Text variant='titleLarge' style={{fontWeight: 'bold', marginBottom: 10}}> Location </Text>
                    <MapView
                    provider={PROVIDER_GOOGLE}
                        style={{height: 250, marginVertical: 10 }}
                        initialRegion={{
                            latitude: 1.3154961,
                            longitude: 103.7650556,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                    <Marker 
                        coordinate = {{latitude: 1.3154961,longitude: 103.7650556}}
                    />
                    </MapView>
                    <Text variant='titleMedium' style={{fontWeight: 'bold',}}> 441B Clementi Avenue </Text>
                    <Text variant='bodyMedium' style={{}}> Singapore 149598 </Text>
                    <Text variant='bodyMedium' style={{}}> Clementi / West </Text>
                </View>
                <Divider />
                <View style={{marginHorizontal: 20, marginVertical: 15,}}>
                    <View style={{flex: 1, flexDirection: 'row', marginBottom: 15}}>
                        <Avatar.Text size={50} label="User" />
                        <View style={{justifyContent: 'center', marginHorizontal: 10, flexDirection: 'column'}}>
                            <Text style={{fontSize: 12, fontWeight: 'bold'}}> Listed By User 1 </Text>
                            <Text style={{fontSize: 14,}}> Joined 2 years ago </Text>
                        </View>
                    </View>

                    <Button mode="outlined" onPress={() => console.warn("navigate to message screen")}> Contact </Button>
                </View>

                
            </ScrollView>

        </View>
    )
}

export default AccommodationDetailScreen;