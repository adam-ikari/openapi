import "@typespec/http";

import "./gender.tsp";

model User {
  @doc("The unique identifier of the user")
  id: string;

  @doc("The name of the user")
  @minLength(3)
  @maxLength(32)
  name: string;

  /**
   * The age of the user
   * @minValue(1)
   * @maxValue(120)
   */
  @doc("The age of the user")
  @minValue(1)
  @maxValue(120)
  age: uint8;

  @doc("The gender of the user")
  gender: Gender;
}