import "@typespec/http";
import "@typespec/openapi";

import "./users.tsp";
import "./emails.tsp";

using TypeSpec.Http;
using TypeSpec.OpenAPI;

@service(#{ title: "OpenAPI" })
@info(#{ version: "2.0.0" })
@route("/api/v2")
namespace OpenApiV2;
