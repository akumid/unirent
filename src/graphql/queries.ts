/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

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
    createdAt
    updatedAt
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
      createdAt
      updatedAt
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
    createdAt
    updatedAt
    chatRoomLastMessageId
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
      createdAt
      updatedAt
      chatRoomLastMessageId
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
      createdAt
      updatedAt
      chatRoomLastMessageId
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
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        createdAt
        updatedAt
        chatRoomLastMessageId
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
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        createdAt
        updatedAt
        chatRoomLastMessageId
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
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        createdAt
        updatedAt
        chatRoomLastMessageId
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
