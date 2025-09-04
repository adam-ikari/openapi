// Licensed under the MIT License.

import { OpenApiV2Context as Client } from "../index.js";
import {
  Email,
  emailSerializer,
  emailDeserializer,
  errorDeserializer,
  _PagedResultEmailGroup,
  _pagedResultEmailGroupDeserializer,
  EmailGroup,
  emailGroupSerializer,
  emailGroupDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  EmailsGroupApiDeleteOptionalParams,
  EmailsGroupApiUpdateOptionalParams,
  EmailsGroupApiCreateOptionalParams,
  EmailsGroupApiReadOptionalParams,
  EmailsGroupApiListOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _$deleteSend(
  context: Client,
  id: string,
  options: EmailsGroupApiDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/email-groups/{id}",
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

/** Delete a email group */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  id: string,
  options: EmailsGroupApiDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, id, options);
  return _$deleteDeserialize(result);
}

export function _updateSend(
  context: Client,
  id: string,
  body: EmailGroup,
  options: EmailsGroupApiUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/email-groups/{id}",
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
      body: emailGroupSerializer(body),
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

/** Update a email group */
export async function update(
  context: Client,
  id: string,
  body: EmailGroup,
  options: EmailsGroupApiUpdateOptionalParams = { requestOptions: {} },
): Promise<Email> {
  const result = await _updateSend(context, id, body, options);
  return _updateDeserialize(result);
}

export function _createSend(
  context: Client,
  body: Email,
  options: EmailsGroupApiCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/api/v2/email-groups")
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

/** Create a email group */
export async function create(
  context: Client,
  body: Email,
  options: EmailsGroupApiCreateOptionalParams = { requestOptions: {} },
): Promise<Email> {
  const result = await _createSend(context, body, options);
  return _createDeserialize(result);
}

export function _readSend(
  context: Client,
  id: string,
  options: EmailsGroupApiReadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/email-groups/{id}",
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
): Promise<EmailGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return emailGroupDeserializer(result.body);
}

/** Read a email group */
export async function read(
  context: Client,
  id: string,
  options: EmailsGroupApiReadOptionalParams = { requestOptions: {} },
): Promise<EmailGroup> {
  const result = await _readSend(context, id, options);
  return _readDeserialize(result);
}

export function _listSend(
  context: Client,
  options: EmailsGroupApiListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/email-groups{?offset,limit}",
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
): Promise<_PagedResultEmailGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedResultEmailGroupDeserializer(result.body);
}

/** List email groups */
export function list(
  context: Client,
  options: EmailsGroupApiListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<EmailGroup> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "items" },
  );
}
