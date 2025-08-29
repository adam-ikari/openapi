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
  @doc("数据列表")
  @summary("数据列表")
  items: T[];

  @doc("数据总数量")
  @summary("数据总数量")
  total: uint32;

  @doc("偏移量，从0开始")
  @summary("偏移量")
  offset: uint32;

  @doc("每页数量，0表示不限制")
  @summary("每页数量")
  limit: uint32;
}

/**
 * 分页查询参数模型
 * 用于所有列表接口的查询参数
 */
model PaginationParams {
  @doc("偏移量，从0开始，默认为0")
  @summary("偏移量")
  @query
  offset?: uint32 = 0;

  @doc("每页数量，0表示不限制，默认为10")
  @summary("每页数量")
  @query
  limit?: uint32 = 10;
}