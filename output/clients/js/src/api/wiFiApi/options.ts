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
  /** offset, default 0 */
  offset?: number;
  /** limit, default 100 */
  limit?: number;
}

/** Optional parameters. */
export interface WiFiApiGetNetworkOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WiFiApiScanNetworksOptionalParams extends OperationOptions {
  /** offset, default 0 */
  offset?: number;
  /** limit, default 100 */
  limit?: number;
}
