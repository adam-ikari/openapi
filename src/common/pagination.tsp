// Import TypeSpec core library for HTTP protocol support
import "@typespec/http";
// Import OpenAPI library for generating OpenAPI documentation
import "@typespec/openapi";

// Use TypeSpec.Http and TypeSpec.OpenAPI namespaces
using TypeSpec.Http;
using TypeSpec.OpenAPI;

/**
 * Generic pagination response model
 * All list interface return types should inherit from this model
 */
model PagedResult<T> {
  @doc("Data list")
  @summary("Data list")
  items: T[];

  @doc("Total data count")
  @summary("Total data count")
  total: uint32;

  @doc("Offset, starting from 0")
  @summary("Offset")
  offset: uint32;

  @doc("Number per page, 0 means no limit")
  @summary("Number per page")
  limit: uint32;
}

/**
 * Pagination query parameters model
 * Used for query parameters of all list interfaces
 */
model PaginationParams {
  @doc("Offset, starting from 0, default is 0")
  @summary("Offset")
  @query
  offset?: uint32 = 0;

  @doc("Number per page, 0 means no limit, default is 10")
  @summary("Number per page")
  @query
  limit?: uint32 = 10;
}