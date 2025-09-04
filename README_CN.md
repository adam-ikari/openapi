# OpenAPI 工具链

[English](README.md) | [简体中文](README_CN.md)

## 项目概述

本项目演示了使用 TypeSpec 定义和生成 OpenAPI v3.1 规范以及 JavaScript/TypeScript 客户端 SDK 的现代 API 开发方法，适用于包含用户、邮件、邮件组、证书和 WiFi 资源的示例 API。

该项目既是基于 TypeSpec 的 API 开发参考实现，也是从单一事实来源生成一致的 API 规范、文档和客户端库的实用工具链。

## 技术栈

- **TypeSpec**：用于描述云服务和 API 的现代语言
- **OpenAPI 3.1**：行业标准的 RESTful API 规范
- **JavaScript/TypeScript**：生成的客户端 SDK，便于 API 集成
- **Redocly**：用于生成交互式 API 文档的工具
- **Node.js**：用于构建和运行工具链的运行时环境
- **Yarn/NPM**：用于处理依赖关系的包管理器

## 关键优势

### 无需服务器部署

本项目专注于 API 规范和客户端 SDK 生成。生成的文件可以直接在客户端应用程序中使用，无需任何服务器部署。这使其非常适合：

- API 优先开发方法
- 为现有后端服务生成客户端 SDK
- 为分布式团队生成 API 文档
- 可随项目演进的版本控制 API 规范

### 基于 Git 的管理

整个 API 规范和文档都可以通过 Git 进行版本控制，允许：

- 完整的 API 变更历史跟踪
- API 演进的分支和合并策略
- 协作式 API 设计和审查流程
- 与 CI/CD 管道集成实现自动客户端 SDK 生成
- 需要时轻松回滚到以前的 API 版本

这种方法确保您的 API 规范、文档和客户端 SDK 始终保持同步，并可以通过现有的 Git 工作流程进行管理。

## 目的和目标

本项目旨在通过提供完整的工具链来简化 API 开发：

- 使用 TypeSpec（一种用于描述云服务和 API 的现代语言）定义 API
- 生成与 API 工具广泛兼容的 OpenAPI 3.1 规范
- 创建即用的 JavaScript/TypeScript 客户端 SDK
- 生成多种格式的全面文档
- 消除手动编写和维护 API 规范的需求
- 确保 API 定义、文档和客户端代码之间的一致性

## 目标使用场景

此工具链非常适合：

- **API 优先开发**：在实现后端服务之前设计 API 的团队
- **微服务架构**：需要一致 API 接口的多服务项目
- **SDK 生成**：为 JavaScript/TypeScript 中的 API 创建客户端库
- **文档自动化**：生成始终保持最新的 API 文档
- **契约测试**：定义前后端团队之间的清晰 API 契约
- **遗留 API 现代化**：将现有 API 迁移到现代规范格式

## 项目结构

```
.
├── src/                  # TypeSpec 源文件
│   ├── models/           # 数据模型定义
│   ├── common/           # 通用类型定义
│   ├── index.tsp         # 主入口文件
│   ├── users_api.tsp     # 用户 API 操作
│   ├── emails_api.tsp    # 邮件 API 操作
│   ├── email_groups_api.tsp # 邮件组 API 操作
│   ├── certificates_api.tsp # 证书 API 操作
│   ├── wifi_api.tsp      # WiFi API 操作
├── output/               # 生成的输出文件
│   ├── schema/           # OpenAPI 规范 (YAML)
│   ├── clients/js/       # JavaScript/TypeScript 客户端 SDK
│   └── doc/              # 生成的文档 (HTML 和 Markdown)
├── templates/            # 自定义文档模板
├── scripts/              # 构建脚本
└── package.json          # 项目配置和脚本
```

## API 资源

API 包含以下资源：
- 用户 - 管理用户账户
- 邮件 - 处理邮件消息
- 邮件组 - 管理邮件组订阅
- 证书 - 管理证书
- WiFi - 管理 WiFi 配置

每个资源都提供完整的 CRUD（创建、读取、更新、删除）操作。

