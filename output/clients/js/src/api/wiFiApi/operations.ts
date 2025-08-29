// Licensed under the MIT License.

import { OpenApiV2Context as Client } from "../index.js";
import {
  errorDeserializer,
  PagedResultWiFiNetwork,
  pagedResultWiFiNetworkDeserializer,
  WiFiNetwork,
  wiFiNetworkDeserializer,
  PagedResultWiFiConfig,
  pagedResultWiFiConfigDeserializer,
  WiFiConfig,
  wiFiConfigSerializer,
  wiFiConfigDeserializer,
  WiFiConnectRequest,
  wiFiConnectRequestSerializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  WiFiApiDisconnectOptionalParams,
  WiFiApiConnectOptionalParams,
  WiFiApiDeleteConfigOptionalParams,
  WiFiApiUpdateConfigOptionalParams,
  WiFiApiCreateConfigOptionalParams,
  WiFiApiReadConfigOptionalParams,
  WiFiApiListConfigsOptionalParams,
  WiFiApiReadNetworkOptionalParams,
  WiFiApiListNetworksOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _disconnectSend(
  context: Client,
  id: string,
  options: WiFiApiDisconnectOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/wifi/networks/{id}/disconnect",
    {
      id: id,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "text/plain", ...options.requestOptions?.headers },
    });
}

export async function _disconnectDeserialize(
  result: PathUncheckedResponse,
): Promise<boolean> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return result.body;
}

/** Disconnect from WiFi network */
export async function disconnect(
  context: Client,
  id: string,
  options: WiFiApiDisconnectOptionalParams = { requestOptions: {} },
): Promise<boolean> {
  const result = await _disconnectSend(context, id, options);
  return _disconnectDeserialize(result);
}

export function _connectSend(
  context: Client,
  id: string,
  body: WiFiConnectRequest,
  options: WiFiApiConnectOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/wifi/networks/{id}/connect",
    {
      id: id,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "text/plain", ...options.requestOptions?.headers },
      body: wiFiConnectRequestSerializer(body),
    });
}

export async function _connectDeserialize(
  result: PathUncheckedResponse,
): Promise<boolean> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return result.body;
}

/** Connect to WiFi network */
export async function connect(
  context: Client,
  id: string,
  body: WiFiConnectRequest,
  options: WiFiApiConnectOptionalParams = { requestOptions: {} },
): Promise<boolean> {
  const result = await _connectSend(context, id, body, options);
  return _connectDeserialize(result);
}

export function _deleteConfigSend(
  context: Client,
  id: string,
  options: WiFiApiDeleteConfigOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/wifi/configs/{id}",
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

export async function _deleteConfigDeserialize(
  result: PathUncheckedResponse,
): Promise<WiFiConfig> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return wiFiConfigDeserializer(result.body);
}

/** Delete WiFi configuration */
export async function deleteConfig(
  context: Client,
  id: string,
  options: WiFiApiDeleteConfigOptionalParams = { requestOptions: {} },
): Promise<WiFiConfig> {
  const result = await _deleteConfigSend(context, id, options);
  return _deleteConfigDeserialize(result);
}

export function _updateConfigSend(
  context: Client,
  id: string,
  body: WiFiConfig,
  options: WiFiApiUpdateConfigOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/wifi/configs/{id}",
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
      body: wiFiConfigSerializer(body),
    });
}

export async function _updateConfigDeserialize(
  result: PathUncheckedResponse,
): Promise<WiFiConfig> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return wiFiConfigDeserializer(result.body);
}

/** Update WiFi configuration */
export async function updateConfig(
  context: Client,
  id: string,
  body: WiFiConfig,
  options: WiFiApiUpdateConfigOptionalParams = { requestOptions: {} },
): Promise<WiFiConfig> {
  const result = await _updateConfigSend(context, id, body, options);
  return _updateConfigDeserialize(result);
}

export function _createConfigSend(
  context: Client,
  body: WiFiConfig,
  options: WiFiApiCreateConfigOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/api/v2/wifi/configs")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: wiFiConfigSerializer(body),
    });
}

export async function _createConfigDeserialize(
  result: PathUncheckedResponse,
): Promise<WiFiConfig> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return wiFiConfigDeserializer(result.body);
}

/** Create WiFi configuration */
export async function createConfig(
  context: Client,
  body: WiFiConfig,
  options: WiFiApiCreateConfigOptionalParams = { requestOptions: {} },
): Promise<WiFiConfig> {
  const result = await _createConfigSend(context, body, options);
  return _createConfigDeserialize(result);
}

export function _readConfigSend(
  context: Client,
  id: string,
  options: WiFiApiReadConfigOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/wifi/configs/{id}",
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

export async function _readConfigDeserialize(
  result: PathUncheckedResponse,
): Promise<WiFiConfig> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return wiFiConfigDeserializer(result.body);
}

/** Read WiFi configuration */
export async function readConfig(
  context: Client,
  id: string,
  options: WiFiApiReadConfigOptionalParams = { requestOptions: {} },
): Promise<WiFiConfig> {
  const result = await _readConfigSend(context, id, options);
  return _readConfigDeserialize(result);
}

export function _listConfigsSend(
  context: Client,
  options: WiFiApiListConfigsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/wifi/configs{?offset,limit}",
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

export async function _listConfigsDeserialize(
  result: PathUncheckedResponse,
): Promise<PagedResultWiFiConfig> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return pagedResultWiFiConfigDeserializer(result.body);
}

/** List WiFi configurations */
export async function listConfigs(
  context: Client,
  options: WiFiApiListConfigsOptionalParams = { requestOptions: {} },
): Promise<PagedResultWiFiConfig> {
  const result = await _listConfigsSend(context, options);
  return _listConfigsDeserialize(result);
}

export function _readNetworkSend(
  context: Client,
  id: string,
  options: WiFiApiReadNetworkOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/wifi/networks/{id}",
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

export async function _readNetworkDeserialize(
  result: PathUncheckedResponse,
): Promise<WiFiNetwork> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return wiFiNetworkDeserializer(result.body);
}

/** Read WiFi network */
export async function readNetwork(
  context: Client,
  id: string,
  options: WiFiApiReadNetworkOptionalParams = { requestOptions: {} },
): Promise<WiFiNetwork> {
  const result = await _readNetworkSend(context, id, options);
  return _readNetworkDeserialize(result);
}

export function _listNetworksSend(
  context: Client,
  options: WiFiApiListNetworksOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/wifi/networks{?offset,limit}",
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

export async function _listNetworksDeserialize(
  result: PathUncheckedResponse,
): Promise<PagedResultWiFiNetwork> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return pagedResultWiFiNetworkDeserializer(result.body);
}

/** List WiFi networks */
export async function listNetworks(
  context: Client,
  options: WiFiApiListNetworksOptionalParams = { requestOptions: {} },
): Promise<PagedResultWiFiNetwork> {
  const result = await _listNetworksSend(context, options);
  return _listNetworksDeserialize(result);
}
