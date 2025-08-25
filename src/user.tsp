import "@typespec/http";

using TypeSpec.Http;

@service(#{ title: "OpenAPI" })
namespace OpenApiService;

model User {
  @doc("The unique identifier of the user")
  id: string;

  @doc("The name of the user")
  @minLength(3)
  @maxLength(32)
  name: string;

  @doc("The age of the user")
  @minValue(1)
  @maxValue(120)
  age: uint8;

  @doc("The gender of the user")
  gender: Gender;
}

@doc("The enum of the gender")
enum Gender {
  secret,
  male,
  female,
}

model UserList {
  @doc("The list of users")
  items: User[];
}

@error
model Error {
  @doc("The error code")
  code: int32;

  @doc("The error message")
  msg: string;
}

@route("/users")
@tag("Users")
interface Users {
  /** List users */
  @get
  @useAuth(BearerAuth)
  list(): UserList | Error;

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
