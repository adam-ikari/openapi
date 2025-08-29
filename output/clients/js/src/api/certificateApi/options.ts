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
  /** offset, default 0 */
  offset?: number;
  /** limit, default 10 */
  limit?: number;
}

/** Optional parameters. */
export interface CertificateApiUploadCertificateOptionalParams
  extends OperationOptions {}
