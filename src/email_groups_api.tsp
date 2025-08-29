// Import TypeSpec core library for HTTP protocol support
import "@typespec/http";
// Import OpenAPI library for generating OpenAPI documentation
import "@typespec/openapi";

// Import email group related model definitions
import "./models/email_group.tsp";
// Import error handling model
import "./models/error.tsp";
// Import common pagination model
import "./common/pagination.tsp";

// Use TypeSpec.Http namespace to simplify subsequent decorator usage
using TypeSpec.Http;

// Define namespace to organize related APIs
namespace OpenApiV2;

// Set route prefix for API interface
@route("/email-groups")
// Add tags to API for categorization in generated documentation
@tag("EmailGroups")
// Set API to require Bearer Token authentication
@useAuth(BearerAuth)
// Define EmailsGroupApi interface containing email group related operations
interface EmailsGroupApi {
    /** List email groups */
    // @get decorator indicates this is an HTTP GET request
    @get
    list(
        // Use common pagination query parameters
        ...PaginationParams
    ): PagedResult<EmailGroup> | Error;

    /** Read a email group */
    // HTTP GET request to read single email group information
    @get
    read(
        @doc("The id of the Email Group to read")
        // @path decorator indicates this is a path parameter
        @path
        id: string,
    ): EmailGroup | Error;

    /** Create a email group */
    // @post decorator indicates this is an HTTP POST request for creating email group
    @post
    create(
        // Note: There might be an error here, should use EmailGroup instead of Email
        @body body: Email,
    ): Email | Error;

    /** Update a email group */
    // HTTP PUT request for updating email group information
    @put
    update(
        @doc("The id of the Email Group to update")
        // @path decorator indicates this is a path parameter
        @path
        id: string,
        // @body decorator indicates the parameter will be sent as request body
        @body body: EmailGroup,
    ): EmailGroup | Error;

    /** Delete a email group */
    // @delete decorator indicates this is an HTTP DELETE request for deleting email group
    @delete
    delete(
        @doc("The id of the Email Group to delete")
        // @path decorator indicates this is a path parameter
        @path
        id: string,
    ): EmailGroup | Error;
}