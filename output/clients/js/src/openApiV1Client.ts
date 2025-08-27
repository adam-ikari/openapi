// Licensed under the MIT License.

import {
  createOpenApiV1,
  OpenApiV1Context,
  OpenApiV1ClientOptionalParams,
} from "./api/index.js";
import { UsersOperations, _getUsersOperations } from "./classic/users/index.js";
import { Pipeline } from "@typespec/ts-http-runtime";

export { OpenApiV1ClientOptionalParams } from "./api/openApiV1Context.js";

export class OpenApiV1Client {
  private _client: OpenApiV1Context;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    options: OpenApiV1ClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createOpenApiV1(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.users = _getUsersOperations(this._client);
  }

  /** The operation groups for users */
  public readonly users: UsersOperations;
}
