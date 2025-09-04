// 导入TypeSpec核心库，用于HTTP协议支持
import "@typespec/http";
// 导入OpenAPI库，用于生成OpenAPI文档
import "@typespec/openapi";

// 导入WiFi相关的模型定义
import "./models/wifi.tsp";
// 导入错误处理模型
import "./models/error.tsp";

import "./common/pagination.tsp";


// 使用TypeSpec.Http命名空间，简化后续装饰器的使用
using TypeSpec.Http;

// 定义命名空间，将相关API组织在一起
namespace OpenApiV2;

// 为API接口设置路由前缀
@route("/wifi")
// 为API添加标签，用于在生成的文档中分类显示
@tag("WiFi")
// 设置API需要Bearer Token认证
@useAuth(BearerAuth)
// 定义WiFiApi接口，包含WiFi相关的操作
interface WiFiApi {
  /** Scan for available WiFi networks */
  // @get装饰器表示这是一个HTTP GET请求
  @get
  @route("/networks")
  @list
  scanNetworks(
    @doc("Whether to force a rescan instead of using cached results")
    @query
    force: boolean = false,
    ...PaginationParams
  ): PagedResult<WiFiNetwork>;

  /** Get details of a specific WiFi network */
  // HTTP GET请求，用于获取特定WiFi网络信息
  @get
  @route("/networks/{id}")
  getNetwork(
    @doc("The id of the WiFi network to get")
    // @path装饰器表示这是一个路径参数，会替换路由中的{id}占位符
    @path
    id: string,
  ): WiFiNetwork | Error;

  /** List WiFi configurations */
  // HTTP GET请求，用于列出WiFi配置
  @get
  @route("/configs")
  @list
  listConfigs(
    ...PaginationParams
  ): PagedResult<WiFiConfig>;

  /** Get a specific WiFi configuration */
  // HTTP GET请求，用于获取特定WiFi配置
  @get
  @route("/configs/{id}")
  getConfig(
    @doc("The id of the WiFi configuration to get")
    @path
    id: string,
  ): WiFiConfig | Error;

  /** Create a WiFi configuration */
  // @post装饰器表示这是一个HTTP POST请求，用于创建资源
  @post
  @route("/configs")
  createConfig(
    @doc("The WiFi configuration to create")
    @body body: WiFiConfig
  ): WiFiConfig | Error;

  /** Update a WiFi configuration */
  // @put装饰器表示这是一个HTTP PUT请求，用于完整更新资源
  @put
  @route("/configs/{id}")
  updateConfig(
    @doc("The id of the WiFi configuration to update")
    @path
    id: string,

    @doc("The WiFi configuration update data")
    @body body: WiFiConfig,
  ): WiFiConfig | Error;

  /** Delete a WiFi configuration */
  // @delete装饰器表示这是一个HTTP DELETE请求，用于删除资源
  @delete
  @route("/configs/{id}")
  deleteConfig(
    @doc("The id of the WiFi configuration to delete")
    @path
    id: string,
  ): void | Error;

  /** Connect to a WiFi network */
  // @post装饰器表示这是一个HTTP POST请求，用于执行连接操作
  @post
  @route("/networks/{id}/connect")
  connectNetwork(
    @doc("The id of the WiFi network to connect to")
    @path
    id: string,
    
    @doc("Connection parameters")
    @body body?: WiFiConnectRequest
  ): {
    // 连接结果
    success: boolean;
    message: string;
    status: WiFiConnectionStatus;
  } | Error;

  /** Disconnect from current WiFi network */
  // @post装饰器表示这是一个HTTP POST请求，用于断开连接
  @post
  @route("/disconnect")
  disconnect(
  ): {
    // 断开连接结果
    success: boolean;
    message: string;
    status: WiFiConnectionStatus;
  } | Error;
  
  /** Get current WiFi connection status */
  // @get装饰器表示这是一个HTTP GET请求，用于获取当前连接状态
  @get
  @route("/status")
  getStatus(
  ): {
    // 当前连接状态
    status: WiFiConnectionStatus;
    connectedNetwork?: WiFiNetwork;
    message: string;
  } | Error;
}