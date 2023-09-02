import { useState } from "react";
import { View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AccommodationCard from "../components/AccommodationCard";
import IAccommodation from "../model/IAccommodation";
import EPropertyType from "../model/EPropertyType";
import { Divider, Searchbar } from "react-native-paper";

const SearchResultScreen = (props: any) => {
  const [search, setSearch] = useState("");
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

  ]

  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        marginHorizontal: 20,
        shadowRadius: 3,
        shadowOpacity: 0.4,
        shadowOffset: { width: 1, height: 1 },
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
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
        {
          accommodationList.map((accommodation) => {
            return <AccommodationCard {...accommodation}/>
          })
        }
        {/* <AccommodationCard />
        <AccommodationCard />
        <AccommodationCard /> */}
      </ScrollView>
    </View>
  );
};

export default SearchResultScreen;
