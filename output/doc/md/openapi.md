---
title: OpenAPI v2 v2.0.0
language_tabs:
  - http: HTTP
  - javascript: JavaScript
  - python: Python
  - java: Java
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2
---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="openapi-v2">OpenAPI v2 v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

- HTTP Authentication, scheme: Bearer

<h1 id="openapi-v2-users-api">Users API</h1>

## UsersApi_list

<a id="opIdUsersApi_list"></a>

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

```java
// Java

URL obj = new URL("/api/v2/users?offset=0&limit=10");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

`GET /api/v2/users`

List users

<h3 id="usersapi_list-parameters">Parameters</h3>

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
      "id": 0,
      "name": "string",
      "age": 1,
      "gender": 0,
      "email": {
        "id": 0,
        "email": "user@example.com",
        "authMethod": 0,
        "createdAt": 0,
        "updatedAt": 0
      },
      "avatar": "https://example.com/avatar.png",
      "createdAt": 0,
      "updatedAt": 0
    }
  ],
  "total": 0,
  "offset": 0,
  "limit": 0
}
```

<h3 id="usersapi_list-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                      |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [UserList](#schemauserlist) |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror)       |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## UsersApi_create

<a id="opIdUsersApi_create"></a>

> Code samples

```http
POST /api/v2/users HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
// javascript
const inputBody = '{
  "name": "string",
  "age": 1,
  "gender": 0,
  "email": {
    "email": "user@example.com",
    "authMethod": 0,
    "password": "pa$$word",
    "createdAt": 0,
    "updatedAt": 0
  },
  "avatar": "https://example.com/avatar.png",
  "password": "pa$$word",
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

```java
// Java

URL obj = new URL("/api/v2/users");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

`POST /api/v2/users`

Create a users

> Body parameter

```json
{
  "name": "string",
  "age": 1,
  "gender": 0,
  "email": {
    "email": "user@example.com",
    "authMethod": 0,
    "password": "pa$$word",
    "createdAt": 0,
    "updatedAt": 0
  },
  "avatar": "https://example.com/avatar.png",
  "password": "pa$$word",
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="usersapi_create-parameters">Parameters</h3>

| Name | In   | Type                            | Required | Description |
| ---- | ---- | ------------------------------- | -------- | ----------- |
| body | body | [UserCreate](#schemausercreate) | true     | none        |

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "age": 1,
  "gender": 0,
  "email": {
    "id": 0,
    "email": "user@example.com",
    "authMethod": 0,
    "createdAt": 0,
    "updatedAt": 0
  },
  "avatar": "https://example.com/avatar.png",
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="usersapi_create-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [User](#schemauser)   |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror) |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## UsersApi_read

<a id="opIdUsersApi_read"></a>

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

```java
// Java

