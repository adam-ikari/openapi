// Import TypeSpec
import "@typespec/http";
import "@typespec/openapi";

using TypeSpec.Http;
using TypeSpec.OpenAPI;

@doc("Email authentication method")
@extension(
    "x-ms-enum",
    #{
        values: #[
            #{
                name: "password",
                value: 0,
                description: "Password authentication",
            },
            #{
                name: "otp",
                value: 1,
                description: "One time password authentication",
            },
            #{
                name: "totp",
                value: 2,
                description: "Time-based one time password authentication",
            },
            #{ name: "oauth2", value: 3, description: "OAuth2 authentication" }
        ],
    }
)
@extension("x-enum-varnames", #["password", "otp", "totp", "oauth2"])
enum EmailAuthMethod {
    password: 0,
    otp: 1,
    totp: 2,
    oauth2: 3,
}

model Email {
    @doc("The id of the email")
    id: uint32;

    @doc("The email address")
    @pattern("/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$/")
    email: string;

    @doc("The authentication method")
    authMethod: EmailAuthMethod;

    @doc("The password")
    @secret
    @visibility(Lifecycle.Create, Lifecycle.Update)
    password?: string;

    @doc("The authentication token")
    @secret
    @visibility(Lifecycle.Read)
    token: string;

    @doc("The timestamp when the email was created")
    createdAt: unixTimestamp32;

    @doc("The timestamp when the email was updated")
    updatedAt: unixTimestamp32;
}

model EmailList {
    @doc("The list of emails")
    items: Email[];

    @doc("The total number of emails")
    total: uint32;

    @doc("The offset to fetch the list, 0 means no offset")
    offset: uint32;

    @doc("The limit to fetch the list, 0 means no limit")
    limit: uint32;
}
