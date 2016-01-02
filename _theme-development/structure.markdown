---
title: Theme structure
date: 2015-10-31 20:03:00 -04:00
layout: page
weight: 3
---

Directory structure and naming is very important to Jekyll.

{% highlight plain %}
_layouts/
  default.html
_includes/
  partial.html
_posts/
  2016-01-02-2015-a-post.markdown
_config.yml
{% endhighlight %}

## `_layouts/`

The `_layouts/` directory contains the layouts that Jekyll will use to render content. The default template (`default.html`)...
