// 导入TypeSpec核心库，用于HTTP协议支持
import "@typespec/http";
// 导入OpenAPI库，用于生成OpenAPI文档
import "@typespec/openapi";

// 使用TypeSpec.Http和TypeSpec.OpenAPI命名空间
using TypeSpec.Http;
using TypeSpec.OpenAPI;

/**
 * 通用分页响应模型
 * 所有列表接口的返回类型都应该继承自该模型
 */
model PagedResult<T> {
  @doc("Items")
  items: T[];

  @doc("totol count")
  total: uint32;

  @doc("offset, default 0")
  offset: uint32;

  @doc("limit, default 10")
  limit: uint32;
}

/**
 * 分页查询参数模型
 * 用于所有列表接口的查询参数
 */
model PaginationParams {
  @doc("offset, default 0")
  @query
  offset?: uint32 = 0;

  @doc("limit, default 10")
  @query
  limit?: uint32 = 10;
}