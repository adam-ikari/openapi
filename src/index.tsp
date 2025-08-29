// Import TypeSpec core library for HTTP protocol support
import "@typespec/http";
// Import OpenAPI library for generating OpenAPI documentation
import "@typespec/openapi";

// Import each API module
import "./users_api.tsp";
import "./emails_api.tsp";
import "./email_groups_api.tsp";
import "./wifi_api.tsp";

// Use TypeSpec.Http and TypeSpec.OpenAPI namespaces
using TypeSpec.Http;
using TypeSpec.OpenAPI;

// @service decorator to define basic service information
@service(#{ title: "OpenAPI v2" })
// @info decorator to add API metadata such as version
@info(#{ version: "2.0.0" })
// @route decorator to set base route path for API
@route("/api/v2")
// Define root namespace for service
namespace OpenApiV2;