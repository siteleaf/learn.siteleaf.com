---
title: Source
date: 2016-01-15 13:43:00 -05:00
position: 7
---

### Overview

The Source API can be thought of as a filesystem view, as if you were looking at your Jekyll source code locally. It functions a little differently than the rest of the API and isn't as structured.

1. [Get files](#Get-files)
1. [Create or replace a file](#create-or-replace-a-file)
1. [Delete a file](#delete-a-file)
{: .api__toc}




### Get files

Returns information about a single file or the contents of a directory. The `:name` is optional, and without it lists the contents of the root directory.

#### Endpoint

~~~
GET {{ site.data.api.url | append: 'sites/:site_id/source/:name' }}
~~~

#### Response if name is a file

{{ site.data.api.status_ok }}
~~~ json
{
  "name": "index.html",
  "type": "page",
  "sha": "ba7f4bd2da35e372fc34fdf3b60cb108b7412b52",
  "url": "/",
  "download_url": "{{ site.data.api.url }}sites/56965a9dbe6765465c000007/source/index.html?download",
  "user_id": "51ac1ebd5dde223c94000001",
  "created_at": "2016-01-13 14:09:33 +0000",
  "updated_at": "2016-01-13 14:09:33 +0000"
}
~~~

#### Response if name is a directory

{{ site.data.api.status_ok }}
~~~ json
[
  {
    "name": "_config.yml",
    "type": "site",
    "sha": "5a25a3ad7878fdf634e55cba9fd8336d78042a27",
    "download_url": "{{ site.data.api.url }}sites/56965a9dbe6765465c000007/source/_config.yml?download",
    "user_id": "51ac1ebd5dde223c94000001",
    "created_at": "2016-01-13 14:09:33 +0000",
    "updated_at": "2016-01-15 16:22:12 +0000"
  },
  {
    "name": "index.html",
    "type": "page",
    "sha": "ba7f4bd2da35e372fc34fdf3b60cb108b7412b52",
    "url": "/",
    "download_url": "{{ site.data.api.url }}sites/56965a9dbe6765465c000007/source/index.html?download",
    "user_id": "51ac1ebd5dde223c94000001",
    "created_at": "2016-01-13 14:09:33 +0000",
    "updated_at": "2016-01-13 14:09:33 +0000"
  },
  {
    "filesize": null,
    "name": "_posts",
    "sha": null,
    "type": "directory"
  }
]
~~~





### Create or replace a file

This endpoint has a couple functions:

- If a file with the specified name already existed the file will be replaced.
- Otherwise a new file will be created with that name and the returned `type` will be one of `page`, `document`, or `file`.

It's useful for uploading raw Jekyll source files and creating the correct type of Siteleaf resource.

#### Endpoint

~~~
PUT {{ site.data.api.url | append: 'sites/:site_id/source/:name' }}
~~~

#### Input

| Name | Type | Desc |
|------|------|------|
| `file` | `File` | A `multipart/form-data` file attachment |


#### Response

{{ site.data.api.status_ok }}
~~~ json
{
  "name": "index.html",
  "type": "page",
  "sha": "ba7f4bd2da35e372fc34fdf3b60cb108b7412b52",
  "url": "/",
  "download_url": "{{ site.data.api.url }}sites/56965a9dbe6765465c000007/source/index.html?download",
  "user_id": "51ac1ebd5dde223c94000001",
  "created_at": "2016-01-13 14:09:33 +0000",
  "updated_at": "2016-01-13 14:09:33 +0000"
}
~~~





### Delete a file

Will not delete directories or the `_config.yml` file.

#### Endpoint

~~~
DELETE {{ site.data.api.url | append: 'sites/:site_id/source/:name' }}
~~~

#### Response

{{ site.data.api.status_ok }}
~~~ json
{
  "name": "index.html",
  "type": "page",
  "sha": "ba7f4bd2da35e372fc34fdf3b60cb108b7412b52",
  "url": "/",
  "download_url": "{{ site.data.api.url }}sites/56965a9dbe6765465c000007/source/index.html?download",
  "user_id": "51ac1ebd5dde223c94000001",
  "created_at": "2016-01-13 14:09:33 +0000",
  "updated_at": "2016-01-13 14:09:33 +0000"
}
~~~