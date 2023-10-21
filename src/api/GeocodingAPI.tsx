import { API } from "aws-amplify";

const apiName = "googleMapsApi";
const path = "/geocoding";

export async function getGeocodeByPlaceId(query: String) {
  // const param = {query: query};
  let geo = {
    lat: null,
    lng: null
  }

  const myInit = {
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {
      placeId: query // OPTIONAL
    }
  };

  try {
    const response = await API.get(apiName, path, myInit);
    console.log(response);
    if (response) {
        geo.lat = response.data.geometry.location.lat;
        geo.lng = response.data.geometry.location.lng;
    }
    
    return geo;
  } catch (error) {
    console.error("Error in accommodation API: " + error);
  }
}