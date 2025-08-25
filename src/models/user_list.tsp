import "./user.tsp";

model UserList {
    @doc("The list of users")
    items: User[];

    @doc("The total number of users")
    total: uint32;

    @doc("The offset to fetch the list")
    offset: uint32;

    @doc("The limit to fetch the list")
    limit: uint32;
}
