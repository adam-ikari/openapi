// Licensed under the MIT License.

export { OpenApiV2Client } from "./openApiV2Client.js";
export {
  UserList,
  User,
  Gender,
  Email,
  EmailAuthMethod,
  ErrorModel,
  StatusCode,
  EmailList,
  EmailGroupList,
  EmailGroup,
  WiFiNetworkList,
  WiFiNetwork,
  WiFiSecurityType,
  WiFiBand,
  WiFiConfigList,
  WiFiConfig,
  WiFiConnectionStatus,
  WiFiConnectRequest,
} from "./models/index.js";
export { OpenApiV2ClientOptionalParams } from "./api/index.js";
export {
  EmailsApiDeleteOptionalParams,
  EmailsApiUpdateOptionalParams,
  EmailsApiCreateOptionalParams,
  EmailsApiReadOptionalParams,
  EmailsApiListOptionalParams,
} from "./api/emailsApi/index.js";
export {
  EmailsGroupApiDeleteOptionalParams,
  EmailsGroupApiUpdateOptionalParams,
  EmailsGroupApiCreateOptionalParams,
  EmailsGroupApiReadOptionalParams,
  EmailsGroupApiListOptionalParams,
} from "./api/emailsGroupApi/index.js";
export {
  UsersApiDeleteOptionalParams,
  UsersApiUpdateOptionalParams,
  UsersApiCreateOptionalParams,
  UsersApiReadOptionalParams,
  UsersApiListOptionalParams,
} from "./api/usersApi/index.js";
export {
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
} from "./api/wiFiApi/index.js";
export {
  EmailsApiOperations,
  EmailsGroupApiOperations,
  UsersApiOperations,
  WiFiApiOperations,
} from "./classic/index.js";
