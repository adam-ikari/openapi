// 导入TypeSpec核心库，用于HTTP协议支持
import "@typespec/http";
// 导入OpenAPI库，用于生成OpenAPI文档
import "@typespec/openapi";

// 导入邮件组相关的模型定义
import "./models/email_group.tsp";
// 导入错误处理模型
import "./models/error.tsp";

// 使用TypeSpec.Http和TypeSpec.OpenAPI命名空间
using TypeSpec.Http;
using TypeSpec.OpenAPI;

// 定义命名空间，与主服务保持一致
namespace OpenApiV2;

// 为API接口设置路由前缀
@route("/email-groups")
// 为API添加标签，用于在生成的文档中分类显示
@tag("EmailGroups")
// 设置API需要Bearer Token认证
@useAuth(BearerAuth)
// 定义EmailsGroupApi接口，包含邮件组相关的操作
interface EmailsGroupApi {
    /** List email groups */
    // @get装饰器表示这是一个HTTP GET请求，用于获取邮件组列表
    @get
    list(
        @doc("The offset of the list, 0 means no offset, default is 0")
        // @query装饰器表示这是一个查询参数，用于分页
        @query
        offset: uint32 = 0,

        @doc("The limit of the list, 0 means no limit, default is 10")
        @query
        limit: uint32 = 10,
        // 返回类型可以是EmailGroupList或Error，使用|表示联合类型
    ): EmailGroupList | Error;

    /** Read a email group */
    // HTTP GET请求，用于读取单个邮件组信息
    @get
    read(
        @doc("The id of the Email Group to read")
        // @path装饰器表示这是一个路径参数
        @path
        id: string,
    ): EmailGroup | Error;

    /** Create a email group */
    // @post装饰器表示这是一个HTTP POST请求，用于创建邮件组
    @post
    create(
        // 注意：这里可能有个错误，应该使用EmailGroup而不是Email
        @body body: Email,
    ): Email | Error;

    /** Update a email group */
    // @put装饰器表示这是一个HTTP PUT请求，用于完整更新邮件组
    @put
    update(
        @doc("The id of the Email Group to update")
        @path
        id: string,

        @body body: EmailGroup,
    ): Email | Error;

    /** Delete a email group */
    // @delete装饰器表示这是一个HTTP DELETE请求，用于删除邮件组
    @delete
    delete(
        @doc("The id of the Email Group to delete")
        @path
        id: string,
        // 删除操作通常不需要返回内容，所以返回void或Error
    ): void | Error;
}
