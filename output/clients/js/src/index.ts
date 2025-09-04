// Licensed under the MIT License.

import { FileContents } from "./static-helpers/multipartHelpers.js";
import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { OpenApiV2Client } from "./openApiV2Client.js";
export {
  User,
  Gender,
  Email,
  EmailAuthType,
  ErrorModel,
  StatusCode,
  EmailGroup,
  WiFiNetwork,
  WiFiSecurityType,
  WiFiBand,
  WiFiConfig,
  WiFiConnectionStatus,
  WiFiConnectRequest,
  CertificateInfo,
} from "./models/index.js";
export { OpenApiV2ClientOptionalParams } from "./api/index.js";
export {
  CertificateApiDeleteCertificateOptionalParams,
  CertificateApiGetCertificateOptionalParams,
  CertificateApiListCertificatesOptionalParams,
  CertificateApiUploadCertificateOptionalParams,
} from "./api/certificateApi/index.js";
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
  CertificateApiOperations,
  EmailsApiOperations,
  EmailsGroupApiOperations,
  UsersApiOperations,
  WiFiApiOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
export { FileContents };
