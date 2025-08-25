// Licensed under the MIT License.

/** model interface UserList */
export interface UserList {
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

/** */
export interface User {
  id: string;
  name: string;
  age: number;
  gaender: Gender;
}

export function userSerializer(item: User): any {
  return {
    id: item["id"],
    name: item["name"],
    age: item["age"],
    gaender: item["gaender"],
  };
}

export function userDeserializer(item: any): User {
  return {
    id: item["id"],
    name: item["name"],
    age: item["age"],
    gaender: item["gaender"],
  };
}

/** Type of Gender */
export type Gender = "male" | "female";

/** model interface ErrorModel */
export interface ErrorModel {
  code: number;
  msg: string;
}

export function errorDeserializer(item: any): ErrorModel {
  return {
    code: item["code"],
    msg: item["msg"],
  };
}
