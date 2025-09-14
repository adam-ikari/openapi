# OpenAPI 工具链使用规范

## 目录
1. [项目概述](#项目概述)
2. [环境准备](#环境准备)
3. [安装依赖](#安装依赖)
4. [构建项目](#构建项目)
5. [生成组件说明](#生成组件说明)
6. [使用生成的客户端 SDK](#使用生成的客户端-sdk)
7. [自定义配置](#自定义配置)
8. [开发约定](#开发约定)

## 项目概述

本项目是一个基于 TypeSpec 的 API 开发工具链，用于生成 OpenAPI 3.1 规范、JavaScript/TypeScript 客户端 SDK 和 API 文档。项目支持用户、邮件、邮件组、证书和 WiFi 资源的完整 CRUD 操作。

## 环境准备

在开始使用本工具链之前，请确保您的系统满足以下要求：

- Node.js (v16 或更高版本)
- Yarn 或 npm 包管理器

## 安装依赖

在项目根目录下运行以下命令安装依赖：

```bash
# 使用 yarn
yarn install

# 或使用 npm
npm install
```

## 构建项目

项目构建过程包括三个主要步骤：

### 1. 编译 TypeSpec 文件

将 TypeSpec 定义编译为 OpenAPI 规范：

```bash
# 使用 yarn
yarn build:tsp

# 或使用 npm
npm run build:tsp
```

输出文件：`output/schema/openapi.yaml`

### 2. 生成 Markdown 文档

从 OpenAPI 规范生成 Markdown 格式的文档：

```bash
# 使用 yarn
yarn build:doc

# 或使用 npm
npm run build:doc
```

输出文件：`output/doc/md/openapi.md`

### 3. 生成 HTML 文档

使用 Redocly 从 OpenAPI 规范生成交互式 HTML 文档：

```bash
# 使用 yarn
yarn build:html

# 或使用 npm
npm run build:html
```

输出文件：`output/doc/html/openapi.html`

### 完整构建

要执行所有构建步骤：

```bash
# 使用 yarn
yarn build

# 或使用 npm
npm run build
```

## 生成组件说明

构建完成后，项目将在 `output/` 目录中生成以下组件：

1. **OpenAPI 规范** (`output/schema/openapi.yaml`)
   - 符合 OpenAPI 3.1 标准的 API 规范
   - 可用于任何兼容 OpenAPI 的工具

2. **客户端 SDK** (`output/clients/js/`)
   - JavaScript/TypeScript 客户端库
   - 包含强类型模型和 API 操作方法
   - 支持现代和经典两种 API 接口

3. **Markdown 文档** (`output/doc/md/openapi.md`)
   - 适用于开发者门户集成的 Markdown 格式文档

4. **HTML 文档** (`output/doc/html/openapi.html`)
   - 使用 Redocly 生成的交互式 API 文档

## 使用生成的客户端 SDK

生成的 JavaScript/TypeScript 客户端 SDK 提供了与 API 交互的便捷方式：

### 安装客户端 SDK

```bash
# 进入客户端 SDK 目录
cd output/clients/js

# 安装依赖
npm install
```

### 使用客户端 SDK

```javascript
// 导入客户端
import { OpenApiV2Client } from './src/openApiV2Client';

// 创建客户端实例
const client = new OpenApiV2Client({
  baseUrl: 'https://api.example.com',
  token: 'your-bearer-token'
});

// 调用 API 操作
const users = await client.users.list();
const newUser = await client.users.create({
  name: 'John Doe',
  age: 30,
  gender: 'male',
  email: {
    email: 'john.doe@example.com',
    authType: 'password'
  }
});
```

### 分页支持

所有列表操作都支持分页：

```javascript
// 获取用户列表（分页）
const users = await client.users.list({
  offset: 0,
  limit: 50
});

console.log('用户总数:', users.total);
console.log('当前页用户:', users.items);
```



## 自定义配置

### TypeSpec 配置

TypeSpec 编译器配置在 `tspconfig.yaml` 文件中定义。您可以根据需要修改此文件以更改编译选项。

### 文档模板

文档生成使用 `templates/openapi3/` 目录中的模板。您可以修改这些模板来自定义生成的文档外观和内容。

### 客户端 SDK 配置

客户端 SDK 的构建配置在 `output/clients/js/` 目录中的以下文件中定义：
- `package.json` - 包配置
- `tsconfig.json` - TypeScript 配置
- `rollup.config.js` - Rollup 构建配置

## 开发约定

### API 定义

- API 定义使用 TypeSpec 编写，位于 `src/` 目录
- 数据模型定义在 `src/models/` 目录中
- 每个 API 资源都有独立的 TypeSpec 文件
- 使用 TypeSpec 内置的分页装饰器实现分页功能
- 公共分页参数和响应模型定义在 `src/common/pagination.tsp` 文件中

### 代码约定

- 添加新 API 或模型时，请遵循现有的代码模式和约定
- 遵循 TypeSpec 最佳实践进行 API 设计
- 保持 API 接口的一致性和清晰性

### 版本控制

建议将生成的规范、文档和客户端 SDK 都纳入版本控制，以便：
- 跟踪 API 变更历史
- 实现 API 版本的分支和合并策略
- 支持协作式 API 设计和审查流程
- 集成 CI/CD 管道实现自动化客户端 SDK 生成