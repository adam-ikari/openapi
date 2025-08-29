// Licensed under the MIT License.

/**
 * Generic pagination response model
 * All list interface return types should inherit from this model
 */
export interface PagedResultUser {
  /** Data list */
  items: User[];
  /** Total data count */
  total: number;
  /** Offset, starting from 0 */
  offset: number;
  /** Number per page, 0 means no limit */
  limit: number;
}

export function pagedResultUserDeserializer(item: any): PagedResultUser {
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
  readonly id: number;
  /** The name of the user */
  name: string;
  /** The age of the user, min 1, max 120 */
  age: number;
  /** The gender of the user */
  gender: Gender;
  /** The email of the user */
  email: Email;
  /** The avatar of the user */
  avatar?: string;
  /** The password of the user */
  password: string;
  /** The timestamp when the user was created */
  createdAt: any;
  /** The timestamp when the user was updated */
  updatedAt: any;
}

export function userSerializer(item: User): any {
  return {
    name: item["name"],
    age: item["age"],
    gender: item["gender"],
    email: emailSerializer(item["email"]),
    avatar: item["avatar"],
    password: item["password"],
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
    avatar: item["avatar"],
    password: item["password"],
    createdAt: item["createdAt"],
    updatedAt: item["updatedAt"],
  };
}

/** User gender enum values */
export type Gender = "secret" | "male" | "female";

/** model interface Email */
export interface Email {
  /** The id of the email */
  readonly id: number;
  /** The email address */
  email: string;
  /** The authentication type */
  authType: EmailAuthType;
  /** The password */
  password?: string;
  /** The timestamp when the email was created */
  createdAt: any;
  /** The timestamp when the email was updated */
  updatedAt: any;
}

export function emailSerializer(item: Email): any {
  return {
    email: item["email"],
    authType: item["authType"],
    password: item["password"],
    createdAt: item["createdAt"],
    updatedAt: item["updatedAt"],
  };
}

export function emailDeserializer(item: any): Email {
  return {
    id: item["id"],
    email: item["email"],
    authType: item["authType"],
    password: item["password"],
    createdAt: item["createdAt"],
    updatedAt: item["updatedAt"],
  };
}

/** Email authentication type enum values */
export type EmailAuthType = "password" | "otp" | "totp" | "oauth2";

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

/**
 * Generic pagination response model
 * All list interface return types should inherit from this model
 */
export interface PagedResultEmail {
  /** Data list */
  items: Email[];
  /** Total data count */
  total: number;
  /** Offset, starting from 0 */
  offset: number;
  /** Number per page, 0 means no limit */
  limit: number;
}

