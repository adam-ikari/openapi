# 项目概述

本项目演示了使用 TypeSpec 定义和生成 OpenAPI v3.1 规范以及 JavaScript/TypeScript 客户端 SDK 的现代 API 开发方法。它为包含用户、电子邮件、邮件组、WiFi 和证书资源的示例 API 提供了一套完整的工具链，用于生成一致的 API 规范、文档和客户端库。

## 技术栈

- **TypeSpec**: 用于定义 API 的现代语言
- **OpenAPI 3.1**: 生成标准的 API 规范
- **JavaScript/TypeScript**: 生成客户端 SDK
- **Redocly**: 生成交互式 HTML 文档
- **Node.js**: 运行时环境
- **Yarn/NPM**: 包管理器

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
├── package.json          # 项目配置和脚本
└── tspconfig.yaml        # TypeSpec 配置
```

## 构建和运行

### 安装依赖

```bash
yarn install
# 或者
npm install
```

### 构建项目

完整的构建过程包括编译 TypeSpec 文件、生成文档和创建客户端 SDK：

```bash
yarn build
# 或者
npm run build
```

该命令会执行以下步骤：
- `build:tsp`: 编译 TypeSpec 文件生成 OpenAPI 规范
- `build:doc`: 从 OpenAPI 规范生成 Markdown 文档
- `build:html`: 使用 Redocly 生成 HTML 文档

### 单独构建组件

只编译 TypeSpec 文件：
```bash
yarn build:tsp
# 或者
npm run build:tsp
```

生成 Markdown 文档：
```bash
yarn build:doc
# 或者
npm run build:doc
```

生成 HTML 文档：
```bash
yarn build:html
# 或者
npm run build:html
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

构建完成后，会在 `output/` 目录中生成以下内容：

- `schema/openapi.yaml` - OpenAPI v3.1 规范
- `clients/js/` - JavaScript/TypeScript 客户端 SDK
- `doc/md/openapi.md` - Markdown 文档
- `doc/html/openapi.html` - HTML 文档 (使用 Redocly)

## 开发约定

- API 定义使用 TypeSpec 编写，位于 `src/` 目录
- 数据模型定义在 `src/models/` 目录中
- 每个 API 资源都有独立的 TypeSpec 文件
- 使用 TypeSpec 内置的分页装饰器实现分页功能
- 公共分页参数和响应模型定义在 `src/common/pagination.tsp` 文件中
- 使用 `tspconfig.yaml` 配置 TypeSpec 编译器和发射器
- 文档和客户端 SDK 从单一的 TypeSpec 源自动生成

## 分页实现

项目使用 TypeSpec 内置的分页装饰器来实现分页功能：

- `@list` 装饰器标记分页操作
- `@offset` 和 `@pageSize` 装饰器标记分页参数
- `@pageItems` 装饰器标记分页数据项
- 公共 `PaginationParams` 模型定义分页查询参数
- 公共 `PagedResult<T>` 模型定义分页响应格式，包含数据项和分页元数据