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
_stuff/
  a-thing.markdown
_site/
  ...
_config.yml
index.markdown
{% endhighlight %}

## `_layouts/`

The `_layouts/` directory contains the layouts that Jekyll will use to render content. The default template (`default.html`) is what Jekyll will use if it isn't told to use another layout. Generally, the layout is defined in the frontmatter of the content by giving the file name without an extension:

{% highlight plain %}
---
layout: other
---
{% endhighlight %}

## `_includes/`

The `_includes/` directory contains fragments of code that aren't necessarily entire templates. For example, you could contain the code for a blog post in one file and use it in multiple places.

## `_posts/`
