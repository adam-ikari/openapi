// Import TypeSpec
import "@typespec/http";
import "@typespec/openapi";

import "./email.tsp";

using TypeSpec.Http;
using TypeSpec.OpenAPI;

@doc("A group of emails")
model EmailGroup {
    @doc("The unique identifier for the group")
    @visibility(Lifecycle.Read)
    id: string;

    @doc("The name of the group")
    name: string;

    members: Email[];
}

@doc("A list of email groups")
model EmailGroupList {
    items: EmailGroup[];

    @doc("The total number of email groups")
    total: uint32;

    @doc("The offset to fetch the list, 0 means no offset")
    offset: uint32;

    @doc("The limit to fetch the list, 0 means no limit")
    limit: uint32;
}
