// Licensed under the MIT License.

import { OpenApiV2Context } from "../../api/openApiV2Context.js";
import {
  deleteCertificate,
  getCertificate,
  listCertificates,
  uploadCertificate,
} from "../../api/certificateApi/operations.js";
import {
  CertificateApiDeleteCertificateOptionalParams,
  CertificateApiGetCertificateOptionalParams,
  CertificateApiListCertificatesOptionalParams,
  CertificateApiUploadCertificateOptionalParams,
} from "../../api/certificateApi/options.js";
import {
  PagedResultCertificateInfo,
  CertificateInfo,
} from "../../models/models.js";

/** Interface representing a CertificateApi operations. */
export interface CertificateApiOperations {
  /** Delete a certificate */
  deleteCertificate: (
    id: string,
    options?: CertificateApiDeleteCertificateOptionalParams,
  ) => Promise<{
    success: boolean;
    message: string;
  }>;
  /** Get a specific certificate */
  getCertificate: (
    id: string,
    options?: CertificateApiGetCertificateOptionalParams,
  ) => Promise<CertificateInfo>;
  /** List certificates */
  listCertificates: (
    options?: CertificateApiListCertificatesOptionalParams,
  ) => Promise<PagedResultCertificateInfo>;
  /** Upload a certificate file for WiFi authentication */
  uploadCertificate: (
    body: {
      file: __PLACEHOLDER_o88__;
      name?: string;
      description?: string;
    },
    options?: CertificateApiUploadCertificateOptionalParams,
  ) => Promise<{
    success: boolean;
    certificateId: string;
    message: string;
  }>;
}

function _getCertificateApi(context: OpenApiV2Context) {
  return {
    deleteCertificate: (
      id: string,
      options?: CertificateApiDeleteCertificateOptionalParams,
    ) => deleteCertificate(context, id, options),
    getCertificate: (
      id: string,
      options?: CertificateApiGetCertificateOptionalParams,
    ) => getCertificate(context, id, options),
    listCertificates: (
      options?: CertificateApiListCertificatesOptionalParams,
    ) => listCertificates(context, options),
    uploadCertificate: (
      body: {
        file: __PLACEHOLDER_o88__;
        name?: string;
        description?: string;
      },
      options?: CertificateApiUploadCertificateOptionalParams,
    ) => uploadCertificate(context, body, options),
  };
}

export function _getCertificateApiOperations(
  context: OpenApiV2Context,
): CertificateApiOperations {
  return {
    ..._getCertificateApi(context),
  };
}
