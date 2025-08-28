// 导入TypeSpec核心库，用于HTTP协议支持
import "@typespec/http";
// 导入OpenAPI库，用于生成OpenAPI文档
import "@typespec/openapi";

// 导入邮件相关的模型定义
import "./models/email.tsp";
// 导入错误处理模型
import "./models/error.tsp";

// 使用TypeSpec.Http命名空间，简化后续装饰器的使用
using TypeSpec.Http;

// 定义命名空间，与主服务保持一致
namespace OpenApiV2;

// 为API接口设置路由前缀
@route("/emails")
// 为API添加标签，用于在生成的文档中分类显示
@tag("Emails")
// 设置API需要Bearer Token认证
@useAuth(BearerAuth)
// 定义EmailsApi接口，包含邮件相关的操作
interface EmailsApi {
    /** List emails */
    // @get装饰器表示这是一个HTTP GET请求，用于获取邮件列表
    @get
    list(
        @doc("The offset of the list, 0 means no offset, default is 0")
        // @query装饰器表示这是一个查询参数，用于分页
        @query
        offset: uint32 = 0,

        @doc("The limit of the list, 0 means no limit, default is 10")
        @query
        limit: uint32 = 10,
        // 返回类型可以是EmailList或Error，使用|表示联合类型
    ): EmailList | Error;

    /** Read email */
    // HTTP GET请求，用于读取单个邮件信息
    @get
    read(
        @doc("The id of the Email to read")
        // @path装饰器表示这是一个路径参数
        @path
        id: string,
    ): Email | Error;

    /** Create a email */
    // @post装饰器表示这是一个HTTP POST请求，用于创建邮件
    @post
    create(
        // @body装饰器表示参数将作为请求体发送
        @body body: Email,
    ): Email | Error;

    /** Update a email */
    // @put装饰器表示这是一个HTTP PUT请求，用于完整更新邮件
    @put
    update(
        @doc("The id of the Email to update")
        @path
        id: string,

        @body body: Email,
    ): Email | Error;

    /** Delete a email */
    // @delete装饰器表示这是一个HTTP DELETE请求，用于删除邮件
    @delete
    delete(
        @doc("The id of the Email to delete")
        @path
        id: string,
        // 删除操作通常不需要返回内容，所以返回void或Error
    ): void | Error;
}
