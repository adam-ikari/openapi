// Licensed under the MIT License.

/** model interface UserList */
export interface UserList {
  /** The list of users */
  items: User[];
  /** The total number of users */
  total: number;
  /** The offset to fetch the list, 0 means no offset */
  offset: number;
  /** The limit to fetch the list, 0 means no limit */
  limit: number;
}

export function userListDeserializer(item: any): UserList {
  return {
    items: userArrayDeserializer(item["items"]),
    total: item["total"],
    offset: item["offset"],
    limit: item["limit"],
  };
}

export function userArraySerializer(result: Array<User>): any[] {
  return result.map((item) => {
    return userSerializer(item);
  });
}

export function userArrayDeserializer(result: Array<User>): any[] {
  return result.map((item) => {
    return userDeserializer(item);
  });
}

/** model interface User */
export interface User {
  /** The unique identifier of the user */
  id: string;
  /** The name of the user */
  name: string;
  /** The age of the user, min 1, max 120 */
  age: number;
  /** The gender of the user */
  gender: Gender;
}

export function userSerializer(item: User): any {
  return {
    id: item["id"],
    name: item["name"],
    age: item["age"],
    gender: item["gender"],
  };
}

export function userDeserializer(item: any): User {
  return {
    id: item["id"],
    name: item["name"],
    age: item["age"],
    gender: item["gender"],
  };
}

/** The enum of the gender */
export type Gender = "secret" | "male" | "female";

/** model interface ErrorModel */
export interface ErrorModel {
  /** The error code */
  code: StatusCode;
  /** The error message */
  msg: string;
}

export function errorDeserializer(item: any): ErrorModel {
  return {
    code: item["code"],
    msg: item["msg"],
  };
}

/** Type of StatusCode */
export type StatusCode = 100000 | 100001;
