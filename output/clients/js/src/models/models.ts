// Licensed under the MIT License.

/** model interface WidgetList */
export interface WidgetList {
  items: Widget[];
}

export function widgetListDeserializer(item: any): WidgetList {
  return {
    items: widgetArrayDeserializer(item["items"]),
  };
}

export function widgetArraySerializer(result: Array<Widget>): any[] {
  return result.map((item) => {
    return widgetSerializer(item);
  });
}

export function widgetArrayDeserializer(result: Array<Widget>): any[] {
  return result.map((item) => {
    return widgetDeserializer(item);
  });
}

/** model interface Widget */
export interface Widget {
  id: string;
  weight: number;
  color: "red" | "blue";
}

export function widgetSerializer(item: Widget): any {
  return { id: item["id"], weight: item["weight"], color: item["color"] };
}

export function widgetDeserializer(item: any): Widget {
  return {
    id: item["id"],
    weight: item["weight"],
    color: item["color"],
  };
}

/** model interface ErrorModel */
export interface ErrorModel {
  code: number;
  message: string;
}

export function errorDeserializer(item: any): ErrorModel {
  return {
    code: item["code"],
    message: item["message"],
  };
}
