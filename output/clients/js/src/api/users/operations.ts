// Licensed under the MIT License.

import { OpenApiServiceContext as Client } from "../index.js";
import {
  UserList,
  userListDeserializer,
  User,
  userSerializer,
  userDeserializer,
  errorDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  UsersDeleteOptionalParams,
  UsersUpdateOptionalParams,
  UsersCreateOptionalParams,
  UsersReadOptionalParams,
  UsersListOptionalParams,
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
  options: UsersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/users/{id}",
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

/** Delete a widget */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  id: string,
  options: UsersDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, id, options);
  return _$deleteDeserialize(result);
}

export function _updateSend(
  context: Client,
  id: string,
  body: User,
  options: UsersUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/users/{id}",
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
      body: userSerializer(body),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<User> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return userDeserializer(result.body);
}

/** Update a widget */
export async function update(
  context: Client,
  id: string,
  body: User,
  options: UsersUpdateOptionalParams = { requestOptions: {} },
): Promise<User> {
  const result = await _updateSend(context, id, body, options);
  return _updateDeserialize(result);
}

export function _createSend(
  context: Client,
  body: User,
  options: UsersCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/users")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: userSerializer(body),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<User> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return userDeserializer(result.body);
}

/** Create a widget */
export async function create(
  context: Client,
  body: User,
  options: UsersCreateOptionalParams = { requestOptions: {} },
): Promise<User> {
  const result = await _createSend(context, body, options);
  return _createDeserialize(result);
}

export function _readSend(
  context: Client,
  id: string,
  options: UsersReadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/users/{id}",
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
): Promise<User> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return userDeserializer(result.body);
}

/** Read widgets */
export async function read(
  context: Client,
  id: string,
  options: UsersReadOptionalParams = { requestOptions: {} },
): Promise<User> {
  const result = await _readSend(context, id, options);
  return _readDeserialize(result);
}

export function _listSend(
  context: Client,
  options: UsersListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/users")
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
): Promise<UserList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return userListDeserializer(result.body);
}

/** List widgets */
export async function list(
  context: Client,
  options: UsersListOptionalParams = { requestOptions: {} },
): Promise<UserList> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}
