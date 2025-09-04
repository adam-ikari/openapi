# OpenAPI Toolchain

[English](README.md) | [简体中文](README_CN.md)

## Project Overview

This project demonstrates a modern approach to API development using TypeSpec to define and generate OpenAPI v3.1 specifications along with JavaScript/TypeScript client SDKs for a sample API with Users, Emails, Email Groups, Certificates, and WiFi resources.

The project serves as both a reference implementation for TypeSpec-based API development and a practical toolchain for generating consistent API specifications, documentation, and client libraries from a single source of truth.

## Technology Stack

- **TypeSpec**: Modern language for describing cloud services and APIs
- **OpenAPI 3.1**: Industry-standard specification for RESTful APIs
- **JavaScript/TypeScript**: Generated client SDKs for easy API integration
- **Redocly**: Tool for generating interactive API documentation
- **Node.js**: Runtime environment for building and running the toolchain
- **Yarn/NPM**: Package managers for handling dependencies

## Key Advantages

### No Server Deployment Required

This project focuses purely on API specification and client SDK generation. The generated artifacts can be used directly in client applications without requiring any server deployment. This makes it ideal for:

- API-first development approaches
- Client SDK generation for existing backend services
- API documentation generation for distributed teams
- Version-controlled API specifications that can evolve with your project

### Git-based Management

The entire API specification and documentation can be version-controlled with Git, allowing for:

- Complete history tracking of API changes
- Branching and merging strategies for API evolution
- Collaborative API design and review processes
- Integration with CI/CD pipelines for automated client SDK generation
- Easy rollback to previous API versions when needed

This approach ensures that your API specification, documentation, and client SDKs are always in sync and can be managed through your existing Git workflows.

## Purpose and Goals

This project aims to streamline API development by providing a complete toolchain that:

- Defines APIs using TypeSpec, a modern language for describing cloud services and APIs
- Generates OpenAPI 3.1 specifications for broad compatibility with API tools
- Creates ready-to-use JavaScript/TypeScript client SDKs
- Produces comprehensive documentation in multiple formats
- Eliminates the need for manual API specification writing and maintenance
- Ensures consistency between API definition, documentation, and client code

## Target Use Cases

This toolchain is ideal for:

- **API-First Development**: Teams that design APIs before implementing backend services
- **Microservices Architecture**: Projects with multiple services that need consistent API interfaces
- **SDK Generation**: Creating client libraries for APIs in JavaScript/TypeScript
- **Documentation Automation**: Generating always-up-to-date API documentation
- **Contract Testing**: Defining clear API contracts between frontend and backend teams
- **Legacy API Modernization**: Migrating existing APIs to modern specification formats

## Project Structure

```
.
├── src/                  # TypeSpec source files
│   ├── models/           # Data model definitions
│   ├── common/           # Common type definitions
│   ├── index.tsp         # Main entry point
│   ├── users_api.tsp     # Users API operations
│   ├── emails_api.tsp    # Emails API operations
│   ├── email_groups_api.tsp # Email Groups API operations
│   ├── certificates_api.tsp # Certificates API operations
│   ├── wifi_api.tsp      # WiFi API operations
├── output/               # Generated output files
│   ├── schema/           # OpenAPI specification (YAML)
│   ├── clients/js/       # JavaScript/TypeScript client SDK
│   └── doc/              # Generated documentation (HTML and Markdown)
├── templates/            # Custom documentation templates
├── scripts/              # Build scripts
└── package.json          # Project configuration and scripts
```

## API Resources

The API includes the following resources:
- Users - Manage user accounts
- Emails - Handle email messages
- Email Groups - Manage email group subscriptions
- Certificates - Manage certificates
- WiFi - Manage WiFi configurations

Each resource provides full CRUD (Create, Read, Update, Delete) operations.

## Prerequisites

- Node.js (v16 or higher)
- Yarn or npm

## Build Instructions

### Prerequisites

- Node.js (v16 or higher)
- Yarn or npm

### Install Dependencies

```bash
yarn install
```

Or with npm:

```bash
npm install
```

### Build the Project

The build process will:
1. Compile TypeSpec files to generate OpenAPI schema
2. Generate documentation in Markdown and HTML formats
3. Create JavaScript/TypeScript client SDK

```bash
yarn build
```

Or with npm:

```bash
npm run build
```

This command executes the following steps:
- `build:tsp`: Compiles TypeSpec files to generate OpenAPI schema
- `build:doc`: Generates Markdown documentation from the OpenAPI schema
- `build:html`: Generates HTML documentation using Redocly

### Build Individual Components

Compile only TypeSpec files:
```bash
yarn build:tsp
```

Generate documentation:
```bash
yarn build:doc
```

Generate HTML documentation:
```bash
yarn build:html
```

## Generated Output

After building, the following outputs are generated in the `output/` directory:

- `schema/openapi.yaml` - OpenAPI v3.1 specification
- `clients/js/` - JavaScript/TypeScript client SDK
- `doc/md/openapi.md` - Markdown documentation
- `doc/html/openapi.html` - HTML documentation (using Redocly)

## TypeSpec Structure

The TypeSpec definitions are organized as follows:

- `src/index.tsp` - Main entry point
- `src/users_api.tsp` - Users API operations
- `src/emails_api.tsp` - Emails API operations
- `src/email_groups_api.tsp` - Email Groups API operations
- `src/certificates_api.tsp` - Certificates API operations
- `src/wifi_api.tsp` - WiFi API operations
- `src/models/` - Data models used in the APIs

Each API file defines a complete set of CRUD operations for its respective resource, with proper HTTP methods, routes, and authentication.

## Pagination Implementation

The project uses TypeSpec's built-in pagination decorators to implement pagination:

- `@list` decorator marks pagination operations
- `@offset` and `@pageSize` decorators mark pagination parameters
- `@pageItems` decorator marks pagination data items
- Common `PaginationParams` model defines pagination query parameters
- Common `PagedResult<T>` model defines pagination response format, including data items and pagination metadata

## Client SDK

The generated JavaScript/TypeScript client SDK provides a convenient way to interact with the API. It includes:

- Strongly-typed models
- API operation methods with proper parameter typing
- Built-in authentication support
- Both classic and modern API interfaces

## Documentation

Documentation is automatically generated from the OpenAPI specification:
- Markdown format for integration with developer portals
- HTML format using Redocly for interactive API documentation

The documentation includes:
- API endpoints with HTTP methods
- Request and response schemas
- Code examples in multiple languages
- Authentication information

## Development Guidelines

- API definitions are written in TypeSpec and located in the `src/` directory
- Data models are defined in the `src/models/` directory
- Each API resource has its own dedicated TypeSpec file
- TypeSpec's built-in pagination decorators are used to implement pagination
- Common pagination parameters and response models are defined in the `src/common/pagination.tsp` file
- Documentation and client SDKs are automatically generated from a single TypeSpec source
- Follow the existing code patterns and conventions when adding new APIs or models