import "@typespec/http";

using TypeSpec.Http;
@service(#{ title: "OpenAPI" })
namespace OpenApiService;

model User {
  id: string;

  @minLength(3)
  @maxLength(32)
  name: string;

  @minValue(1)
  @maxValue(120)
  age: uint32;

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
  @get list(): UserList | Error;
  /** Read users */
  @get read(@path id: string): User | Error;
  /** Create a users */
  @post create(@body body: User): User | Error;
  /** Update a users */
  @put update(@path id: string, @body body: User): User | Error;
  /** Delete a users */
  @delete delete(@path id: string): void | Error;
}
