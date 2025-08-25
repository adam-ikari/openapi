// Licensed under the MIT License.

import { DemoServiceContext } from "../../api/demoServiceContext.js";
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
  /** Delete a widget */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (id: string, options?: UsersDeleteOptionalParams) => Promise<void>;
  /** Update a widget */
  update: (
    id: string,
    body: User,
    options?: UsersUpdateOptionalParams,
  ) => Promise<User>;
  /** Create a widget */
  create: (body: User, options?: UsersCreateOptionalParams) => Promise<User>;
  /** Read widgets */
  read: (id: string, options?: UsersReadOptionalParams) => Promise<User>;
  /** List widgets */
  list: (options?: UsersListOptionalParams) => Promise<UserList>;
}

function _getUsers(context: DemoServiceContext) {
  return {
    delete: (id: string, options?: UsersDeleteOptionalParams) =>
      $delete(context, id, options),
    update: (id: string, body: User, options?: UsersUpdateOptionalParams) =>
      update(context, id, body, options),
    create: (body: User, options?: UsersCreateOptionalParams) =>
      create(context, body, options),
    read: (id: string, options?: UsersReadOptionalParams) =>
      read(context, id, options),
    list: (options?: UsersListOptionalParams) => list(context, options),
  };
}

export function _getUsersOperations(
  context: DemoServiceContext,
): UsersOperations {
  return {
    ..._getUsers(context),
  };
}
