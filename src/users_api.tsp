// Import TypeSpec core library for HTTP protocol support
import "@typespec/http";
// Import OpenAPI library for generating OpenAPI documentation
import "@typespec/openapi";

// Import user related model definitions
import "./models/user.tsp";
// Import error handling model
import "./models/error.tsp";
// Import common pagination model
import "./common/pagination.tsp";

// Use TypeSpec.Http namespace to simplify subsequent decorator usage
using TypeSpec.Http;

// Define namespace to organize related APIs
namespace OpenApiV2;

// Set route prefix for API interface
@route("/users")
// Add tags to API for categorization in generated documentation
@tag("Users")
// Set API to require Bearer Token authentication
@useAuth(BearerAuth)
// Define UsersApi interface containing user related operations
interface UsersApi {
  /** List users */
  // @get decorator indicates this is an HTTP GET request
  @get
  list(
    // Use common pagination query parameters
    ...PaginationParams
  ): PagedResult<User> | Error;

  /** Read users */
  // HTTP GET request to read single user information
  @get
  read(
    @doc("The id of the user to read")
    // @path decorator indicates this is a path parameter, will replace {id} placeholder in route
    @path
    id: string,
  ): User | Error;

  /** Create a users */
  // @post decorator indicates this is an HTTP POST request for creating resource
  @post
  // @body decorator indicates parameter will be sent as request body
  create(@body body: User): User | Error;

  /** Update a users */
  // HTTP PUT request for updating user information
  @put
  update(
    @doc("The id of the user to update")
    // @path decorator indicates this is a path parameter
    @path
    id: string,
    // @body decorator indicates the parameter will be sent as request body
    @body body: User,
  ): User | Error;

  /** Delete a users */
  // @delete decorator indicates this is an HTTP DELETE request for deleting user
  @delete
  delete(
    @doc("The id of the user to delete")
    // @path decorator indicates this is a path parameter
    @path
    id: string,
  ): User | Error;
}