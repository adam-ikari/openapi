// Licensed under the MIT License.

import { OpenApiV2Context as Client } from "../index.js";
import {
  Email,
  emailSerializer,
  emailDeserializer,
  errorDeserializer,
  _PagedResultEmail,
  _pagedResultEmailDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  EmailsApiDeleteOptionalParams,
  EmailsApiUpdateOptionalParams,
  EmailsApiCreateOptionalParams,
  EmailsApiReadOptionalParams,
  EmailsApiListOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _$deleteSend(
  context: Client,
  id: number,
  options: EmailsApiDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/emails/{id}",
    {
      id: id,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a emails */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  id: number,
  options: EmailsApiDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, id, options);
  return _$deleteDeserialize(result);
}

export function _updateSend(
  context: Client,
  id: number,
  body: Email,
  options: EmailsApiUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/emails/{id}",
    {
      id: id,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: emailSerializer(body),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<Email> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return emailDeserializer(result.body);
}

/** Update a emails */
export async function update(
  context: Client,
  id: number,
  body: Email,
  options: EmailsApiUpdateOptionalParams = { requestOptions: {} },
): Promise<Email> {
  const result = await _updateSend(context, id, body, options);
  return _updateDeserialize(result);
}

export function _createSend(
  context: Client,
  body: Email,
  options: EmailsApiCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/api/v2/emails")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: emailSerializer(body),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<Email> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return emailDeserializer(result.body);
}

/** Create a emails */
export async function create(
  context: Client,
  body: Email,
  options: EmailsApiCreateOptionalParams = { requestOptions: {} },
): Promise<Email> {
  const result = await _createSend(context, body, options);
  return _createDeserialize(result);
}

export function _readSend(
  context: Client,
  id: number,
  options: EmailsApiReadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/emails/{id}",
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

export async function _readDeserialize(
  result: PathUncheckedResponse,
): Promise<Email> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return emailDeserializer(result.body);
}

/** Read emails */
export async function read(
  context: Client,
  id: number,
  options: EmailsApiReadOptionalParams = { requestOptions: {} },
): Promise<Email> {
  const result = await _readSend(context, id, options);
  return _readDeserialize(result);
}

export function _listSend(
  context: Client,
  options: EmailsApiListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/emails{?offset,limit}",
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

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedResultEmail> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedResultEmailDeserializer(result.body);
}

/** List emails */
export function list(
  context: Client,
  options: EmailsApiListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Email> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "items" },
  );
}
