import "@typespec/openapi";

import "./email.tsp";

using TypeSpec.OpenAPI;

@doc("Gender enum values")
@extension(
    "x-ms-enum",
    #{
        values: #[
            #{ name: "secret", value: 0, description: "unpublic gender" },
            #{ name: "male", value: 1, description: "male gender" },
            #{ name: "female", value: 2, description: "female gender" }
        ],
    }
)
@extension("x-enum-varnames", #["secret", "male", "female"])
enum Gender {
    secret: 0,
    male: 1,
    female: 2,
}

model User {
    @doc("The unique identifier of the user")
    id: uint32;

    @doc("The name of the user")
    @minLength(3)
    @maxLength(32)
    @pattern("/^[a-zA-Z0-9_-]+$/")
    name: string;

    @doc("The age of the user, min 1, max 120")
    @minValue(1)
    @maxValue(120)
    age: uint8;

    @doc("The gender of the user")
    gender: Gender;

    @doc("The email of the user")
    email: Email;

    @doc("The timestamp when the user was created")
    createdAt: unixTimestamp32;

    @doc("The timestamp when the user was updated")
    updatedAt: unixTimestamp32;
}

model UserList {
    @doc("The list of users")
    items: User[];

    @doc("The total number of users")
    total: uint32;

    @doc("The offset to fetch the list, 0 means no offset")
    offset: uint32;

    @doc("The limit to fetch the list, 0 means no limit")
    limit: uint32;
}
