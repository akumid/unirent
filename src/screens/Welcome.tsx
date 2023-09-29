import { useNavigation } from "@react-navigation/native";
import { API, Storage, graphqlOperation } from "aws-amplify";
import * as Location from "expo-location";
import { getDistance } from "geolib";
import { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import {
  Searchbar,
  Divider,
  Card,
  Text,
  ActivityIndicator,
} from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AccommodationCard from "../components/AccommodationCard";
import IAccommodation from "../model/IAccommodation";
import { fetchAll } from "../services/AccommodationService";

export default function Welcome({ props }) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [accommodationList, setAccommodationList] =
    useState<IAccommodation[]>();
  const [permission, setPermission] = useState(false);

  async function fetch() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      setIsLoading(false);
      return;
    }
    setPermission(true);

    // fetch all Listings
    const resp = await API.graphql(
      graphqlOperation(fetchAll, {
        limit: 10,
      }),
    );

    const recommendations = await getTodaysRecommendation(
      resp.data?.listAccommodations?.items,
    );

    await downloadFromStorage(recommendations);
  }

  async function downloadFromStorage(data: IAccommodation[]) {
    console.log(data);
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

  async function getTodaysRecommendation(data: IAccommodation[]) {
    const location = await Location.getCurrentPositionAsync({});
    const newArray = [];
    for (let i = 0; i < data.length; i++) {
      const address = JSON.parse(data[i].address);

      const dist = getDistance(location.coords, address.geo);
      if (dist <= 2000) {
        newArray.push(data[i]); // keep if within 2km
      }

      if (newArray.length === 5) {
        break; // only provide max 5 recommendations
      }
    }
    return newArray;
  }

  useEffect(() => {
    fetch();
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
  // ];

  if (isLoading) return <ActivityIndicator animating />;
  else
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
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
        <ScrollView
          style={{
            flex: 1,
            flexDirection: "column",
            paddingHorizontal: 15,
          }}
        >
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

            {!permission ? (
              <Text variant="bodyLarge" style={{ marginTop: 10 }}>
                Allow permission to access device location to receive
                recommendations
              </Text>
            ) : (
              <>
                {accommodationList.map((accommodation, index) => {
                  return <AccommodationCard {...accommodation} key={index} />;
                })}
              </>
            )}
          </View>
        </ScrollView>
      </View>
    );
}
