import React, { useState } from "react";
import {View, ScrollView } from "react-native";
import { Appbar, Card, Divider, List, Searchbar, Text, Checkbox, TextInput, Button } from "react-native-paper";
import { LocationSearch } from "../services/LocationSearch";
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/native";
import { DatePickerInput } from 'react-native-paper-dates';

const SearchScreen = (props: any) => {

    const navigation = useNavigation();

    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [recentSearch, setRecentSearch] = useState([]);
    const [checkedCondo,  setCheckedCondo] = useState(true);
    const [checkedLanded,  setCheckedLanded] = useState(true);
    const [checkedHDB,  setCheckedHDB] = useState(true);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [moveInDate, setMoveInDate] = useState(undefined)


    const getPrefferedLocations = async (search: String ) => {
        const locations = await LocationSearch(search);
        setSearchResult(locations);
        console.log(locations);
    
        return locations;
    }

    const pickedLocation = (location) => {
        setQuery(location);
        setSearch(location);
        setSearchResult([]);
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
                            left={() => {
                                return (
                                    <View style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 10, width: 40, height: 40, backgroundColor: '#f2f2f2'}}>
                                        <Feather name='map-pin' size={20}/>
                                    </View>
                                )
                            }}
                            onPress={() => {pickedLocation(result.structured_formatting.main_text)}}
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

    const searchLocation = () => {
        if (search !== '') {
            return (
                <>
                <View style={{alignItems: 'center', marginVertical: '5%'}}>
                    <Card style={{width: '90%', height: 475}}>
                        <ScrollView contentContainerStyle={{width: '100%', justifyContent: 'center'}} automaticallyAdjustKeyboardInsets={true}>
                            <View>
                                <Card.Title title="Property Type" titleVariant='titleMedium'/>
                                <Card.Content style={{justifyContent: 'flex-start'}}> 
                                    <Checkbox.Item label="Condo" status={checkedCondo ? 'checked' : 'unchecked'} labelVariant="labelMedium" onPress={() => setCheckedCondo(!checkedCondo)}/>
                                    <Checkbox.Item label="Landed" status={checkedLanded ? 'checked' : 'unchecked'} labelVariant="labelMedium" onPress={() => setCheckedLanded(!checkedLanded)}/>
                                    <Checkbox.Item label="HDB" status={checkedHDB ? 'checked' : 'unchecked'} labelVariant="labelMedium" onPress={() => setCheckedHDB(!checkedHDB)}/>
                                </Card.Content>
                                <Divider />
                            </View>
                            <View>
                                <Card.Title title="Price" titleVariant='titleMedium' />
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '5%', marginBottom: '5%'}}>
                                    <TextInput
                                        label="Min"
                                        value={minPrice}
                                        onChangeText={text => setMinPrice(text)}
                                        style={{width: 150}}
                                    />
                                    <TextInput
                                        label="Max"
                                        value={maxPrice}
                                        onChangeText={text => setMaxPrice(text)}
                                        style={{width: 150}}
                                    />
                                </View>
                                <Divider />
                            </View>
                            <View>
                                <Card.Title title="Move In Date" titleVariant='titleMedium' />
                                <View style={{justifyContent: 'center', flex: 1, marginHorizontal: '5%'}}>
                                    <DatePickerInput
                                        locale="en-GB"
                                        label="Move In Date"
                                        value={moveInDate}
                                        onChange={(d) => setMoveInDate(d)}
                                        inputMode="start"
                                    />
                                </View>
                            </View>
                        </ScrollView>
                    </Card>
                </View>
                <View style={{flexDirection: 'row-reverse', marginHorizontal: '5%'}}> 
                    <Button mode="contained" onPress={() => navigation.navigate("Search Result")}>
                        Search
                    </Button>
                </View>

                </>
            )
        }
    }
    

    return (
        <>
            <Card style={{ flexDirection: 'column', justifyContent: 'flex-start', width: '100%', height: '100%', borderRadius: 25, top: '8%'}}>
                <View style={{alignItems: 'center', top: 30}}>
                    <Searchbar 
                        style={{width: '90%', marginBottom: 35, alignItems: 'center'}}
                        placeholder="Search Location"
                        onChangeText={(searchQuery) => { 
                            setQuery(searchQuery); 
                            setSearch('');
                            getPrefferedLocations(searchQuery);
                        }}
                        value={query}
                        icon={()=> {
                            if (search === '') {
                                return <Feather name='arrow-left' size={20}/>
                            } else {
                                return <Feather name='search' size={20}/>
                            }
                        }}
                        
                        onIconPress={() => navigation.goBack()}
                    />
                    
                </View>
                    {searchLocation()}
                    {prefferLocation()}
                    {/* <Text>Component</Text>
                    <Text>Component</Text>
                    <Text>Component</Text> */}
                
                
            </Card>
        </>
    )
}

export default SearchScreen;