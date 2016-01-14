---
title: Documents
example_input: |-
  {
    "id": 123,
    "document": "input"
  }
example_response: |-
  {
    "basename": "the-great-gatsby.md",
    "body": "Lorem ipsum…",
    "categories": ["fiction"],
    "created_at": "2016-01-14 20:50:46 +0000",
    "date": null,
    "defaults": {
      "layout": "books"
    },
    "directory": "_books",
    "filename": "_books/the-great-gatsby.md",
    "id": "5697cc7b16d5640c40000005",
    "metadata": {},
    "path": "the-great-gatsby.md",
    "permalink": null,
    "sha": "4d481d526f0010ed96e43260f0e776acf6da315d",
    "site_id": "5697cc7b16d5640c40000002",
    "tags": [],
    "title": "The Great Gatsby",
    "type": "document",
    "updated_at": "2016-01-14 20:56:40 +0000",
    "url": "/api/authentication.html",
    "user_id": "5697cc7b16d5640c40000000",
    "visibility": "visible"
  }
---

## Overview

Template page for API documents

1. [List documents](#list-documents)
1. [Create a document](#create-a-document)
1. [Get a document](#get-a-document)
1. [Update a document](#update-a-document)
1. [Delete a document](#delete-a-document)





## List documents

### Endpoint

~~~
GET {{ site.data.api.url | append: 'sites/:site_id/collections/:collection_path/documents' }}
~~~

### Response

{{ site.data.api.status_paginated }}
~~~ json
[
  {{  page.example_response | split:'
' | join:'
  ' }}
]
~~~


## Create a document

### Endpoint

~~~
POST {{ site.data.api.url | append: 'sites/:site_id/collections/:collection_path/documents' }}
~~~

### Input

| Name | Type | Desc |
|------|------|------|
| `foo` | `String` | document foo |

### Example

~~~ json
{{ page.example_input }}
~~~


### Response

{{ site.data.api.status_created }}
~~~ json
{{  page.example_response }}
~~~




## Get a document

### Endpoint

~~~
GET {{ site.data.api.url | append: 'documents/:document_id' }}
~~~

### Response

{{ site.data.api.status_ok }}
~~~ json
{{  page.example_response }}
~~~




## Update a document

### Endpoint

~~~
PUT {{ site.data.api.url | append: 'documents/:document_id' }}
~~~

### Input

| Name | Type | Desc |
|------|------|------|
| `foo` | `String` | document foo |

### Example

~~~ json
{{ page.example_input }}
~~~

### Response

{{ site.data.api.status_ok }}
~~~ json
{{  page.example_response }}
~~~





## Delete a document

### Endpoint

~~~
DELETE {{ site.data.api.url | append: 'documents/:document_id' }}
~~~

### Response

{{ site.data.api.status_ok }}
~~~ json
{
  "id": 123,
  "deleted": true
}
~~~