## 先决条件

- Node.js (v16 或更高版本)
- Yarn 或 npm

## 构建指令

### 先决条件

- Node.js (v16 或更高版本)
- Yarn 或 npm

### 安装依赖

```bash
yarn install
```

或者使用 npm：

```bash
npm install
```

### 构建项目

构建过程将：
1. 编译 TypeSpec 文件以生成 OpenAPI 规范
2. 生成 Markdown 和 HTML 格式的文档
3. 创建 JavaScript/TypeScript 客户端 SDK

```bash
yarn build
```

或者使用 npm：

```bash
npm run build
```

此命令执行以下步骤：
- `build:tsp`：编译 TypeSpec 文件以生成 OpenAPI 规范
- `build:doc`：从 OpenAPI 规范生成 Markdown 文档
- `build:html`：使用 Redocly 生成 HTML 文档

### 构建单个组件

仅编译 TypeSpec 文件：
```bash
yarn build:tsp
```

生成文档：
```bash
yarn build:doc
```

生成 HTML 文档：
```bash
yarn build:html
```

### 启动 Mock 服务器

您可以使用 Prism 启动一个基于 OpenAPI 规范模拟 API 的 mock 服务器：

```bash
npm run mock
```

这将在 `http://127.0.0.1:4010` 上启动一个 mock 服务器，该服务器会响应规范中定义的所有 API 端点。

要在监视模式下启动 mock 服务器（在 OpenAPI 规范更改时自动重新加载）：
```bash
npm run mock:watch
```

## 生成的输出

构建后，在 `output/` 目录中生成以下输出：

- `schema/openapi.yaml` - OpenAPI v3.1 规范
- `clients/js/` - JavaScript/TypeScript 客户端 SDK
- `doc/md/openapi.md` - Markdown 文档
- `doc/html/openapi.html` - HTML 文档（使用 Redocly）

## TypeSpec 结构

TypeSpec 定义按如下方式组织：

- `src/index.tsp` - 主入口点
- `src/users_api.tsp` - 用户 API 操作
- `src/emails_api.tsp` - 邮件 API 操作
- `src/email_groups_api.tsp` - 邮件组 API 操作
- `src/certificates_api.tsp` - 证书 API 操作
- `src/wifi_api.tsp` - WiFi API 操作
- `src/models/` - API 中使用的数据模型

每个 API 文件都为其相应资源定义了一套完整的 CRUD 操作，包括适当的 HTTP 方法、路由和身份验证。

## 分页实现

项目使用 TypeSpec 内置的分页装饰器来实现分页功能：

- `@list` 装饰器标记分页操作
- `@offset` 和 `@pageSize` 装饰器标记分页参数
- `@pageItems` 装饰器标记分页数据项
- 公共 `PaginationParams` 模型定义分页查询参数
- 公共 `PagedResult<T>` 模型定义分页响应格式，包含数据项和分页元数据

## 客户端 SDK

生成的 JavaScript/TypeScript 客户端 SDK 提供了与 API 交互的便捷方式。它包括：

- 强类型模型
- 具有适当参数类型的 API 操作方法
- 内置身份验证支持
- 经典和现代 API 接口

## 文档

文档是从 OpenAPI 规范自动生成的：
- Markdown 格式，用于与开发者门户集成
- 使用 Redocly 的 HTML 格式，用于交互式 API 文档

文档包括：
- 带有 HTTP 方法的 API 端点
- 请求和响应模式
- 多种语言的代码示例
- 身份验证信息

## 开发约定

- API 定义使用 TypeSpec 编写，位于 `src/` 目录
- 数据模型定义在 `src/models/` 目录中
- 每个 API 资源都有独立的 TypeSpec 文件
- 使用 TypeSpec 内置的分页装饰器实现分页功能
- 公共分页参数和响应模型定义在 `src/common/pagination.tsp` 文件中
- 文档和客户端 SDK 从单一的 TypeSpec 源自动生成
- 添加新 API 或模型时，请遵循现有的代码模式和约定