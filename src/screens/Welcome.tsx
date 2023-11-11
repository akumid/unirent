import { useIsFocused, useNavigation } from "@react-navigation/native";
import { API, Auth, Storage, graphqlOperation } from "aws-amplify";
import { useState, useEffect } from "react";
import { View, ScrollView, Pressable, StyleSheet } from "react-native";
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
import { getTodaysRecommendation } from "../services/AccommodationService";
import {
  getUser,
  savedAccommodationAccommodationsBySavedAccommodationId,
} from "../graphql/queries";
import {
  addSavedAccommodation,
  deleteSavedAccommodationById,
  getSavedAccommodationsById,
} from "../services/SavedAccommodationService";
import { createSavedAccommodation, updateUser } from "../graphql/mutations";
import { isWeb } from "../utils";

export default function Welcome({ props }) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [saved, setSaved] = useState<any[]>();
  // const [savedAccommodationIds, setSavedAccommodationIds] = useState([]);
  const [savedAccommodationId, setSavedAccommodationId] = useState('');
  const [accommodationList, setAccommodationList] =
    useState<IAccommodation[]>();
  const isFocused = useIsFocused();

  async function fetch() {
    // const resp = await getAll();
    const resp = await API.graphql(
      graphqlOperation(getTodaysRecommendation, {
        limit: 10,
      }),
    );
    await downloadFromStorage(resp.data?.listAccommodations?.items);
  }

  async function createNewSavedAccommodationId(userId) {
    // createSavedAccommodation
    const userSavedAccommodaiton = await API.graphql(
      graphqlOperation(createSavedAccommodation, {
        input: {savedAccommodationUserId: userId}
      }),
    );

    const updateUserInfo = await API.graphql(
      graphqlOperation(updateUser, {
        input: {id: userId, userSavedAccommodationId: userSavedAccommodaiton.data.createSavedAccommodation.id}
      }),
    );

    return updateUserInfo.data.updateUser.userSavedAccommodationId;

  }

  async function getSavedAccommodations() {
    const authUser = await Auth.currentAuthenticatedUser();
    const userId = authUser.attributes.sub;
    let userSavedAccoimmodationId = '';
    const userInfo = await API.graphql(
      graphqlOperation(getUser, {
        id: userId
      }),
  );
    

    if (userInfo.data.getUser.userSavedAccommodationId == null || userInfo.data.getUser.userSavedAccommodationId == undefined ) {
      const savedAccommId = await createNewSavedAccommodationId(authUser.attributes.sub);
      setSavedAccommodationId(savedAccommId);
      userSavedAccoimmodationId = savedAccommId;
    } else {
      userSavedAccoimmodationId = userInfo.data.getUser.userSavedAccommodationId;
      setSavedAccommodationId(userInfo.data.getUser.userSavedAccommodationId);
    }

    

    const savedAccommodationList = await getSavedAccommodationsById(userSavedAccoimmodationId);
    setSaved(savedAccommodationList);
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

  function returnAccommodationCard(
    accommodation: IAccommodation,
    index: number,
  ) {
    let savedId = "";
    if (saved !== undefined) {
      if (saved.length > 0) {
        savedId = saved.find((e) => {
          if (e.accommodationId === accommodation.id) {
            return e;
          } else {
            return "";
          }
        });
      }
    }

    return (
      <AccommodationCard
        {...accommodation}
        key={index}
        isSaved={savedId}
        savedAccommodationId={savedAccommodationId}
      />
    );
  }

  const searchBar = () => {
    return isWeb ? (
      <Pressable
      style={{ width: "90%", marginBottom: 20 }}          
        onPress={() => {
          navigation.navigate("Search");
        }}
      >
      <Searchbar
        placeholder="Search Location"
        onChangeText={(query) => {
          setSearch(query);
        }}
        value={search}
        style={{ width: "100%", marginBottom: 20 }}
      />
      </Pressable>
    ) : (
      <Searchbar
        placeholder="Search Location"
        onPressIn={() => {
          navigation.navigate("Search");
        }}
        onChangeText={(query) => {
          setSearch(query);
        }}
        value={search}
        style={{ width: "90%", marginBottom: 20 }}
      />
    )
  }

  // fetch all Listings
  useEffect(() => {
    // getSavedAccommodations();

    if (isFocused) {
      console.log("call again");
      getSavedAccommodations();
      fetch();
    }
  }, [props, isFocused]);

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
          {searchBar()}
        </View>
        <Divider />
        <ScrollView
          style={{
            flex: 1,
            flexDirection: "column",
            paddingHorizontal: 15,
          }}
        >

          <View style={{ marginVertical: 10, flexDirection: "column" }}>
            <Text variant="titleLarge" style={styles.blackFont}> Today's Recommendations </Text>
            {accommodationList.map((accommodation, index) =>
              returnAccommodationCard(accommodation, index),
            )}
          </View>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  blackFont: {
    color: 'black'
  }
});