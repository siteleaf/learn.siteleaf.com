---
title: Collections
date: 2016-01-14 17:29:00 -05:00
position: 5
example_input: |-
  {
    "title": "Library",
    "output": false
  }
example_response: |-
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

### Overview

1. [List collections](#list-collections)
1. [Create a collection](#create-a-collection)
1. [Get a collection](#get-a-collection)
1. [Update a collection](#update-a-collection)
1. [Delete a collection](#delete-a-collection)
1. [List collection files](#list-collection-files)
1. [Create a collection file](#create-a-collection-file)
{: .api__toc}

For interacting with a Collection's documents refer to the [Documents page](/api/documents).



### List collections

#### Endpoint

~~~
GET {{ site.data.api.url | append: 'sites/:site_id/collections' }}
~~~

#### Response

{{ site.data.api.status_paginated }}
~~~ json
[
  {{  page.example_response | split:'
' | join:'
  ' }}
]
~~~


### Create a collection

#### Endpoint

~~~
POST {{ site.data.api.url | append: 'sites/:site_id/collections' }}
~~~

#### Input

| Name | Type | Desc |
|------|------|------|
| `title` | `String` | Collection title **(required)** |
| `path` | `String` | Collection path, defaults to a url safe version of `title` |
| `permalink` | `String` | The permalink style for documents, see [Permalinks](#) for more detail |
| `output` | `Boolean` | Whether the collection's documents will be rendered, defaults to `true` |
| `metadata` | `Hash<String, *>` | Arbitrary key/value pairs |

#### Example

~~~ json
{{ page.example_input }}
~~~


#### Response

{{ site.data.api.status_created }}
~~~ json
{{  page.example_response }}
~~~




### Get a collection

#### Endpoint

~~~
GET {{ site.data.api.url | append: 'sites/:site_id/collections/:path' }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~ json
{{  page.example_response }}
~~~




### Update a collection

#### Endpoint

~~~
PUT {{ site.data.api.url | append: 'sites/:site_id/collections/:path' }}
~~~

#### Input

| Name | Type | Desc |
|------|------|------|
| `title` | `String` | Collection title |
| `path` | `String` | Collection path, defaults to a url safe version of `title` |
| `permalink` | `String` | The permalink style for documents, see [Permalinks](#) for more detail |
| `output` | `Boolean` | Whether the collection's documents will be rendered, defaults to `true` |
| `metadata` | `Hash<String, *>` | Arbitrary key/value pairs |


#### Example

~~~ json
{{ page.example_input }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~ json
{{  page.example_response }}
~~~





### Delete a collection

#### Endpoint

~~~
DELETE {{ site.data.api.url | append: 'sites/:site_id/collections/:path' }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~ json
{
  "id": "5697cc7b16d5640c40000004",
  "deleted": true
}
~~~





### List collection files

#### Endpoint

~~~
GET {{ site.data.api.url | append: 'sites/:site_id/collections/:path/files' }}
~~~

#### Query String Params

| Name | Desc |
|------|------|
| `q`  | Searches by `filename` |
| `sort` | Should be formated as `field-asc` or `field-desc` |

#### Response

{{ site.data.api.status_paginated }}
~~~ json
[
  {
    "filename": "_uploads/IMG_2331.JPG",
    "content_type": "image/jpeg",
    "directory": "_uploads",
    "basename": "IMG_2331.JPG",
    "url": "/uploads/IMG_2331.JPG",
    "filesize": 1689833,
    "sha": "e5ca9010389ac30e387acbc3daac3b1b0c8f8c09",
    "download_url": "{{ site.data.api.url | append: 'sites/5697cc7b16d5640c40000002/files/_uploads/IMG_2331.JPG?download' }}",
    "site_id": "5697cc7b16d5640c40000002",
    "user_id": "5697cc7b16d5640c40000000",
    "edited_by_id": null,
    "created_at": "2016-01-15 16:22:12 +0000",
    "updated_at": "2016-01-15 16:22:12 +0000"
  }
]
~~~


### Create a collection file

Collection files only support static files, that is any file *without* YAML front matter. This endpoint will return an error if it detects front matter. If you need to upload arbitrary text files use the [Files API](/api/files) which parses file uploads and will create either a Document or File.

#### Endpoint

~~~
POST {{ site.data.api.url | append: 'sites/:site_id/collections/:path/files' }}
~~~

#### Input

| Name | Type | Desc |
|------|------|------|
| `file` | `File` | A `multipart/form-data` file attachment |

#### Response

{{ site.data.api.status_created }}
~~~ json
{
  "filename": "_uploads/IMG_2331.JPG",
  "content_type": "image/jpeg",
  "directory": "_uploads",
  "basename": "IMG_2331.JPG",
  "url": "/uploads/IMG_2331.JPG",
  "filesize": 1689833,
  "sha": "e5ca9010389ac30e387acbc3daac3b1b0c8f8c09",
  "download_url": "{{ site.data.api.url | append: 'sites/5697cc7b16d5640c40000002/files/_uploads/IMG_2331.JPG?download' }}",
  "site_id": "5697cc7b16d5640c40000002",
  "user_id": "5697cc7b16d5640c40000000",
  "edited_by_id": null,
  "created_at": "2016-01-15 16:22:12 +0000",
  "updated_at": "2016-01-15 16:22:12 +0000"
}
~~~
