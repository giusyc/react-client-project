import type { GetUsersQuery } from "./graphql/generated";

type UsersArray = NonNullable<GetUsersQuery["users"]>;
type UserFromQuery = NonNullable<UsersArray[0]>;
type MessagesArray = NonNullable<UserFromQuery["messages"]>;
type MessageFromQuery = NonNullable<MessagesArray[0]>;

export type User = UserFromQuery;
export type Message = MessageFromQuery;
