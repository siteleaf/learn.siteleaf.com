---
title: Roles
date: 2023-11-21 00:00:00 -05:00
position: 13
example_input: |-
  {
    "user_id": "5697cc7b16d5640c40000000",
    "kind": "admin"
  }
example_response: |-
  {
    "id": "5697cc7b16d5640c40000003",
    "kind": "admin"
    "user_id": "5697cc7b16d5640c40000000",
    "site_id": "5697cc7b16d5640c40000002",
    "created_at": "2023-12-18 17:00:23 +0000",
    "updated_at": "2024-01-14 05:37:58 +0000"
  }
---

### Overview

1. [Create a role](#create-role)
1. [Get a role](#get-role)
1. [Update a role](#update-role)
1. [Delete a role](#delete-role)
{: .api__toc}



### Create a role {#create-role}

#### Endpoint

~~~
POST {{ site.data.api.url | append: 'sites/:site_id/roles' }}
~~~

#### Input

| Name | Type | Desc |
|------|------|------|
| `user_id` | `String` | User ID |
| `kind` | `String` | Can be one of `admin`, `publisher` or `writer` |

#### Example

~~~ json
{{ page.example_input }}
~~~

#### Response

{{ site.data.api.status_created }}
~~~ json
{{  page.example_response }}
~~~





### Get a role {#get-role}

#### Endpoint

~~~
GET {{ site.data.api.url | append: 'roles/:role_id' }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~ json
{{  page.example_response }}
~~~





### Update a role {#update-role}

#### Endpoint

~~~
PUT {{ site.data.api.url | append: 'roles/:role_id' }}
~~~

#### Input

| Name | Type | Desc |
|------|------|------|
| `kind` | `String` | Can be one of `admin`, `publisher` or `writer` |

#### Example

~~~ json
{{ page.example_input }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~ json
{{  page.example_response }}
~~~




### Delete a role {#delete-role}

#### Endpoint

~~~
DELETE {{ site.data.api.url | append: 'roles/:role_id' }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~ json
{
  "id": "5697cc7b16d5640c40000003",
  "deleted": true
}
~~~
