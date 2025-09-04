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

# Authentication

- HTTP Authentication, scheme: Bearer

<h1 id="openapi-v2-users">Users</h1>

## UsersApi_list

<a id="opIdUsersApi_list"></a>

> Code samples

```http
GET /api/v2/users HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/users", {
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

r = requests.get('/api/v2/users', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/users");
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

| Name   | In    | Type           | Required | Description        |
| ------ | ----- | -------------- | -------- | ------------------ |
| offset | query | integer(int32) | false    | offset, default 0  |
| limit  | query | integer(int32) | false    | limit, default 100 |

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": 0,
      "name": "string",
      "age": 1,
      "gender": "secret",
      "email": {
        "id": 0,
        "email": "user@example.com",
        "authType": "password",
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

| Status | Meaning                                                 | Description                | Schema |
| ------ | ------------------------------------------------------- | -------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded. | Inline |

<h3 id="usersapi_list-responseschema">Response Schema</h3>

Status Code **200**

| Name          | Type                                  | Required | Restrictions | Description                              |
| ------------- | ------------------------------------- | -------- | ------------ | ---------------------------------------- |
| » items       | [[User](#schemauser)]                 | true     | none         | Items                                    |
| »» id         | integer(uint32)                       | true     | read-only    | The unique identifier of the user        |
| »» name       | string                                | true     | none         | The name of the user                     |
| »» age        | integer(uint8)                        | true     | none         | The age of the user, min 1, max 120      |
| »» gender     | [Gender](#schemagender)               | true     | none         | The gender of the user                   |
| »» email      | [Email](#schemaemail)                 | true     | none         | The email of the user                    |
| »»» id        | integer(uint32)                       | true     | read-only    | The id of the email                      |
| »»» email     | string                                | true     | none         | The email address                        |
| »»» authType  | [EmailAuthType](#schemaemailauthtype) | true     | none         | The authentication type                  |
| »»» createdAt | integer(int32)                        | true     | none         | The timestamp when the email was created |
| »»» updatedAt | integer(int32)                        | true     | none         | The timestamp when the email was updated |
| »» avatar     | string(uri)                           | false    | none         | The avatar of the user                   |
| »» createdAt  | integer(int32)                        | true     | none         | The timestamp when the user was created  |
| »» updatedAt  | integer(int32)                        | true     | none         | The timestamp when the user was updated  |
| » total       | integer(uint32)                       | true     | none         | Total count of items                     |
| » offset      | integer(uint32)                       | true     | none         | Offset, default 0                        |
| » limit       | integer(uint32)                       | true     | none         | Limit, default 100                       |

#### Enumerated Values

| Property | Value    |
| -------- | -------- |
| gender   | secret   |
| gender   | male     |
| gender   | female   |
| authType | password |
| authType | otp      |
| authType | totp     |
| authType | oauth2   |

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
  "gender": "secret",
  "email": {
    "email": "user@example.com",
    "authType": "password",
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
  "gender": "secret",
  "email": {
    "email": "user@example.com",
    "authType": "password",
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
  "gender": "secret",
  "email": {
    "id": 0,
    "email": "user@example.com",
    "authType": "password",
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
  "gender": "secret",
  "email": {
    "id": 0,
    "email": "user@example.com",
    "authType": "password",
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
  "gender": "secret",
  "email": {
    "email": "user@example.com",
    "authType": "password",
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
  "gender": "secret",
  "email": {
    "email": "user@example.com",
    "authType": "password",
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
  "gender": "secret",
  "email": {
    "id": 0,
    "email": "user@example.com",
    "authType": "password",
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

<h1 id="openapi-v2-emails">Emails</h1>

## EmailsApi_list

<a id="opIdEmailsApi_list"></a>

> Code samples

```http
GET /api/v2/emails HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/emails", {
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

