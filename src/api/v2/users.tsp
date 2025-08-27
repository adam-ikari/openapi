// Import TypeSpec
import "@typespec/http";
import "@typespec/openapi";

// Import Models
import "./models/user.tsp";
import "./models/error.tsp";

using TypeSpec.Http;

namespace OpenApiV2;

@route("/users")
@tag("Users API")
@useAuth(BearerAuth)
interface UsersApi {
  /** List users */
  @get
  list(
    @doc("The offset of the list, 0 means no offset, default is 0")
    @query
    offset: uint32 = 0,

    @doc("The limit of the list, 0 means no limit, default is 10")
    @query
    limit: uint32 = 10,
  ): UserList | Error;

  /** Read users */
  @get
  read(
    @doc("The id of the user to read")
    @path
    id: string,
  ): User | Error;

  /** Create a users */
  @post
  create(@body body: User): User | Error;

  /** Update a users */
  @put
  update(
    @doc("The id of the user to update")
    @path
    id: string,

    @body body: User,
  ): User | Error;

  /** Delete a users */
  @delete
  delete(
    @doc("The id of the user to delete")
    @path
    id: string,
  ): void | Error;
}