export function pagedResultEmailDeserializer(item: any): PagedResultEmail {
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

/**
 * Generic pagination response model
 * All list interface return types should inherit from this model
 */
export interface PagedResultEmailGroup {
  /** Data list */
  items: EmailGroup[];
  /** Total data count */
  total: number;
  /** Offset, starting from 0 */
  offset: number;
  /** Number per page, 0 means no limit */
  limit: number;
}

export function pagedResultEmailGroupDeserializer(
  item: any,
): PagedResultEmailGroup {
  return {
    items: emailGroupArrayDeserializer(item["items"]),
    total: item["total"],
    offset: item["offset"],
    limit: item["limit"],
  };
}

export function emailGroupArraySerializer(result: Array<EmailGroup>): any[] {
  return result.map((item) => {
    return emailGroupSerializer(item);
  });
}

export function emailGroupArrayDeserializer(result: Array<EmailGroup>): any[] {
  return result.map((item) => {
    return emailGroupDeserializer(item);
  });
}

/** model interface EmailGroup */
export interface EmailGroup {
  /** The unique identifier of the group */
  readonly id: number;
  /** The name of the group */
  name: string;
  /** The members of the group */
  members: Email[];
}

export function emailGroupSerializer(item: EmailGroup): any {
  return { name: item["name"], members: emailArraySerializer(item["members"]) };
}

export function emailGroupDeserializer(item: any): EmailGroup {
  return {
    id: item["id"],
    name: item["name"],
    members: emailArrayDeserializer(item["members"]),
  };
}

/**
 * Generic pagination response model
 * All list interface return types should inherit from this model
 */
export interface PagedResultWiFiNetwork {
  /** Data list */
  items: WiFiNetwork[];
  /** Total data count */
  total: number;
  /** Offset, starting from 0 */
  offset: number;
  /** Number per page, 0 means no limit */
  limit: number;
}

export function pagedResultWiFiNetworkDeserializer(
  item: any,
): PagedResultWiFiNetwork {
  return {
    items: wiFiNetworkArrayDeserializer(item["items"]),
    total: item["total"],
    offset: item["offset"],
    limit: item["limit"],
  };
}

export function wiFiNetworkArrayDeserializer(
  result: Array<WiFiNetwork>,
): any[] {
  return result.map((item) => {
    return wiFiNetworkDeserializer(item);
  });
}

/** model interface WiFiNetwork */
export interface WiFiNetwork {
  /** The unique identifier of the WiFi network */
  readonly id: string;
  /** The SSID of the WiFi network */
  ssid: string;
  /** The BSSID of the WiFi network */
  bssid: string;
  /** The security type of the WiFi network */
  security: WiFiSecurityType;
  /** The signal strength in dBm */
  signalStrength: number;
  /** The WiFi frequency band */
  band: WiFiBand;
  /** The WiFi channel */
  channel: number;
  /** Whether the network is hidden */
  hidden: boolean;
  /** Whether this network is the currently connected one */
  isConnected: boolean;
  /** Whether this network has a saved configuration */
  isSaved: boolean;
  /** The timestamp when the network was last seen */
  readonly lastSeen: any;
}

export function wiFiNetworkDeserializer(item: any): WiFiNetwork {
  return {
    id: item["id"],
    ssid: item["ssid"],
    bssid: item["bssid"],
    security: item["security"],
    signalStrength: item["signalStrength"],
    band: item["band"],
    channel: item["channel"],
    hidden: item["hidden"],
    isConnected: item["isConnected"],
    isSaved: item["isSaved"],
    lastSeen: item["lastSeen"],
  };
}

/** WiFi security type enum values */
export type WiFiSecurityType = "none" | "wep" | "wpa" | "wpa2" | "wpa3";
/** WiFi frequency band enum values */
export type WiFiBand = "mixed" | "2_4GHz" | "5GHz" | "6GHz";

/**
 * Generic pagination response model
 * All list interface return types should inherit from this model
 */
export interface PagedResultWiFiConfig {
  /** Data list */
  items: WiFiConfig[];
  /** Total data count */
  total: number;
  /** Offset, starting from 0 */
  offset: number;
  /** Number per page, 0 means no limit */
  limit: number;
}

export function pagedResultWiFiConfigDeserializer(
  item: any,
): PagedResultWiFiConfig {
  return {
    items: wiFiConfigArrayDeserializer(item["items"]),
    total: item["total"],
    offset: item["offset"],
    limit: item["limit"],
  };
}

export function wiFiConfigArraySerializer(result: Array<WiFiConfig>): any[] {
  return result.map((item) => {
    return wiFiConfigSerializer(item);
  });
}

export function wiFiConfigArrayDeserializer(result: Array<WiFiConfig>): any[] {
  return result.map((item) => {
    return wiFiConfigDeserializer(item);
  });
}

/** model interface WiFiConfig */
export interface WiFiConfig {
  /** The unique identifier of the WiFi configuration */
  readonly id: string;
  /** The SSID of the WiFi network to connect to */
  ssid: string;
  /** The security type of the WiFi network */
  security: WiFiSecurityType;
  /** The password for the WiFi network (required for secured networks). encrypted depends security type */
  password?: string;
  /** Whether to connect automatically */
  autoConnect: boolean;
  /** Whether this is a hidden network */
  hidden: boolean;
  /** The current connection status of this configuration */
  status: WiFiConnectionStatus;
  /** The timestamp when the configuration was created */
  readonly createdAt: any;
  /** The timestamp when the configuration was last updated */
  readonly updatedAt: any;
}

export function wiFiConfigSerializer(item: WiFiConfig): any {
  return {
    ssid: item["ssid"],
    security: item["security"],
    password: item["password"],
    autoConnect: item["autoConnect"],
    hidden: item["hidden"],
    status: item["status"],
  };
}

export function wiFiConfigDeserializer(item: any): WiFiConfig {
  return {
    id: item["id"],
    ssid: item["ssid"],
    security: item["security"],
    password: item["password"],
    autoConnect: item["autoConnect"],
    hidden: item["hidden"],
    status: item["status"],
    createdAt: item["createdAt"],
    updatedAt: item["updatedAt"],
  };
}

/** WiFi connection status enum values */
export type WiFiConnectionStatus =
  | "disconnected"
  | "connecting"
  | "connected"
  | "disconnecting"
  | "error";

/** model interface WiFiConnectRequest */
export interface WiFiConnectRequest {
  /** The password for the WiFi network (required for secured networks) */
  password?: string;
  /** Whether to save this configuration for future use */
  saveConfiguration: boolean;
}

export function wiFiConnectRequestSerializer(item: WiFiConnectRequest): any {
  return {
    password: item["password"],
    saveConfiguration: item["saveConfiguration"],
  };
}
