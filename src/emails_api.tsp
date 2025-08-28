// Import TypeSpec
import "@typespec/http";
import "@typespec/openapi";

import "./models/email.tsp";
import "./models/error.tsp";

using TypeSpec.Http;

namespace OpenApiV2;

@route("/emails")
@tag("Emails")
@useAuth(BearerAuth)
interface EmailsApi {
    /** List emails */
    @get
    list(
        @doc("The offset of the list, 0 means no offset, default is 0")
        @query
        offset: uint32 = 0,

        @doc("The limit of the list, 0 means no limit, default is 10")
        @query
        limit: uint32 = 10,
    ): EmailList | Error;

    /** Read email */
    @get
    read(
        @doc("The id of the Email to read")
        @path
        id: string,
    ): Email | Error;

    /** Create a email */
    @post
    create(@body body: Email): Email | Error;

    /** Update a email */
    @put
    update(
        @doc("The id of the Email to update")
        @path
        id: string,

        @body body: Email,
    ): Email | Error;

    /** Delete a email */
    @delete
    delete(
        @doc("The id of the Email to delete")
        @path
        id: string,
    ): void | Error;
}
