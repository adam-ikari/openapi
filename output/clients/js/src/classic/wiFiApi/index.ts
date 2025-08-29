// Licensed under the MIT License.

import { OpenApiV2Context } from "../../api/openApiV2Context.js";
import {
  disconnect,
  connect,
  deleteConfig,
  updateConfig,
  createConfig,
  readConfig,
  listConfigs,
  readNetwork,
  listNetworks,
} from "../../api/wiFiApi/operations.js";
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
} from "../../api/wiFiApi/options.js";
import {
  PagedResultWiFiNetwork,
  WiFiNetwork,
  PagedResultWiFiConfig,
  WiFiConfig,
  WiFiConnectRequest,
} from "../../models/models.js";

/** Interface representing a WiFiApi operations. */
export interface WiFiApiOperations {
  /** Disconnect from WiFi network */
  disconnect: (
    id: string,
    options?: WiFiApiDisconnectOptionalParams,
  ) => Promise<boolean>;
  /** Connect to WiFi network */
  connect: (
    id: string,
    body: WiFiConnectRequest,
    options?: WiFiApiConnectOptionalParams,
  ) => Promise<boolean>;
  /** Delete WiFi configuration */
  deleteConfig: (
    id: string,
    options?: WiFiApiDeleteConfigOptionalParams,
  ) => Promise<WiFiConfig>;
  /** Update WiFi configuration */
  updateConfig: (
    id: string,
    body: WiFiConfig,
    options?: WiFiApiUpdateConfigOptionalParams,
  ) => Promise<WiFiConfig>;
  /** Create WiFi configuration */
  createConfig: (
    body: WiFiConfig,
    options?: WiFiApiCreateConfigOptionalParams,
  ) => Promise<WiFiConfig>;
  /** Read WiFi configuration */
  readConfig: (
    id: string,
    options?: WiFiApiReadConfigOptionalParams,
  ) => Promise<WiFiConfig>;
  /** List WiFi configurations */
  listConfigs: (
    options?: WiFiApiListConfigsOptionalParams,
  ) => Promise<PagedResultWiFiConfig>;
  /** Read WiFi network */
  readNetwork: (
    id: string,
    options?: WiFiApiReadNetworkOptionalParams,
  ) => Promise<WiFiNetwork>;
  /** List WiFi networks */
  listNetworks: (
    options?: WiFiApiListNetworksOptionalParams,
  ) => Promise<PagedResultWiFiNetwork>;
}

function _getWiFiApi(context: OpenApiV2Context) {
  return {
    disconnect: (id: string, options?: WiFiApiDisconnectOptionalParams) =>
      disconnect(context, id, options),
    connect: (
      id: string,
      body: WiFiConnectRequest,
      options?: WiFiApiConnectOptionalParams,
    ) => connect(context, id, body, options),
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
    readConfig: (id: string, options?: WiFiApiReadConfigOptionalParams) =>
      readConfig(context, id, options),
    listConfigs: (options?: WiFiApiListConfigsOptionalParams) =>
      listConfigs(context, options),
    readNetwork: (id: string, options?: WiFiApiReadNetworkOptionalParams) =>
      readNetwork(context, id, options),
    listNetworks: (options?: WiFiApiListNetworksOptionalParams) =>
      listNetworks(context, options),
  };
}

export function _getWiFiApiOperations(
  context: OpenApiV2Context,
): WiFiApiOperations {
  return {
    ..._getWiFiApi(context),
  };
}
