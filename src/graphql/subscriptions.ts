/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

<<<<<<< HEAD
import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateSavedAccommodation = /* GraphQL */ `subscription OnCreateSavedAccommodation(
  $filter: ModelSubscriptionSavedAccommodationFilterInput
) {
  onCreateSavedAccommodation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSavedAccommodationSubscriptionVariables,
  APITypes.OnCreateSavedAccommodationSubscription
>;
export const onUpdateSavedAccommodation = /* GraphQL */ `subscription OnUpdateSavedAccommodation(
  $filter: ModelSubscriptionSavedAccommodationFilterInput
) {
  onUpdateSavedAccommodation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSavedAccommodationSubscriptionVariables,
  APITypes.OnUpdateSavedAccommodationSubscription
>;
export const onDeleteSavedAccommodation = /* GraphQL */ `subscription OnDeleteSavedAccommodation(
  $filter: ModelSubscriptionSavedAccommodationFilterInput
) {
  onDeleteSavedAccommodation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSavedAccommodationSubscriptionVariables,
  APITypes.OnDeleteSavedAccommodationSubscription
>;
export const onCreateAccommodation = /* GraphQL */ `subscription OnCreateAccommodation(
  $filter: ModelSubscriptionAccommodationFilterInput
) {
  onCreateAccommodation(filter: $filter) {
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
    latitude
    longitude
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAccommodationSubscriptionVariables,
  APITypes.OnCreateAccommodationSubscription
>;
export const onUpdateAccommodation = /* GraphQL */ `subscription OnUpdateAccommodation(
  $filter: ModelSubscriptionAccommodationFilterInput
) {
  onUpdateAccommodation(filter: $filter) {
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
    latitude
    longitude
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAccommodationSubscriptionVariables,
  APITypes.OnUpdateAccommodationSubscription
>;
export const onDeleteAccommodation = /* GraphQL */ `subscription OnDeleteAccommodation(
  $filter: ModelSubscriptionAccommodationFilterInput
) {
  onDeleteAccommodation(filter: $filter) {
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
    latitude
    longitude
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAccommodationSubscriptionVariables,
  APITypes.OnDeleteAccommodationSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
        latitude
        longitude
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    SavedAccommodation {
=======
export const onCreateSavedAccommodation = /* GraphQL */ `
  subscription OnCreateSavedAccommodation(
    $filter: ModelSubscriptionSavedAccommodationFilterInput
  ) {
    onCreateSavedAccommodation(filter: $filter) {
>>>>>>> origin/develop
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
<<<<<<< HEAD
=======
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
>>>>>>> origin/develop
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
<<<<<<< HEAD
    createdAt
    updatedAt
    userSavedAccommodationId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
        latitude
        longitude
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    SavedAccommodation {
=======
  }
`;
export const onUpdateSavedAccommodation = /* GraphQL */ `
  subscription OnUpdateSavedAccommodation(
    $filter: ModelSubscriptionSavedAccommodationFilterInput
  ) {
    onUpdateSavedAccommodation(filter: $filter) {
>>>>>>> origin/develop
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
<<<<<<< HEAD
=======
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
>>>>>>> origin/develop
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
<<<<<<< HEAD
    createdAt
    updatedAt
    userSavedAccommodationId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
        latitude
        longitude
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    SavedAccommodation {
=======
  }
`;
export const onDeleteSavedAccommodation = /* GraphQL */ `
  subscription OnDeleteSavedAccommodation(
    $filter: ModelSubscriptionSavedAccommodationFilterInput
  ) {
    onDeleteSavedAccommodation(filter: $filter) {
>>>>>>> origin/develop
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
<<<<<<< HEAD
=======
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
>>>>>>> origin/develop
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
<<<<<<< HEAD
    createdAt
    updatedAt
    userSavedAccommodationId
    __typename
=======
>>>>>>> origin/develop
  }
`;
export const onCreateAccommodation = /* GraphQL */ `
  subscription OnCreateAccommodation(
    $filter: ModelSubscriptionAccommodationFilterInput
  ) {
    onCreateAccommodation(filter: $filter) {
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
      latitude
      longitude
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAccommodation = /* GraphQL */ `
  subscription OnUpdateAccommodation(
    $filter: ModelSubscriptionAccommodationFilterInput
  ) {
    onUpdateAccommodation(filter: $filter) {
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
      latitude
      longitude
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAccommodation = /* GraphQL */ `
  subscription OnDeleteAccommodation(
    $filter: ModelSubscriptionAccommodationFilterInput
  ) {
    onDeleteAccommodation(filter: $filter) {
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
      latitude
      longitude
      updatedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
          latitude
          longitude
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
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
          latitude
          longitude
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
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
          latitude
          longitude
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
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      createdAt
      text
      chatRoomId
      userId
      updatedAt
      __typename
    }
<<<<<<< HEAD
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
      latitude
      longitude
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    chatRoomLastMessageId
    chatRoomAccommodationId
    __typename
=======
>>>>>>> origin/develop
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      createdAt
      text
      chatRoomId
      userId
      updatedAt
      __typename
    }
<<<<<<< HEAD
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
      latitude
      longitude
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    chatRoomLastMessageId
    chatRoomAccommodationId
    __typename
=======
>>>>>>> origin/develop
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      createdAt
      text
      chatRoomId
      userId
      updatedAt
      __typename
    }
<<<<<<< HEAD
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
      latitude
      longitude
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatRoomSubscriptionVariables,
  APITypes.OnDeleteChatRoomSubscription
>;
export const onCreateSavedAccommodationAccommodation = /* GraphQL */ `subscription OnCreateSavedAccommodationAccommodation(
  $filter: ModelSubscriptionSavedAccommodationAccommodationFilterInput
) {
  onCreateSavedAccommodationAccommodation(filter: $filter) {
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
      latitude
      longitude
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSavedAccommodationAccommodationSubscriptionVariables,
  APITypes.OnCreateSavedAccommodationAccommodationSubscription
>;
export const onUpdateSavedAccommodationAccommodation = /* GraphQL */ `subscription OnUpdateSavedAccommodationAccommodation(
  $filter: ModelSubscriptionSavedAccommodationAccommodationFilterInput
) {
  onUpdateSavedAccommodationAccommodation(filter: $filter) {
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
      latitude
      longitude
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSavedAccommodationAccommodationSubscriptionVariables,
  APITypes.OnUpdateSavedAccommodationAccommodationSubscription
>;
export const onDeleteSavedAccommodationAccommodation = /* GraphQL */ `subscription OnDeleteSavedAccommodationAccommodation(
  $filter: ModelSubscriptionSavedAccommodationAccommodationFilterInput
) {
  onDeleteSavedAccommodationAccommodation(filter: $filter) {
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
      latitude
      longitude
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSavedAccommodationAccommodationSubscriptionVariables,
  APITypes.OnDeleteSavedAccommodationAccommodationSubscription
>;
export const onCreateUserChatRoom = /* GraphQL */ `subscription OnCreateUserChatRoom(
  $filter: ModelSubscriptionUserChatRoomFilterInput
) {
  onCreateUserChatRoom(filter: $filter) {
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
=======
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
>>>>>>> origin/develop
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
        latitude
        longitude
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
<<<<<<< HEAD
}
` as GeneratedSubscription<
  APITypes.OnCreateUserChatRoomSubscriptionVariables,
  APITypes.OnCreateUserChatRoomSubscription
>;
export const onUpdateUserChatRoom = /* GraphQL */ `subscription OnUpdateUserChatRoom(
  $filter: ModelSubscriptionUserChatRoomFilterInput
) {
  onUpdateUserChatRoom(filter: $filter) {
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
=======
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
>>>>>>> origin/develop
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
        latitude
        longitude
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
<<<<<<< HEAD
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserChatRoomSubscriptionVariables,
  APITypes.OnUpdateUserChatRoomSubscription
>;
export const onDeleteUserChatRoom = /* GraphQL */ `subscription OnDeleteUserChatRoom(
  $filter: ModelSubscriptionUserChatRoomFilterInput
) {
  onDeleteUserChatRoom(filter: $filter) {
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
=======
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
>>>>>>> origin/develop
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
        latitude
        longitude
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
`;
export const onCreateSavedAccommodationAccommodation = /* GraphQL */ `
  subscription OnCreateSavedAccommodationAccommodation(
    $filter: ModelSubscriptionSavedAccommodationAccommodationFilterInput
  ) {
    onCreateSavedAccommodationAccommodation(filter: $filter) {
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
        latitude
        longitude
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSavedAccommodationAccommodation = /* GraphQL */ `
  subscription OnUpdateSavedAccommodationAccommodation(
    $filter: ModelSubscriptionSavedAccommodationAccommodationFilterInput
  ) {
    onUpdateSavedAccommodationAccommodation(filter: $filter) {
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
        latitude
        longitude
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSavedAccommodationAccommodation = /* GraphQL */ `
  subscription OnDeleteSavedAccommodationAccommodation(
    $filter: ModelSubscriptionSavedAccommodationAccommodationFilterInput
  ) {
    onDeleteSavedAccommodationAccommodation(filter: $filter) {
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
        latitude
        longitude
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUserChatRoom = /* GraphQL */ `
  subscription OnCreateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onCreateUserChatRoom(filter: $filter) {
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
          latitude
          longitude
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
`;
export const onUpdateUserChatRoom = /* GraphQL */ `
  subscription OnUpdateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onUpdateUserChatRoom(filter: $filter) {
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
          latitude
          longitude
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
`;
export const onDeleteUserChatRoom = /* GraphQL */ `
  subscription OnDeleteUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onDeleteUserChatRoom(filter: $filter) {
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
          latitude
          longitude
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
`;
