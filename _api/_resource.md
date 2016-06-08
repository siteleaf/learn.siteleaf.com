---
title: resources
example_input: |-
  {
    "id": 123,
    "resource": "input"
  }
example_response: |-
  {
    "id": 123,
    "resource": "response"
  }
---

## Overview

Template page for API resources

1. [List resources](#list-resources)
1. [Create a resource](#create-a-resource)
1. [Get a resource](#get-a-resource)
1. [Update a resource](#update-a-resource)
1. [Delete a resource](#delete-a-resource)
{: .api__toc}





## List resources

### Endpoint

~~~
GET {{ site.data.api.url | append: 'resources' }}
~~~

### Query String Params

| Name | Desc |
|------|------|
| `foo` | foobar |


### Response

{{ site.data.api.status_paginated }}
~~~ json
[
  {{  page.example_response | split:'
' | join:'
  ' }}
]
~~~


## Create a resource

### Endpoint

~~~
POST {{ site.data.api.url | append: 'resources' }}
~~~

### Input

| Name | Type | Desc |
|------|------|------|
| `foo` | `String` | resource foo |

### Example

~~~ json
{{ page.example_input }}
~~~


### Response

{{ site.data.api.status_created }}
~~~ json
{{  page.example_response }}
~~~




## Get a resource

### Endpoint

~~~
GET {{ site.data.api.url | append: 'resources' }}
~~~

### Response

{{ site.data.api.status_ok }}
~~~ json
{{  page.example_response }}
~~~




## Update a resource

### Endpoint

~~~
PUT {{ site.data.api.url | append: 'resources' }}
~~~

### Input

| Name | Type | Desc |
|------|------|------|
| `foo` | `String` | resource foo |

### Example

~~~ json
{{ page.example_input }}
~~~

### Response

{{ site.data.api.status_ok }}
~~~ json
{{  page.example_response }}
~~~





## Delete a resource

### Endpoint

~~~
DELETE {{ site.data.api.url | append: 'resources' }}
~~~

### Response

{{ site.data.api.status_ok }}
~~~ json
{
  "id": 123,
  "deleted": true
}
~~~

