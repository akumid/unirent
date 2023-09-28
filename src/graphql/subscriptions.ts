/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

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
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
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
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
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
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onCreateMessage(filter: $filter) {
    id
    createdAt
    text
    chatRoomId
    userId
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onUpdateMessage(filter: $filter) {
    id
    createdAt
    text
    chatRoomId
    userId
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
  onDeleteMessage(filter: $filter) {
    id
    createdAt
    text
    chatRoomId
    userId
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onCreateChatRoom = /* GraphQL */ `subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onCreateChatRoom(filter: $filter) {
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
  APITypes.OnCreateChatRoomSubscriptionVariables,
  APITypes.OnCreateChatRoomSubscription
>;
export const onUpdateChatRoom = /* GraphQL */ `subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onUpdateChatRoom(filter: $filter) {
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
  APITypes.OnUpdateChatRoomSubscriptionVariables,
  APITypes.OnUpdateChatRoomSubscription
>;
export const onDeleteChatRoom = /* GraphQL */ `subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onDeleteChatRoom(filter: $filter) {
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserChatRoomSubscriptionVariables,
  APITypes.OnDeleteUserChatRoomSubscription
>;
