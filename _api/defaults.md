---
title: Defaults
date: 2016-03-03 16:57:04.927000000 -05:00
position: 9
---

### Overview

Defaults are a great way to add common values across a range of content. If you find yourself repeating metadata fields across pages, or using a certain layout for all your posts, defaults can help you out.

Check out the [Jekyll documentation](https://jekyllrb.com/docs/configuration/#front-matter-defaults) for more examples.

### Default

A default is a hash of scoped values that apply to particular content.

#### Input

| Name | Type | Desc |
|------|------|------|
| `path` | `String` | File path to scope values to, otherwise applies to everything |
| `type` | `String` | Type of file to apply to: `pages`, `posts`, `drafts` or a collection |
| `values` | `Hash<String, *>` | Arbitrary key/value pairs |

#### Example

Defaults are added via the [Sites endpoint](/api/sites) within the `defaults` array.

~~~ json
{
  "defaults": [
    {
      "type": "posts",
      "values": {
        "layout": "post",
        "author": "Jill Smith"
      }
    },
    {
      "path": "projects",
      "values": {
        "layout": "project",
        "images": []
      }
    }
  ]
}
~~~
