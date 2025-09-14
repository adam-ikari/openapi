# TypeSpec 快速上手指南

## 目录
1. [简介](#简介)
2. [环境准备](#环境准备)
3. [创建第一个TypeSpec项目](#创建第一个typespec项目)
4. [理解项目结构](#理解项目结构)
5. [定义数据模型](#定义数据模型)
6. [创建API接口](#创建api接口)
7. [添加分页支持](#添加分页支持)
8. [构建和生成输出](#构建和生成输出)
9. [使用生成的客户端](#使用生成的客户端)
10. [常见问题和解决方案](#常见问题和解决方案)

## 简介

本指南将带领您从零开始创建一个完整的TypeSpec项目，包括定义数据模型、创建API接口、生成OpenAPI规范和客户端SDK等全过程。

## 环境准备

### 系统要求
- Node.js (v16 或更高版本)
- npm 或 yarn 包管理器

### 安装TypeSpec编译器
```bash
npm install -g @typespec/compiler
```

### 安装项目依赖
在项目根目录下运行：
```bash
npm install
# 或者
yarn install
```

## 创建第一个TypeSpec项目

### 1. 初始化项目目录
```bash
mkdir my-typespec-api
cd my-typespec-api
```

### 2. 创建项目结构
```
my-typespec-api/
├── src/
│   ├── models/
│   ├── common/
│   └── index.tsp
├── package.json
└── tspconfig.yaml
```

### 3. 创建 package.json
```json
{
  "name": "my-typespec-api",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "build": "tsp compile src/index.tsp --output-dir output"
  },
  "dependencies": {
    "@typespec/compiler": "latest",
    "@typespec/http": "latest",
    "@typespec/openapi": "latest",
    "@typespec/openapi3": "latest",
    "@typespec/rest": "latest"
  }
}
```

### 4. 创建 tspconfig.yaml
```yaml
emit:
  - "@typespec/openapi3"
```

## 理解项目结构

### 主入口文件 (src/index.tsp)
这是TypeSpec项目的入口点，负责导入所有模块并定义服务基本信息：

```typespec
// 导入核心库
import "@typespec/http";
import "@typespec/openapi";

// 导入各个模块
import "./models/user.tsp";
import "./users_api.tsp";

// 使用命名空间
using TypeSpec.Http;
using TypeSpec.OpenAPI;

// 定义服务信息
@service({
  title: "My API Service"
})
@info({
  version: "1.0.0"
})
@route("/api/v1")
namespace MyApi;
```

## 定义数据模型

### 1. 创建模型文件 (src/models/user.tsp)
```typespec
// 导入必要的库
import "@typespec/openapi";
using TypeSpec.OpenAPI;

// 定义枚举类型
@doc("User status")
enum UserStatus {
  active: "active",
  inactive: "inactive",
  suspended: "suspended"
}

// 定义用户模型
model User {
  @doc("The unique identifier of the user")
  @visibility("read")
  id: int32;

  @doc("The name of the user")
  @minLength(1)
  @maxLength(100)
  name: string;

  @doc("The email address of the user")
  @pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
  email: string;

  @doc("The status of the user")
  status: UserStatus;

  @doc("The timestamp when the user was created")
  @visibility("read")
  createdAt: utcDateTime;

  @doc("The timestamp when the user was last updated")
  @visibility("read")
  updatedAt: utcDateTime;
}

// 定义创建用户时的模型
model UserCreate {
  @doc("The name of the user")
  @minLength(1)
  @maxLength(100)
  name: string;

  @doc("The email address of the user")
  @pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
  email: string;
}

// 定义更新用户时的模型
model UserUpdate {
  @doc("The name of the user")
  @minLength(1)
  @maxLength(100)
  name?: string;

  @doc("The status of the user")
  status?: UserStatus;
}
```

## 创建API接口

### 1. 创建API文件 (src/users_api.tsp)
```typespec
// 导入核心库
import "@typespec/http";
import "@typespec/openapi";

// 导入模型
import "./models/user.tsp";

// 导入分页支持
import "./common/pagination.tsp";

// 使用命名空间
using TypeSpec.Http;
using TypeSpec.OpenAPI;

// 定义API接口
@route("/users")
@tag("Users")
interface UsersApi {
  /** List users */
  @get
  @list
  listUsers(...PaginationParams): PagedResult<User>;

  /** Create a user */
  @post
  createUser(@body body: UserCreate): User;

  /** Get a user by ID */
  @get
  @route("/{id}")
  getUser(@path id: int32): User;

  /** Update a user */
  @put
  @route("/{id}")
  updateUser(@path id: int32, @body body: UserUpdate): User;

  /** Delete a user */
  @delete
  @route("/{id}")
  deleteUser(@path id: int32): void;
}
```

## 添加分页支持

### 1. 创建分页模型 (src/common/pagination.tsp)
```typespec
import "@typespec/http";
import "@typespec/openapi";

using TypeSpec.Http;
using TypeSpec.OpenAPI;

model PaginationParams {
  @doc("The number of items to skip before starting to collect the result set")
  @query
  offset?: int32 = 0;

  @doc("The numbers of items to return")
  @query
  limit?: int32 = 100;
}

model PagedResult<T> {
  @doc("The items in the current page")
  items: T[];

  @doc("Total number of items")
  total: int32;

  @doc("The number of items to skip")
  offset: int32;

  @doc("The numbers of items to return")
  limit: int32;
}
```

## 构建和生成输出

### 1. 编译TypeSpec文件
```bash
npm run build
# 或直接使用TypeSpec编译器
tsp compile src/index.tsp --output-dir output
```

### 2. 生成的输出文件
编译完成后，将在 `output/` 目录中生成以下文件：
- `openapi.yaml` - OpenAPI 3.1 规范
- `openapi.json` - OpenAPI 3.1 规范(JSON格式)
- 客户端SDK代码（如果配置了相关插件）

## 使用生成的客户端

### 1. JavaScript/TypeScript 客户端使用示例
```javascript
// 导入生成的客户端
import { MyApiClient } from './output/client/javascript/src/index';

// 创建客户端实例
const client = new MyApiClient({
  baseUrl: 'https://api.example.com',
  token: 'your-access-token'
});

// 调用API操作
async function example() {
  try {
    // 创建用户
    const newUser = await client.users.createUser({
      name: 'John Doe',
      email: 'john.doe@example.com'
    });
    
    console.log('Created user:', newUser);
    
    // 获取用户列表
    const users = await client.users.listUsers({
      offset: 0,
      limit: 50
    });
    
    console.log('Users:', users.items);
    console.log('Total users:', users.total);
    
    // 获取单个用户
    const user = await client.users.getUser(newUser.id);
    console.log('User:', user);
    
    // 更新用户
    const updatedUser = await client.users.updateUser(newUser.id, {
      name: 'John Smith'
    });
    
    console.log('Updated user:', updatedUser);
    
    // 删除用户
    await client.users.deleteUser(newUser.id);
    console.log('User deleted');
  } catch (error) {
    console.error('API Error:', error);
  }
}

example();
```

## 常见问题和解决方案

### 1. 编译错误 "Cannot find module"
**问题**: 编译时出现类似 `Cannot find module './models/user.tsp'` 的错误。

**解决方案**: 
- 检查文件路径是否正确
- 确保文件名拼写正确
- 确保所有导入的文件都存在

### 2. 装饰器未识别
**问题**: 使用装饰器时出现错误，如 `Unknown decorator @doc`。

**解决方案**:
- 确保已正确导入相关库：
  ```typespec
  import "@typespec/openapi";
  using TypeSpec.OpenAPI;
  ```

### 3. 分页参数未生效
**问题**: 分页参数在生成的OpenAPI规范中未正确显示。

**解决方案**:
- 确保正确使用了分页装饰器：
  ```typespec
  @offset  // 标记offset参数
  @pageSize // 标记limit参数
  @pageItems // 标记返回的数据项
  @list // 标记分页操作
  ```

### 4. 模型字段可见性问题
**问题**: 某些字段在不应该显示的操作中出现了。

**解决方案**:
- 正确使用 `@visibility` 装饰器：
  ```typespec
  @visibility("read")        // 仅在读取操作中显示
  @visibility("create")      // 仅在创建操作中显示
  @visibility("update")      // 仅在更新操作中显示
  @visibility("read", "update") // 在读取和更新操作中显示
  ```

### 5. 路由冲突
**问题**: API路由出现冲突或不符合预期。

**解决方案**:
- 检查 `@route` 装饰器的使用：
  ```typespec
  @route("/api/v1")        // 服务基础路由
  namespace MyApi;
  
  @route("/users")         // 接口路由
  interface UsersApi;
  
  @route("/{id}")          // 操作路由
  getUser(@path id: int32): User;
  ```

通过遵循本指南，您应该能够快速上手TypeSpec并创建功能完整的API。随着对TypeSpec的深入了解，您可以探索更多高级特性和自定义配置选项。