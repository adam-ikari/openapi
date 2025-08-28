// 导入TypeSpec核心库，用于HTTP协议支持
import "@typespec/http";
// 导入OpenAPI库，用于生成OpenAPI文档
import "@typespec/openapi";

// 导入用户相关的模型定义
import "./models/user.tsp";
// 导入错误处理模型
import "./models/error.tsp";

// 使用TypeSpec.Http命名空间，简化后续装饰器的使用
using TypeSpec.Http;

// 定义命名空间，将相关API组织在一起
namespace OpenApiV2;

// 为API接口设置路由前缀
@route("/users")
// 为API添加标签，用于在生成的文档中分类显示
@tag("Users")
// 设置API需要Bearer Token认证
@useAuth(BearerAuth)
// 定义UsersApi接口，包含用户相关的操作
interface UsersApi {
  /** List users */
  // @get装饰器表示这是一个HTTP GET请求
  @get
  list(
    // 为参数添加文档说明
    @doc("The offset of the list, 0 means no offset, default is 0")
    // @query装饰器表示这是一个查询参数
    @query
    // 定义offset参数，默认值为0
    offset: uint32 = 0,

    @doc("The limit of the list, 0 means no limit, default is 10")
    @query
    // 定义limit参数，默认值为10
    limit: uint32 = 10,
    // 返回类型可以是UserList或Error，使用|表示联合类型
  ): UserList | Error;

  /** Read users */
  // HTTP GET请求，用于读取单个用户信息
  @get
  read(
    @doc("The id of the user to read")
    // @path装饰器表示这是一个路径参数，会替换路由中的{id}占位符
    @path
    id: string,
  ): User | Error;

  /** Create a users */
  // @post装饰器表示这是一个HTTP POST请求，用于创建资源
  @post
  // @body装饰器表示参数将作为请求体发送
  create(@body body: User): User | Error;

  /** Update a users */
  // @put装饰器表示这是一个HTTP PUT请求，用于完整更新资源
  @put
  update(
    @doc("The id of the user to update")
    @path
    id: string,

    // 更新操作的请求体
    @body body: User,
  ): User | Error;

  /** Delete a users */
  // @delete装饰器表示这是一个HTTP DELETE请求，用于删除资源
  @delete
  delete(
    @doc("The id of the user to delete")
    @path
    id: string,
    // 删除操作通常不需要返回内容，所以返回void或Error
  ): void | Error;
}
