/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

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
        text
        chatroomID
        userID
        createdAt
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
        text
        chatroomID
        userID
        createdAt
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
        text
        chatroomID
        userID
        createdAt
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
    text
    chatroomID
    userID
    createdAt
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
    text
    chatroomID
    userID
    createdAt
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
    text
    chatroomID
    userID
    createdAt
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
        text
        chatroomID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    LastMessage {
      id
      text
      chatroomID
      userID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    chatRoomLastMessageId
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
        text
        chatroomID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    LastMessage {
      id
      text
      chatroomID
      userID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    chatRoomLastMessageId
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
        text
        chatroomID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    LastMessage {
      id
      text
      chatroomID
      userID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    chatRoomLastMessageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChatRoomMutationVariables,
  APITypes.DeleteChatRoomMutation
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
        text
        chatroomID
        userID
        createdAt
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
        text
        chatroomID
        userID
        createdAt
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
        text
        chatroomID
        userID
        createdAt
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
` as GeneratedMutation<
  APITypes.DeleteUserChatRoomMutationVariables,
  APITypes.DeleteUserChatRoomMutation
>;
