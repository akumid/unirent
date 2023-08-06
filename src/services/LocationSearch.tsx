import axios from "axios";

export const LocationSearch = async (query: String) => {
    // will implement the api key in the future
    const key = "test";
    const url = "https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=" + query + "&key=" + key;

    const response = await axios.get(url).then((locations) => {
        return locations;
    }).catch(() => {
        console.log("Error getting google autocomplete response");
        return null;
    })

    return response.data.predictions;
}