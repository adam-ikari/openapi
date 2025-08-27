---
title: OpenAPI v2.0.0
language_tabs:
  - http: HTTP
  - javascript: JavaScript
  - python: Python
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2
---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="openapi">OpenAPI v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

- HTTP Authentication, scheme: Bearer

<h1 id="openapi-users">Users</h1>

## Users_list

<a id="opIdUsers_list"></a>

> Code samples

```http
GET /api/v2/users?offset=0&limit=10 HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/users?offset=0&limit=10", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json()
  })
  .then(function (body) {
    console.log(body)
  })
```

```python
# python

import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/users', params={
  'offset': '0',  'limit': '10'
}, headers = headers)

print(r.json())

```

`GET /api/v2/users`

List users

<h3 id="users_list-parameters">Parameters</h3>

| Name   | In    | Type            | Required | Description                                             |
| ------ | ----- | --------------- | -------- | ------------------------------------------------------- |
| offset | query | integer(uint32) | true     | The offset of the list, 0 means no offset, default is 0 |
| limit  | query | integer(uint32) | true     | The limit of the list, 0 means no limit, default is 10  |

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "string",
      "name": "string",
      "age": 1,
      "gender": 0,
      "email": {
        "id": 0,
        "email": "string",
        "authMethod": 0,
        "token": "pa$$word",
        "createdAt": 0,
        "updatedAt": 0
      },
      "createdAt": 0,
      "updatedAt": 0
    }
  ],
  "total": 0,
  "offset": 0,
  "limit": 0
}
```

<h3 id="users_list-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                      |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [UserList](#schemauserlist) |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror)       |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Users_create

<a id="opIdUsers_create"></a>

> Code samples

```http
POST /api/v2/users HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
// javascript
const inputBody = '{
  "id": "string",
  "name": "string",
  "age": 1,
  "gender": 0,
  "email": {
    "id": 0,
    "email": "string",
    "authMethod": 0,
    "password": "pa$$word",
    "createdAt": 0,
    "updatedAt": 0
  },
  "createdAt": 0,
  "updatedAt": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/users',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
# python

import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/users', headers = headers)

print(r.json())

```

`POST /api/v2/users`

Create a users

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "age": 1,
  "gender": 0,
  "email": {
    "id": 0,
    "email": "string",
    "authMethod": 0,
    "password": "pa$$word",
    "createdAt": 0,
    "updatedAt": 0
  },
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="users_create-parameters">Parameters</h3>

| Name | In   | Type                            | Required | Description |
| ---- | ---- | ------------------------------- | -------- | ----------- |
| body | body | [UserCreate](#schemausercreate) | true     | none        |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "age": 1,
  "gender": 0,
  "email": {
    "id": 0,
    "email": "string",
    "authMethod": 0,
    "token": "pa$$word",
    "createdAt": 0,
    "updatedAt": 0
  },
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="users_create-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [User](#schemauser)   |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror) |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Users_read

<a id="opIdUsers_read"></a>

> Code samples

```http
GET /api/v2/users/{id} HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/users/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json()
  })
  .then(function (body) {
    console.log(body)
  })
```

```python
# python

import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/users/{id}', headers = headers)

print(r.json())

```

`GET /api/v2/users/{id}`

Read users

<h3 id="users_read-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description                |
| ---- | ---- | ------ | -------- | -------------------------- |
| id   | path | string | true     | The id of the user to read |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "age": 1,
  "gender": 0,
  "email": {
    "id": 0,
    "email": "string",
    "authMethod": 0,
    "token": "pa$$word",
    "createdAt": 0,
    "updatedAt": 0
  },
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="users_read-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [User](#schemauser)   |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror) |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Users_update

<a id="opIdUsers_update"></a>

> Code samples

```http
PUT /api/v2/users/{id} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
// javascript
const inputBody = '{
  "id": "string",
  "name": "string",
  "age": 1,
  "gender": 0,
  "email": {
    "id": 0,
    "email": "string",
    "authMethod": 0,
    "password": "pa$$word",
    "createdAt": 0,
    "updatedAt": 0
  },
  "createdAt": 0,
  "updatedAt": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/users/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
