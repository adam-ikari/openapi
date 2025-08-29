// Licensed under the MIT License.

import { OperationOptions } from "@typespec/ts-http-runtime";

/** Optional parameters. */
export interface WiFiApiDisconnectOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WiFiApiConnectOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WiFiApiDeleteConfigOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WiFiApiUpdateConfigOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WiFiApiCreateConfigOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WiFiApiReadConfigOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WiFiApiListConfigsOptionalParams extends OperationOptions {
  /** Offset, starting from 0, default is 0 */
  offset?: number;
  /** Number per page, 0 means no limit, default is 10 */
  limit?: number;
}

/** Optional parameters. */
export interface WiFiApiReadNetworkOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WiFiApiListNetworksOptionalParams extends OperationOptions {
  /** Offset, starting from 0, default is 0 */
  offset?: number;
  /** Number per page, 0 means no limit, default is 10 */
  limit?: number;
}
