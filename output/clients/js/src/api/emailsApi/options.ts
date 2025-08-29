// Licensed under the MIT License.

import { OperationOptions } from "@typespec/ts-http-runtime";

/** Optional parameters. */
export interface EmailsApiDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EmailsApiUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EmailsApiCreateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EmailsApiReadOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EmailsApiListOptionalParams extends OperationOptions {
  /** Offset, starting from 0, default is 0 */
  offset?: number;
  /** Number per page, 0 means no limit, default is 10 */
  limit?: number;
}
