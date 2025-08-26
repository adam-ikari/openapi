import "@typespec/http";
import "@typespec/openapi";

using TypeSpec.OpenAPI;

@extension("x-enum-descriptions", #{ secret: 0, male: 1, female: 2 })
enum Gender {
    @doc("保密")
    secret: 0,

    @doc("男性")
    male: 1,

    @doc("女性")
    female: 2,
}
