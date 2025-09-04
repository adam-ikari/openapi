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
  /** offset, default 0 */
  offset?: number;
  /** limit, default 100 */
  limit?: number;
}
