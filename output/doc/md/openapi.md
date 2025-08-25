---
title: OpenAPI v0.0.0
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

<h1 id="openapi">OpenAPI v0.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

- HTTP Authentication, scheme: Bearer

<h1 id="openapi-users">Users</h1>

## Users_list

<a id="opIdUsers_list"></a>

> Code samples

```http
GET /users?offset=0&limit=10 HTTP/1.1

Accept: application/json

```

```javascript
const headers = {
  Accept: "application/json",
}

fetch("/users?offset=0&limit=10", {
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
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/users', params={
  'offset': '0',  'limit': '10'
}, headers = headers)

print(r.json())

```

`GET /users`

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
      "gender": "secret"
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
POST /users HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": "string",
  "name": "string",
  "age": 1,
  "gender": "secret"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/users',
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
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/users', headers = headers)

print(r.json())

```

`POST /users`

Create a users

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "age": 1,
  "gender": "secret"
}
```

<h3 id="users_create-parameters">Parameters</h3>

| Name | In   | Type                | Required | Description |
| ---- | ---- | ------------------- | -------- | ----------- |
| body | body | [User](#schemauser) | true     | none        |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "age": 1,
  "gender": "secret"
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
GET /users/{id} HTTP/1.1

Accept: application/json

```

```javascript
const headers = {
  Accept: "application/json",
}

fetch("/users/{id}", {
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
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/users/{id}', headers = headers)

print(r.json())

```

`GET /users/{id}`

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
  "gender": "secret"
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
PUT /users/{id} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": "string",
  "name": "string",
  "age": 1,
  "gender": "secret"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/users/{id}',
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
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('/users/{id}', headers = headers)

print(r.json())

```

`PUT /users/{id}`

Update a users

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "age": 1,
  "gender": "secret"
}
```

<h3 id="users_update-parameters">Parameters</h3>

| Name | In   | Type                | Required | Description                  |
| ---- | ---- | ------------------- | -------- | ---------------------------- |
| id   | path | string              | true     | The id of the user to update |
| body | body | [User](#schemauser) | true     | none                         |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "age": 1,
  "gender": "secret"
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
DELETE /users/{id} HTTP/1.1

Accept: application/json

```

```javascript
const headers = {
  Accept: "application/json",
}

fetch("/users/{id}", {
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
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('/users/{id}', headers = headers)

print(r.json())

```

`DELETE /users/{id}`

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
secret
```

The enum of the gender

### Properties

| Name        | Type   | Required | Restrictions | Description            |
| ----------- | ------ | -------- | ------------ | ---------------------- |
| _anonymous_ | string | false    | none         | The enum of the gender |

#### Enumerated Values

| Property    | Value  |
| ----------- | ------ |
| _anonymous_ | secret |
| _anonymous_ | male   |
| _anonymous_ | female |

<h2 id="tocS_StatusCode">StatusCode</h2>
<!-- backwards compatibility -->
<a id="schemastatuscode"></a>
<a id="schema_StatusCode"></a>
<a id="tocSstatuscode"></a>
<a id="tocsstatuscode"></a>

```yaml
100000
```

### Properties

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | number | false    | none         | none        |

#### Enumerated Values

| Property    | Value  |
| ----------- | ------ |
| _anonymous_ | 100000 |
| _anonymous_ | 100001 |

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
gender: secret
```

### Properties

| Name   | Type                    | Required | Restrictions | Description                       |
| ------ | ----------------------- | -------- | ------------ | --------------------------------- |
| id     | string                  | true     | none         | The unique identifier of the user |
| name   | string                  | true     | none         | The name of the user              |
| age    | integer(uint8)          | true     | none         | The age of the user               |
| gender | [Gender](#schemagender) | true     | none         | The gender of the user            |

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
    gender: secret
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
