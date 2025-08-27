// Licensed under the MIT License.

import {
  createOpenApiV2,
  OpenApiV2Context,
  OpenApiV2ClientOptionalParams,
} from "./api/index.js";
import {
  EmailsApiOperations,
  _getEmailsApiOperations,
} from "./classic/emailsApi/index.js";
import {
  UsersApiOperations,
  _getUsersApiOperations,
} from "./classic/usersApi/index.js";
import { Pipeline } from "@typespec/ts-http-runtime";

export { OpenApiV2ClientOptionalParams } from "./api/openApiV2Context.js";

export class OpenApiV2Client {
  private _client: OpenApiV2Context;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    options: OpenApiV2ClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createOpenApiV2(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.emailsApi = _getEmailsApiOperations(this._client);
    this.usersApi = _getUsersApiOperations(this._client);
  }

  /** The operation groups for emailsApi */
  public readonly emailsApi: EmailsApiOperations;
  /** The operation groups for usersApi */
  public readonly usersApi: UsersApiOperations;
}
