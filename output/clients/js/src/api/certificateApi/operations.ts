// Licensed under the MIT License.

import { OpenApiV2Context as Client } from "../index.js";
import {
  errorDeserializer,
  _uploadCertificateRequestSerializer,
  _uploadCertificateResponseDeserializer,
  _PagedResultCertificateInfo,
  _pagedResultCertificateInfoDeserializer,
  CertificateInfo,
  certificateInfoDeserializer,
  _deleteCertificateResponseDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  CertificateApiDeleteCertificateOptionalParams,
  CertificateApiGetCertificateOptionalParams,
  CertificateApiListCertificatesOptionalParams,
  CertificateApiUploadCertificateOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _deleteCertificateSend(
  context: Client,
  id: string,
  options: CertificateApiDeleteCertificateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/certificates/certificates/{id}",
    {
      id: id,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _deleteCertificateDeserialize(
  result: PathUncheckedResponse,
): Promise<{
  success: boolean;
  message: string;
}> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return _deleteCertificateResponseDeserializer(result.body);
}

/** Delete a certificate */
export async function deleteCertificate(
  context: Client,
  id: string,
  options: CertificateApiDeleteCertificateOptionalParams = {
    requestOptions: {},
  },
): Promise<{
  success: boolean;
  message: string;
}> {
  const result = await _deleteCertificateSend(context, id, options);
  return _deleteCertificateDeserialize(result);
}

export function _getCertificateSend(
  context: Client,
  id: string,
  options: CertificateApiGetCertificateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/certificates/certificates/{id}",
    {
      id: id,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getCertificateDeserialize(
  result: PathUncheckedResponse,
): Promise<CertificateInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return certificateInfoDeserializer(result.body);
}

/** Get a specific certificate */
export async function getCertificate(
  context: Client,
  id: string,
  options: CertificateApiGetCertificateOptionalParams = { requestOptions: {} },
): Promise<CertificateInfo> {
  const result = await _getCertificateSend(context, id, options);
  return _getCertificateDeserialize(result);
}

export function _listCertificatesSend(
  context: Client,
  options: CertificateApiListCertificatesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/certificates/certificates{?offset,limit}",
    {
      offset: options?.offset,
      limit: options?.limit,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listCertificatesDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedResultCertificateInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedResultCertificateInfoDeserializer(result.body);
}

/** List certificates */
export function listCertificates(
  context: Client,
  options: CertificateApiListCertificatesOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CertificateInfo> {
  return buildPagedAsyncIterator(
    context,
    () => _listCertificatesSend(context, options),
    _listCertificatesDeserialize,
    ["200"],
    { itemName: "items" },
  );
}

export function _uploadCertificateSend(
  context: Client,
  body: {
    file: __PLACEHOLDER_o88__;
    name?: string;
    description?: string;
  },
  options: CertificateApiUploadCertificateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/api/v2/certificates/certificates")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: contentType,
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: _uploadCertificateRequestSerializer(body),
    });
}

export async function _uploadCertificateDeserialize(
  result: PathUncheckedResponse,
): Promise<{
  success: boolean;
  certificateId: string;
  message: string;
}> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return _uploadCertificateResponseDeserializer(result.body);
}

/** Upload a certificate file for WiFi authentication */
export async function uploadCertificate(
  context: Client,
  body: {
    file: __PLACEHOLDER_o88__;
    name?: string;
    description?: string;
  },
  options: CertificateApiUploadCertificateOptionalParams = {
    requestOptions: {},
  },
): Promise<{
  success: boolean;
  certificateId: string;
  message: string;
}> {
  const result = await _uploadCertificateSend(context, body, options);
  return _uploadCertificateDeserialize(result);
}
