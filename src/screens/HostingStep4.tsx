import { useEffect, useRef, useState } from "react";
import { StyleSheet, View, ScrollView, Image, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"; // TODO: to get web support for react-native-maps
import {
  ActivityIndicator,
  Divider,
  IconButton,
  Button as PaperButton,
  Text,
} from "react-native-paper";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import alert from "../components/Alert";
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

  const onPublish = () => {
    // TODO: trigger API to backend

    alert("New Listing", "Post successful", [
      { text: "OK", onPress: () => navigation.navigate("Hosting") },
    ]);
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
            {/* <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              scrollEnabled={false}
              initialRegion={{
                latitude: geocode.lat,
                longitude: geocode.lng,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker
                coordinate={{
                  latitude: geocode.lat,
                  longitude: geocode.lng,
                }}
              />
            </MapView> */}
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
  map: {
    height: 250,
    marginVertical: 10,
  },
});
