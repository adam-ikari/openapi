// Licensed under the MIT License.

import { OpenApiV2Context } from "../../api/openApiV2Context.js";
import {
  $delete,
  update,
  create,
  read,
  list,
} from "../../api/usersApi/operations.js";
import {
  UsersApiDeleteOptionalParams,
  UsersApiUpdateOptionalParams,
  UsersApiCreateOptionalParams,
  UsersApiReadOptionalParams,
  UsersApiListOptionalParams,
} from "../../api/usersApi/options.js";
import { User } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a UsersApi operations. */
export interface UsersApiOperations {
  /** Delete a users */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (id: number, options?: UsersApiDeleteOptionalParams) => Promise<void>;
  /** Update a users */
  update: (
    id: number,
    body: User,
    options?: UsersApiUpdateOptionalParams,
  ) => Promise<User>;
  /** Create a users */
  create: (body: User, options?: UsersApiCreateOptionalParams) => Promise<User>;
  /** Read users */
  read: (id: number, options?: UsersApiReadOptionalParams) => Promise<User>;
  /** List users */
  list: (
    options?: UsersApiListOptionalParams,
  ) => PagedAsyncIterableIterator<User>;
}

function _getUsersApi(context: OpenApiV2Context) {
  return {
    delete: (id: number, options?: UsersApiDeleteOptionalParams) =>
      $delete(context, id, options),
    update: (id: number, body: User, options?: UsersApiUpdateOptionalParams) =>
      update(context, id, body, options),
    create: (body: User, options?: UsersApiCreateOptionalParams) =>
      create(context, body, options),
    read: (id: number, options?: UsersApiReadOptionalParams) =>
      read(context, id, options),
    list: (options?: UsersApiListOptionalParams) => list(context, options),
  };
}

export function _getUsersApiOperations(
  context: OpenApiV2Context,
): UsersApiOperations {
  return {
    ..._getUsersApi(context),
  };
}
