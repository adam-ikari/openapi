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
import { Email, EmailList } from "../../models/models.js";

/** Interface representing a EmailsApi operations. */
export interface EmailsApiOperations {
  /** Delete a email */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    id: string,
    options?: EmailsApiDeleteOptionalParams,
  ) => Promise<void>;
  /** Update a email */
  update: (
    id: string,
    body: Email,
    options?: EmailsApiUpdateOptionalParams,
  ) => Promise<Email>;
  /** Create a email */
  create: (
    body: Email,
    options?: EmailsApiCreateOptionalParams,
  ) => Promise<Email>;
  /** Read email */
  read: (id: string, options?: EmailsApiReadOptionalParams) => Promise<Email>;
  /** List emails */
  list: (
    offset: number,
    limit: number,
    options?: EmailsApiListOptionalParams,
  ) => Promise<EmailList>;
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
    list: (
      offset: number,
      limit: number,
      options?: EmailsApiListOptionalParams,
    ) => list(context, offset, limit, options),
  };
}

export function _getEmailsApiOperations(
  context: OpenApiV2Context,
): EmailsApiOperations {
  return {
    ..._getEmailsApi(context),
  };
}
