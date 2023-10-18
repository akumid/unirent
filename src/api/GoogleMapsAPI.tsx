import { API } from "aws-amplify";

const apiName = "googleMapsApi";
const path = "/geocoding";

export async function getGeocode(request) {
  const myInit = { body: request };

  try {
    const response = await API.post(apiName, path, myInit);
    return response;
  } catch (error) {
    console.error("Error in google maps API: " + error);
  }
}
