// Licensed under the MIT License.

import { OpenApiV2Context } from "../../api/openApiV2Context.js";
import {
  $delete,
  update,
  create,
  read,
  list,
} from "../../api/users/operations.js";
import {
  UsersDeleteOptionalParams,
  UsersUpdateOptionalParams,
  UsersCreateOptionalParams,
  UsersReadOptionalParams,
  UsersListOptionalParams,
} from "../../api/users/options.js";
import { UserList, User } from "../../models/models.js";

/** Interface representing a Users operations. */
export interface UsersOperations {
  /** Delete a users */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (id: string, options?: UsersDeleteOptionalParams) => Promise<void>;
  /** Update a users */
  update: (
    id: string,
    body: User,
    options?: UsersUpdateOptionalParams,
  ) => Promise<User>;
  /** Create a users */
  create: (body: User, options?: UsersCreateOptionalParams) => Promise<User>;
  /** Read users */
  read: (id: string, options?: UsersReadOptionalParams) => Promise<User>;
  /** List users */
  list: (
    offset: number,
    limit: number,
    options?: UsersListOptionalParams,
  ) => Promise<UserList>;
}

function _getUsers(context: OpenApiV2Context) {
  return {
    delete: (id: string, options?: UsersDeleteOptionalParams) =>
      $delete(context, id, options),
    update: (id: string, body: User, options?: UsersUpdateOptionalParams) =>
      update(context, id, body, options),
    create: (body: User, options?: UsersCreateOptionalParams) =>
      create(context, body, options),
    read: (id: string, options?: UsersReadOptionalParams) =>
      read(context, id, options),
    list: (offset: number, limit: number, options?: UsersListOptionalParams) =>
      list(context, offset, limit, options),
  };
}

export function _getUsersOperations(
  context: OpenApiV2Context,
): UsersOperations {
  return {
    ..._getUsers(context),
  };
}
