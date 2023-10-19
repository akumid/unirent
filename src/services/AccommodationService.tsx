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

export const getUserListing = /* GraphQL */ `
  query MyQuery($userId: ID!) {
    accommodationsByUserId(userId: $userId) {
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
