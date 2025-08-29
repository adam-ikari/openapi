// 导入TypeSpec核心库，用于HTTP协议支持
import "@typespec/http";
// 导入OpenAPI库，用于生成OpenAPI文档
import "@typespec/openapi";

// 导入邮件模型
import "./email.tsp";

// 使用TypeSpec.Http和TypeSpec.OpenAPI命名空间
using TypeSpec.Http;
using TypeSpec.OpenAPI;

// 定义邮件组模型
model EmailGroup {
    @doc("The unique identifier of the group")
    @visibility(Lifecycle.Read)
    id: uint32;

    @doc("The name of the group")
    @minLength(1)
    @maxLength(32)
    name: string;

    @doc("The members of the group")
    @maxItems(100)
    members: Email[];
}