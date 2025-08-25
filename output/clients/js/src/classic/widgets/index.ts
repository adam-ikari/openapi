// Licensed under the MIT License.

import { DemoServiceContext } from "../../api/demoServiceContext.js";
import {
  $delete,
  update,
  create,
  read,
  list,
} from "../../api/widgets/operations.js";
import {
  WidgetsDeleteOptionalParams,
  WidgetsUpdateOptionalParams,
  WidgetsCreateOptionalParams,
  WidgetsReadOptionalParams,
  WidgetsListOptionalParams,
} from "../../api/widgets/options.js";
import { WidgetList, Widget } from "../../models/models.js";

/** Interface representing a Widgets operations. */
export interface WidgetsOperations {
  /** Delete a widget */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (id: string, options?: WidgetsDeleteOptionalParams) => Promise<void>;
  /** Update a widget */
  update: (
    id: string,
    body: Widget,
    options?: WidgetsUpdateOptionalParams,
  ) => Promise<Widget>;
  /** Create a widget */
  create: (
    body: Widget,
    options?: WidgetsCreateOptionalParams,
  ) => Promise<Widget>;
  /** Read widgets */
  read: (id: string, options?: WidgetsReadOptionalParams) => Promise<Widget>;
  /** List widgets */
  list: (options?: WidgetsListOptionalParams) => Promise<WidgetList>;
}

function _getWidgets(context: DemoServiceContext) {
  return {
    delete: (id: string, options?: WidgetsDeleteOptionalParams) =>
      $delete(context, id, options),
    update: (id: string, body: Widget, options?: WidgetsUpdateOptionalParams) =>
      update(context, id, body, options),
    create: (body: Widget, options?: WidgetsCreateOptionalParams) =>
      create(context, body, options),
    read: (id: string, options?: WidgetsReadOptionalParams) =>
      read(context, id, options),
    list: (options?: WidgetsListOptionalParams) => list(context, options),
  };
}

export function _getWidgetsOperations(
  context: DemoServiceContext,
): WidgetsOperations {
  return {
    ..._getWidgets(context),
  };
}
