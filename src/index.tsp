// 导入TypeSpec核心库，用于HTTP协议支持
import "@typespec/http";
// 导入OpenAPI库，用于生成OpenAPI文档
import "@typespec/openapi";

// 导入各个API模块
import "./users_api.tsp";
import "./emails_api.tsp";
import "./email_groups_api.tsp";
import "./wifi_api.tsp";
import "./certificates_api.tsp";

// 使用TypeSpec.Http和TypeSpec.OpenAPI命名空间
using TypeSpec.Http;
using TypeSpec.OpenAPI;

// @service装饰器用于定义服务的基本信息
@service(#{ title: "OpenAPI v2" })
// @info装饰器用于添加API的元信息，如版本号
@info(#{ version: "2.0.0" })
// @route装饰器用于设置API的基础路由路径
@route("/api/v2")
// 定义服务的根命名空间
namespace OpenApiV2;