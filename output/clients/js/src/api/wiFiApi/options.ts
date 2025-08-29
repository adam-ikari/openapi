// Licensed under the MIT License.

import { WiFiConnectRequest } from "../../models/models.js";
import { OperationOptions } from "@typespec/ts-http-runtime";

/** Optional parameters. */
export interface WiFiApiGetStatusOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WiFiApiDisconnectOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WiFiApiConnectNetworkOptionalParams extends OperationOptions {
  /** Connection parameters */
  body?: WiFiConnectRequest;
}

/** Optional parameters. */
export interface WiFiApiDeleteConfigOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WiFiApiUpdateConfigOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WiFiApiCreateConfigOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WiFiApiGetConfigOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WiFiApiListConfigsOptionalParams extends OperationOptions {
  /** 偏移量，从0开始，默认为0 */
  offset?: number;
  /** 每页数量，0表示不限制，默认为10 */
  limit?: number;
}

/** Optional parameters. */
export interface WiFiApiGetNetworkOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WiFiApiScanNetworksOptionalParams extends OperationOptions {
  /** 偏移量，从0开始，默认为0 */
  offset?: number;
  /** 每页数量，0表示不限制，默认为10 */
  limit?: number;
}
