---
title: Converting a v1 theme
date: 2016-06-15 18:28:00 -04:00
position: 2
---

V2 themes use the same Liquid templating language as v1, with some minor differences that you should be aware of.

{% raw %} 
| v1 | v2 |
|----|----|
| `{% include "includes/header" %}` | `{% include header.html %}` |
| `{{ body }}` | `{{ content }}` |
| `{{ current }}` | `{{ page }}` |
| `{{ title }}` | `{{ page.title }}` |
| `{{ url }}` | `{{ page.url }}` |
| `{{ taxonomy.categories }}` | `{{ page.categories }}` |
| `{{ taxonomy.tags }}` | `{{ page.tags }}` |
| `{{ meta.key }}` or `{{ meta["key"] }}` | `{{ page.key }}` or `{{ page["key"] }}` |
| `{{ site.meta.key }}` | `{{ site.key }}` |
| `{{ site.pages }}` | `{{ site.html_pages }}` |
| `{{ thing | fallback: "foobar" }}` | `{{ thing | default: "foobar" }}` |
| `{{ thing | markdown }}` | `{{ thing | markdownify }}` |
| `{{ thing | slug }}` | `{{ thing | slugify }}` |
{% endraw %}

#### Assets

In v1 you could have `assets` attached to a piece of content (i.e. `page.assets`). This is no longer supported _by default_ however you can add this functionality using the new List metadata field option in v2. To do so, create a new List metadata field called `assets` then add your files to the list. In your template, you can then loop through `page.assets` to access the paths to each asset. This field could also be called `images` or `files`. [Read more.](/content/metadata/#file-fields)