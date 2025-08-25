import "@typespec/http";
import "./models/user.tsp";
import "./models/error.tsp";

using TypeSpec.Http;

@route("/users")
@tag("Users")
interface Users {
  /** List users */
  @get
  @useAuth(BearerAuth)
  list(): User[] | Error;

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
