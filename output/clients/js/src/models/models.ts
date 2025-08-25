// Licensed under the MIT License.

/** model interface UserList */
export interface UserList {
  /** The list of users */
  items: User[];
}

export function userListDeserializer(item: any): UserList {
  return {
    items: userArrayDeserializer(item["items"]),
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
  /** The age of the user */
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
export type Gender = "male" | "female";

/** model interface ErrorModel */
export interface ErrorModel {
  /** The error code */
  code: number;
  /** The error message */
  msg: string;
}

export function errorDeserializer(item: any): ErrorModel {
  return {
    code: item["code"],
    msg: item["msg"],
  };
}
