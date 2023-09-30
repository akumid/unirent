import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getUser } from "../graphql/queries";
import { getSavedAccommodationsById } from "../services/SavedAccommodationService";
import {
    Searchbar,
    Divider,
    Card,
    Text,
    ActivityIndicator,
  } from "react-native-paper";
import IAccommodation from "../model/IAccommodation";
import AccommodationCard from "../components/AccommodationCard";

const SavedScreen = (props: any) => {
    const insets = useSafeAreaInsets();
    const [saved, setSaved] = useState<any[]>();
    const [accommodationList, setAccommodationList] = useState<IAccommodation[]>();
    const [isLoading, setIsLoading] = useState(true);

    async function fetch() {
        const authUser = await Auth.currentAuthenticatedUser();
        const userId = authUser.attributes.sub;
        const userInfo = await API.graphql(
          graphqlOperation(getUser, {
            id: userId
          }),
        );
    
        const savedAccommodationId = userInfo.data.getUser.userSavedAccommodationId;
        console.log(savedAccommodationId);
        
    
        const savedAccommodationList = await getSavedAccommodationsById(savedAccommodationId);
        console.log("savedAccommodationList");
        console.log(savedAccommodationList);
        const accommodationList = savedAccommodationList.map((item) => {
            return item.accommodation
        })
    
        await downloadFromStorage(accommodationList);
        
        // // console.log(savedAccommodation.data.getUser.SavedAccommodation.Accommodations.items);
        // console.log("SavedScreen");
        // setAccommodationList(savedAccommodationList);
        // console.log(accommodationList)
    }

    async function downloadFromStorage(data: IAccommodation[]) {
        console.log("saved");
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

    useEffect(() => {
        fetch();
    }, [])

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
                <Text variant="headlineLarge" style={{marginLeft: 20, marginBottom: 10,}}>Saved</Text>
                <Divider />
                <ScrollView
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        paddingHorizontal: 15,
                    }}
                >
                <View style={{ marginVertical: 10, flexDirection: "column" }}>
                    {accommodationList.map((accommodation, index) => 
                        <AccommodationCard {...accommodation} key={index} isSaved={true} />
                    )}
                </View>
                </ScrollView>
            </View>
        )
}

export default SavedScreen;