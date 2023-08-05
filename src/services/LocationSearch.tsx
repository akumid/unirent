import axios from "axios";

export const LocationSearch = async (query: String) => {
    const key = "test";
    const url = "https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=" + query + "&key=" + key;

    const response = await axios.get(url).then((locations) => {
        return locations;
    })

    return response.data.predictions;
}