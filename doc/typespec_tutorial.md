# TypeSpec 语法教程与最佳实践指南

## 目录

1. [TypeSpec 简介](#typespec-简介)
2. [基础语法](#基础语法)
3. [模型定义](#模型定义)
4. [API 接口定义](#api-接口定义)
5. [装饰器详解](#装饰器详解)
6. [分页实现](#分页实现)
7. [最佳实践](#最佳实践)
8. [项目约定](#项目约定)
9. [代码生成与集成](#代码生成与集成)
10. [调试与测试](#调试与测试)

## TypeSpec 简介

TypeSpec 是一种现代化的语言，专门用于描述云服务和 API。它提供了强类型系统和丰富的装饰器系统，可以生成多种格式的 API 规范，如 OpenAPI。

### 主要优势

- 强类型系统，减少错误
- 丰富的装饰器支持，可生成详细文档
- 支持多种输出格式（OpenAPI、Swagger 等）
- 易于维护和版本控制

## 基础语法

### 命名空间

命名空间用于组织相关的 API 和模型：

```typespec
namespace OpenApiV2;
```

### 导入语句

导入其他 TypeSpec 文件或库：

```typespec
import "@typespec/http";
import "@typespec/openapi";
import "./models/user.tsp";
```

### 使用语句

简化装饰器的使用：

```typespec
using TypeSpec.Http;
using TypeSpec.OpenAPI;
```

## 模型定义

### 基本模型

在 TypeSpec 中定义模型使用 `model` 关键字：

```typespec
model User {
  id: uint32;
  name: string;
  age: uint8;
}
```

### 枚举类型

使用 `enum` 关键字定义枚举：

```typespec
enum Gender {
  secret: "secret",
  male: "male",
  female: "female"
}
```

### 可选字段

使用 `?` 表示可选字段：

```typespec
model User {
  name: string;
  avatar?: url;  // 可选字段
}
```

### 泛型模型

TypeSpec 支持泛型，可以创建可重用的模型：

```typespec
model PagedResult<T> {
  items: T[];
  total: uint32;
}
```

## API 接口定义

### 基本接口

使用 `interface` 关键字定义 API 接口：

```typespec
interface UsersApi {
  list(): User[];
  create(@body body: User): User;
}
```

### HTTP 方法装饰器

TypeSpec 提供了多种 HTTP 方法装饰器：

```typespec
interface UsersApi {
  @get list(): User[];
  @post create(@body body: User): User;
  @put update(@path id: uint32, @body body: User): User;
  @delete delete(@path id: uint32): void;
}
```

### 路由设置

使用 `@route` 装饰器设置路由：

```typespec
@route("/users")
interface UsersApi {
  // 路由将为 /users
}
```

## 装饰器详解

### 文档装饰器

- `@doc` - 添加文档说明
- `@summary` - 添加摘要信息

```typespec
@doc("The unique identifier of the user")
id: uint32;
```

### 验证装饰器

- `@minLength`/`@maxLength` - 字符串长度验证
- `@minValue`/`@maxValue` - 数值范围验证
- `@pattern` - 正则表达式验证

```typespec
@minLength(3)
@maxLength(32)
@pattern("/^[a-zA-Z0-9_-]+$/")
name: string;

@minValue(1)
@maxValue(120)
age: uint8;
```

### 参数装饰器

- `@path` - 路径参数
- `@query` - 查询参数
- `@body` - 请求体参数

```typespec
update(
  @path id: uint32,
  @body body: User
): User;
```

### 可见性装饰器

- `@visibility` - 控制字段在不同操作中的可见性

```typespec
@visibility(Lifecycle.Read)
id: uint32;

@visibility(Lifecycle.Create, Lifecycle.Update)
password: string;
```

### 安全装饰器

- `@useAuth` - 设置认证方式

```typespec
@useAuth(BearerAuth)
interface UsersApi {
  // 所有操作都需要 Bearer Token 认证
}
```

## 分页实现

TypeSpec 提供了内置的分页装饰器来实现分页功能：

### 分页参数模型

```typespec
model PaginationParams {
  @doc("offset, default 0")
  @offset
  @query
  offset?: uint32 = 0;

  @doc("limit, default 100")
  @pageSize
  @query
  limit?: uint32 = 100;
}
```

### 分页结果模型

```typespec
model PagedResult<T> {
  @doc("Items")
  @pageItems
  items: T[];

  @doc("Total count of items")
  total: uint32;
}
```

### 在接口中使用分页

```typespec
@list
list(
  ...PaginationParams
): PagedResult<User>;
```

## 最佳实践

### 1. 模型组织

- 将相关模型放在同一文件中
- 使用清晰的文件命名约定
- 为每个主要资源创建独立的模型文件

### 2. 接口设计

- 为每个资源创建独立的接口
- 使用一致的命名约定
- 合理使用 HTTP 方法

### 3. 文档编写

- 为所有公共接口和模型添加文档说明
- 提供清晰的参数和返回值描述
- 使用示例值说明字段用途

### 4. 验证规则

- 为所有输入字段添加适当的验证规则
- 使用合理的默认值
- 明确标识必填和可选字段

### 5. 错误处理

- 定义统一的错误响应模型
- 在可能出错的操作中包含错误类型

```typespec
create(@body body: User): User | Error;
```

### 6. 版本控制

- 在服务定义中明确指定版本
- 使用语义化版本控制

```typespec
@info(#{ version: "2.0.0" })
```

## 项目约定

### 文件结构

```
src/
├── models/           # 数据模型定义
├── common/           # 通用类型定义
├── index.tsp         # 主入口文件
├── users_api.tsp     # 用户 API 操作
├── emails_api.tsp    # 邮件 API 操作
├── email_groups_api.tsp # 邮件组 API 操作
├── certificates_api.tsp # 证书 API 操作
├── wifi_api.tsp      # WiFi API 操作
```

### 命名约定

1. 模型名使用 PascalCase（如 `User`, `Email`）
2. 接口名使用资源名 + Api 后缀（如 `UsersApi`）
3. 枚举名使用 PascalCase（如 `Gender`）
4. 文件名使用 snake_case（如 `user.tsp`, `users_api.tsp`）

### 装饰器使用

1. 所有公共接口都应添加 `@tag` 装饰器用于文档分类
2. 需要认证的接口应添加 `@useAuth` 装饰器
3. 所有字段都应添加 `@doc` 装饰器说明用途
4. 路径参数应添加 `@doc` 装饰器说明含义

### 分页约定

1. 使用统一的 `PaginationParams` 模型定义分页参数
2. 使用统一的 `PagedResult<T>` 模型定义分页结果
3. 分页操作应使用 `@list` 装饰器标记

通过遵循这些约定和最佳实践，可以确保 API 设计的一致性和可维护性。

## 代码生成与集成

### 生成 OpenAPI 规范

TypeSpec 可以直接生成 OpenAPI 3.1 规范文件：

```bash
# 编译 TypeSpec 文件生成 OpenAPI 规范
yarn build:tsp
```

生成的规范文件位于 `output/schema/openapi.yaml`。

### 文档生成

项目支持生成多种格式的文档：

```bash
# 生成 Markdown 文档
npm run build:doc

# 生成 HTML 交互式文档
npm run build:html
```

- Markdown 文档：`output/doc/md/openapi.md`
- HTML 文档：`output/doc/html/openapi.html`
