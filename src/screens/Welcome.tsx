import { Searchbar, List, Divider, Card, Text, Button } from 'react-native-paper';
import { useState, useEffect } from "react";
import { View } from 'react-native';
import { LocationSearch } from "../services/LocationSearch";
import { StyleSheet, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AccommodationCard from '../components/AccommodationCard';
import EPropertyType from '../model/EPropertyType';
import IAccommodation from '../model/IAccommodation';
import { ScrollView } from 'react-native';

export default function Welcome({ props }) {

  const navigation = useNavigation();

  const [search, setSearch] = useState('');

  const images = [
    "https://media.karousell.com/media/photos/products/2019/07/02/master_room_for_rent_at_clementi_1562052953_90c3c04e0_progressive",
    "https://cdn-cms.pgimgs.com/static/2021/06/958-Hougang-Street-91-Hougang-Punggol-Sengkang-Singapore.jpg",
    "https://media.karousell.com/media/photos/products/2020/7/28/shunfu_road_hdb_room_rental_1595903271_2f1e723b_progressive",
  ]

  const accommodationList: IAccommodation[] = [
    {
      id: '0001',
      title: "Clementi Condominium",
      propertyType: EPropertyType.Condo,
      price: 1000,
      shortDescription: "short description",
      fullDescription: "full description full descriprtion",
      rented: false,
      unitFeature: ["Air-Conditioning", "Renovated", "Fridge", "Cooker Hob/Hood", "Washing Machine"],
      availableDate: "2023-07-01",
      address: {
        country: "Singapore",
        postalCode: "520111",
        unitNo: "01-01",
        aptName: "Clementi Avenue Block 100"
      },
      images: images,
      listedBy: "user1"
    },
    {
      id: '0001',
      title: "Clementi Condominium",
      propertyType: EPropertyType.Condo,
      price: 1000,
      shortDescription: "short description",
      fullDescription: "full description full descriprtion",
      rented: false,
      unitFeature: ["Air-Conditioning", "Renovated", "Fridge", "Cooker Hob/Hood", "Washing Machine"],
      availableDate: "2023-07-01",
      address: {
        country: "Singapore",
        postalCode: "520111",
        unitNo: "01-01",
        aptName: "Clementi Avenue Block 100"
      },
      images: images,
      listedBy: "user1"
    },

  ]

  return (
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', top: '7%', marginHorizontal: 20}}>
      <View style={{alignItems: 'center'}}>
        <Searchbar 
          placeholder="Search Location"
          onPressIn={() => {navigation.navigate("Search")}}
          onChangeText={(query) => { 
            setSearch(query); 
          }}
          value={search}
          style={{ width: '95%', marginBottom: 20, }}
        />
        
      </View>
      <Divider />
      <ScrollView style={{marginBottom: 25}}>
      <View>
        <Card style={{marginVertical: 20}} >
          <Card.Content style={{marginVertical: 10}}>
            <Text variant="titleMedium">You currently renting Unit Clementi 441B</Text>
            <Text variant="bodyMedium">$1000/ month</Text>
          </Card.Content>
          <Card.Content>
            <Card>
              <Card.Content style={{flexDirection: "row"}}>
                <Text variant="bodyMedium" style={{flex: 1}}> 1 July 2023 </Text>
                <Text variant="bodyMedium" style={{flex: 1}}> Upcoming Payment </Text>
              </Card.Content>
            </Card>
          </Card.Content>
        </Card>
      </View>
      <View style={{marginVertical: 10, flexDirection: "column"}}>
        <Text variant="titleLarge"> Today's Recommendations </Text>
        {
          accommodationList.map((accommodation) => {
            return <AccommodationCard {...accommodation}/>
          })
        }
      </View>
      </ScrollView>
    </View>
    
  );
}
