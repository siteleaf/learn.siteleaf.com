---
title: Metadata
date: 2015-12-17 08:02:00 -05:00
position: 5
layout: page
---

Metadata are bits of data that are attached to your pages, posts, collections, or documents, as well as your site itself. There are a few different types of metadata that you can use: simple, list, and object.

Metadata is the equivalent of Jekyll's YAML frontmatter. When syncing Siteleaf exports metadata as frontmatter for Pages and Documents and edits the config file for Collections and Sites.
{: .note__info.ss-info}


## Simple

Simple metadata is just a way to associate a single key with a bit of text.

![Simple metadata](/uploads/metadata/simple.png)

If you end your key name in `file`, `image`, or `asset`, the value field will reveal an upload button. This lets you upload a new file or choose a previously uploaded file and insert its URL into the value field.
{: .note__info.ss-info}

## List

List metadata is just that: a list. But each list item doesn't just need to be a bit of text — it can be another list or an object as well!

![List metadata](/uploads/metadata/list.png)

## Objects

Object metadata allows you to nest other types of metadata inside it. This can be a piece of simple metadata, a list, or other objects.

![Object metadata](/uploads/metadata/object.png)
