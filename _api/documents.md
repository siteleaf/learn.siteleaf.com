---
title: Documents
date: 2016-01-14 17:29:29.729000000 -05:00
position: 6
example_input: |-
  {
    "tags": ["required reading"],
    "metadata": {
      "author": "F. Scott Fitzgerald"
    }
  }
example_response: |-
  {
    "id": "5697cc7b16d5640c40000005",
    "title": "The Great Gatsby",
    "body": "Lorem ipsum…",
    "filename": "_books/the-great-gatsby.md",
    "path": "the-great-gatsby.md",
    "basename": "the-great-gatsby.md",
    "directory": "_books",
    "tags": [],
    "categories": ["fiction"],
    "defaults": {
      "layout": "books"
    },
    "metadata": {},
    "type": "document",
    "date": null,
    "sha": "4d481d526f0010ed96e43260f0e776acf6da315d",
    "visibility": "visible",
    "permalink": null,
    "url": "/books/the-great-gatsby.html",
    "site_id": "5697cc7b16d5640c40000002",
    "user_id": "5697cc7b16d5640c40000000",
    "created_at": "2016-01-14 20:50:46 +0000",
    "updated_at": "2016-01-14 20:56:40 +0000"
  }
---

### Overview

1. [List documents](#list-documents)
1. [Create a document](#create-a-document)
1. [Get a document](#get-a-document)
1. [Update a document](#update-a-document)
1. [Delete a document](#delete-a-document)
{: .api__toc}




### List documents

#### Endpoint

~~~
GET {{ site.data.api.url | append: 'sites/:site_id/collections/:path/documents' }}
~~~

#### Query String Params

| Name | Desc |
|------|------|
| `q`  | Searches by `title` and `path` |
| `sort` | Should be formated as `field-asc` or `field-desc` |
| `visibility` | Can be one of `visible`, `hidden` or `draft` |
| `extensions` | A comma separated list of file extensions, or `markdown` which is equivalent to `markdown,md,mkdown,mkdn,mkd` |

#### Response

{{ site.data.api.status_paginated }}
~~~ json
[
  {{  page.example_response | split:'
' | join:'
  ' }}
]
~~~


### Create a document

#### Endpoint

~~~
POST {{ site.data.api.url | append: 'sites/:site_id/collections/:path/documents' }}
~~~

#### Input

| Name | Type | Desc |
|------|------|------|
| `title` | `String` | Document title **(required)** |
| `body` | `String` | Document body |
| `path` | `String` | Path of the document relative to its collection |
| `permalink` | `String` | Custom permalink, overrides the generated `url` |
| `date` | `String` | ISO8601 formated date |
| `visibility` | `String` | Valid options are `visible` and `hidden`, defaults to `visible` |
| `metadata` | `Hash<String, *>` | Arbitrary key/value pairs |
| `tags` | `Array<String>` | Document tags |
| `categories` | `Array<String>` | Document categories |

#### Example

~~~ json
{{ page.example_input }}
~~~


#### Response

{{ site.data.api.status_created }}
~~~ json
{{  page.example_response }}
~~~




### Get a document

#### Endpoint

~~~
GET {{ site.data.api.url | append: 'documents/:document_id' }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~ json
{{  page.example_response }}
~~~




### Update a document

#### Endpoint

~~~
PUT {{ site.data.api.url | append: 'documents/:document_id' }}
~~~

#### Input

| Name | Type | Desc |
|------|------|------|
| `title` | `String` | Document title |
| `body` | `String` | Document body |
| `path` | `String` | Path of the document relative to its collection |
| `permalink` | `String` | Custom permalink, overrides the generated `url` |
| `date` | `String` | ISO8601 formated date |
| `visibility` | `String` | Valid options are `visible` and `hidden`, defaults to `visible` |
| `metadata` | `Hash<String, *>` | Arbitrary key/value pairs |
| `tags` | `Array<String>` | Document tags |
| `categories` | `Array<String>` | Document categories |

#### Example

~~~ json
{{ page.example_input }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~ json
{{  page.example_response }}
~~~





### Delete a document

#### Endpoint

~~~
DELETE {{ site.data.api.url | append: 'documents/:document_id' }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~ json
{
  "id": "5697cc7b16d5640c40000005",
  "deleted": true
}
~~~
