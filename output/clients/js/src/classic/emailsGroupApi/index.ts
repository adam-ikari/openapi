// Licensed under the MIT License.

import { OpenApiV2Context } from "../../api/openApiV2Context.js";
import {
  $delete,
  update,
  create,
  read,
  list,
} from "../../api/emailsGroupApi/operations.js";
import {
  EmailsGroupApiDeleteOptionalParams,
  EmailsGroupApiUpdateOptionalParams,
  EmailsGroupApiCreateOptionalParams,
  EmailsGroupApiReadOptionalParams,
  EmailsGroupApiListOptionalParams,
} from "../../api/emailsGroupApi/options.js";
import { Email, EmailGroup } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a EmailsGroupApi operations. */
export interface EmailsGroupApiOperations {
  /** Delete a email group */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    id: number,
    options?: EmailsGroupApiDeleteOptionalParams,
  ) => Promise<void>;
  /** Update a email group */
  update: (
    id: number,
    body: EmailGroup,
    options?: EmailsGroupApiUpdateOptionalParams,
  ) => Promise<Email>;
  /** Create a email group */
  create: (
    body: Email,
    options?: EmailsGroupApiCreateOptionalParams,
  ) => Promise<Email>;
  /** Read a email group */
  read: (
    id: number,
    options?: EmailsGroupApiReadOptionalParams,
  ) => Promise<EmailGroup>;
  /** List email groups */
  list: (
    options?: EmailsGroupApiListOptionalParams,
  ) => PagedAsyncIterableIterator<EmailGroup>;
}

function _getEmailsGroupApi(context: OpenApiV2Context) {
  return {
    delete: (id: number, options?: EmailsGroupApiDeleteOptionalParams) =>
      $delete(context, id, options),
    update: (
      id: number,
      body: EmailGroup,
      options?: EmailsGroupApiUpdateOptionalParams,
    ) => update(context, id, body, options),
    create: (body: Email, options?: EmailsGroupApiCreateOptionalParams) =>
      create(context, body, options),
    read: (id: number, options?: EmailsGroupApiReadOptionalParams) =>
      read(context, id, options),
    list: (options?: EmailsGroupApiListOptionalParams) =>
      list(context, options),
  };
}

export function _getEmailsGroupApiOperations(
  context: OpenApiV2Context,
): EmailsGroupApiOperations {
  return {
    ..._getEmailsGroupApi(context),
  };
}