URL obj = new URL("/api/v2/users/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

`GET /api/v2/users/{id}`

Read users

<h3 id="usersapi_read-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description                |
| ---- | ---- | ------ | -------- | -------------------------- |
| id   | path | string | true     | The id of the user to read |

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "age": 1,
  "gender": 0,
  "email": {
    "id": 0,
    "email": "user@example.com",
    "authMethod": 0,
    "createdAt": 0,
    "updatedAt": 0
  },
  "avatar": "https://example.com/avatar.png",
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="usersapi_read-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [User](#schemauser)   |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror) |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## UsersApi_update

<a id="opIdUsersApi_update"></a>

> Code samples

```http
PUT /api/v2/users/{id} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
// javascript
const inputBody = '{
  "name": "string",
  "age": 1,
  "gender": 0,
  "email": {
    "email": "user@example.com",
    "authMethod": 0,
    "password": "pa$$word",
    "createdAt": 0,
    "updatedAt": 0
  },
  "avatar": "https://example.com/avatar.png",
  "password": "pa$$word",
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

```java
// Java

URL obj = new URL("/api/v2/users/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

`PUT /api/v2/users/{id}`

Update a users

> Body parameter

```json
{
  "name": "string",
  "age": 1,
  "gender": 0,
  "email": {
    "email": "user@example.com",
    "authMethod": 0,
    "password": "pa$$word",
    "createdAt": 0,
    "updatedAt": 0
  },
  "avatar": "https://example.com/avatar.png",
  "password": "pa$$word",
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="usersapi_update-parameters">Parameters</h3>

| Name | In   | Type                                            | Required | Description                  |
| ---- | ---- | ----------------------------------------------- | -------- | ---------------------------- |
| id   | path | string                                          | true     | The id of the user to update |
| body | body | [UserCreateOrUpdate](#schemausercreateorupdate) | true     | none                         |

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "age": 1,
  "gender": 0,
  "email": {
    "id": 0,
    "email": "user@example.com",
    "authMethod": 0,
    "createdAt": 0,
    "updatedAt": 0
  },
  "avatar": "https://example.com/avatar.png",
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="usersapi_update-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [User](#schemauser)   |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror) |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## UsersApi_delete

<a id="opIdUsersApi_delete"></a>

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

```java
// Java

URL obj = new URL("/api/v2/users/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

`DELETE /api/v2/users/{id}`

Delete a users

<h3 id="usersapi_delete-parameters">Parameters</h3>

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

<h3 id="usersapi_delete-responses">Responses</h3>

| Status  | Meaning                                                         | Description                                                                  | Schema                |
| ------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------- |
| 204     | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | There is no content to send for this request, but the headers may be useful. | None                  |
| default | Default                                                         | An unexpected error response.                                                | [Error](#schemaerror) |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="openapi-v2-emails-api">Emails API</h1>

## EmailsApi_list

<a id="opIdEmailsApi_list"></a>

> Code samples

```http
GET /api/v2/emails?offset=0&limit=10 HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/emails?offset=0&limit=10", {
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

r = requests.get('/api/v2/emails', params={
  'offset': '0',  'limit': '10'
}, headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/emails?offset=0&limit=10");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

`GET /api/v2/emails`

List emails

<h3 id="emailsapi_list-parameters">Parameters</h3>

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
      "id": 0,
      "email": "user@example.com",
      "authMethod": 0,
      "createdAt": 0,
      "updatedAt": 0
    }
  ],
  "total": 0,
  "offset": 0,
  "limit": 0
}
```

<h3 id="emailsapi_list-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                        |
| ------- | ------------------------------------------------------- | ----------------------------- | ----------------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [EmailList](#schemaemaillist) |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror)         |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## EmailsApi_create

<a id="opIdEmailsApi_create"></a>

> Code samples

```http
POST /api/v2/emails HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
// javascript
const inputBody = '{
  "email": "user@example.com",
  "authMethod": 0,
  "password": "pa$$word",
  "createdAt": 0,
  "updatedAt": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/emails',
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

r = requests.post('/api/v2/emails', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/emails");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

`POST /api/v2/emails`

Create a email

> Body parameter

```json
{
  "email": "user@example.com",
  "authMethod": 0,
  "password": "pa$$word",
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="emailsapi_create-parameters">Parameters</h3>

| Name | In   | Type                              | Required | Description |
| ---- | ---- | --------------------------------- | -------- | ----------- |
| body | body | [EmailCreate](#schemaemailcreate) | true     | none        |

> Example responses

> 200 Response

```json
{
  "id": 0,
  "email": "user@example.com",
  "authMethod": 0,
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="emailsapi_create-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [Email](#schemaemail) |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror) |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## EmailsApi_read

<a id="opIdEmailsApi_read"></a>

> Code samples

```http
GET /api/v2/emails/{id} HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/emails/{id}", {
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

r = requests.get('/api/v2/emails/{id}', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/emails/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

`GET /api/v2/emails/{id}`

Read email

<h3 id="emailsapi_read-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description                 |
| ---- | ---- | ------ | -------- | --------------------------- |
| id   | path | string | true     | The id of the Email to read |

> Example responses

> 200 Response

```json
{
  "id": 0,
  "email": "user@example.com",
  "authMethod": 0,
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="emailsapi_read-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [Email](#schemaemail) |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror) |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## EmailsApi_update

<a id="opIdEmailsApi_update"></a>

> Code samples

```http
PUT /api/v2/emails/{id} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
// javascript
const inputBody = '{
  "email": "user@example.com",
  "authMethod": 0,
  "password": "pa$$word",
  "createdAt": 0,
  "updatedAt": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/emails/{id}',
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

r = requests.put('/api/v2/emails/{id}', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/emails/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

`PUT /api/v2/emails/{id}`

Update a email

> Body parameter

```json
{
  "email": "user@example.com",
  "authMethod": 0,
  "password": "pa$$word",
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="emailsapi_update-parameters">Parameters</h3>

| Name | In   | Type                                              | Required | Description                   |
| ---- | ---- | ------------------------------------------------- | -------- | ----------------------------- |
| id   | path | string                                            | true     | The id of the Email to update |
| body | body | [EmailCreateOrUpdate](#schemaemailcreateorupdate) | true     | none                          |

> Example responses

> 200 Response

```json
{
  "id": 0,
  "email": "user@example.com",
  "authMethod": 0,
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="emailsapi_update-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [Email](#schemaemail) |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror) |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## EmailsApi_delete

<a id="opIdEmailsApi_delete"></a>

> Code samples

```http
DELETE /api/v2/emails/{id} HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/emails/{id}", {
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

r = requests.delete('/api/v2/emails/{id}', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/emails/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

`DELETE /api/v2/emails/{id}`

Delete a email

<h3 id="emailsapi_delete-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description                   |
| ---- | ---- | ------ | -------- | ----------------------------- |
| id   | path | string | true     | The id of the Email to delete |

> Example responses

> default Response

```json
{
  "code": 100000,
  "msg": "string"
}
```

<h3 id="emailsapi_delete-responses">Responses</h3>

| Status  | Meaning                                                         | Description                                                                  | Schema                |
| ------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------- |
| 204     | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | There is no content to send for this request, but the headers may be useful. | None                  |
| default | Default                                                         | An unexpected error response.                                                | [Error](#schemaerror) |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="openapi-v2-email-groups-api">Email Groups API</h1>

## EmailsGroupApi_list

<a id="opIdEmailsGroupApi_list"></a>

> Code samples

```http
GET /api/v2/email-groups?offset=0&limit=10 HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/email-groups?offset=0&limit=10", {
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

r = requests.get('/api/v2/email-groups', params={
  'offset': '0',  'limit': '10'
}, headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/email-groups?offset=0&limit=10");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

`GET /api/v2/email-groups`

List email groups

<h3 id="emailsgroupapi_list-parameters">Parameters</h3>

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
      "members": [
        {
          "id": 0,
          "email": "user@example.com",
          "authMethod": 0,
          "createdAt": 0,
          "updatedAt": 0
        }
      ]
    }
  ],
  "total": 0,
  "offset": 0,
  "limit": 0
}
```

<h3 id="emailsgroupapi_list-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                                  |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [EmailGroupList](#schemaemailgrouplist) |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror)                   |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## EmailsGroupApi_create

<a id="opIdEmailsGroupApi_create"></a>

> Code samples

```http
POST /api/v2/email-groups HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
// javascript
const inputBody = '{
  "email": "user@example.com",
  "authMethod": 0,
  "password": "pa$$word",
  "createdAt": 0,
  "updatedAt": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/email-groups',
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

r = requests.post('/api/v2/email-groups', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/email-groups");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

`POST /api/v2/email-groups`

Create a email group

> Body parameter

```json
{
  "email": "user@example.com",
  "authMethod": 0,
  "password": "pa$$word",
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="emailsgroupapi_create-parameters">Parameters</h3>

| Name | In   | Type                              | Required | Description |
| ---- | ---- | --------------------------------- | -------- | ----------- |
| body | body | [EmailCreate](#schemaemailcreate) | true     | none        |

> Example responses

> 200 Response

```json
{
  "id": 0,
  "email": "user@example.com",
  "authMethod": 0,
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="emailsgroupapi_create-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [Email](#schemaemail) |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror) |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## EmailsGroupApi_read

<a id="opIdEmailsGroupApi_read"></a>

> Code samples

```http
GET /api/v2/email-groups/{id} HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/email-groups/{id}", {
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

r = requests.get('/api/v2/email-groups/{id}', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/email-groups/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

`GET /api/v2/email-groups/{id}`

Read a email group

<h3 id="emailsgroupapi_read-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description                       |
| ---- | ---- | ------ | -------- | --------------------------------- |
| id   | path | string | true     | The id of the Email Group to read |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "members": [
    {
      "id": 0,
      "email": "user@example.com",
      "authMethod": 0,
      "createdAt": 0,
      "updatedAt": 0
    }
  ]
}
```

<h3 id="emailsgroupapi_read-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                          |
| ------- | ------------------------------------------------------- | ----------------------------- | ------------------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [EmailGroup](#schemaemailgroup) |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror)           |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## EmailsGroupApi_update

<a id="opIdEmailsGroupApi_update"></a>

> Code samples

```http
PUT /api/v2/email-groups/{id} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
// javascript
const inputBody = '{
  "name": "string",
  "members": [
    {
      "email": "user@example.com",
      "authMethod": 0,
      "password": "pa$$word",
      "createdAt": 0,
      "updatedAt": 0
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/email-groups/{id}',
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

r = requests.put('/api/v2/email-groups/{id}', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/email-groups/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

`PUT /api/v2/email-groups/{id}`

Update a email group

> Body parameter

```json
{
  "name": "string",
  "members": [
    {
      "email": "user@example.com",
      "authMethod": 0,
      "password": "pa$$word",
      "createdAt": 0,
      "updatedAt": 0
    }
  ]
}
```

<h3 id="emailsgroupapi_update-parameters">Parameters</h3>

| Name | In   | Type                                                        | Required | Description                         |
| ---- | ---- | ----------------------------------------------------------- | -------- | ----------------------------------- |
| id   | path | string                                                      | true     | The id of the Email Group to update |
| body | body | [EmailGroupCreateOrUpdate](#schemaemailgroupcreateorupdate) | true     | none                                |

> Example responses

> 200 Response

```json
{
  "id": 0,
  "email": "user@example.com",
  "authMethod": 0,
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="emailsgroupapi_update-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [Email](#schemaemail) |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror) |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## EmailsGroupApi_delete

<a id="opIdEmailsGroupApi_delete"></a>

> Code samples

```http
DELETE /api/v2/email-groups/{id} HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/email-groups/{id}", {
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

r = requests.delete('/api/v2/email-groups/{id}', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/email-groups/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

`DELETE /api/v2/email-groups/{id}`

Delete a email group

<h3 id="emailsgroupapi_delete-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description                         |
| ---- | ---- | ------ | -------- | ----------------------------------- |
| id   | path | string | true     | The id of the Email Group to delete |

> Example responses

> default Response

```json
{
  "code": 100000,
  "msg": "string"
}
```

<h3 id="emailsgroupapi_delete-responses">Responses</h3>

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
email: user@example.com
authMethod: 0
createdAt: 0
updatedAt: 0
```

### Properties

| Name       | Type                                      | Required | Restrictions | Description                              |
| ---------- | ----------------------------------------- | -------- | ------------ | ---------------------------------------- |
| id         | integer(uint32)                           | true     | read-only    | The id of the email                      |
| email      | string                                    | true     | none         | The email address                        |
| authMethod | [EmailAuthMethod](#schemaemailauthmethod) | true     | none         | The authentication method                |
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
email: user@example.com
authMethod: 0
password: pa$$word
createdAt: 0
updatedAt: 0
```

### Properties

| Name       | Type                                      | Required | Restrictions | Description                              |
| ---------- | ----------------------------------------- | -------- | ------------ | ---------------------------------------- |
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
email: user@example.com
authMethod: 0
password: pa$$word
createdAt: 0
updatedAt: 0
```

### Properties

| Name       | Type                                      | Required | Restrictions | Description                              |
| ---------- | ----------------------------------------- | -------- | ------------ | ---------------------------------------- |
| email      | string                                    | true     | none         | The email address                        |
| authMethod | [EmailAuthMethod](#schemaemailauthmethod) | true     | none         | The authentication method                |
| password   | string(password)                          | false    | none         | The password                             |
| createdAt  | integer(int32)                            | true     | none         | The timestamp when the email was created |
| updatedAt  | integer(int32)                            | true     | none         | The timestamp when the email was updated |

<h2 id="tocS_EmailCreateOrUpdateItem">EmailCreateOrUpdateItem</h2>
<!-- backwards compatibility -->
<a id="schemaemailcreateorupdateitem"></a>
<a id="schema_EmailCreateOrUpdateItem"></a>
<a id="tocSemailcreateorupdateitem"></a>
<a id="tocsemailcreateorupdateitem"></a>

```yaml
email: user@example.com
authMethod: 0
password: pa$$word
createdAt: 0
updatedAt: 0
```

### Properties

| Name       | Type                                      | Required | Restrictions | Description                              |
| ---------- | ----------------------------------------- | -------- | ------------ | ---------------------------------------- |
| email      | string                                    | true     | none         | The email address                        |
| authMethod | [EmailAuthMethod](#schemaemailauthmethod) | true     | none         | The authentication method                |
| password   | string(password)                          | false    | none         | The password                             |
| createdAt  | integer(int32)                            | true     | none         | The timestamp when the email was created |
| updatedAt  | integer(int32)                            | true     | none         | The timestamp when the email was updated |

<h2 id="tocS_EmailGroup">EmailGroup</h2>
<!-- backwards compatibility -->
<a id="schemaemailgroup"></a>
<a id="schema_EmailGroup"></a>
<a id="tocSemailgroup"></a>
<a id="tocsemailgroup"></a>

```yaml
id: string
name: string
members:
  - id: 0
    email: user@example.com
    authMethod: 0
    createdAt: 0
    updatedAt: 0
```

A group of emails

### Properties

| Name    | Type                    | Required | Restrictions | Description                         |
| ------- | ----------------------- | -------- | ------------ | ----------------------------------- |
| id      | string                  | true     | read-only    | The unique identifier for the group |
| name    | string                  | true     | none         | The name of the group               |
| members | [[Email](#schemaemail)] | true     | none         | none                                |

<h2 id="tocS_EmailGroupCreateOrUpdate">EmailGroupCreateOrUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaemailgroupcreateorupdate"></a>
<a id="schema_EmailGroupCreateOrUpdate"></a>
<a id="tocSemailgroupcreateorupdate"></a>
<a id="tocsemailgroupcreateorupdate"></a>

```yaml
name: string
members:
  - email: user@example.com
    authMethod: 0
    password: pa$$word
    createdAt: 0
    updatedAt: 0
```

A group of emails

### Properties

| Name    | Type                                                        | Required | Restrictions | Description           |
| ------- | ----------------------------------------------------------- | -------- | ------------ | --------------------- |
| name    | string                                                      | true     | none         | The name of the group |
| members | [[EmailCreateOrUpdateItem](#schemaemailcreateorupdateitem)] | true     | none         | none                  |

<h2 id="tocS_EmailGroupList">EmailGroupList</h2>
<!-- backwards compatibility -->
<a id="schemaemailgrouplist"></a>
<a id="schema_EmailGroupList"></a>
<a id="tocSemailgrouplist"></a>
<a id="tocsemailgrouplist"></a>

```yaml
items:
  - id: string
    name: string
    members:
      - id: 0
        email: user@example.com
        authMethod: 0
        createdAt: 0
        updatedAt: 0
total: 0
offset: 0
limit: 0
```

A list of email groups

### Properties

| Name   | Type                              | Required | Restrictions | Description                                     |
| ------ | --------------------------------- | -------- | ------------ | ----------------------------------------------- |
| items  | [[EmailGroup](#schemaemailgroup)] | true     | none         | [A group of emails]                             |
| total  | integer(uint32)                   | true     | none         | The total number of email groups                |
| offset | integer(uint32)                   | true     | none         | The offset to fetch the list, 0 means no offset |
| limit  | integer(uint32)                   | true     | none         | The limit to fetch the list, 0 means no limit   |

<h2 id="tocS_EmailList">EmailList</h2>
<!-- backwards compatibility -->
<a id="schemaemaillist"></a>
<a id="schema_EmailList"></a>
<a id="tocSemaillist"></a>
<a id="tocsemaillist"></a>

```yaml
items:
  - id: 0
    email: user@example.com
    authMethod: 0
    createdAt: 0
    updatedAt: 0
total: 0
offset: 0
limit: 0
```

### Properties

| Name   | Type                    | Required | Restrictions | Description                                     |
| ------ | ----------------------- | -------- | ------------ | ----------------------------------------------- |
| items  | [[Email](#schemaemail)] | true     | none         | The list of emails                              |
| total  | integer(uint32)         | true     | none         | The total number of emails                      |
| offset | integer(uint32)         | true     | none         | The offset to fetch the list, 0 means no offset |
| limit  | integer(uint32)         | true     | none         | The limit to fetch the list, 0 means no limit   |

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
id: 0
name: string
age: 1
gender: 0
email:
  id: 0
  email: user@example.com
  authMethod: 0
  createdAt: 0
  updatedAt: 0
avatar: https://example.com/avatar.png
createdAt: 0
updatedAt: 0
```

### Properties

| Name      | Type                    | Required | Restrictions | Description                             |
| --------- | ----------------------- | -------- | ------------ | --------------------------------------- |
| id        | integer(uint32)         | true     | read-only    | The unique identifier of the user       |
| name      | string                  | true     | none         | The name of the user                    |
| age       | integer(uint8)          | true     | none         | The age of the user, min 1, max 120     |
| gender    | [Gender](#schemagender) | true     | none         | The gender of the user                  |
| email     | [Email](#schemaemail)   | true     | none         | The email of the user                   |
| avatar    | string(uri)             | false    | none         | The avatar of the user                  |
| createdAt | integer(int32)          | true     | none         | The timestamp when the user was created |
| updatedAt | integer(int32)          | true     | none         | The timestamp when the user was updated |

<h2 id="tocS_UserCreate">UserCreate</h2>
<!-- backwards compatibility -->
<a id="schemausercreate"></a>
<a id="schema_UserCreate"></a>
<a id="tocSusercreate"></a>
<a id="tocsusercreate"></a>

```yaml
name: string
age: 1
gender: 0
email:
  email: user@example.com
  authMethod: 0
  password: pa$$word
  createdAt: 0
  updatedAt: 0
avatar: https://example.com/avatar.png
password: pa$$word
createdAt: 0
updatedAt: 0
```

### Properties

| Name      | Type                              | Required | Restrictions | Description                             |
| --------- | --------------------------------- | -------- | ------------ | --------------------------------------- |
| name      | string                            | true     | none         | The name of the user                    |
| age       | integer(uint8)                    | true     | none         | The age of the user, min 1, max 120     |
| gender    | [Gender](#schemagender)           | true     | none         | The gender of the user                  |
| email     | [EmailCreate](#schemaemailcreate) | true     | none         | The email of the user                   |
| avatar    | string(uri)                       | false    | none         | The avatar of the user                  |
| password  | string(password)                  | true     | none         | The password of the user                |
| createdAt | integer(int32)                    | true     | none         | The timestamp when the user was created |
| updatedAt | integer(int32)                    | true     | none         | The timestamp when the user was updated |

<h2 id="tocS_UserCreateOrUpdate">UserCreateOrUpdate</h2>
<!-- backwards compatibility -->
<a id="schemausercreateorupdate"></a>
<a id="schema_UserCreateOrUpdate"></a>
<a id="tocSusercreateorupdate"></a>
<a id="tocsusercreateorupdate"></a>

```yaml
name: string
age: 1
gender: 0
email:
  email: user@example.com
  authMethod: 0
  password: pa$$word
  createdAt: 0
  updatedAt: 0
avatar: https://example.com/avatar.png
password: pa$$word
createdAt: 0
updatedAt: 0
```

### Properties

| Name      | Type                                              | Required | Restrictions | Description                             |
| --------- | ------------------------------------------------- | -------- | ------------ | --------------------------------------- |
| name      | string                                            | true     | none         | The name of the user                    |
| age       | integer(uint8)                                    | true     | none         | The age of the user, min 1, max 120     |
| gender    | [Gender](#schemagender)                           | true     | none         | The gender of the user                  |
| email     | [EmailCreateOrUpdate](#schemaemailcreateorupdate) | true     | none         | The email of the user                   |
| avatar    | string(uri)                                       | false    | none         | The avatar of the user                  |
| password  | string(password)                                  | true     | none         | The password of the user                |
| createdAt | integer(int32)                                    | true     | none         | The timestamp when the user was created |
| updatedAt | integer(int32)                                    | true     | none         | The timestamp when the user was updated |

<h2 id="tocS_UserList">UserList</h2>
<!-- backwards compatibility -->
<a id="schemauserlist"></a>
<a id="schema_UserList"></a>
<a id="tocSuserlist"></a>
<a id="tocsuserlist"></a>

```yaml
items:
  - id: 0
    name: string
    age: 1
    gender: 0
    email:
      id: 0
      email: user@example.com
      authMethod: 0
      createdAt: 0
      updatedAt: 0
    avatar: https://example.com/avatar.png
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
