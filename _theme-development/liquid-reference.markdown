---
title: Liquid reference
date: 2015-10-31 20:03:00 -04:00
layout: page
weight: 2
---

## Sites

Liquid | Purpose
-------|---------------
`site.collections` | Get all collections belonging to the site.
`site.[collection name]` | Get a specific collection (e.g., you'd use `site.episodes` to get the `episodes` collection).

## Collections

Attribute | Purpose
----------|--------------------
`label` | Name of the collection.
`docs`  | A list of documents belonging to the collection.
`files` | A list of files belonging to the collection.
`relative_directory` | The relative path of the collection's source directory.
`directory` | The full path of the collection's source directory.
`output` | If the collection's documents will be output as individual files.

## Documents

Attribute | Purpose
----------|-------------
`content` | The (unrendered) content of the document.
`output` | The rendered `content`.
`path` | The full path to the document's source file.
`relative_path` | The path to the document's source file relative to the site source.
`url` | The URL of the rendered document.
`collection` | The name of the document's parent collection.
