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
  /** The offset of the list, 0 means no offset, default is 0 */
  offset?: number;
  /** The limit of the list, 0 means no limit, default is 10 */
  limit?: number;
}
