import "@typespec/openapi";

using TypeSpec.OpenAPI;

@doc("Gender enum values")
@extension(
    "x-ms-enum",
    #{
        values: #[
            #{ name: "secret", value: 0, description: "secret" },
            #{ name: "male", value: 1, description: "male" },
            #{ name: "female", value: 2, description: "female" }
        ],
    }
)
enum Gender {
    secret: 0,
    male: 1,
    female: 2,
}
