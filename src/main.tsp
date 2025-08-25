import "@typespec/http";

using TypeSpec.Http;
@service(#{ title: "OpenAPI" })
namespace DemoService;

@doc("")
model User {
  id: string;
  name: string;
  age: int32;
  gaender: Gender;
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
  /** List widgets */
  @get list(): UserList | Error;
  /** Read widgets */
  @get read(@path id: string): User | Error;
  /** Create a widget */
  @post create(@body body: User): User | Error;
  /** Update a widget */
  @put update(@path id: string, @body body: User): User | Error;
  /** Delete a widget */
  @delete delete(@path id: string): void | Error;
}
