import "@typespec/openapi";

using TypeSpec.OpenAPI;

@extension("x-enum-descriptions", #{ secret: 0, male: 1, female: 2 })
enum Gender {
    secret: 0,
    male: 1,
    female: 2,
}
