// Licensed under the MIT License.

import { OperationOptions } from "@typespec/ts-http-runtime";

/** Optional parameters. */
export interface UsersApiDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface UsersApiUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface UsersApiCreateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface UsersApiReadOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface UsersApiListOptionalParams extends OperationOptions {
  /** Offset, starting from 0, default is 0 */
  offset?: number;
  /** Number per page, 0 means no limit, default is 10 */
  limit?: number;
}
