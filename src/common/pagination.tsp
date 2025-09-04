// 导入TypeSpec核心库，用于HTTP协议支持
import "@typespec/http";
// 导入OpenAPI库，用于生成OpenAPI文档
import "@typespec/openapi";

// 使用TypeSpec.Http和TypeSpec.OpenAPI命名空间
using TypeSpec.Http;
using TypeSpec.OpenAPI;

model PaginationParams {
  @doc("offset, default 0")
  @offset
  @query
  offset?: int32 = 0;

  @doc("limit, default 100")
  @pageSize
  @query
  limit?: int32 = 100;
}

model PagedResult<T> {
  @doc("Items")
  @pageItems
  items: T[];

  @doc("Total count of items")
  total: uint32;

  @doc("Offset, default 0")
  offset: uint32;

  @doc("Limit, default 100")
  limit: uint32;
}