r = requests.get('/api/v2/emails', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/emails");
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

| Name   | In    | Type           | Required | Description        |
| ------ | ----- | -------------- | -------- | ------------------ |
| offset | query | integer(int32) | false    | offset, default 0  |
| limit  | query | integer(int32) | false    | limit, default 100 |

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": 0,
      "email": "user@example.com",
      "authType": "password",
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

| Status | Meaning                                                 | Description                | Schema |
| ------ | ------------------------------------------------------- | -------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded. | Inline |

<h3 id="emailsapi_list-responseschema">Response Schema</h3>

Status Code **200**

| Name         | Type                                  | Required | Restrictions | Description                              |
| ------------ | ------------------------------------- | -------- | ------------ | ---------------------------------------- |
| » items      | [[Email](#schemaemail)]               | true     | none         | Items                                    |
| »» id        | integer(uint32)                       | true     | read-only    | The id of the email                      |
| »» email     | string                                | true     | none         | The email address                        |
| »» authType  | [EmailAuthType](#schemaemailauthtype) | true     | none         | The authentication type                  |
| »» createdAt | integer(int32)                        | true     | none         | The timestamp when the email was created |
| »» updatedAt | integer(int32)                        | true     | none         | The timestamp when the email was updated |
| » total      | integer(uint32)                       | true     | none         | Total count of items                     |
| » offset     | integer(uint32)                       | true     | none         | Offset, default 0                        |
| » limit      | integer(uint32)                       | true     | none         | Limit, default 100                       |

#### Enumerated Values

| Property | Value    |
| -------- | -------- |
| authType | password |
| authType | otp      |
| authType | totp     |
| authType | oauth2   |

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
  "authType": "password",
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

Create a emails

> Body parameter

```json
{
  "email": "user@example.com",
  "authType": "password",
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
  "authType": "password",
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

Read emails

<h3 id="emailsapi_read-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description                 |
| ---- | ---- | ------ | -------- | --------------------------- |
| id   | path | string | true     | The id of the email to read |

> Example responses

> 200 Response

```json
{
  "id": 0,
  "email": "user@example.com",
  "authType": "password",
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
  "authType": "password",
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

Update a emails

> Body parameter

```json
{
  "email": "user@example.com",
  "authType": "password",
  "password": "pa$$word",
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="emailsapi_update-parameters">Parameters</h3>

| Name | In   | Type                                              | Required | Description                   |
| ---- | ---- | ------------------------------------------------- | -------- | ----------------------------- |
| id   | path | string                                            | true     | The id of the email to update |
| body | body | [EmailCreateOrUpdate](#schemaemailcreateorupdate) | true     | none                          |

> Example responses

> 200 Response

```json
{
  "id": 0,
  "email": "user@example.com",
  "authType": "password",
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

Delete a emails

<h3 id="emailsapi_delete-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description                   |
| ---- | ---- | ------ | -------- | ----------------------------- |
| id   | path | string | true     | The id of the email to delete |

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

<h1 id="openapi-v2-emailgroups">EmailGroups</h1>

## EmailsGroupApi_list

<a id="opIdEmailsGroupApi_list"></a>

> Code samples

```http
GET /api/v2/email-groups HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/email-groups", {
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

r = requests.get('/api/v2/email-groups', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/email-groups");
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

| Name   | In    | Type           | Required | Description        |
| ------ | ----- | -------------- | -------- | ------------------ |
| offset | query | integer(int32) | false    | offset, default 0  |
| limit  | query | integer(int32) | false    | limit, default 100 |

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": 0,
      "name": "string",
      "members": [
        {
          "id": 0,
          "email": "user@example.com",
          "authType": "password",
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

| Status | Meaning                                                 | Description                | Schema |
| ------ | ------------------------------------------------------- | -------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded. | Inline |

<h3 id="emailsgroupapi_list-responseschema">Response Schema</h3>

Status Code **200**

| Name          | Type                                  | Required | Restrictions | Description                              |
| ------------- | ------------------------------------- | -------- | ------------ | ---------------------------------------- |
| » items       | [[EmailGroup](#schemaemailgroup)]     | true     | none         | Items                                    |
| »» id         | integer(uint32)                       | true     | read-only    | The unique identifier of the group       |
| »» name       | string                                | true     | none         | The name of the group                    |
| »» members    | [[Email](#schemaemail)]               | true     | none         | The members of the group                 |
| »»» id        | integer(uint32)                       | true     | read-only    | The id of the email                      |
| »»» email     | string                                | true     | none         | The email address                        |
| »»» authType  | [EmailAuthType](#schemaemailauthtype) | true     | none         | The authentication type                  |
| »»» createdAt | integer(int32)                        | true     | none         | The timestamp when the email was created |
| »»» updatedAt | integer(int32)                        | true     | none         | The timestamp when the email was updated |
| » total       | integer(uint32)                       | true     | none         | Total count of items                     |
| » offset      | integer(uint32)                       | true     | none         | Offset, default 0                        |
| » limit       | integer(uint32)                       | true     | none         | Limit, default 100                       |

#### Enumerated Values

| Property | Value    |
| -------- | -------- |
| authType | password |
| authType | otp      |
| authType | totp     |
| authType | oauth2   |

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
  "authType": "password",
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
  "authType": "password",
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
  "authType": "password",
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
  "id": 0,
  "name": "string",
  "members": [
    {
      "id": 0,
      "email": "user@example.com",
      "authType": "password",
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
      "authType": "password",
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
      "authType": "password",
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
  "authType": "password",
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

<h1 id="openapi-v2-wifi">WiFi</h1>

## WiFiApi_listConfigs

<a id="opIdWiFiApi_listConfigs"></a>

> Code samples

```http
GET /api/v2/wifi/configs HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/wifi/configs", {
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

r = requests.get('/api/v2/wifi/configs', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/wifi/configs");
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

`GET /api/v2/wifi/configs`

List WiFi configurations

<h3 id="wifiapi_listconfigs-parameters">Parameters</h3>

| Name   | In    | Type           | Required | Description        |
| ------ | ----- | -------------- | -------- | ------------------ |
| offset | query | integer(int32) | false    | offset, default 0  |
| limit  | query | integer(int32) | false    | limit, default 100 |

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "string",
      "ssid": "string",
      "security": "none",
      "password": "pa$$word",
      "autoConnect": true,
      "hidden": false,
      "status": "disconnected",
      "createdAt": 0,
      "updatedAt": 0
    }
  ],
  "total": 0,
  "offset": 0,
  "limit": 0
}
```

<h3 id="wifiapi_listconfigs-responses">Responses</h3>

| Status | Meaning                                                 | Description                | Schema |
| ------ | ------------------------------------------------------- | -------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded. | Inline |

<h3 id="wifiapi_listconfigs-responseschema">Response Schema</h3>

Status Code **200**

| Name           | Type                                                | Required | Restrictions | Description                                                                                        |
| -------------- | --------------------------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------- |
| » items        | [[WiFiConfig](#schemawificonfig)]                   | true     | none         | Items                                                                                              |
| »» id          | string                                              | true     | read-only    | The unique identifier of the WiFi configuration                                                    |
| »» ssid        | string                                              | true     | none         | The SSID of the WiFi network to connect to                                                         |
| »» security    | [WiFiSecurityType](#schemawifisecuritytype)         | true     | none         | The security type of the WiFi network                                                              |
| »» password    | string(password)                                    | false    | none         | The password for the WiFi network (required for secured networks). encrypted depends security type |
| »» autoConnect | boolean                                             | true     | none         | Whether to connect automatically                                                                   |
| »» hidden      | boolean                                             | true     | none         | Whether this is a hidden network                                                                   |
| »» status      | [WiFiConnectionStatus](#schemawificonnectionstatus) | true     | none         | The current connection status of this configuration                                                |
| »» createdAt   | integer(int32)                                      | true     | read-only    | The timestamp when the configuration was created                                                   |
| »» updatedAt   | integer(int32)                                      | true     | read-only    | The timestamp when the configuration was last updated                                              |
| » total        | integer(uint32)                                     | true     | none         | Total count of items                                                                               |
| » offset       | integer(uint32)                                     | true     | none         | Offset, default 0                                                                                  |
| » limit        | integer(uint32)                                     | true     | none         | Limit, default 100                                                                                 |

#### Enumerated Values

| Property | Value         |
| -------- | ------------- |
| security | none          |
| security | wep           |
| security | wpa           |
| security | wpa2          |
| security | wpa3          |
| status   | disconnected  |
| status   | connecting    |
| status   | connected     |
| status   | failed        |
| status   | disconnecting |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## WiFiApi_createConfig

<a id="opIdWiFiApi_createConfig"></a>

> Code samples

```http
POST /api/v2/wifi/configs HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
// javascript
const inputBody = '{
  "ssid": "string",
  "security": "none",
  "password": "pa$$word",
  "autoConnect": true,
  "hidden": false,
  "status": "disconnected"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/wifi/configs',
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

r = requests.post('/api/v2/wifi/configs', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/wifi/configs");
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

`POST /api/v2/wifi/configs`

Create a WiFi configuration

> Body parameter

```json
{
  "ssid": "string",
  "security": "none",
  "password": "pa$$word",
  "autoConnect": true,
  "hidden": false,
  "status": "disconnected"
}
```

<h3 id="wifiapi_createconfig-parameters">Parameters</h3>

| Name | In   | Type                            | Required | Description                      |
| ---- | ---- | ------------------------------- | -------- | -------------------------------- |
| body | body | [WiFiConfig](#schemawificonfig) | true     | The WiFi configuration to create |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "ssid": "string",
  "security": "none",
  "password": "pa$$word",
  "autoConnect": true,
  "hidden": false,
  "status": "disconnected",
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="wifiapi_createconfig-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                          |
| ------- | ------------------------------------------------------- | ----------------------------- | ------------------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [WiFiConfig](#schemawificonfig) |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror)           |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## WiFiApi_getConfig

<a id="opIdWiFiApi_getConfig"></a>

> Code samples

```http
GET /api/v2/wifi/configs/{id} HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/wifi/configs/{id}", {
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

r = requests.get('/api/v2/wifi/configs/{id}', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/wifi/configs/{id}");
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

`GET /api/v2/wifi/configs/{id}`

Get a specific WiFi configuration

<h3 id="wifiapi_getconfig-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description                             |
| ---- | ---- | ------ | -------- | --------------------------------------- |
| id   | path | string | true     | The id of the WiFi configuration to get |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "ssid": "string",
  "security": "none",
  "password": "pa$$word",
  "autoConnect": true,
  "hidden": false,
  "status": "disconnected",
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="wifiapi_getconfig-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                          |
| ------- | ------------------------------------------------------- | ----------------------------- | ------------------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [WiFiConfig](#schemawificonfig) |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror)           |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## WiFiApi_updateConfig

<a id="opIdWiFiApi_updateConfig"></a>

> Code samples

```http
PUT /api/v2/wifi/configs/{id} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
// javascript
const inputBody = '{
  "ssid": "string",
  "security": "none",
  "password": "pa$$word",
  "autoConnect": true,
  "hidden": false,
  "status": "disconnected"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/wifi/configs/{id}',
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

r = requests.put('/api/v2/wifi/configs/{id}', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/wifi/configs/{id}");
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

`PUT /api/v2/wifi/configs/{id}`

Update a WiFi configuration

> Body parameter

```json
{
  "ssid": "string",
  "security": "none",
  "password": "pa$$word",
  "autoConnect": true,
  "hidden": false,
  "status": "disconnected"
}
```

<h3 id="wifiapi_updateconfig-parameters">Parameters</h3>

| Name | In   | Type                            | Required | Description                                |
| ---- | ---- | ------------------------------- | -------- | ------------------------------------------ |
| id   | path | string                          | true     | The id of the WiFi configuration to update |
| body | body | [WiFiConfig](#schemawificonfig) | true     | The WiFi configuration update data         |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "ssid": "string",
  "security": "none",
  "password": "pa$$word",
  "autoConnect": true,
  "hidden": false,
  "status": "disconnected",
  "createdAt": 0,
  "updatedAt": 0
}
```

<h3 id="wifiapi_updateconfig-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                          |
| ------- | ------------------------------------------------------- | ----------------------------- | ------------------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [WiFiConfig](#schemawificonfig) |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror)           |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## WiFiApi_deleteConfig

<a id="opIdWiFiApi_deleteConfig"></a>

> Code samples

```http
DELETE /api/v2/wifi/configs/{id} HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/wifi/configs/{id}", {
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

r = requests.delete('/api/v2/wifi/configs/{id}', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/wifi/configs/{id}");
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

`DELETE /api/v2/wifi/configs/{id}`

Delete a WiFi configuration

<h3 id="wifiapi_deleteconfig-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description                                |
| ---- | ---- | ------ | -------- | ------------------------------------------ |
| id   | path | string | true     | The id of the WiFi configuration to delete |

> Example responses

> default Response

```json
{
  "code": 100000,
  "msg": "string"
}
```

<h3 id="wifiapi_deleteconfig-responses">Responses</h3>

| Status  | Meaning                                                         | Description                                                                  | Schema                |
| ------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------- |
| 204     | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | There is no content to send for this request, but the headers may be useful. | None                  |
| default | Default                                                         | An unexpected error response.                                                | [Error](#schemaerror) |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## WiFiApi_disconnect

<a id="opIdWiFiApi_disconnect"></a>

> Code samples

```http
POST /api/v2/wifi/disconnect HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/wifi/disconnect", {
  method: "POST",

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

r = requests.post('/api/v2/wifi/disconnect', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/wifi/disconnect");
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

`POST /api/v2/wifi/disconnect`

Disconnect from current WiFi network

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string",
  "status": "disconnected"
}
```

<h3 id="wifiapi_disconnect-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | Inline                |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror) |

<h3 id="wifiapi_disconnect-responseschema">Response Schema</h3>

Status Code **200**

| Name      | Type                                                | Required | Restrictions | Description            |
| --------- | --------------------------------------------------- | -------- | ------------ | ---------------------- |
| » success | boolean                                             | true     | none         | none                   |
| » message | string                                              | true     | none         | none                   |
| » status  | [WiFiConnectionStatus](#schemawificonnectionstatus) | true     | none         | WiFi connection status |

#### Enumerated Values

| Property | Value         |
| -------- | ------------- |
| status   | disconnected  |
| status   | connecting    |
| status   | connected     |
| status   | failed        |
| status   | disconnecting |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## WiFiApi_scanNetworks

<a id="opIdWiFiApi_scanNetworks"></a>

> Code samples

```http
GET /api/v2/wifi/networks?force=false HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/wifi/networks?force=false", {
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

r = requests.get('/api/v2/wifi/networks', params={
  'force': 'false'
}, headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/wifi/networks?force=false");
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

`GET /api/v2/wifi/networks`

Scan for available WiFi networks

<h3 id="wifiapi_scannetworks-parameters">Parameters</h3>

| Name   | In    | Type           | Required | Description                                               |
| ------ | ----- | -------------- | -------- | --------------------------------------------------------- |
| force  | query | boolean        | true     | Whether to force a rescan instead of using cached results |
| offset | query | integer(int32) | false    | offset, default 0                                         |
| limit  | query | integer(int32) | false    | limit, default 100                                        |

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "string",
      "ssid": "string",
      "bssid": "string",
      "security": "none",
      "signalStrength": 0,
      "band": "mixed",
      "channel": 0,
      "hidden": true,
      "isConnected": true,
      "isSaved": true,
      "lastSeen": 0
    }
  ],
  "total": 0,
  "offset": 0,
  "limit": 0
}
```

<h3 id="wifiapi_scannetworks-responses">Responses</h3>

| Status | Meaning                                                 | Description                | Schema |
| ------ | ------------------------------------------------------- | -------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded. | Inline |

<h3 id="wifiapi_scannetworks-responseschema">Response Schema</h3>

Status Code **200**

| Name              | Type                                        | Required | Restrictions | Description                                         |
| ----------------- | ------------------------------------------- | -------- | ------------ | --------------------------------------------------- |
| » items           | [[WiFiNetwork](#schemawifinetwork)]         | true     | none         | Items                                               |
| »» id             | string                                      | true     | read-only    | The unique identifier of the WiFi network           |
| »» ssid           | string                                      | true     | none         | The SSID of the WiFi network                        |
| »» bssid          | string                                      | true     | none         | The BSSID of the WiFi network                       |
| »» security       | [WiFiSecurityType](#schemawifisecuritytype) | true     | none         | The security type of the WiFi network               |
| »» signalStrength | integer(int32)                              | true     | none         | The signal strength in dBm                          |
| »» band           | [WiFiBand](#schemawifiband)                 | true     | none         | The WiFi frequency band                             |
| »» channel        | integer(uint32)                             | true     | none         | The WiFi channel                                    |
| »» hidden         | boolean                                     | true     | none         | Whether the network is hidden                       |
| »» isConnected    | boolean                                     | true     | none         | Whether this network is the currently connected one |
| »» isSaved        | boolean                                     | true     | none         | Whether this network has a saved configuration      |
| »» lastSeen       | integer(int32)                              | true     | read-only    | The timestamp when the network was last seen        |
| » total           | integer(uint32)                             | true     | none         | Total count of items                                |
| » offset          | integer(uint32)                             | true     | none         | Offset, default 0                                   |
| » limit           | integer(uint32)                             | true     | none         | Limit, default 100                                  |

#### Enumerated Values

| Property | Value  |
| -------- | ------ |
| security | none   |
| security | wep    |
| security | wpa    |
| security | wpa2   |
| security | wpa3   |
| band     | mixed  |
| band     | 2_4GHz |
| band     | 5GHz   |
| band     | 6GHz   |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## WiFiApi_getNetwork

<a id="opIdWiFiApi_getNetwork"></a>

> Code samples

```http
GET /api/v2/wifi/networks/{id} HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/wifi/networks/{id}", {
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

r = requests.get('/api/v2/wifi/networks/{id}', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/wifi/networks/{id}");
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

`GET /api/v2/wifi/networks/{id}`

Get details of a specific WiFi network

<h3 id="wifiapi_getnetwork-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description                       |
| ---- | ---- | ------ | -------- | --------------------------------- |
| id   | path | string | true     | The id of the WiFi network to get |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "ssid": "string",
  "bssid": "string",
  "security": "none",
  "signalStrength": 0,
  "band": "mixed",
  "channel": 0,
  "hidden": true,
  "isConnected": true,
  "isSaved": true,
  "lastSeen": 0
}
```

<h3 id="wifiapi_getnetwork-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                            |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [WiFiNetwork](#schemawifinetwork) |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror)             |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## WiFiApi_connectNetwork

<a id="opIdWiFiApi_connectNetwork"></a>

> Code samples

```http
POST /api/v2/wifi/networks/{id}/connect HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
// javascript
const inputBody = '{
  "password": "pa$$word",
  "saveConfiguration": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/wifi/networks/{id}/connect',
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

r = requests.post('/api/v2/wifi/networks/{id}/connect', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/wifi/networks/{id}/connect");
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

`POST /api/v2/wifi/networks/{id}/connect`

Connect to a WiFi network

> Body parameter

```json
{
  "password": "pa$$word",
  "saveConfiguration": true
}
```

<h3 id="wifiapi_connectnetwork-parameters">Parameters</h3>

| Name | In   | Type                                            | Required | Description                              |
| ---- | ---- | ----------------------------------------------- | -------- | ---------------------------------------- |
| id   | path | string                                          | true     | The id of the WiFi network to connect to |
| body | body | [WiFiConnectRequest](#schemawificonnectrequest) | false    | Connection parameters                    |

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string",
  "status": "disconnected"
}
```

<h3 id="wifiapi_connectnetwork-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | Inline                |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror) |

<h3 id="wifiapi_connectnetwork-responseschema">Response Schema</h3>

Status Code **200**

| Name      | Type                                                | Required | Restrictions | Description            |
| --------- | --------------------------------------------------- | -------- | ------------ | ---------------------- |
| » success | boolean                                             | true     | none         | none                   |
| » message | string                                              | true     | none         | none                   |
| » status  | [WiFiConnectionStatus](#schemawificonnectionstatus) | true     | none         | WiFi connection status |

#### Enumerated Values

| Property | Value         |
| -------- | ------------- |
| status   | disconnected  |
| status   | connecting    |
| status   | connected     |
| status   | failed        |
| status   | disconnecting |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## WiFiApi_getStatus

<a id="opIdWiFiApi_getStatus"></a>

> Code samples

```http
GET /api/v2/wifi/status HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/wifi/status", {
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

r = requests.get('/api/v2/wifi/status', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/wifi/status");
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

`GET /api/v2/wifi/status`

Get current WiFi connection status

> Example responses

> 200 Response

```json
{
  "status": "disconnected",
  "connectedNetwork": {
    "id": "string",
    "ssid": "string",
    "bssid": "string",
    "security": "none",
    "signalStrength": 0,
    "band": "mixed",
    "channel": 0,
    "hidden": true,
    "isConnected": true,
    "isSaved": true,
    "lastSeen": 0
  },
  "message": "string"
}
```

<h3 id="wifiapi_getstatus-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | Inline                |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror) |

<h3 id="wifiapi_getstatus-responseschema">Response Schema</h3>

Status Code **200**

| Name               | Type                                                | Required | Restrictions | Description                                         |
| ------------------ | --------------------------------------------------- | -------- | ------------ | --------------------------------------------------- |
| » status           | [WiFiConnectionStatus](#schemawificonnectionstatus) | true     | none         | WiFi connection status                              |
| » connectedNetwork | [WiFiNetwork](#schemawifinetwork)                   | false    | none         | none                                                |
| »» id              | string                                              | true     | read-only    | The unique identifier of the WiFi network           |
| »» ssid            | string                                              | true     | none         | The SSID of the WiFi network                        |
| »» bssid           | string                                              | true     | none         | The BSSID of the WiFi network                       |
| »» security        | [WiFiSecurityType](#schemawifisecuritytype)         | true     | none         | The security type of the WiFi network               |
| »» signalStrength  | integer(int32)                                      | true     | none         | The signal strength in dBm                          |
| »» band            | [WiFiBand](#schemawifiband)                         | true     | none         | The WiFi frequency band                             |
| »» channel         | integer(uint32)                                     | true     | none         | The WiFi channel                                    |
| »» hidden          | boolean                                             | true     | none         | Whether the network is hidden                       |
| »» isConnected     | boolean                                             | true     | none         | Whether this network is the currently connected one |
| »» isSaved         | boolean                                             | true     | none         | Whether this network has a saved configuration      |
| »» lastSeen        | integer(int32)                                      | true     | read-only    | The timestamp when the network was last seen        |
| » message          | string                                              | true     | none         | none                                                |

#### Enumerated Values

| Property | Value         |
| -------- | ------------- |
| status   | disconnected  |
| status   | connecting    |
| status   | connected     |
| status   | failed        |
| status   | disconnecting |
| security | none          |
| security | wep           |
| security | wpa           |
| security | wpa2          |
| security | wpa3          |
| band     | mixed         |
| band     | 2_4GHz        |
| band     | 5GHz          |
| band     | 6GHz          |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="openapi-v2-certificateapi">CertificateApi</h1>

## CertificateApi_uploadCertificate

<a id="opIdCertificateApi_uploadCertificate"></a>

> Code samples

```http
POST /api/v2/certificates/certificates HTTP/1.1

Content-Type: multipart/form-data
Accept: application/json

```

```javascript
// javascript
const inputBody = '{
  "file": null,
  "name": "string",
  "description": "string"
}';
const headers = {
  'Content-Type':'multipart/form-data',
  'Accept':'application/json'
};

fetch('/api/v2/certificates/certificates',
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
  'Content-Type': 'multipart/form-data',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/certificates/certificates', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/certificates/certificates");
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

`POST /api/v2/certificates/certificates`

Upload a certificate file for WiFi authentication

> Body parameter

```yaml
file: null
name: string
description: string
```

<h3 id="certificateapi_uploadcertificate-parameters">Parameters</h3>

| Name          | In   | Type   | Required | Description                      |
| ------------- | ---- | ------ | -------- | -------------------------------- |
| body          | body | object | true     | The certificate file to upload   |
| » file        | body | any    | true     | The certificate file             |
| » name        | body | string | false    | Optional certificate name        |
| » description | body | string | false    | Optional certificate description |

> Example responses

> 200 Response

```json
{
  "success": true,
  "certificateId": "string",
  "message": "string"
}
```

<h3 id="certificateapi_uploadcertificate-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | Inline                |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror) |

<h3 id="certificateapi_uploadcertificate-responseschema">Response Schema</h3>

Status Code **200**

| Name            | Type    | Required | Restrictions | Description                        |
| --------------- | ------- | -------- | ------------ | ---------------------------------- |
| » success       | boolean | true     | none         | Whether the upload was successful  |
| » certificateId | string  | true     | none         | The ID of the uploaded certificate |
| » message       | string  | true     | none         | Message describing the result      |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## CertificateApi_listCertificates

<a id="opIdCertificateApi_listCertificates"></a>

> Code samples

```http
GET /api/v2/certificates/certificates HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/certificates/certificates", {
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

r = requests.get('/api/v2/certificates/certificates', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/certificates/certificates");
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

`GET /api/v2/certificates/certificates`

List certificates

<h3 id="certificateapi_listcertificates-parameters">Parameters</h3>

| Name   | In    | Type           | Required | Description        |
| ------ | ----- | -------------- | -------- | ------------------ |
| offset | query | integer(int32) | false    | offset, default 0  |
| limit  | query | integer(int32) | false    | limit, default 100 |

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "size": 0,
      "uploadTime": "2019-08-24T14:15:22Z",
      "md5": "string"
    }
  ],
  "total": 0,
  "offset": 0,
  "limit": 0
}
```

<h3 id="certificateapi_listcertificates-responses">Responses</h3>

| Status | Meaning                                                 | Description                | Schema |
| ------ | ------------------------------------------------------- | -------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded. | Inline |

<h3 id="certificateapi_listcertificates-responseschema">Response Schema</h3>

Status Code **200**

| Name           | Type                                        | Required | Restrictions | Description                               |
| -------------- | ------------------------------------------- | -------- | ------------ | ----------------------------------------- |
| » items        | [[CertificateInfo](#schemacertificateinfo)] | true     | none         | Items                                     |
| »» id          | string                                      | true     | none         | The ID of the certificate                 |
| »» name        | string                                      | false    | none         | The name of the certificate               |
| »» description | string                                      | false    | none         | The description of the certificate        |
| »» size        | integer(uint32)                             | true     | none         | The size of the certificate file in bytes |
| »» uploadTime  | string(date-time)                           | true     | none         | The upload timestamp                      |
| »» md5         | string                                      | true     | none         | The MD5 hash of the certificate file      |
| » total        | integer(uint32)                             | true     | none         | Total count of items                      |
| » offset       | integer(uint32)                             | true     | none         | Offset, default 0                         |
| » limit        | integer(uint32)                             | true     | none         | Limit, default 100                        |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## CertificateApi_getCertificate

<a id="opIdCertificateApi_getCertificate"></a>

> Code samples

```http
GET /api/v2/certificates/certificates/{id} HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/certificates/certificates/{id}", {
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

r = requests.get('/api/v2/certificates/certificates/{id}', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/certificates/certificates/{id}");
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

`GET /api/v2/certificates/certificates/{id}`

Get a specific certificate

<h3 id="certificateapi_getcertificate-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description                      |
| ---- | ---- | ------ | -------- | -------------------------------- |
| id   | path | string | true     | The id of the certificate to get |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "size": 0,
  "uploadTime": "2019-08-24T14:15:22Z",
  "md5": "string"
}
```

<h3 id="certificateapi_getcertificate-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                                    |
| ------- | ------------------------------------------------------- | ----------------------------- | ----------------------------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | [CertificateInfo](#schemacertificateinfo) |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror)                     |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## CertificateApi_deleteCertificate

<a id="opIdCertificateApi_deleteCertificate"></a>

> Code samples

```http
DELETE /api/v2/certificates/certificates/{id} HTTP/1.1

Accept: application/json

```

```javascript
// javascript

const headers = {
  Accept: "application/json",
}

fetch("/api/v2/certificates/certificates/{id}", {
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

r = requests.delete('/api/v2/certificates/certificates/{id}', headers = headers)

print(r.json())

```

```java
// Java

URL obj = new URL("/api/v2/certificates/certificates/{id}");
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

`DELETE /api/v2/certificates/certificates/{id}`

Delete a certificate

<h3 id="certificateapi_deletecertificate-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description                         |
| ---- | ---- | ------ | -------- | ----------------------------------- |
| id   | path | string | true     | The id of the certificate to delete |

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

<h3 id="certificateapi_deletecertificate-responses">Responses</h3>

| Status  | Meaning                                                 | Description                   | Schema                |
| ------- | ------------------------------------------------------- | ----------------------------- | --------------------- |
| 200     | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request has succeeded.    | Inline                |
| default | Default                                                 | An unexpected error response. | [Error](#schemaerror) |

<h3 id="certificateapi_deletecertificate-responseschema">Response Schema</h3>

Status Code **200**

| Name      | Type    | Required | Restrictions | Description                         |
| --------- | ------- | -------- | ------------ | ----------------------------------- |
| » success | boolean | true     | none         | Whether the deletion was successful |
| » message | string  | true     | none         | Message describing the result       |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

# Schemas

<h2 id="tocS_CertificateInfo">CertificateInfo</h2>
<!-- backwards compatibility -->
<a id="schemacertificateinfo"></a>
<a id="schema_CertificateInfo"></a>
<a id="tocScertificateinfo"></a>
<a id="tocscertificateinfo"></a>

```yaml
id: string
name: string
description: string
size: 0
uploadTime: 2019-08-24T14:15:22Z
md5: string
```

Certificate information

### Properties

| Name        | Type              | Required | Restrictions | Description                               |
| ----------- | ----------------- | -------- | ------------ | ----------------------------------------- |
| id          | string            | true     | none         | The ID of the certificate                 |
| name        | string            | false    | none         | The name of the certificate               |
| description | string            | false    | none         | The description of the certificate        |
| size        | integer(uint32)   | true     | none         | The size of the certificate file in bytes |
| uploadTime  | string(date-time) | true     | none         | The upload timestamp                      |
| md5         | string            | true     | none         | The MD5 hash of the certificate file      |

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```yaml
id: 0
email: user@example.com
authType: password
createdAt: 0
updatedAt: 0
```

### Properties

| Name      | Type                                  | Required | Restrictions | Description                              |
| --------- | ------------------------------------- | -------- | ------------ | ---------------------------------------- |
| id        | integer(uint32)                       | true     | read-only    | The id of the email                      |
| email     | string                                | true     | none         | The email address                        |
| authType  | [EmailAuthType](#schemaemailauthtype) | true     | none         | The authentication type                  |
| createdAt | integer(int32)                        | true     | none         | The timestamp when the email was created |
| updatedAt | integer(int32)                        | true     | none         | The timestamp when the email was updated |

<h2 id="tocS_EmailAuthType">EmailAuthType</h2>
<!-- backwards compatibility -->
<a id="schemaemailauthtype"></a>
<a id="schema_EmailAuthType"></a>
<a id="tocSemailauthtype"></a>
<a id="tocsemailauthtype"></a>

```yaml
password
```

Email authentication type enum values

### Properties

| Name        | Type   | Required | Restrictions | Description                           |
| ----------- | ------ | -------- | ------------ | ------------------------------------- |
| _anonymous_ | string | false    | none         | Email authentication type enum values |

#### Enumerated Values

| Property | Value    | Description                                 |
| -------- | -------- | ------------------------------------------- |
| password | password | Password authentication                     |
| otp      | otp      | One time password authentication            |
| totp     | totp     | Time-based one time password authentication |
| oauth2   | oauth2   | OAuth2 authentication                       |

<h2 id="tocS_EmailCreate">EmailCreate</h2>
<!-- backwards compatibility -->
<a id="schemaemailcreate"></a>
<a id="schema_EmailCreate"></a>
<a id="tocSemailcreate"></a>
<a id="tocsemailcreate"></a>

```yaml
email: user@example.com
authType: password
password: pa$$word
createdAt: 0
updatedAt: 0
```

### Properties

| Name      | Type                                  | Required | Restrictions | Description                              |
| --------- | ------------------------------------- | -------- | ------------ | ---------------------------------------- |
| email     | string                                | true     | none         | The email address                        |
| authType  | [EmailAuthType](#schemaemailauthtype) | true     | none         | The authentication type                  |
| password  | string(password)                      | false    | none         | The password                             |
| createdAt | integer(int32)                        | true     | none         | The timestamp when the email was created |
| updatedAt | integer(int32)                        | true     | none         | The timestamp when the email was updated |

<h2 id="tocS_EmailCreateOrUpdate">EmailCreateOrUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaemailcreateorupdate"></a>
<a id="schema_EmailCreateOrUpdate"></a>
<a id="tocSemailcreateorupdate"></a>
<a id="tocsemailcreateorupdate"></a>

```yaml
email: user@example.com
authType: password
password: pa$$word
createdAt: 0
updatedAt: 0
```

### Properties

| Name      | Type                                  | Required | Restrictions | Description                              |
| --------- | ------------------------------------- | -------- | ------------ | ---------------------------------------- |
| email     | string                                | true     | none         | The email address                        |
| authType  | [EmailAuthType](#schemaemailauthtype) | true     | none         | The authentication type                  |
| password  | string(password)                      | false    | none         | The password                             |
| createdAt | integer(int32)                        | true     | none         | The timestamp when the email was created |
| updatedAt | integer(int32)                        | true     | none         | The timestamp when the email was updated |

<h2 id="tocS_EmailCreateOrUpdateItem">EmailCreateOrUpdateItem</h2>
<!-- backwards compatibility -->
<a id="schemaemailcreateorupdateitem"></a>
<a id="schema_EmailCreateOrUpdateItem"></a>
<a id="tocSemailcreateorupdateitem"></a>
<a id="tocsemailcreateorupdateitem"></a>

```yaml
email: user@example.com
authType: password
password: pa$$word
createdAt: 0
updatedAt: 0
```

### Properties

| Name      | Type                                  | Required | Restrictions | Description                              |
| --------- | ------------------------------------- | -------- | ------------ | ---------------------------------------- |
| email     | string                                | true     | none         | The email address                        |
| authType  | [EmailAuthType](#schemaemailauthtype) | true     | none         | The authentication type                  |
| password  | string(password)                      | false    | none         | The password                             |
| createdAt | integer(int32)                        | true     | none         | The timestamp when the email was created |
| updatedAt | integer(int32)                        | true     | none         | The timestamp when the email was updated |

<h2 id="tocS_EmailGroup">EmailGroup</h2>
<!-- backwards compatibility -->
<a id="schemaemailgroup"></a>
<a id="schema_EmailGroup"></a>
<a id="tocSemailgroup"></a>
<a id="tocsemailgroup"></a>

```yaml
id: 0
name: string
members:
  - id: 0
    email: user@example.com
    authType: password
    createdAt: 0
    updatedAt: 0
```

### Properties

| Name    | Type                    | Required | Restrictions | Description                        |
| ------- | ----------------------- | -------- | ------------ | ---------------------------------- |
| id      | integer(uint32)         | true     | read-only    | The unique identifier of the group |
| name    | string                  | true     | none         | The name of the group              |
| members | [[Email](#schemaemail)] | true     | none         | The members of the group           |

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
    authType: password
    password: pa$$word
    createdAt: 0
    updatedAt: 0
```

### Properties

| Name    | Type                                                        | Required | Restrictions | Description              |
| ------- | ----------------------------------------------------------- | -------- | ------------ | ------------------------ |
| name    | string                                                      | true     | none         | The name of the group    |
| members | [[EmailCreateOrUpdateItem](#schemaemailcreateorupdateitem)] | true     | none         | The members of the group |

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

User gender enum values

### Properties

| Name        | Type   | Required | Restrictions | Description             |
| ----------- | ------ | -------- | ------------ | ----------------------- |
| _anonymous_ | string | false    | none         | User gender enum values |

#### Enumerated Values

| Property | Value  | Description     |
| -------- | ------ | --------------- |
| secret   | secret | unpublic gender |
| male     | male   | male gender     |
| female   | female | female gender   |

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
gender: secret
email:
  id: 0
  email: user@example.com
  authType: password
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
gender: secret
email:
  email: user@example.com
  authType: password
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
gender: secret
email:
  email: user@example.com
  authType: password
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

<h2 id="tocS_WiFiBand">WiFiBand</h2>
<!-- backwards compatibility -->
<a id="schemawifiband"></a>
<a id="schema_WiFiBand"></a>
<a id="tocSwifiband"></a>
<a id="tocswifiband"></a>

```yaml
mixed
```

WiFi frequency band enum values

### Properties

| Name        | Type   | Required | Restrictions | Description                     |
| ----------- | ------ | -------- | ------------ | ------------------------------- |
| _anonymous_ | string | false    | none         | WiFi frequency band enum values |

#### Enumerated Values

| Property | Value  | Description                  |
| -------- | ------ | ---------------------------- |
| mixed    | mixed  | Mixed band (2.4GHz and 5GHz) |
| 2_4GHz   | 2_4GHz | 2.4GHz band                  |
| 5GHz     | 5GHz   | Mixed band (2.4GHz and 5GHz) |
| 6GHz     | 6GHz   | Mixed band (2.4GHz and 5GHz) |

<h2 id="tocS_WiFiConfig">WiFiConfig</h2>
<!-- backwards compatibility -->
<a id="schemawificonfig"></a>
<a id="schema_WiFiConfig"></a>
<a id="tocSwificonfig"></a>
<a id="tocswificonfig"></a>

```yaml
id: string
ssid: string
security: none
password: pa$$word
autoConnect: true
hidden: false
status: disconnected
createdAt: 0
updatedAt: 0
```

### Properties

| Name        | Type                                                | Required | Restrictions | Description                                                                                        |
| ----------- | --------------------------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------- |
| id          | string                                              | true     | read-only    | The unique identifier of the WiFi configuration                                                    |
| ssid        | string                                              | true     | none         | The SSID of the WiFi network to connect to                                                         |
| security    | [WiFiSecurityType](#schemawifisecuritytype)         | true     | none         | The security type of the WiFi network                                                              |
| password    | string(password)                                    | false    | none         | The password for the WiFi network (required for secured networks). encrypted depends security type |
| autoConnect | boolean                                             | true     | none         | Whether to connect automatically                                                                   |
| hidden      | boolean                                             | true     | none         | Whether this is a hidden network                                                                   |
| status      | [WiFiConnectionStatus](#schemawificonnectionstatus) | true     | none         | The current connection status of this configuration                                                |
| createdAt   | integer(int32)                                      | true     | read-only    | The timestamp when the configuration was created                                                   |
| updatedAt   | integer(int32)                                      | true     | read-only    | The timestamp when the configuration was last updated                                              |

<h2 id="tocS_WiFiConnectRequest">WiFiConnectRequest</h2>
<!-- backwards compatibility -->
<a id="schemawificonnectrequest"></a>
<a id="schema_WiFiConnectRequest"></a>
<a id="tocSwificonnectrequest"></a>
<a id="tocswificonnectrequest"></a>

```yaml
password: pa$$word
saveConfiguration: true
```

### Properties

| Name              | Type             | Required | Restrictions | Description                                                       |
| ----------------- | ---------------- | -------- | ------------ | ----------------------------------------------------------------- |
| password          | string(password) | false    | none         | The password for the WiFi network (required for secured networks) |
| saveConfiguration | boolean          | true     | none         | Whether to save this configuration for future use                 |

<h2 id="tocS_WiFiConnectionStatus">WiFiConnectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemawificonnectionstatus"></a>
<a id="schema_WiFiConnectionStatus"></a>
<a id="tocSwificonnectionstatus"></a>
<a id="tocswificonnectionstatus"></a>

```yaml
disconnected
```

WiFi connection status

### Properties

| Name        | Type   | Required | Restrictions | Description            |
| ----------- | ------ | -------- | ------------ | ---------------------- |
| _anonymous_ | string | false    | none         | WiFi connection status |

#### Enumerated Values

| Property    | Value         | Description |
| ----------- | ------------- | ----------- |
| _anonymous_ | disconnected  | undefined   |
| _anonymous_ | connecting    | undefined   |
| _anonymous_ | connected     | undefined   |
| _anonymous_ | failed        | undefined   |
| _anonymous_ | disconnecting | undefined   |

<h2 id="tocS_WiFiNetwork">WiFiNetwork</h2>
<!-- backwards compatibility -->
<a id="schemawifinetwork"></a>
<a id="schema_WiFiNetwork"></a>
<a id="tocSwifinetwork"></a>
<a id="tocswifinetwork"></a>

```yaml
id: string
ssid: string
bssid: string
security: none
signalStrength: 0
band: mixed
channel: 0
hidden: true
isConnected: true
isSaved: true
lastSeen: 0
```

### Properties

| Name           | Type                                        | Required | Restrictions | Description                                         |
| -------------- | ------------------------------------------- | -------- | ------------ | --------------------------------------------------- |
| id             | string                                      | true     | read-only    | The unique identifier of the WiFi network           |
| ssid           | string                                      | true     | none         | The SSID of the WiFi network                        |
| bssid          | string                                      | true     | none         | The BSSID of the WiFi network                       |
| security       | [WiFiSecurityType](#schemawifisecuritytype) | true     | none         | The security type of the WiFi network               |
| signalStrength | integer(int32)                              | true     | none         | The signal strength in dBm                          |
| band           | [WiFiBand](#schemawifiband)                 | true     | none         | The WiFi frequency band                             |
| channel        | integer(uint32)                             | true     | none         | The WiFi channel                                    |
| hidden         | boolean                                     | true     | none         | Whether the network is hidden                       |
| isConnected    | boolean                                     | true     | none         | Whether this network is the currently connected one |
| isSaved        | boolean                                     | true     | none         | Whether this network has a saved configuration      |
| lastSeen       | integer(int32)                              | true     | read-only    | The timestamp when the network was last seen        |

<h2 id="tocS_WiFiSecurityType">WiFiSecurityType</h2>
<!-- backwards compatibility -->
<a id="schemawifisecuritytype"></a>
<a id="schema_WiFiSecurityType"></a>
<a id="tocSwifisecuritytype"></a>
<a id="tocswifisecuritytype"></a>

```yaml
none
```

WiFi security type enum values

### Properties

| Name        | Type   | Required | Restrictions | Description                    |
| ----------- | ------ | -------- | ------------ | ------------------------------ |
| _anonymous_ | string | false    | none         | WiFi security type enum values |

#### Enumerated Values

| Property | Value | Description     |
| -------- | ----- | --------------- |
| none     | none  | No security     |
| wep      | wep   | WEP encryption  |
| wpa      | wpa   | WPA encryption  |
| wpa2     | wpa2  | WPA2 encryption |
