// Licensed under the MIT License.

import { OpenApiV2Context } from "../../api/openApiV2Context.js";
import {
  getStatus,
  disconnect,
  connectNetwork,
  deleteConfig,
  updateConfig,
  createConfig,
  getConfig,
  listConfigs,
  getNetwork,
  scanNetworks,
} from "../../api/wiFiApi/operations.js";
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
} from "../../api/wiFiApi/options.js";
import {
  WiFiNetworkList,
  WiFiNetwork,
  WiFiConfigList,
  WiFiConfig,
  WiFiConnectionStatus,
} from "../../models/models.js";

/** Interface representing a WiFiApi operations. */
export interface WiFiApiOperations {
  /** Get current WiFi connection status */
  getStatus: (options?: WiFiApiGetStatusOptionalParams) => Promise<{
    status: WiFiConnectionStatus;
    connectedNetwork?: WiFiNetwork;
    message: string;
  }>;
  /** Disconnect from current WiFi network */
  disconnect: (options?: WiFiApiDisconnectOptionalParams) => Promise<{
    success: boolean;
    message: string;
    status: WiFiConnectionStatus;
  }>;
  /** Connect to a WiFi network */
  connectNetwork: (
    id: string,
    options?: WiFiApiConnectNetworkOptionalParams,
  ) => Promise<{
    success: boolean;
    message: string;
    status: WiFiConnectionStatus;
  }>;
  /** Delete a WiFi configuration */
  deleteConfig: (
    id: string,
    options?: WiFiApiDeleteConfigOptionalParams,
  ) => Promise<void>;
  /** Update a WiFi configuration */
  updateConfig: (
    id: string,
    body: WiFiConfig,
    options?: WiFiApiUpdateConfigOptionalParams,
  ) => Promise<WiFiConfig>;
  /** Create a WiFi configuration */
  createConfig: (
    body: WiFiConfig,
    options?: WiFiApiCreateConfigOptionalParams,
  ) => Promise<WiFiConfig>;
  /** Get a specific WiFi configuration */
  getConfig: (
    id: string,
    options?: WiFiApiGetConfigOptionalParams,
  ) => Promise<WiFiConfig>;
  /** List WiFi configurations */
  listConfigs: (
    offset: number,
    limit: number,
    options?: WiFiApiListConfigsOptionalParams,
  ) => Promise<WiFiConfigList>;
  /** Get details of a specific WiFi network */
  getNetwork: (
    id: string,
    options?: WiFiApiGetNetworkOptionalParams,
  ) => Promise<WiFiNetwork>;
  /** Scan for available WiFi networks */
  scanNetworks: (
    force: boolean,
    options?: WiFiApiScanNetworksOptionalParams,
  ) => Promise<WiFiNetworkList>;
}

function _getWiFiApi(context: OpenApiV2Context) {
  return {
    getStatus: (options?: WiFiApiGetStatusOptionalParams) =>
      getStatus(context, options),
    disconnect: (options?: WiFiApiDisconnectOptionalParams) =>
      disconnect(context, options),
    connectNetwork: (
      id: string,
      options?: WiFiApiConnectNetworkOptionalParams,
    ) => connectNetwork(context, id, options),
    deleteConfig: (id: string, options?: WiFiApiDeleteConfigOptionalParams) =>
      deleteConfig(context, id, options),
    updateConfig: (
      id: string,
      body: WiFiConfig,
      options?: WiFiApiUpdateConfigOptionalParams,
    ) => updateConfig(context, id, body, options),
    createConfig: (
      body: WiFiConfig,
      options?: WiFiApiCreateConfigOptionalParams,
    ) => createConfig(context, body, options),
    getConfig: (id: string, options?: WiFiApiGetConfigOptionalParams) =>
      getConfig(context, id, options),
    listConfigs: (
      offset: number,
      limit: number,
      options?: WiFiApiListConfigsOptionalParams,
    ) => listConfigs(context, offset, limit, options),
    getNetwork: (id: string, options?: WiFiApiGetNetworkOptionalParams) =>
      getNetwork(context, id, options),
    scanNetworks: (
      force: boolean,
      options?: WiFiApiScanNetworksOptionalParams,
    ) => scanNetworks(context, force, options),
  };
}

export function _getWiFiApiOperations(
  context: OpenApiV2Context,
): WiFiApiOperations {
  return {
    ..._getWiFiApi(context),
  };
}
