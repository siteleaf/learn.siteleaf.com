---
title: Improved metadata in v2
date: 2015-10-31 20:03:00 -04:00
layout: page
weight: 5
---

We've greatly improved the metadata user experience in V2! Now you can define defaults on a per-page basis, have repeatable fields, and fields can now be arrays or objects, in addition to the standard text field.

## Setting default fields

You can define Jekyll Defaults for all your content (or by collection) in your config file. [More information on setting default front matter can be found in the Jekyll docs.](http://jekyllrb.com/docs/configuration/#front-matter-defaults)

## File fields

If you have metadata with a key of `asset`, `assets`, `file`, `files`, `image`, or `images` Siteleaf will place a file picker button within the field, making it easy to quickly upload or select an existing upload.

If you're coming from Siteleaf V1, you'll probably notice that the "assets" section is no longer its own field. Instead, you can create a "List" (array) metadata and give it a key of `assets`. If you want to add assets with additional metadata (like maybe a caption), you could create a "List" metadata and add "Objects" to the list. Your object could have keys like `file` and `caption`. When you add a new item to the list, a new object with those same keys will be added for you, making it easy to add multiple assets with the same structure.

## Collection fields

To create a field for "associated" documents, create a new field with a key of the singular or plural collection name. For example, if you have a post and want to have an autocomplete field for documents in your "People" collection, create a field with a key of `person` or `people`.
