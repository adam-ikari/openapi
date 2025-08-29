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
  /** 偏移量，从0开始，默认为0 */
  offset?: number;
  /** 每页数量，0表示不限制，默认为10 */
  limit?: number;
}
