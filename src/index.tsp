import "@typespec/http";
import "@typespec/openapi";

import "./users_api.tsp";
import "./emails_api.tsp";
import "./email_groups_api.tsp";

using TypeSpec.Http;
using TypeSpec.OpenAPI;

@service(#{ title: "OpenAPI v2" })
@info(#{ version: "2.0.0" })
@route("/api/v2")
namespace OpenApiV2;