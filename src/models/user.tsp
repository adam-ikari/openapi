import "@typespec/http";

import "./gender.tsp";

model User {
  @doc("The unique identifier of the user")
  id: string;

  @doc("The name of the user")
  @minLength(3)
  @maxLength(32)
  name: string;

  @doc("The age of the user, min 1, max 120")
  @minValue(1)
  @maxValue(120)
  age: uint8;

  @doc("The gender of the user")
  gender: Gender;
}
