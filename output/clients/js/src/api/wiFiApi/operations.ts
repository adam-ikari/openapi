// Licensed under the MIT License.

import { OpenApiV2Context as Client } from "../index.js";
import {
  errorDeserializer,
  WiFiNetworkList,
  wiFiNetworkListDeserializer,
  WiFiNetwork,
  wiFiNetworkDeserializer,
  WiFiConfigList,
  wiFiConfigListDeserializer,
  WiFiConfig,
  wiFiConfigSerializer,
  wiFiConfigDeserializer,
  WiFiConnectionStatus,
  wiFiConnectRequestSerializer,
  _connectNetworkResponseDeserializer,
  _disconnectResponseDeserializer,
  _getStatusResponseDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  WiFiApiGetStatusOptionalParams,
  WiFiApiDisconnectOptionalParams,
  WiFiApiConnectNetworkOptionalParams,
  WiFiApiDeleteConfigOptionalParams,
  WiFiApiUpdateConfigOptionalParams,
  WiFiApiCreateConfigOptionalParams,
  WiFiApiGetConfigOptionalParams,
  WiFiApiListConfigsOptionalParams,
  WiFiApiGetNetworkOptionalParams,
  WiFiApiScanNetworksOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _getStatusSend(
  context: Client,
  options: WiFiApiGetStatusOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/api/v2/wifi/status")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getStatusDeserialize(
  result: PathUncheckedResponse,
): Promise<{
  status: WiFiConnectionStatus;
  connectedNetwork?: WiFiNetwork;
  message: string;
}> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return _getStatusResponseDeserializer(result.body);
}

/** Get current WiFi connection status */
export async function getStatus(
  context: Client,
  options: WiFiApiGetStatusOptionalParams = { requestOptions: {} },
): Promise<{
  status: WiFiConnectionStatus;
  connectedNetwork?: WiFiNetwork;
  message: string;
}> {
  const result = await _getStatusSend(context, options);
  return _getStatusDeserialize(result);
}

export function _disconnectSend(
  context: Client,
  options: WiFiApiDisconnectOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/api/v2/wifi/disconnect")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _disconnectDeserialize(
  result: PathUncheckedResponse,
): Promise<{
  success: boolean;
  message: string;
  status: WiFiConnectionStatus;
}> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return _disconnectResponseDeserializer(result.body);
}

/** Disconnect from current WiFi network */
export async function disconnect(
  context: Client,
  options: WiFiApiDisconnectOptionalParams = { requestOptions: {} },
): Promise<{
  success: boolean;
  message: string;
  status: WiFiConnectionStatus;
}> {
  const result = await _disconnectSend(context, options);
  return _disconnectDeserialize(result);
}

export function _connectNetworkSend(
  context: Client,
  id: string,
  options: WiFiApiConnectNetworkOptionalParams = { requestOptions: {} },
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
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: !options["body"]
        ? options["body"]
        : wiFiConnectRequestSerializer(options["body"]),
    });
}

export async function _connectNetworkDeserialize(
  result: PathUncheckedResponse,
): Promise<{
  success: boolean;
  message: string;
  status: WiFiConnectionStatus;
}> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return _connectNetworkResponseDeserializer(result.body);
}

/** Connect to a WiFi network */
export async function connectNetwork(
  context: Client,
  id: string,
  options: WiFiApiConnectNetworkOptionalParams = { requestOptions: {} },
): Promise<{
  success: boolean;
  message: string;
  status: WiFiConnectionStatus;
}> {
  const result = await _connectNetworkSend(context, id, options);
  return _connectNetworkDeserialize(result);
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
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteConfigDeserialize(
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

/** Delete a WiFi configuration */
export async function deleteConfig(
  context: Client,
  id: string,
  options: WiFiApiDeleteConfigOptionalParams = { requestOptions: {} },
): Promise<void> {
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

/** Update a WiFi configuration */
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

/** Create a WiFi configuration */
export async function createConfig(
  context: Client,
  body: WiFiConfig,
  options: WiFiApiCreateConfigOptionalParams = { requestOptions: {} },
): Promise<WiFiConfig> {
  const result = await _createConfigSend(context, body, options);
  return _createConfigDeserialize(result);
}

export function _getConfigSend(
  context: Client,
  id: string,
  options: WiFiApiGetConfigOptionalParams = { requestOptions: {} },
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

export async function _getConfigDeserialize(
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

/** Get a specific WiFi configuration */
export async function getConfig(
  context: Client,
  id: string,
  options: WiFiApiGetConfigOptionalParams = { requestOptions: {} },
): Promise<WiFiConfig> {
  const result = await _getConfigSend(context, id, options);
  return _getConfigDeserialize(result);
}

export function _listConfigsSend(
  context: Client,
  offset: number,
  limit: number,
  options: WiFiApiListConfigsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/wifi/configs{?offset,limit}",
    {
      offset: offset,
      limit: limit,
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
): Promise<WiFiConfigList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return wiFiConfigListDeserializer(result.body);
}

/** List WiFi configurations */
export async function listConfigs(
  context: Client,
  offset: number,
  limit: number,
  options: WiFiApiListConfigsOptionalParams = { requestOptions: {} },
): Promise<WiFiConfigList> {
  const result = await _listConfigsSend(context, offset, limit, options);
  return _listConfigsDeserialize(result);
}

export function _getNetworkSend(
  context: Client,
  id: string,
  options: WiFiApiGetNetworkOptionalParams = { requestOptions: {} },
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

export async function _getNetworkDeserialize(
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

/** Get details of a specific WiFi network */
export async function getNetwork(
  context: Client,
  id: string,
  options: WiFiApiGetNetworkOptionalParams = { requestOptions: {} },
): Promise<WiFiNetwork> {
  const result = await _getNetworkSend(context, id, options);
  return _getNetworkDeserialize(result);
}

export function _scanNetworksSend(
  context: Client,
  force: boolean,
  options: WiFiApiScanNetworksOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/api/v2/wifi/networks{?force}",
    {
      force: force,
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

export async function _scanNetworksDeserialize(
  result: PathUncheckedResponse,
): Promise<WiFiNetworkList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return wiFiNetworkListDeserializer(result.body);
}

/** Scan for available WiFi networks */
export async function scanNetworks(
  context: Client,
  force: boolean,
  options: WiFiApiScanNetworksOptionalParams = { requestOptions: {} },
): Promise<WiFiNetworkList> {
  const result = await _scanNetworksSend(context, force, options);
  return _scanNetworksDeserialize(result);
}
