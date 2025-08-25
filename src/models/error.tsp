import "@typespec/http";
import "./status_code.tsp";

@error
model Error {
    @doc("The error code")
    code: StatusCode;

    @doc("The error message")
    msg: string;
}
