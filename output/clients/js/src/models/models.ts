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
  /** The email of the user */
  email: Email;
  /** The timestamp when the user was created */
  createdAt: any;
  /** The timestamp when the user was updated */
  updatedAt: any;
}

export function userSerializer(item: User): any {
  return {
    id: item["id"],
    name: item["name"],
    age: item["age"],
    gender: item["gender"],
    email: emailSerializer(item["email"]),
    createdAt: item["createdAt"],
    updatedAt: item["updatedAt"],
  };
}

export function userDeserializer(item: any): User {
  return {
    id: item["id"],
    name: item["name"],
    age: item["age"],
    gender: item["gender"],
    email: emailDeserializer(item["email"]),
    createdAt: item["createdAt"],
    updatedAt: item["updatedAt"],
  };
}

/** Gender enum values */
export type Gender = 0 | 1 | 2;

/** model interface Email */
export interface Email {
  /** The id of the email */
  id: number;
  /** The email address */
  email: string;
  /** The authentication method */
  authMethod: EmailAuthMethod;
  /** The password */
  password?: string;
  /** The authentication token */
  readonly token: string;
  /** The timestamp when the email was created */
  createdAt: any;
  /** The timestamp when the email was updated */
  updatedAt: any;
}

export function emailSerializer(item: Email): any {
  return {
    id: item["id"],
    email: item["email"],
    authMethod: item["authMethod"],
    password: item["password"],
    createdAt: item["createdAt"],
    updatedAt: item["updatedAt"],
  };
}

export function emailDeserializer(item: any): Email {
  return {
    id: item["id"],
    email: item["email"],
    authMethod: item["authMethod"],
    password: item["password"],
    token: item["token"],
    createdAt: item["createdAt"],
    updatedAt: item["updatedAt"],
  };
}

/** Email authentication method */
export type EmailAuthMethod = 0 | 1 | 2 | 3;

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

/** Status Code */
export type StatusCode = 100000 | 100001;

/** model interface EmailList */
export interface EmailList {
  /** The list of emails */
  items: Email[];
  /** The total number of emails */
  total: number;
  /** The offset to fetch the list, 0 means no offset */
  offset: number;
  /** The limit to fetch the list, 0 means no limit */
  limit: number;
}

export function emailListDeserializer(item: any): EmailList {
  return {
    items: emailArrayDeserializer(item["items"]),
    total: item["total"],
    offset: item["offset"],
    limit: item["limit"],
  };
}

export function emailArraySerializer(result: Array<Email>): any[] {
  return result.map((item) => {
    return emailSerializer(item);
  });
}

export function emailArrayDeserializer(result: Array<Email>): any[] {
  return result.map((item) => {
    return emailDeserializer(item);
  });
}
