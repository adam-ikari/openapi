import "@typespec/openapi";

using TypeSpec.OpenAPI;

@doc("Status Code")
@extension("x-enum-descriptions", #{ SUCCESS: 100000, FAILURE: 100001 })
enum StatusCode {
    SUCCESS: 100000, // 成功
    FAILURE: 100001,
}
