import { API, graphqlOperation } from "aws-amplify";
import { savedAccommodationAccommodationsBySavedAccommodationId } from "../graphql/queries";
import { createSavedAccommodationAccommodation, deleteSavedAccommodationAccommodation } from "../graphql/mutations";

const query =  `query SavedAccommodationAccommodationsBySavedAccommodationId(
  $savedAccommodationId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSavedAccommodationAccommodationFilterInput
  $limit: Int
  $nextToken: String
) {
  savedAccommodationAccommodationsBySavedAccommodationId(
    savedAccommodationId: $savedAccommodationId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      savedAccommodationId
      accommodationId
      savedAccommodation {
        id
        createdAt
        updatedAt
        savedAccommodationUserId
        __typename
      }
      accommodation {
        id
        availableDate
        description
        images
        price
        propertyType
        rented
        createdAt
        title
        address
        userId
        User {
          id
          name
        }
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
`

export const getSavedAccommodationsById = async (savedAccommodationId) => {

    const savedAccommodationList = await API.graphql(
      graphqlOperation(
        query, {
          savedAccommodationId: savedAccommodationId
        }
      )
    )
    const result = savedAccommodationList.data.savedAccommodationAccommodationsBySavedAccommodationId.items;
    // console.log(savedAccommodation.data.getUser.SavedAccommodation.Accommodations.items);
    return result;
}

export const addSavedAccommodation = async (savedAccommodationId, accommodationId) => {
  const created = await API.graphql(
    graphqlOperation(
      createSavedAccommodationAccommodation,
      {input: {savedAccommodationId: savedAccommodationId, accommodationId: accommodationId}}
    )
  )
  return created;
}


export const deleteSavedAccommodationById = async (savedAccommodationId) => {
  const deleted = await API.graphql(
    graphqlOperation(deleteSavedAccommodationAccommodation, {
      input: { id: savedAccommodationId }
    })
  )

  return deleted;

}