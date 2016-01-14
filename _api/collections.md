---
title: Collections
date: 2016-01-14 17:23:30.394000000 -05:00
example_input: |
  {
    "title": "Library",
    "output": false
  }
example_response: |
  {
    "id": "5697cc7b16d5640c40000004",
    "title": "Books",
    "directory": ".",
    "path": "books",
    "output": true,
    "permalink": null,
    "metadata": {
      "foo": "bar"
    },
    "site_id": "5697cc7b16d5640c40000002",
    "user_id": "5697cc7b16d5640c40000000",
    "created_at": "2016-01-14 20:50:46 +0000",
    "updated_at": "2016-01-14 20:56:40 +0000"
  }
---

## Overview

Lorem ipsum…

1. [List collections](#list-collections)
1. [Create a collection](#create-a-collection)
1. [Get a collection](#get-a-collection)
1. [Update a collection](#update-a-collection)
1. [Delete a collection](#delete-a-collection)
1. [List files](#list-files)
1. [Create a file](#create-a-file)

For interacting with a Collection's documents refer to the [Documents page](/api/documents).



## List collections

### Endpoint

~~~
GET {{ site.data.api.url | append: 'sites/:site_id/collections' }}
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


## Create a collection

### Endpoint

~~~
POST {{ site.data.api.url | append: 'sites/:site_id/collections' }}
~~~

### Input

| Name | Type | Desc |
|------|------|------|
| `title` | `String` | Collection title **(required)** |
| `path` | `String` | Collection path, defaults to a url safe version of `title` |
| `permalink` | `String` | The permalink style for documents, see [Permalinks](#) for more detail |
| `output` | `Boolean` | Whether the collection's documents will be rendered, defaults to `true` |
| `metadata` | `Hash<String, *>` | Arbitrary key/value pairs |

### Example

~~~ json
{{ page.example_input }}
~~~


### Response

{{ site.data.api.status_created }}
~~~ json
{{  page.example_response }}
~~~




## Get a collection

### Endpoint

~~~
GET {{ site.data.api.url | append: 'sites/:site_id/collections/:collection_path' }}
~~~

### Response

{{ site.data.api.status_ok }}
~~~ json
{{  page.example_response }}
~~~




## Update a collection

### Endpoint

~~~
PUT {{ site.data.api.url | append: 'sites/:site_id/collections/:collection_path' }}
~~~

### Input

| Name | Type | Desc |
|------|------|------|
| `title` | `String` | Collection title |
| `path` | `String` | Collection path, defaults to a url safe version of `title` |
| `permalink` | `String` | The permalink style for documents, see [Permalinks](#) for more detail |
| `output` | `Boolean` | Whether the collection's documents will be rendered, defaults to `true` |
| `metadata` | `Hash<String, *>` | Arbitrary key/value pairs |


### Example

~~~ json
{{ page.example_input }}
~~~

### Response

{{ site.data.api.status_ok }}
~~~ json
{{  page.example_response }}
~~~





## Delete a collection

### Endpoint

~~~
DELETE {{ site.data.api.url | append: 'sites/:site_id/collections/:collection_path' }}
~~~

### Response

{{ site.data.api.status_ok }}
~~~ json
{
  "id": 123,
  "deleted": true
}
~~~

