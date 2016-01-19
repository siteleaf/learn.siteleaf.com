---
title: Metadata
date: 2015-12-17 08:02:00 -05:00
layout: page
weight: 5
---

Metadata are bits of data that are attached to your pages, posts, collections, or documents, as well as your site itself. There are a few different types of metadata that you can use: simple, list, and object.

Metadata is the equivalent of Jekyll's YAML frontmatter. When syncing Siteleaf exports metadata as frontmatter for Pages and Documents and edits the config file for Collections and Sites.
{: .note__info.ss-info}


## Simple

Simple metadata is a way to associate a single value with a unique key.

~~~ yaml
simple_key: single value
~~~

If you end your key name in `file`, `image`, or `asset`, the value field will reveal an upload button. This lets you upload a new file or choose a previously uploaded file, and insert it's URL into the value field.
{: .note__info.ss-info}

## List

List metadata is a way to associate multiple values with a unique key. List values can be simple, or contain other lists and objects.

~~~ yaml
list_key:
  - first value
  - second value
~~~

## Objects

Object metadata allows you to nest or group other metadata types under a unique key.

~~~ yaml
object_key:
  simple_key: single value
  list_key:
    - first value
    - second value
~~~
