import { Searchbar, List, Divider, Card, Text, Button } from 'react-native-paper';
import { useState, useEffect } from "react";
import { View } from 'react-native';
import { LocationSearch } from "../services/LocationSearch";
import { StyleSheet, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Welcome({ props }) {

  const navigation = useNavigation();

  const [search, setSearch] = useState('');

  return (
    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Searchbar 
          placeholder="Search Location"
          onPressIn={() => {navigation.navigate("Search")}}
          onChangeText={(query) => { 
            setSearch(query); 
          }}
          value={search}
          style={{top: 40, width: '90%', marginBottom: 50}}
        />
      </View>

      {/* <View>
        <Card>
          <Card.Title title="Card Title" subtitle="Card Subtitle"  />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </View> */}
    </View>
  );
}
