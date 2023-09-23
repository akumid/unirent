import { API } from "aws-amplify";

const apiName = "accommodationApi";
const path = "/accommodations";

export async function getAll() {
  const myInit = {};

  try {
    const response = await API.get(apiName, path, myInit);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error in accommodation API: " + error);
  }
}

export async function publish(request) {
  console.log(request);
  const myInit = { body: request };

  try {
    const response = await API.put(apiName, path, myInit);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error in accommodation API: " + error);
  }
}
