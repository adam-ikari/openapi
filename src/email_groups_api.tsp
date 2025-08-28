// Import TypeSpec
import "@typespec/http";
import "@typespec/openapi";

import "./models/email_group.tsp";
import "./models/error.tsp";

using TypeSpec.Http;

namespace OpenApiV2;

@route("/email-groups")
@tag("EmailGroups")
@useAuth(BearerAuth)
interface EmailsGroupApi {
    /** List email groups */
    @get
    list(
        @doc("The offset of the list, 0 means no offset, default is 0")
        @query
        offset: uint32 = 0,

        @doc("The limit of the list, 0 means no limit, default is 10")
        @query
        limit: uint32 = 10,
    ): EmailGroupList | Error;

    /** Read a email group */
    @get
    read(
        @doc("The id of the Email Group to read")
        @path
        id: string,
    ): EmailGroup | Error;

    /** Create a email group */
    @post
    create(@body body: Email): Email | Error;

    /** Update a email group */
    @put
    update(
        @doc("The id of the Email Group to update")
        @path
        id: string,

        @body body: EmailGroup,
    ): Email | Error;

    /** Delete a email group */
    @delete
    delete(
        @doc("The id of the Email Group to delete")
        @path
        id: string,
    ): void | Error;
}
