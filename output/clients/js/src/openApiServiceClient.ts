// Licensed under the MIT License.

import {
  createOpenApiService,
  OpenApiServiceContext,
  OpenApiServiceClientOptionalParams,
} from "./api/index.js";
import { UsersOperations, _getUsersOperations } from "./classic/users/index.js";
import { Pipeline } from "@typespec/ts-http-runtime";

export { OpenApiServiceClientOptionalParams } from "./api/openApiServiceContext.js";

export class OpenApiServiceClient {
  private _client: OpenApiServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    options: OpenApiServiceClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createOpenApiService(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.users = _getUsersOperations(this._client);
  }

  /** The operation groups for users */
  public readonly users: UsersOperations;
}
