---
title: Sites
date: 2016-01-14 15:50:00 -05:00
position: 3
example_input: |-
  {
    "title": "Hello World",
    "domain": "example.com",
    "timezone": "America/New_York",
    "metadata": {
      "foo": "bar"
    }
  }
example_response: |-
  {
      "cname": "username.github.io",
      "created_at": "2015-11-04 15:28:42 -0500",
      "defaults": [],
      "domain": "testsitev2.siteleaf.net",
      "id": "563a6a7a1829c7081b000000",
      "jobs": {
          "preview": {
              "id": null,
              "last_at": "2016-04-12T15:49:28-04:00",
              "last_error": null,
              "last_id": "68f6bc647ab61e01efd4ae27"
          },
          "publish": {
              "id": null,
              "last_at": "2016-04-12T15:41:12-04:00",
              "last_error": "Liquid syntax error (line 6): Variable '{{ fail %}' was not properly terminated with regexp: /\\}\\}/",
              "last_id": "06184063895bb4c819165bee"
          },
          "sync": {
              "id": null,
              "last_at": "2016-04-12T15:57:09-04:00",
              "last_error": null,
              "last_id": "32e0dc8dcebf26a6f1148ef4"
          }
      },
      "metadata": {
          "gems": [
              "jekyll-sitemap"
          ]
      },
      "timezone": "UTC",
      "title": "test site",
      "updated_at": "2016-04-12 15:57:09 -0400",
      "user_id": "533d750e1829c7785c000001",
      "version": "v2"
  }
---

### Overview

1. [List your sites](#list-your-sites)
1. [Create a site](#create-a-site)
1. [Get a site](#get-a-site)
1. [Update a site](#update-a-site)
1. [Delete a site](#delete-a-site)
1. [Publish a site](#publish-a-site)
1. [List post tags](#list-post-tags)
1. [List post categories](#list-post-categories)
{: .api__toc}



### List your sites

#### Endpoint

~~~
GET {{ site.data.api.url | append: 'sites' }}
~~~

#### Query String Params

| Name | Desc |
|------|------|
| `sort` | Should be formated as `field-asc` or `field-desc` |

#### Response

{{ site.data.api.status_paginated }}
~~~ json
[
  {{  page.example_response | split:'
' | join:'
  ' }}
]
~~~





### Create a site

#### Endpoint

~~~
POST {{ site.data.api.url | append: 'sites' }}
~~~

#### Input

| Name | Type | Desc |
|------|------|------|
| `title` | `String` | Sites title **(required)** |
| `domain` | `String` | Sites domain **(required)** |
| `timezone` | `String` | Sites timezone, defaults to `UTC` |
| `metadata` | `Hash<String, *>` | Arbitrary key/value pairs |
| `defaults` | `Array<Hash>` | Jekyll defaults, see the [Defaults page](/api/defaults) for more details |
| `empty` | `Boolean` | Defaults to `false`, if `true` doesn't create the Siteleaf default theme |


#### Example

~~~ json
{{  page.example_input }}
~~~

#### Response

{{ site.data.api.status_created }}
~~~ json
{{  page.example_response }}
~~~





### Get a site

#### Endpoint

~~~
GET {{ site.data.api.url | append: 'sites/:site_id' }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~ json
{{  page.example_response }}
~~~





### Update a site

#### Endpoint

~~~
PUT {{ site.data.api.url | append: 'sites/:site_id' }}
~~~

#### Input

| Name | Type | Desc |
|------|------|------|
| `title` | `String` | Sites title |
| `domain` | `String` | Sites domain |
| `timezone` | `String` | Sites timezone, defaults to `UTC` |
| `metadata` | `Hash<String, *>` | Arbitrary key/value pairs |
| `defaults` | `Array<Hash>` | Jekyll defaults, see the [Defaults page](/api/defaults) for more details |
| `hosting` | `String` | Valid options are `disabled`, `ftp`, `s3`, `cloudfiles` and `github` |
| `hosting_options` | `Hash<String, String>` | See the [Hosting/Sync page](/api/hosting-sync) for more details |
| `sync` | `String` | Valid options are `disabled` and `github` |
| `sync_options` | `Hash<String, String>` | See the [Hosting/Sync page](/api/hosting-sync) for more details |

#### Example

~~~ json
{{  page.example_input }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~ json
{{  page.example_response }}
~~~





### Delete a site

#### Endpoint

~~~
DELETE {{ site.data.api.url | append: 'sites/:site_id' }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~ json
{
  "id": "5697cc7b16d5640c40000002",
  "deleted": true
}
~~~





### Publish a site

Compiles and publishes your site in the background, and immediately returns a job id. Use the [Jobs API](/api/jobs) to retrieve status updates.

#### Endpoint

~~~
POST {{ site.data.api.url | append: 'sites/:site_id/publish' }}
~~~

#### Response

{{ site.data.api.status_accepted }}
~~~ json
{
  "job_id": "b9982d904c02307bafadd2a6"
}
~~~





### List post tags

Returns an array of all unique tags from Documents in the posts Collection.

#### Endpoint

~~~
GET {{ site.data.api.url | append: 'sites/:site_id/tags' }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~ json
["cookies", "milk"]
~~~





### List post categories

Returns an array of all unique categories from Documents in the posts Collection.

#### Endpoint

~~~
GET {{ site.data.api.url | append: 'sites/:site_id/categories' }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~ json
["apple", "linux", "windows"]
~~~
