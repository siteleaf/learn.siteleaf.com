---
title: Users
date: 2016-01-14 15:50:46.559000000 -05:00
position: 11
example_response: |-
  {
    "id": "5697cc7b16d5640c40000000",
    "email": "jill@example.com",
    "firstname": "Jill",
    "lastname": "Smith",
    "fullname": "Jill Smith",
    "created_at": "2013-06-03 04:42:35 +0000",
    "updated_at": "2015-08-30 20:31:31 +0000"
  }
---

### Overview

1. [List users](#list-users)
1. [Get the currently authenticated user](#current-user)
{: .api__toc}




### List users

#### Endpoint

~~~
GET {{ site.data.api.url | append: 'sites/:site_id/users' }}
~~~

#### Response

{{ site.data.api.status_paginated }}
~~~json
[
  {{  page.example_response | split:'
' | join:'
  ' }}
]
~~~





### Get the currently authenticated user {#current-user}

#### Endpoint

~~~
GET {{ site.data.api.url | append: 'users/me' }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~
{{ page.example_response }}
~~~