# python

import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('/api/v2/users/{id}', headers = headers)

print(r.json())

```

`PUT /api/v2/users/{id}`

Update a users

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "age": 1,
  "gender": 0,
  "email": {
    "id": 0,
    "email": "string",
    "authMethod": 0,
    "password": "pa$$word",
    "createdAt": 0,
    "updatedAt": 0
  },
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="users_update-parameters">Parameters</h3>

| Name | In   | Type                                            | Required | Description                  |
| ---- | ---- | ----------------------------------------------- | -------- | ---------------------------- |
| id   | path | string                                          | true     | The id of the user to update |
| body | body | [UserCreateOrUpdate](#schemausercreateorupdate) | true     | none                         |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "age": 1,
  "gender": 0,
  "email": {
    "id": 0,
    "email": "string",
    "authMethod": 0,
    "token": "pa$$word",
    "createdAt": 0,
    "updatedAt": 0
  },
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="users_update-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [User](#schemauser)   |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror) |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Users_delete

<a id="opIdUsers_delete"></a>

> Code samples

```http
DELETE /api/v2/users/{id} HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/users/{id}", {
  method: "DELETE",

  headers: headers,
})
  .then(function (res) {
    return res.json()
  })
  .then(function (body) {
    console.log(body)
  })
```

```python
# python

import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('/api/v2/users/{id}', headers = headers)

print(r.json())

