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
  /** Offset, starting from 0, default is 0 */
  offset?: number;
  /** Number per page, 0 means no limit, default is 10 */
  limit?: number;
}
