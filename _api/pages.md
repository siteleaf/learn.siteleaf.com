---
title: Pages
date: 2016-01-14 15:50:46.559000000 -05:00
position: 4
example_input: |-
  {
    "title": "Foo Bar",
    "body": "Lorem ipsum …",
    "metadata": {
      "FizzBuzz": [1, 2, "fizz"]
    }
  }
example_response: |-
  {
    "id": "5697cc7b16d5640c40000003",
    "title": "My page",
    "body": "Hello world",
    "filename": "example/page.markdown",
    "path": "example/page.markdown",
    "basename": "page.markdown",
    "directory": "example",
    "defaults": {},
    "metadata": {
      "layout": "page"
    },
    "type": "page",
    "date": "2015-10-31T23:50:00+00:00",
    "sha": "3a974494793ed1daf4c94ce54d69fda71480e050",
    "visibility": "visible",
    "permalink": null,
    "url": "/example/page/",
    "site_id": "5697cc7b16d5640c40000002",
    "user_id": "5697cc7b16d5640c40000000",
    "created_at": "2015-12-18 17:00:23 +0000",
    "updated_at": "2016-01-14 05:37:58 +0000"
  }
---

### Overview

1. [List pages](#list-pages)
1. [Create a page](#create-a-page)
1. [Get a page](#get-a-page)
1. [Update a page](#update-a-page)
1. [Delete a page](#delete-a-page)
{: .api__toc}



### List pages

#### Endpoint

~~~
GET {{ site.data.api.url | append: 'sites/:site_id/pages' }}
~~~

#### Query String Params

| Name | Desc |
|------|------|
| `q`  | Searches by `title` and `path` |
| `sort` | Should be formated as `field-asc` or `field-desc` |
| `visibility` | Can be either `visible` or `hidden` |
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





### Create a page

#### Endpoint

~~~
POST {{ site.data.api.url | append: 'sites/:site_id/pages' }}
~~~

#### Input

| Name | Type | Desc |
|------|------|------|
| `title` | `String` | Page title **(required)** |
| `body` | `String` | Page body |
| `path` | `String` | Path of the page, essentially the `filename` |
| `permalink` | `String` | Custom permalink, overrides the generated `url` |
| `date` | `String` | ISO8601 formated date |
| `visibility` | `String` | Valid options are `visible` and `hidden`, defaults to `visible` |
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





### Get a page

#### Endpoint

~~~
GET {{ site.data.api.url | append: 'pages/:page_id' }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~ json
{{  page.example_response }}
~~~





### Update a page

#### Endpoint

~~~
PUT {{ site.data.api.url | append: 'pages/:page_id' }}
~~~

#### Input

| Name | Type | Desc |
|------|------|------|
| `title` | `String` | Page title |
| `body` | `String` | Page body |
| `path` | `String` | Path of the page, essentially the `filename` |
| `permalink` | `String` | Custom permalink, overrides the generated `url` |
| `date` | `String` | ISO8601 formated date |
| `visibility` | `String` | Valid options are `visible` and `hidden`, defaults to `visible` |
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




### Delete a page

#### Endpoint

~~~
DELETE {{ site.data.api.url | append: 'pages/:page_id' }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~ json
{
  "id": "5697cc7b16d5640c40000003",
  "deleted": true
}
~~~
