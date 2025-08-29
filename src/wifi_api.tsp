// Import TypeSpec core library for HTTP protocol support
import "@typespec/http";
// Import OpenAPI library for generating OpenAPI documentation
import "@typespec/openapi";

// Import WiFi related model definitions
import "./models/wifi.tsp";
// Import error handling model
import "./models/error.tsp";
// Import common pagination model
import "./common/pagination.tsp";

// Use TypeSpec.Http namespace to simplify subsequent decorator usage
using TypeSpec.Http;

// Define namespace to organize related APIs
namespace OpenApiV2;

// Set route prefix for API interface
@route("/wifi")
// Add tags to API for categorization in generated documentation
@tag("WiFi")
// Define WiFiApi interface containing WiFi related operations
interface WiFiApi {
  /** List WiFi networks */
  // @get decorator indicates this is an HTTP GET request
  @get
  // Set API to require Bearer Token authentication
  @useAuth(BearerAuth)
  @route("/networks")
  listNetworks(
    // Use common pagination query parameters
    ...PaginationParams
  ): PagedResult<WiFiNetwork> | Error;

  /** Read WiFi network */
  // HTTP GET request to read single WiFi network information
  @get
  // Set API to require Bearer Token authentication
  @useAuth(BearerAuth)
  @route("/networks/{id}")
  readNetwork(
    @doc("The id of the WiFi network to read")
    // @path decorator indicates this is a path parameter
    @path
    id: string,
  ): WiFiNetwork | Error;

  /** List WiFi configurations */
  // HTTP GET request to list WiFi configurations
  @get
  // Set API to require Bearer Token authentication
  @useAuth(BearerAuth)
  @route("/configs")
  listConfigs(
    // Use common pagination query parameters
    ...PaginationParams
  ): PagedResult<WiFiConfig> | Error;

  /** Read WiFi configuration */
  // HTTP GET request to read single WiFi configuration
  @get
  // Set API to require Bearer Token authentication
  @useAuth(BearerAuth)
  @route("/configs/{id}")
  readConfig(
    @doc("The id of the WiFi configuration to read")
    // @path decorator indicates this is a path parameter
    @path
    id: string,
  ): WiFiConfig | Error;

  /** Create WiFi configuration */
  // @post decorator indicates this is an HTTP POST request for creating WiFi configuration
  @post
  // Set API to require Bearer Token authentication
  @useAuth(BearerAuth)
  @route("/configs")
  // @body decorator indicates parameter will be sent as request body
  createConfig(@body body: WiFiConfig): WiFiConfig | Error;

  /** Update WiFi configuration */
  // HTTP PUT request for updating WiFi configuration
  @put
  // Set API to require Bearer Token authentication
  @useAuth(BearerAuth)
  @route("/configs/{id}")
  updateConfig(
    @doc("The id of the WiFi configuration to update")
    // @path decorator indicates this is a path parameter
    @path
    id: string,
    // @body decorator indicates the parameter will be sent as request body
    @body body: WiFiConfig,
  ): WiFiConfig | Error;

  /** Delete WiFi configuration */
  // @delete decorator indicates this is an HTTP DELETE request for deleting WiFi configuration
  @delete
  // Set API to require Bearer Token authentication
  @useAuth(BearerAuth)
  @route("/configs/{id}")
  deleteConfig(
    @doc("The id of the WiFi configuration to delete")
    // @path decorator indicates this is a path parameter
    @path
    id: string,
  ): WiFiConfig | Error;

  /** Connect to WiFi network */
  // HTTP POST request to connect to WiFi network
  @post
  // Set API to require Bearer Token authentication
  @useAuth(BearerAuth)
  @route("/networks/{id}/connect")
  connect(
    @doc("The id of the WiFi network to connect")
    // @path decorator indicates this is a path parameter
    @path
    id: string,
    // @body decorator indicates the parameter will be sent as request body
    @body body: WiFiConnectRequest,
  ): boolean | Error;

  /** Disconnect from WiFi network */
  // HTTP POST request to disconnect from WiFi network
  @post
  // Set API to require Bearer Token authentication
  @useAuth(BearerAuth)
  @route("/networks/{id}/disconnect")
  disconnect(
    @doc("The id of the WiFi network to disconnect")
    // @path decorator indicates this is a path parameter
    @path
    id: string,
  ): boolean | Error;
}