import "@typespec/openapi";

using TypeSpec.OpenAPI;

@doc("Status Code")
@extension(
    "x-ms-enum",
    #{
        values: #[
            #{ name: "SUCCESS", value: 100000, description: "success" },
            #{ name: "FAILURE", value: 100001, description: "failure" }
        ],
    }
)
enum StatusCode {
    SUCCESS: 100000,
    FAILURE: 100001,
}
