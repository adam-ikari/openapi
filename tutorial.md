# OpenAPI 工具链使用教程

## 引言

在现代软件开发中，API（应用程序编程接口）扮演着至关重要的角色。为了确保 API 的一致性、可维护性和易用性，使用标准化的工具链来定义、生成和管理 API 变得尤为重要。本教程将引导您使用 OpenAPI 工具链，通过 TypeSpec 定义 API，并自动生成 OpenAPI 规范、客户端 SDK 和文档。

OpenAPI 工具链提供了一种现代化的 API 开发方法，它允许开发者专注于 API 的设计，而将规范生成、文档编写和客户端代码生成等繁琐任务自动化。通过本教程，您将学会如何：

- 安装和配置 OpenAPI 工具链
- 使用 TypeSpec 定义 API
- 生成 OpenAPI 规范
- 生成客户端 SDK
- 生成 API 文档
- 使用 Mock 服务器进行测试

无论您是 API 设计新手还是有经验的开发者，本教程都将帮助您快速上手并充分利用这一强大的工具链。

## 安装和配置

### 环境准备

在开始之前，请确保您的系统已安装以下软件：

1. **Node.js (v16 或更高版本)**：OpenAPI 工具链基于 Node.js 构建，因此需要安装 Node.js 运行时环境。
2. **Yarn 或 npm**：用于管理项目依赖。Yarn 是推荐的包管理器，但 npm 也同样支持。

### 安装步骤

1. 克隆或下载 OpenAPI 工具链项目到本地目录。
2. 打开终端或命令行工具，导航到项目根目录。
3. 运行以下命令安装项目依赖：

   ```bash
   yarn install
   ```

   或者使用 npm：

   ```bash
   npm install
   ```

   这将安装所有必要的依赖项，包括 TypeSpec 编译器、OpenAPI 生成器、客户端 SDK 生成器等。

安装完成后，您就可以开始使用 OpenAPI 工具链来定义和生成 API 了。

## 使用 TypeSpec 定义 API

### 项目结构

OpenAPI 工具链的项目结构清晰地组织了 API 定义文件。主要目录包括：

- `src/`：包含所有 TypeSpec 源文件
  - `models/`：定义数据模型
  - `common/`：定义通用类型和分页参数
  - `index.tsp`：主入口文件
  - 各个 API 资源文件（如 `users_api.tsp`、`emails_api.tsp` 等）
- `output/`：生成的输出文件
  - `schema/`：OpenAPI 规范 (YAML)
  - `clients/js/`：JavaScript/TypeScript 客户端 SDK
  - `doc/`：生成的文档 (HTML 和 Markdown)

### 定义数据模型

在 `src/models/` 目录中，您可以定义 API 使用的数据模型。例如，`user.tsp` 文件定义了用户模型：

```typespec
model User {
  @doc("The unique identifier of the user")
  @visibility(Lifecycle.Read)
  id: uint32;

  @doc("The name of the user")
  @minLength(3)
  @maxLength(32)
  @pattern("/^[a-zA-Z0-9_-]+$/")
  name: string;

  @doc("The age of the user, min 1, max 120")
  @minValue(1)
  @maxValue(120)
  age: uint8;

  @doc("The gender of the user")
  gender: Gender;

  @doc("The email of the user")
  email: Email;

  @doc("The avatar of the user")
  @example("https://example.com/avatar.png")
  avatar?: url;

  @doc("The password of the user")
  @secret
  @visibility(Lifecycle.Create, Lifecycle.Update)
  password: string;

  @doc("The timestamp when the user was created")
  createdAt: utcDateTime;

  @doc("The timestamp when the user was updated")
  updatedAt: utcDateTime;
}
```

### 定义 API 接口

在 `src/` 目录中，您可以为每个资源定义 API 接口。例如，`users_api.tsp` 文件定义了用户相关的操作：

```typespec
@route("/users")
@tag("Users")
@useAuth(BearerAuth)
interface UsersApi {
  /** List users */
  @get
  @list
  list(
    ...PaginationParams
  ): PagedResult<User>;

  /** Read users */
  @get
  read(
    @doc("The id of the user to read")
    @path
    id: uint32,
  ): User | Error;

  /** Create a users */
  @post
  create(@body body: User): User | Error;

  /** Update a users */
  @put
  update(
    @doc("The id of the user to update")
    @path
    id: uint32,
    @body body: User,
  ): User | Error;

  /** Delete a users */
  @delete
  delete(
    @doc("The id of the user to delete")
    @path
    id: uint32,
  ): void | Error;
}
```

