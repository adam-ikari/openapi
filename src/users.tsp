import "@typespec/http";
import "./models/user.tsp";
import "./models/user_list.tsp";
import "./models/error.tsp";

using TypeSpec.Http;

@service(#{ title: "OpenAPI" })
namespace OpenApiService;

@route("/users")
@tag("Users")
interface Users {
  /** List users */
  @get
  @useAuth(BearerAuth)
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
  @useAuth(BearerAuth)
  read(
    @doc("The id of the user to read")
    @path
    id: string,
  ): User | Error;

  /** Create a users */
  @post
  @useAuth(BearerAuth)
  create(@body body: User): User | Error;

  /** Update a users */
  @put
  @useAuth(BearerAuth)
  update(
    @doc("The id of the user to update")
    @path
    id: string,

    @body body: User,
  ): User | Error;

  /** Delete a users */
  @delete
  @useAuth(BearerAuth)
  delete(
    @doc("The id of the user to delete")
    @path
    id: string,
  ): void | Error;
}
