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

<h1 id="openapi-widgets">Widgets</h1>

## Widgets_list

<a id="opIdWidgets_list"></a>

> Code samples

```http
GET /widgets HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/widgets',
{
  method: 'GET',

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
  'Accept': 'application/json'
}

r = requests.get('/widgets', headers = headers)

print(r.json())

```

`GET /widgets`

List widgets

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "string",
      "weight": 0,
      "color": "red"
    }
  ]
}
```

<h3 id="widgets_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request has succeeded.|[WidgetList](#schemawidgetlist)|
|default|Default|An unexpected error response.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Widgets_create

<a id="opIdWidgets_create"></a>

> Code samples

```http
POST /widgets HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": "string",
  "weight": 0,
  "color": "red"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/widgets',
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

r = requests.post('/widgets', headers = headers)

print(r.json())

```

`POST /widgets`

Create a widget

> Body parameter

```json
{
  "id": "string",
  "weight": 0,
  "color": "red"
}
```

<h3 id="widgets_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Widget](#schemawidget)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "weight": 0,
  "color": "red"
}
```

<h3 id="widgets_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request has succeeded.|[Widget](#schemawidget)|
|default|Default|An unexpected error response.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Widgets_read

<a id="opIdWidgets_read"></a>

> Code samples

```http
GET /widgets/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/widgets/{id}',
{
  method: 'GET',

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
  'Accept': 'application/json'
}

r = requests.get('/widgets/{id}', headers = headers)

print(r.json())

```

`GET /widgets/{id}`

Read widgets

<h3 id="widgets_read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "weight": 0,
  "color": "red"
}
```

<h3 id="widgets_read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request has succeeded.|[Widget](#schemawidget)|
|default|Default|An unexpected error response.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Widgets_update

<a id="opIdWidgets_update"></a>

> Code samples

```http
PATCH /widgets/{id} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": "string",
  "weight": 0,
  "color": "red"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/widgets/{id}',
{
  method: 'PATCH',
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

r = requests.patch('/widgets/{id}', headers = headers)

print(r.json())

```

`PATCH /widgets/{id}`

Update a widget

> Body parameter

```json
{
  "id": "string",
  "weight": 0,
  "color": "red"
}
```

<h3 id="widgets_update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[Widget](#schemawidget)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "weight": 0,
  "color": "red"
}
```

<h3 id="widgets_update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request has succeeded.|[Widget](#schemawidget)|
|default|Default|An unexpected error response.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Widgets_delete

<a id="opIdWidgets_delete"></a>

> Code samples

```http
DELETE /widgets/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/widgets/{id}',
{
  method: 'DELETE',

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
  'Accept': 'application/json'
}

r = requests.delete('/widgets/{id}', headers = headers)

print(r.json())

```

`DELETE /widgets/{id}`

Delete a widget

<h3 id="widgets_delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="widgets_delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|There is no content to send for this request, but the headers may be useful.|None|
|default|Default|An unexpected error response.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```yaml
code: 0
message: string

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_Widget">Widget</h2>
<!-- backwards compatibility -->
<a id="schemawidget"></a>
<a id="schema_Widget"></a>
<a id="tocSwidget"></a>
<a id="tocswidget"></a>

```yaml
id: string
weight: 0
color: red

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|weight|integer(int32)|true|none|none|
|color|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|color|red|
|color|blue|

<h2 id="tocS_WidgetList">WidgetList</h2>
<!-- backwards compatibility -->
<a id="schemawidgetlist"></a>
<a id="schema_WidgetList"></a>
<a id="tocSwidgetlist"></a>
<a id="tocswidgetlist"></a>

```yaml
items:
  - id: string
    weight: 0
    color: red

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Widget](#schemawidget)]|true|none|none|

