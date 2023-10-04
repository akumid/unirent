/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createSavedAccommodation =
  /* GraphQL */ `mutation CreateSavedAccommodation(
  $input: CreateSavedAccommodationInput!
  $condition: ModelSavedAccommodationConditionInput
) {
  createSavedAccommodation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateSavedAccommodationMutationVariables,
    APITypes.CreateSavedAccommodationMutation
  >;
export const updateSavedAccommodation =
  /* GraphQL */ `mutation UpdateSavedAccommodation(
  $input: UpdateSavedAccommodationInput!
  $condition: ModelSavedAccommodationConditionInput
) {
  updateSavedAccommodation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateSavedAccommodationMutationVariables,
    APITypes.UpdateSavedAccommodationMutation
  >;
export const deleteSavedAccommodation =
  /* GraphQL */ `mutation DeleteSavedAccommodation(
  $input: DeleteSavedAccommodationInput!
  $condition: ModelSavedAccommodationConditionInput
) {
  deleteSavedAccommodation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteSavedAccommodationMutationVariables,
    APITypes.DeleteSavedAccommodationMutation
  >;
export const createAccommodation = /* GraphQL */ `mutation CreateAccommodation(
  $input: CreateAccommodationInput!
  $condition: ModelAccommodationConditionInput
) {
  createAccommodation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAccommodationMutationVariables,
  APITypes.CreateAccommodationMutation
>;
export const updateAccommodation = /* GraphQL */ `mutation UpdateAccommodation(
  $input: UpdateAccommodationInput!
  $condition: ModelAccommodationConditionInput
) {
  updateAccommodation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAccommodationMutationVariables,
  APITypes.UpdateAccommodationMutation
>;
export const deleteAccommodation = /* GraphQL */ `mutation DeleteAccommodation(
  $input: DeleteAccommodationInput!
  $condition: ModelAccommodationConditionInput
) {
  deleteAccommodation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAccommodationMutationVariables,
  APITypes.DeleteAccommodationMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    userSavedAccommodationId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    userSavedAccommodationId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    userSavedAccommodationId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    createdAt
    text
    chatRoomId
    userId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
    id
    createdAt
    text
    chatRoomId
    userId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
    id
    createdAt
    text
    chatRoomId
    userId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createChatRoom = /* GraphQL */ `mutation CreateChatRoom(
  $input: CreateChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  createChatRoom(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateChatRoomMutationVariables,
  APITypes.CreateChatRoomMutation
>;
export const updateChatRoom = /* GraphQL */ `mutation UpdateChatRoom(
  $input: UpdateChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  updateChatRoom(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateChatRoomMutationVariables,
  APITypes.UpdateChatRoomMutation
>;
export const deleteChatRoom = /* GraphQL */ `mutation DeleteChatRoom(
  $input: DeleteChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  deleteChatRoom(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteChatRoomMutationVariables,
  APITypes.DeleteChatRoomMutation
>;
export const createSavedAccommodationAccommodation =
  /* GraphQL */ `mutation CreateSavedAccommodationAccommodation(
  $input: CreateSavedAccommodationAccommodationInput!
  $condition: ModelSavedAccommodationAccommodationConditionInput
) {
  createSavedAccommodationAccommodation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateSavedAccommodationAccommodationMutationVariables,
    APITypes.CreateSavedAccommodationAccommodationMutation
  >;
export const updateSavedAccommodationAccommodation =
  /* GraphQL */ `mutation UpdateSavedAccommodationAccommodation(
  $input: UpdateSavedAccommodationAccommodationInput!
  $condition: ModelSavedAccommodationAccommodationConditionInput
) {
  updateSavedAccommodationAccommodation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateSavedAccommodationAccommodationMutationVariables,
    APITypes.UpdateSavedAccommodationAccommodationMutation
  >;
export const deleteSavedAccommodationAccommodation =
  /* GraphQL */ `mutation DeleteSavedAccommodationAccommodation(
  $input: DeleteSavedAccommodationAccommodationInput!
  $condition: ModelSavedAccommodationAccommodationConditionInput
) {
  deleteSavedAccommodationAccommodation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteSavedAccommodationAccommodationMutationVariables,
    APITypes.DeleteSavedAccommodationAccommodationMutation
  >;
export const createUserChatRoom = /* GraphQL */ `mutation CreateUserChatRoom(
  $input: CreateUserChatRoomInput!
  $condition: ModelUserChatRoomConditionInput
) {
  createUserChatRoom(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserChatRoomMutationVariables,
  APITypes.CreateUserChatRoomMutation
>;
export const updateUserChatRoom = /* GraphQL */ `mutation UpdateUserChatRoom(
  $input: UpdateUserChatRoomInput!
  $condition: ModelUserChatRoomConditionInput
) {
  updateUserChatRoom(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserChatRoomMutationVariables,
  APITypes.UpdateUserChatRoomMutation
>;
export const deleteUserChatRoom = /* GraphQL */ `mutation DeleteUserChatRoom(
  $input: DeleteUserChatRoomInput!
  $condition: ModelUserChatRoomConditionInput
) {
  deleteUserChatRoom(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserChatRoomMutationVariables,
  APITypes.DeleteUserChatRoomMutation
>;