```

`DELETE /api/v2/users/{id}`

Delete a users

<h3 id="users_delete-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description                  |
| ---- | ---- | ------ | -------- | ---------------------------- |
| id   | path | string | true     | The id of the user to delete |

> Example responses

> default Response

```json
{
  "code": 100000,
  "msg": "string"
}
```

<h3 id="users_delete-responses">Responses</h3>

| Status  | Meaning                                                         | Description                                                                  | Schema                |
| ------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------- |
| 204     | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | There is no content to send for this request, but the headers may be useful. | None                  |
| default | Default                                                         | An unexpected error response.                                                | [Error](#schemaerror) |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

# Schemas

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```yaml
id: 0
email: string
authMethod: 0
token: pa$$word
createdAt: 0
updatedAt: 0
```

### Properties

| Name       | Type                                      | Required | Restrictions | Description                              |
| ---------- | ----------------------------------------- | -------- | ------------ | ---------------------------------------- |
| id         | integer(uint32)                           | true     | none         | The id of the email                      |
| email      | string                                    | true     | none         | The email address                        |
| authMethod | [EmailAuthMethod](#schemaemailauthmethod) | true     | none         | The authentication method                |
| token      | string(password)                          | true     | read-only    | The authentication token                 |
| createdAt  | integer(int32)                            | true     | none         | The timestamp when the email was created |
| updatedAt  | integer(int32)                            | true     | none         | The timestamp when the email was updated |

<h2 id="tocS_EmailAuthMethod">EmailAuthMethod</h2>
<!-- backwards compatibility -->
<a id="schemaemailauthmethod"></a>
<a id="schema_EmailAuthMethod"></a>
<a id="tocSemailauthmethod"></a>
<a id="tocsemailauthmethod"></a>

```yaml
0
```

Email authentication method

### Properties

| Name        | Type   | Required | Restrictions | Description                 |
| ----------- | ------ | -------- | ------------ | --------------------------- |
| _anonymous_ | number | false    | none         | Email authentication method |

#### Enumerated Values

| Property | Value | Description                                 |
| -------- | ----- | ------------------------------------------- |
| password | 0     | Password authentication                     |
| otp      | 1     | One time password authentication            |
| totp     | 2     | Time-based one time password authentication |
| oauth2   | 3     | OAuth2 authentication                       |

<h2 id="tocS_EmailCreate">EmailCreate</h2>
<!-- backwards compatibility -->
<a id="schemaemailcreate"></a>
<a id="schema_EmailCreate"></a>
<a id="tocSemailcreate"></a>
<a id="tocsemailcreate"></a>

```yaml
id: 0
email: string
authMethod: 0
password: pa$$word
createdAt: 0
updatedAt: 0
```

### Properties

| Name       | Type                                      | Required | Restrictions | Description                              |
| ---------- | ----------------------------------------- | -------- | ------------ | ---------------------------------------- |
| id         | integer(uint32)                           | true     | none         | The id of the email                      |
| email      | string                                    | true     | none         | The email address                        |
| authMethod | [EmailAuthMethod](#schemaemailauthmethod) | true     | none         | The authentication method                |
| password   | string(password)                          | false    | none         | The password                             |
| createdAt  | integer(int32)                            | true     | none         | The timestamp when the email was created |
| updatedAt  | integer(int32)                            | true     | none         | The timestamp when the email was updated |

<h2 id="tocS_EmailCreateOrUpdate">EmailCreateOrUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaemailcreateorupdate"></a>
<a id="schema_EmailCreateOrUpdate"></a>
<a id="tocSemailcreateorupdate"></a>
<a id="tocsemailcreateorupdate"></a>

```yaml
id: 0
email: string
authMethod: 0
password: pa$$word
createdAt: 0
updatedAt: 0
```

### Properties

| Name       | Type                                      | Required | Restrictions | Description                              |
| ---------- | ----------------------------------------- | -------- | ------------ | ---------------------------------------- |
| id         | integer(uint32)                           | true     | none         | The id of the email                      |
| email      | string                                    | true     | none         | The email address                        |
| authMethod | [EmailAuthMethod](#schemaemailauthmethod) | true     | none         | The authentication method                |
| password   | string(password)                          | false    | none         | The password                             |
| createdAt  | integer(int32)                            | true     | none         | The timestamp when the email was created |
| updatedAt  | integer(int32)                            | true     | none         | The timestamp when the email was updated |

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```yaml
code: 100000
msg: string
```

### Properties

| Name | Type                            | Required | Restrictions | Description       |
| ---- | ------------------------------- | -------- | ------------ | ----------------- |
| code | [StatusCode](#schemastatuscode) | true     | none         | The error code    |
| msg  | string                          | true     | none         | The error message |

<h2 id="tocS_Gender">Gender</h2>
<!-- backwards compatibility -->
<a id="schemagender"></a>
<a id="schema_Gender"></a>
<a id="tocSgender"></a>
<a id="tocsgender"></a>

```yaml
0
```

Gender enum values

### Properties

| Name        | Type   | Required | Restrictions | Description        |
| ----------- | ------ | -------- | ------------ | ------------------ |
| _anonymous_ | number | false    | none         | Gender enum values |

#### Enumerated Values

| Property | Value | Description     |
| -------- | ----- | --------------- |
| secret   | 0     | unpublic gender |
| male     | 1     | male gender     |
| female   | 2     | female gender   |

<h2 id="tocS_StatusCode">StatusCode</h2>
<!-- backwards compatibility -->
<a id="schemastatuscode"></a>
<a id="schema_StatusCode"></a>
<a id="tocSstatuscode"></a>
<a id="tocsstatuscode"></a>

```yaml
100000
```

Status Code

### Properties

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | number | false    | none         | Status Code |

#### Enumerated Values

| Property | Value  | Description |
| -------- | ------ | ----------- |
| SUCCESS  | 100000 | success     |
| FAILURE  | 100001 | failure     |

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```yaml
id: string
name: string
age: 1
gender: 0
email:
  id: 0
  email: string
  authMethod: 0
  token: pa$$word
  createdAt: 0
  updatedAt: 0
