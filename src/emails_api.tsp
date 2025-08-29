// Import TypeSpec core library for HTTP protocol support
import "@typespec/http";
// Import OpenAPI library for generating OpenAPI documentation
import "@typespec/openapi";

// Import email related model definitions
import "./models/email.tsp";
// Import error handling model
import "./models/error.tsp";
// Import common pagination model
import "./common/pagination.tsp";

// Use TypeSpec.Http namespace to simplify subsequent decorator usage
using TypeSpec.Http;

// Define namespace to organize related APIs
namespace OpenApiV2;

// Set route prefix for API interface
@route("/emails")
// Add tags to API for categorization in generated documentation
@tag("Emails")
// Set API to require Bearer Token authentication
@useAuth(BearerAuth)
// Define EmailsApi interface containing email related operations
interface EmailsApi {
  /** List emails */
  // @get decorator indicates this is an HTTP GET request
  @get
  list(
    // Use common pagination query parameters
    ...PaginationParams
  ): PagedResult<Email> | Error;

  /** Read emails */
  // HTTP GET request to read single email information
  @get
  read(
    @doc("The id of the email to read")
    // @path decorator indicates this is a path parameter, will replace {id} placeholder in route
    @path
    id: string,
  ): Email | Error;

  /** Create a emails */
  // @post decorator indicates this is an HTTP POST request for creating resource
  @post
  // @body decorator indicates parameter will be sent as request body
  create(@body body: Email): Email | Error;

  /** Update a emails */
  // HTTP PUT request for updating email information
  @put
  update(
    @doc("The id of the email to update")
    // @path decorator indicates this is a path parameter
    @path
    id: string,
    // @body decorator indicates the parameter will be sent as request body
    @body body: Email,
  ): Email | Error;

  /** Delete a emails */
  // @delete decorator indicates this is an HTTP DELETE request for deleting email
  @delete
  delete(
    @doc("The id of the email to delete")
    // @path decorator indicates this is a path parameter
    @path
    id: string,
  ): Email | Error;
}