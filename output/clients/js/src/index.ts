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
  UsersApiDeleteOptionalParams,
  UsersApiUpdateOptionalParams,
  UsersApiCreateOptionalParams,
  UsersApiReadOptionalParams,
  UsersApiListOptionalParams,
} from "./api/usersApi/index.js";
export { EmailsApiOperations, UsersApiOperations } from "./classic/index.js";