createdAt: 0
updatedAt: 0
```

### Properties

| Name      | Type                    | Required | Restrictions | Description                              |
| --------- | ----------------------- | -------- | ------------ | ---------------------------------------- |
| id        | string                  | true     | none         | The unique identifier of the user        |
| name      | string                  | true     | none         | The name of the user                     |
| age       | integer(uint8)          | true     | none         | The age of the user, min 1, max 120      |
| gender    | [Gender](#schemagender) | true     | none         | The gender of the user                   |
| email     | [Email](#schemaemail)   | true     | none         | The email of the user                    |
| createdAt | integer(int32)          | true     | none         | The timestamp when the email was created |
| updatedAt | integer(int32)          | true     | none         | The timestamp when the email was updated |

<h2 id="tocS_UserCreate">UserCreate</h2>
<!-- backwards compatibility -->
<a id="schemausercreate"></a>
<a id="schema_UserCreate"></a>
<a id="tocSusercreate"></a>
<a id="tocsusercreate"></a>

```yaml
id: string
name: string
age: 1
gender: 0
email:
  id: 0
  email: string
  authMethod: 0
  password: pa$$word
  createdAt: 0
  updatedAt: 0
createdAt: 0
updatedAt: 0
```

### Properties

| Name      | Type                              | Required | Restrictions | Description                              |
| --------- | --------------------------------- | -------- | ------------ | ---------------------------------------- |
| id        | string                            | true     | none         | The unique identifier of the user        |
| name      | string                            | true     | none         | The name of the user                     |
| age       | integer(uint8)                    | true     | none         | The age of the user, min 1, max 120      |
| gender    | [Gender](#schemagender)           | true     | none         | The gender of the user                   |
| email     | [EmailCreate](#schemaemailcreate) | true     | none         | The email of the user                    |
| createdAt | integer(int32)                    | true     | none         | The timestamp when the email was created |
| updatedAt | integer(int32)                    | true     | none         | The timestamp when the email was updated |

<h2 id="tocS_UserCreateOrUpdate">UserCreateOrUpdate</h2>
<!-- backwards compatibility -->
<a id="schemausercreateorupdate"></a>
<a id="schema_UserCreateOrUpdate"></a>
<a id="tocSusercreateorupdate"></a>
<a id="tocsusercreateorupdate"></a>

```yaml
id: string
name: string
age: 1
gender: 0
email:
  id: 0
  email: string
  authMethod: 0
  password: pa$$word
  createdAt: 0
  updatedAt: 0
createdAt: 0
updatedAt: 0
```

### Properties

| Name      | Type                                              | Required | Restrictions | Description                              |
| --------- | ------------------------------------------------- | -------- | ------------ | ---------------------------------------- |
| id        | string                                            | true     | none         | The unique identifier of the user        |
| name      | string                                            | true     | none         | The name of the user                     |
| age       | integer(uint8)                                    | true     | none         | The age of the user, min 1, max 120      |
| gender    | [Gender](#schemagender)                           | true     | none         | The gender of the user                   |
| email     | [EmailCreateOrUpdate](#schemaemailcreateorupdate) | true     | none         | The email of the user                    |
| createdAt | integer(int32)                                    | true     | none         | The timestamp when the email was created |
| updatedAt | integer(int32)                                    | true     | none         | The timestamp when the email was updated |

<h2 id="tocS_UserList">UserList</h2>
<!-- backwards compatibility -->
<a id="schemauserlist"></a>
<a id="schema_UserList"></a>
<a id="tocSuserlist"></a>
<a id="tocsuserlist"></a>

```yaml
items:
  - id: string
    name: string
    age: 1
    gender: 0
    email:
      id: 0
      email: string
      authMethod: 0
      token: pa$$word
      createdAt: 0
      updatedAt: 0
    createdAt: 0
    updatedAt: 0
total: 0
offset: 0
limit: 0
```

### Properties

| Name   | Type                  | Required | Restrictions | Description                                     |
| ------ | --------------------- | -------- | ------------ | ----------------------------------------------- |
| items  | [[User](#schemauser)] | true     | none         | The list of users                               |
| total  | integer(uint32)       | true     | none         | The total number of users                       |
| offset | integer(uint32)       | true     | none         | The offset to fetch the list, 0 means no offset |
| limit  | integer(uint32)       | true     | none         | The limit to fetch the list, 0 means no limit   |
