/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getSavedAccommodation = /* GraphQL */ `query GetSavedAccommodation($id: ID!) {
  getSavedAccommodation(id: $id) {
    id
    Accommodations {
      items {
        id
        savedAccommodationId
        accommodationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    User {
      id
      name
      status
      ChatRooms {
        nextToken
        __typename
      }
      Messages {
        nextToken
        __typename
      }
      Accommodations {
        nextToken
        __typename
      }
      SavedAccommodation {
        id
        createdAt
        updatedAt
        savedAccommodationUserId
        __typename
      }
      savedAccommIds
      createdAt
      updatedAt
      userSavedAccommodationId
      __typename
    }
    createdAt
    updatedAt
    savedAccommodationUserId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSavedAccommodationQueryVariables,
  APITypes.GetSavedAccommodationQuery
>;
export const listSavedAccommodations = /* GraphQL */ `query ListSavedAccommodations(
  $filter: ModelSavedAccommodationFilterInput
  $limit: Int
  $nextToken: String
) {
  listSavedAccommodations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      Accommodations {
        nextToken
        __typename
      }
      User {
        id
        name
        status
        savedAccommIds
        createdAt
        updatedAt
        userSavedAccommodationId
        __typename
      }
      createdAt
      updatedAt
      savedAccommodationUserId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSavedAccommodationsQueryVariables,
  APITypes.ListSavedAccommodationsQuery
>;
export const getAccommodation = /* GraphQL */ `query GetAccommodation($id: ID!) {
  getAccommodation(id: $id) {
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
      status
      ChatRooms {
        nextToken
        __typename
      }
      Messages {
        nextToken
        __typename
      }
      Accommodations {
        nextToken
        __typename
      }
      SavedAccommodation {
        id
        createdAt
        updatedAt
        savedAccommodationUserId
        __typename
      }
      savedAccommIds
      createdAt
      updatedAt
      userSavedAccommodationId
      __typename
    }
    savedaccommodations {
      items {
        id
        savedAccommodationId
        accommodationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    unitFeature
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAccommodationQueryVariables,
  APITypes.GetAccommodationQuery
>;
export const listAccommodations = /* GraphQL */ `query ListAccommodations(
  $filter: ModelAccommodationFilterInput
  $limit: Int
  $nextToken: String
) {
  listAccommodations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        status
        savedAccommIds
        createdAt
        updatedAt
        userSavedAccommodationId
        __typename
      }
      savedaccommodations {
        nextToken
        __typename
      }
      unitFeature
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAccommodationsQueryVariables,
  APITypes.ListAccommodationsQuery
>;
export const accommodationsByUserId = /* GraphQL */ `query AccommodationsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAccommodationFilterInput
  $limit: Int
  $nextToken: String
) {
  accommodationsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
        status
        savedAccommIds
        createdAt
        updatedAt
        userSavedAccommodationId
        __typename
      }
      savedaccommodations {
        nextToken
        __typename
      }
      unitFeature
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AccommodationsByUserIdQueryVariables,
  APITypes.AccommodationsByUserIdQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    status
    ChatRooms {
      items {
        id
        userId
        chatRoomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Messages {
      items {
        id
        createdAt
        text
        chatRoomId
        userId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Accommodations {
      items {
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
        unitFeature
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    SavedAccommodation {
      id
      Accommodations {
        nextToken
        __typename
      }
      User {
        id
        name
        status
        savedAccommIds
        createdAt
        updatedAt
        userSavedAccommodationId
        __typename
      }
      createdAt
      updatedAt
      savedAccommodationUserId
      __typename
    }
    savedAccommIds
    createdAt
    updatedAt
    userSavedAccommodationId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      status
      ChatRooms {
        nextToken
        __typename
      }
      Messages {
        nextToken
        __typename
      }
      Accommodations {
        nextToken
        __typename
      }
      SavedAccommodation {
        id
        createdAt
        updatedAt
        savedAccommodationUserId
        __typename
      }
      savedAccommIds
      createdAt
      updatedAt
      userSavedAccommodationId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    createdAt
    text
    chatRoomId
    userId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      text
      chatRoomId
      userId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const listMessagesByChatRoom = /* GraphQL */ `query ListMessagesByChatRoom(
  $chatRoomId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessagesByChatRoom(
    chatRoomId: $chatRoomId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdAt
      text
      chatRoomId
      userId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesByChatRoomQueryVariables,
  APITypes.ListMessagesByChatRoomQuery
>;
export const messagesByUserId = /* GraphQL */ `query MessagesByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdAt
      text
      chatRoomId
      userId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessagesByUserIdQueryVariables,
  APITypes.MessagesByUserIdQuery
>;
export const getChatRoom = /* GraphQL */ `query GetChatRoom($id: ID!) {
  getChatRoom(id: $id) {
    id
    Users {
      items {
        id
        userId
        chatRoomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    Messages {
      items {
        id
        createdAt
        text
        chatRoomId
        userId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    LastMessage {
      id
      createdAt
      text
      chatRoomId
      userId
      updatedAt
      __typename
    }
    Accommodation {
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
        status
        savedAccommIds
        createdAt
        updatedAt
        userSavedAccommodationId
        __typename
      }
      savedaccommodations {
        nextToken
        __typename
      }
      unitFeature
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    chatRoomLastMessageId
    chatRoomAccommodationId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetChatRoomQueryVariables,
  APITypes.GetChatRoomQuery
>;
export const listChatRooms = /* GraphQL */ `query ListChatRooms(
  $filter: ModelChatRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Users {
        nextToken
        __typename
      }
      Messages {
        nextToken
        __typename
      }
      LastMessage {
        id
        createdAt
        text
        chatRoomId
        userId
        updatedAt
        __typename
      }
      Accommodation {
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
        unitFeature
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      chatRoomAccommodationId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChatRoomsQueryVariables,
  APITypes.ListChatRoomsQuery
>;
export const getSavedAccommodationAccommodation = /* GraphQL */ `query GetSavedAccommodationAccommodation($id: ID!) {
  getSavedAccommodationAccommodation(id: $id) {
    id
    savedAccommodationId
    accommodationId
    savedAccommodation {
      id
      Accommodations {
        nextToken
        __typename
      }
      User {
        id
        name
        status
        savedAccommIds
        createdAt
        updatedAt
        userSavedAccommodationId
        __typename
      }
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
        status
        savedAccommIds
        createdAt
        updatedAt
        userSavedAccommodationId
        __typename
      }
      savedaccommodations {
        nextToken
        __typename
      }
      unitFeature
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSavedAccommodationAccommodationQueryVariables,
  APITypes.GetSavedAccommodationAccommodationQuery
>;
export const listSavedAccommodationAccommodations = /* GraphQL */ `query ListSavedAccommodationAccommodations(
  $filter: ModelSavedAccommodationAccommodationFilterInput
  $limit: Int
  $nextToken: String
) {
  listSavedAccommodationAccommodations(
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
        unitFeature
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
` as GeneratedQuery<
  APITypes.ListSavedAccommodationAccommodationsQueryVariables,
  APITypes.ListSavedAccommodationAccommodationsQuery
>;
export const savedAccommodationAccommodationsBySavedAccommodationId = /* GraphQL */ `query SavedAccommodationAccommodationsBySavedAccommodationId(
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
        unitFeature
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
` as GeneratedQuery<
  APITypes.SavedAccommodationAccommodationsBySavedAccommodationIdQueryVariables,
  APITypes.SavedAccommodationAccommodationsBySavedAccommodationIdQuery
>;
export const savedAccommodationAccommodationsByAccommodationId = /* GraphQL */ `query SavedAccommodationAccommodationsByAccommodationId(
  $accommodationId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSavedAccommodationAccommodationFilterInput
  $limit: Int
  $nextToken: String
) {
  savedAccommodationAccommodationsByAccommodationId(
    accommodationId: $accommodationId
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
        unitFeature
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
` as GeneratedQuery<
  APITypes.SavedAccommodationAccommodationsByAccommodationIdQueryVariables,
  APITypes.SavedAccommodationAccommodationsByAccommodationIdQuery
>;
export const getUserChatRoom = /* GraphQL */ `query GetUserChatRoom($id: ID!) {
  getUserChatRoom(id: $id) {
    id
    userId
    chatRoomId
    user {
      id
      name
      status
      ChatRooms {
        nextToken
        __typename
      }
      Messages {
        nextToken
        __typename
      }
      Accommodations {
        nextToken
        __typename
      }
      SavedAccommodation {
        id
        createdAt
        updatedAt
        savedAccommodationUserId
        __typename
      }
      savedAccommIds
      createdAt
      updatedAt
      userSavedAccommodationId
      __typename
    }
    chatRoom {
      id
      Users {
        nextToken
        __typename
      }
      Messages {
        nextToken
        __typename
      }
      LastMessage {
        id
        createdAt
        text
        chatRoomId
        userId
        updatedAt
        __typename
      }
      Accommodation {
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
        unitFeature
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      chatRoomAccommodationId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserChatRoomQueryVariables,
  APITypes.GetUserChatRoomQuery
>;
export const listUserChatRooms = /* GraphQL */ `query ListUserChatRooms(
  $filter: ModelUserChatRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      chatRoomId
      user {
        id
        name
        status
        savedAccommIds
        createdAt
        updatedAt
        userSavedAccommodationId
        __typename
      }
      chatRoom {
        id
        createdAt
        updatedAt
        chatRoomLastMessageId
        chatRoomAccommodationId
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
` as GeneratedQuery<
  APITypes.ListUserChatRoomsQueryVariables,
  APITypes.ListUserChatRoomsQuery
>;
export const userChatRoomsByUserId = /* GraphQL */ `query UserChatRoomsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserChatRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  userChatRoomsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      chatRoomId
      user {
        id
        name
        status
        savedAccommIds
        createdAt
        updatedAt
        userSavedAccommodationId
        __typename
      }
      chatRoom {
        id
        createdAt
        updatedAt
        chatRoomLastMessageId
        chatRoomAccommodationId
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
` as GeneratedQuery<
  APITypes.UserChatRoomsByUserIdQueryVariables,
  APITypes.UserChatRoomsByUserIdQuery
>;
export const userChatRoomsByChatRoomId = /* GraphQL */ `query UserChatRoomsByChatRoomId(
  $chatRoomId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserChatRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  userChatRoomsByChatRoomId(
    chatRoomId: $chatRoomId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      chatRoomId
      user {
        id
        name
        status
        savedAccommIds
        createdAt
        updatedAt
        userSavedAccommodationId
        __typename
      }
      chatRoom {
        id
        createdAt
        updatedAt
        chatRoomLastMessageId
        chatRoomAccommodationId
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
` as GeneratedQuery<
  APITypes.UserChatRoomsByChatRoomIdQueryVariables,
  APITypes.UserChatRoomsByChatRoomIdQuery
>;
