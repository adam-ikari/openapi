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
  /** 偏移量，从0开始，默认为0 */
  offset?: number;
  /** 每页数量，0表示不限制，默认为10 */
  limit?: number;
}
