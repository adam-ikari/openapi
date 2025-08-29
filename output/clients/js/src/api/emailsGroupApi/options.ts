// Licensed under the MIT License.

import { OperationOptions } from "@typespec/ts-http-runtime";

/** Optional parameters. */
export interface EmailsGroupApiDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EmailsGroupApiUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EmailsGroupApiCreateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EmailsGroupApiReadOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EmailsGroupApiListOptionalParams extends OperationOptions {
  /** 偏移量，从0开始，默认为0 */
  offset?: number;
  /** 每页数量，0表示不限制，默认为10 */
  limit?: number;
}
