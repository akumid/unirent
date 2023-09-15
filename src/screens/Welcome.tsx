import { useNavigation } from "@react-navigation/native";
import { Storage } from "aws-amplify";
import { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import {
  Searchbar,
  List,
  Divider,
  Card,
  Text,
  Button,
  ActivityIndicator,
} from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getAll } from "../api/AccommodationAPI";
import AccommodationCard from "../components/AccommodationCard";
import EPropertyType from "../model/EPropertyType";
import IAccommodation from "../model/IAccommodation";
import { LocationSearch } from "../services/LocationSearch";

export default function Welcome({ props }) {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [accommodationList, setAccommodationList] =
    useState<IAccommodation[]>();

  async function invokeAccommodationAPI() {
    const resp = await getAll();
    await downloadFromStorage(resp);
  }

  async function downloadFromStorage(data: IAccommodation[]) {
    // download first image from each listing and replace images array
    for (let i = 0; i < data.length; i++) {
      await Storage.get(data[i].images[0])
        .then((uri) => {
          data[i].images.length = 0; // clear array
          data[i].images.push(uri); // push first image uri
        })
        .catch((err) => console.log("Error downloading file:" + err));
    }
    setAccommodationList(data);
    setIsLoading(false);
  }
  console.log(accommodationList);

  useEffect(() => {
    invokeAccommodationAPI();
  }, []);

  // const accommodationList: IAccommodation[] = [
  //   {
  //     id: "0001",
  //     title: "Clementi Condominium",
  //     propertyType: EPropertyType.Condo,
  //     price: 1000,
  //     shortDescription: "short description",
  //     fullDescription: "full description full descriprtion",
  //     rented: false,
  //     unitFeature: [
  //       "Air-Conditioning",
  //       "Renovated",
  //       "Fridge",
  //       "Cooker Hob/Hood",
  //       "Washing Machine",
  //     ],
  //     availableDate: "2023-07-01",
  //     address: {
  //       country: "Singapore",
  //       postalCode: "520111",
  //       unitNo: "01-01",
  //       aptName: "Clementi Avenue Block 100",
  //     },
  //     images,
  //     listedBy: "user1",
  //   },
  //   {
  //     id: "0001",
  //     title: "Clementi Condominium",
  //     propertyType: EPropertyType.Condo,
  //     price: 1000,
  //     shortDescription: "short description",
  //     fullDescription: "full description full descriprtion",
  //     rented: false,
  //     unitFeature: [
  //       "Air-Conditioning",
  //       "Renovated",
  //       "Fridge",
  //       "Cooker Hob/Hood",
  //       "Washing Machine",
  //     ],
  //     availableDate: "2023-07-01",
  //     address: {
  //       country: "Singapore",
  //       postalCode: "520111",
  //       unitNo: "01-01",
  //       aptName: "Clementi Avenue Block 100",
  //     },
  //     images,
  //     listedBy: "user1",
  //   },
  // ];

  const insets = useSafeAreaInsets();

  if (isLoading) return <ActivityIndicator animating />;
  else
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          marginHorizontal: 20,
          // Paddings to handle safe area
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Searchbar
            placeholder="Search Location"
            onPressIn={() => {
              navigation.navigate("Search");
            }}
            onChangeText={(query) => {
              setSearch(query);
            }}
            value={search}
            style={{ width: "95%", marginBottom: 20 }}
          />
        </View>
        <Divider />
        <ScrollView>
          <View>
            <Card style={{ marginVertical: 20 }}>
              <Card.Content style={{ marginVertical: 10 }}>
                <Text variant="titleMedium">
                  You currently renting Unit Clementi 441B
                </Text>
                <Text variant="bodyMedium">$1000/ month</Text>
              </Card.Content>
              <Card.Content>
                <Card>
                  <Card.Content style={{ flexDirection: "row" }}>
                    <Text variant="bodyMedium" style={{ flex: 1 }}>
                      1 July 2023
                    </Text>
                    <Text variant="bodyMedium" style={{ flex: 1 }}>
                      Upcoming Payment
                    </Text>
                  </Card.Content>
                </Card>
              </Card.Content>
            </Card>
          </View>
          <View style={{ marginVertical: 10, flexDirection: "column" }}>
            <Text variant="titleLarge"> Today's Recommendations </Text>
            {accommodationList.map((accommodation, index) => {
              return <AccommodationCard {...accommodation} key={index} />;
            })}
          </View>
        </ScrollView>
      </View>
    );
}
