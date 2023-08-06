import React, { useState } from "react";
import { Text, View, FlatList, ScrollView } from "react-native";
import { Card, Divider, List, Searchbar } from "react-native-paper";
import { LocationSearch } from "../services/LocationSearch";
import Feather from 'react-native-vector-icons/Feather'


const SearchScreen = (props: any) => {

    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [recentSearch, setRecentSearch] = useState([]);

    const getPrefferedLocations = async (search: String ) => {
        const locations = await LocationSearch(search);
        setSearchResult(locations);
        console.log(locations);
    
        return locations;
    }

    const pickedLocation = () => {
        console.warn("This should navigate to search result screen")
    }

    const prefferLocation = () => {
        const results = searchResult; 
        // style={{width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}
        // <List.Icon {...props} icon="crosshairs-gps" style={{justifyContent: 'center', alignItems: 'center'}}/>
        //<Feather {...props} name="map-pin" style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', margin: 'auto'}} size={20} />
    
        if (results.length > 0) {
          return (
            <ScrollView contentContainerStyle={{width: '100%', justifyContent: 'center'}}>
              {results.map((result) => (
                <>
                        <List.Item
                            key={result.place_id} 
                            style={{ marginHorizontal: 20, justifyContent: 'center', alignItems: 'center',}}
                            title={result.structured_formatting.main_text}
                            description={result.description}
                            centered
                            left={(props) => {
                                return (
                                    <View style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 10, width: 40, height: 40, backgroundColor: '#f2f2f2'}}>
                                        <Feather name='map-pin' size={20}/>
                                    </View>
                                )
                            }}
                            onPress={() => {pickedLocation()}}
                        >
                        
                        </List.Item>
                        <Divider style={{width: '100%'}} />
                </>
              ))}
            </ScrollView>
          );
        } else {
          return <></>;
        }
    }
    

    return (
        <>
            <Card style={{flex:1, flexDirection: 'column', justifyContent: 'flex-start', width: '100%', height: '100%', top: '8%', borderRadius: 25}}>
                <View style={{alignItems: 'center'}}>
                    <Searchbar 
                        style={{top: 30, width: '90%', marginBottom: 50, alignItems: 'center'}}
                        placeholder="Search Location"
                        onChangeText={(query) => { 
                            setSearch(query); 
                            getPrefferedLocations(query);
                        }}
                        value={search}
                    />
                </View>

                    {prefferLocation()}
                    {/* <Text>Component</Text>
                    <Text>Component</Text>
                    <Text>Component</Text> */}
                
                
            </Card>
        </>
    )
}

export default SearchScreen;