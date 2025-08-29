// Licensed under the MIT License.

import { OpenApiV2Context } from "../../api/openApiV2Context.js";
import {
  $delete,
  update,
  create,
  read,
  list,
} from "../../api/emailsApi/operations.js";
import {
  EmailsApiDeleteOptionalParams,
  EmailsApiUpdateOptionalParams,
  EmailsApiCreateOptionalParams,
  EmailsApiReadOptionalParams,
  EmailsApiListOptionalParams,
} from "../../api/emailsApi/options.js";
import { Email, PagedResultEmail } from "../../models/models.js";

/** Interface representing a EmailsApi operations. */
export interface EmailsApiOperations {
  /** Delete a emails */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    id: string,
    options?: EmailsApiDeleteOptionalParams,
  ) => Promise<Email>;
  /** Update a emails */
  update: (
    id: string,
    body: Email,
    options?: EmailsApiUpdateOptionalParams,
  ) => Promise<Email>;
  /** Create a emails */
  create: (
    body: Email,
    options?: EmailsApiCreateOptionalParams,
  ) => Promise<Email>;
  /** Read emails */
  read: (id: string, options?: EmailsApiReadOptionalParams) => Promise<Email>;
  /** List emails */
  list: (options?: EmailsApiListOptionalParams) => Promise<PagedResultEmail>;
}

function _getEmailsApi(context: OpenApiV2Context) {
  return {
    delete: (id: string, options?: EmailsApiDeleteOptionalParams) =>
      $delete(context, id, options),
    update: (
      id: string,
      body: Email,
      options?: EmailsApiUpdateOptionalParams,
    ) => update(context, id, body, options),
    create: (body: Email, options?: EmailsApiCreateOptionalParams) =>
      create(context, body, options),
    read: (id: string, options?: EmailsApiReadOptionalParams) =>
      read(context, id, options),
    list: (options?: EmailsApiListOptionalParams) => list(context, options),
  };
}

export function _getEmailsApiOperations(
  context: OpenApiV2Context,
): EmailsApiOperations {
  return {
    ..._getEmailsApi(context),
  };
}
