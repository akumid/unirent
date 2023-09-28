export const getTodaysRecommendation = /* GraphQL */ `
  query MyQuery($limit: Int!) {
    listAccommodations(limit: $limit) {
      items {
        availableDate
        createdAt
        id
        images
        price
        propertyType
        rented
        title
        userId
        User {
          name
        }
      }
    }
  }
`;
