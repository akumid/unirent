import { useState } from "react";
import { View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AccommodationCard from "../components/AccommodationCard";

const SearchResultScreen = (props: any) => {
  const [search, setSearch] = useState("");

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
      {/* <View style={{alignItems: 'center'}}>
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
        </View> */}

      <ScrollView>
        <AccommodationCard />
        <AccommodationCard />
        <AccommodationCard />
        <AccommodationCard />
      </ScrollView>
    </View>
  );
};

export default SearchResultScreen;
