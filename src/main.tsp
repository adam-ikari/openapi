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

enum Gender {
  male,
  female,
}

model UserList {
  items: User[];
}

@error
model Error {
  code: int32;
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
  read(@path id: string): User | Error;

  /** Create a users */
  @post
  @useAuth(BearerAuth)
  create(@body body: User): User | Error;

  /** Update a users */
  @put
  @useAuth(BearerAuth)
  update(@path id: string, @body body: User): User | Error;

  /** Delete a users */
  @delete
  @useAuth(BearerAuth)
  delete(@path id: string): void | Error;
}
