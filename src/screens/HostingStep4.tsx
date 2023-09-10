import { useEffect, useRef, useState } from "react";
import { StyleSheet, View, ScrollView, Image, Dimensions } from "react-native";
import {
  ActivityIndicator,
  Divider,
  IconButton,
  Button as PaperButton,
  Text,
} from "react-native-paper";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import { publish } from "../api/AccommodationAPI";
import alert from "../components/Alert";
import Map from "../components/Map";
import EPropertyType from "../model/EPropertyType";
import IAccommodation from "../model/IAccommodation";
import { getGeocode } from "../services/GoogleMaps";
import { useHostStore } from "../store/host";
import { isWeb } from "../utils";

const { width, height } = Dimensions.get("window");

function CarouselImages({ images }) {
  return (
    <Image
      resizeMode="contain"
      style={{ height: "100%", width }}
      source={{ uri: images }}
    />
  );
}

interface IGeo {
  lat: number;
  lng: number;
}

export default function HostingStep4({ navigation }) {
  const hostStore = useHostStore();
  const ref = useRef<ICarouselInstance>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [geocode, setGeocode] = useState<IGeo>();

  async function invokeGoogleMaps(address: object) {
    const resp = await getGeocode(address);
    console.log(resp);
    setGeocode(resp);
    setIsLoading(false);
  }

  useEffect(() => {
    invokeGoogleMaps(hostStore.address);
  }, []);

  const onPublish = async () => {
    // TODO: trigger API to backend
    console.log(hostStore);

    const request: IAccommodation = {
      id: null,
      title: hostStore.title,
      address: hostStore.address,
      propertyType: EPropertyType[hostStore.propertyType],
      images: hostStore.images,
      fullDescription: hostStore.description,
      price: hostStore.price,
      shortDescription: hostStore.description,
      rented: false,
      availableDate: "2024-01-01",
      listedBy: "test",
    };

    const resp = await publish(request);
    if (resp.success) {
      alert("New Listing", "Publish successful!", [
        { text: "OK", onPress: () => navigation.navigate("Hosting") },
      ]);
    } else {
      alert("New Listing", "Publish unsuccessful!", [
        {
          text: "Please try again later",
          onPress: () => navigation.navigate("Hosting"),
        },
      ]);
    }
  };

  if (isLoading) return <ActivityIndicator animating />;
  else
    return (
      <View style={styles.view}>
        <ScrollView style={{ flex: 1 }}>
          {isWeb ? (
            <View style={styles.webContainer}>
              <Carousel
                ref={ref}
                loop
                autoPlay={false}
                width={width}
                height={width / 2}
                style={{ width: "100%" }}
                data={hostStore.images}
                pagingEnabled
                renderItem={({ item }) => <CarouselImages images={item} />}
              />
              <View style={styles.webButtons}>
                <IconButton
                  icon="menu-left"
                  size={30}
                  onPress={() => {
                    ref.current?.scrollTo({ count: -1, animated: true });
                  }}
                />
                <IconButton
                  icon="menu-right"
                  size={30}
                  onPress={() => {
                    ref.current?.scrollTo({ count: 1, animated: true });
                  }}
                />
              </View>
            </View>
          ) : (
            <View style={{ flex: 1 }}>
              <Carousel
                ref={ref}
                loop
                autoPlay={false}
                width={width}
                height={width / 2}
                style={{ width: "100%" }}
                data={hostStore.images}
                pagingEnabled
                renderItem={({ item }) => <CarouselImages images={item} />}
              />
            </View>
          )}

          <Text variant="headlineMedium">{hostStore.title}</Text>

          <Divider />

          <View style={{ marginTop: 10 }}>
            <Text variant="headlineMedium">Description</Text>
            <Text variant="titleLarge">{hostStore.description}</Text>
          </View>

          <Divider />

          <View style={{ marginTop: 10 }}>
            <Text variant="headlineMedium">Location</Text>

            <Map latitude={geocode.lat} longitude={geocode.lng} />
          </View>

          <Divider />

          <View style={{ marginTop: 10 }}>
            <Text variant="headlineMedium">S$ {hostStore.price}</Text>
          </View>
        </ScrollView>

        <View style={styles.next}>
          <PaperButton
            mode="contained"
            onPress={() => onPublish()}
            style={undefined}
          >
            Publish
          </PaperButton>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  next: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
  },
  webContainer: {
    flex: 1,
    height: "100%",
    width,
    alignSelf: "center",
    margin: "auto",
  },
  webButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
