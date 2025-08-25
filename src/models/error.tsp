import "@typespec/http";

@error
model Error {
    @doc("The error code")
    code: int32;

    @doc("The error message")
    msg: string;
}
