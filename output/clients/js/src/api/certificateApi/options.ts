// Licensed under the MIT License.

import { OperationOptions } from "@typespec/ts-http-runtime";

/** Optional parameters. */
export interface CertificateApiDeleteCertificateOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface CertificateApiGetCertificateOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface CertificateApiListCertificatesOptionalParams
  extends OperationOptions {
  /** 偏移量，从0开始，默认为0 */
  offset?: number;
  /** 每页数量，0表示不限制，默认为10 */
  limit?: number;
}

/** Optional parameters. */
export interface CertificateApiUploadCertificateOptionalParams
  extends OperationOptions {}
