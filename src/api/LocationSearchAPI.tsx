import { API } from "aws-amplify";

const apiName = "locationSearchApi";
const path = "/location/search";

export async function LocationSearch(query: String) {
  // const param = {query: query};

  const myInit = {
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {
      query: query // OPTIONAL
    }
  };

  try {
    const response = await API.get(apiName, path, myInit);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error in accommodation API: " + error);
  }
}