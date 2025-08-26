import "@typespec/openapi";

using TypeSpec.OpenAPI;

@doc("Gender enum values")
@extension(
    "x-ms-enum",
    #{
        values: #[
            #{ name: "secret", value: 0, description: "unpublic gender" },
            #{ name: "male", value: 1, description: "male gender" },
            #{ name: "female", value: 2, description: "female gender" }
        ],
    }
)
@extension("x-enum-varnames", #["secret", "male", "female"])
enum Gender {
    secret: 0,
    male: 1,
    female: 2,
}