通过这种方式，您可以清晰地定义 API 的结构和行为。

## 生成 OpenAPI 规范

### 构建项目

要生成 OpenAPI 规范、客户端 SDK 和文档，只需运行以下命令：

```bash
yarn build
```

或者使用 npm：

```bash
npm run build
```

这个命令会执行以下步骤：

1. `build:tsp`：编译 TypeSpec 文件以生成 OpenAPI 规范
2. `build:doc`：从 OpenAPI 规范生成 Markdown 文档
3. `build:html`：使用 Redocly 生成 HTML 文档

### 生成的输出

构建完成后，您将在 `output/` 目录中找到以下生成的文件：

- `schema/openapi.yaml`：OpenAPI v3.1 规范文件
- `clients/js/`：JavaScript/TypeScript 客户端 SDK
- `doc/md/openapi.md`：Markdown 格式的 API 文档
- `doc/html/openapi.html`：HTML 格式的交互式 API 文档（使用 Redocly）

这些文件可以直接用于 API 的部署、集成和文档发布。

## 生成客户端 SDK

### JavaScript/TypeScript SDK

OpenAPI 工具链会自动生成 JavaScript/TypeScript 客户端 SDK，位于 `output/clients/js/` 目录中。该 SDK 提供了与 API 交互的便捷方式，包括：

- 强类型模型定义
- 具有适当参数类型的 API 操作方法
- 内置身份验证支持
- 经典和现代 API 接口

### 使用 SDK

要使用生成的 SDK，您可以将其作为依赖项添加到您的项目中，然后通过以下方式调用 API：

```javascript
import { OpenApiV2Client } from './output/clients/js/src/openApiV2Client';

const client = new OpenApiV2Client({ baseUrl: 'http://localhost:3000' });

// 获取用户列表
client.users.list().then(users => {
  console.log(users);
});

// 创建新用户
const newUser = { name: 'John Doe', age: 30, gender: 'male', email: 'john@example.com' };
client.users.create({ body: newUser }).then(user => {
  console.log(user);
});
```

通过这种方式，您可以轻松地在客户端应用程序中集成和使用 API。

## 生成 API 文档

### Markdown 文档

OpenAPI 工具链会自动生成 Markdown 格式的 API 文档，位于 `output/doc/md/openapi.md`。该文档包含了 API 端点、请求和响应模式、代码示例以及身份验证信息。

### HTML 文档

此外，工具链还会生成 HTML 格式的交互式 API 文档，位于 `output/doc/html/openapi.html`。该文档使用 Redocly 构建，提供了更丰富的用户体验，包括：

- 可折叠的端点列表
- 实时的请求和响应示例
- 多种编程语言的代码示例
- 搜索和导航功能

您可以通过浏览器直接打开 HTML 文档来查看和测试 API。

## 使用 Mock 服务器

### 启动 Mock 服务器

OpenAPI 工具链集成了 Prism mock 服务器，可以基于 OpenAPI 规范模拟 API 行为。要启动 mock 服务器，请运行以下命令：

```bash
npm run mock
```

这将在 `http://127.0.0.1:4010` 上启动一个 mock 服务器，该服务器会响应规范中定义的所有 API 端点。

### 监视模式

要在监视模式下启动 mock 服务器（在 OpenAPI 规范更改时自动重新加载），请运行：

```bash
npm run mock:watch
```

这使得在开发过程中测试 API 变更变得更加容易，无需部署实际的后端服务。

## 总结和下一步建议

通过本教程，您已经学习了如何使用 OpenAPI 工具链来定义、生成和管理 API。您掌握了从安装配置到生成规范、SDK 和文档的完整流程，并了解了如何使用 Mock 服务器进行测试。

### 下一步建议

1. **深入学习 TypeSpec**：探索 TypeSpec 的更多高级特性，如接口继承、联合类型、模板等，以构建更复杂的 API。
2. **自定义模板**：在 `templates/` 目录中，您可以自定义文档生成模板，以满足特定的文档需求。
3. **集成到 CI/CD**：将 OpenAPI 工具链集成到您的持续集成和持续部署流程中，实现 API 规范和文档的自动化生成和发布。
4. **扩展 API 功能**：在现有基础上添加更多 API 资源和操作，构建完整的 API 生态系统。
5. **探索更多工具**：了解和使用其他与 OpenAPI 生态系统相关的工具，如 API 测试工具、代码生成器等。

通过不断实践和探索，您将能够更熟练地使用 OpenAPI 工具链，提高 API 开发的效率和质量。