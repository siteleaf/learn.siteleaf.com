---
title: Converting a v1 theme
date: 2016-06-15 18:28:00 -04:00
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
| `{{ meta.key }}` or `{{ meta["key"] }}` | `{{ page.key }}` or `{{ page["key"] }}` |
| `{{ site.meta.key }}` | `{{ site.key }}` |
| `{{ thing | fallback: "foobar" }}` | `{{ thing | default: "foobar" }}` |
| `{{ thing | markdown }}` | `{{ thing | markdownify }}` |
| `{{ thing | slug }}` | `{{ thing | slugify }}` |
{% endraw %}