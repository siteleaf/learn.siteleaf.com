---
title: Default fields
date: 2016-05-25 22:00:00 -04:00
position: 10
layout: page
---

Instead of defining fields each time you create a page, post, or document, you can set defaults in your `_config.yml` theme file. In most cases, it'll be handy to set at least the default layout.

The `defaults` key in your `_config.yml` file is a list of different defaults. Each list item has two objects: `scope` and `values`.

- `scope` is how you choose which collection and files you're setting values to.
- `values` is where you define the actual defaults you want to apply.

For example:

{% highlight yaml %}
defaults:
  -
    scope:
      path: ""
      type: "posts"
    values:
      layout: "default"
      author: "Ethan"
  -
    scope:
      path: ""
      type: "pages"
    values:
      layout: "page"
  -
    scope:
      path: "projects"
      type: "pages"
    values:
      layout: "project"
{% endhighlight %}

In this case, we're:

- Setting the `layout` and `author` for all posts
- Setting the `layout` for all pages.
- Overriding the previous default `layout` for all pages in the `projects/` path.

Note that `type` can be `posts`, `pages` or any other collection name (e.g. `people`).

## Further Reading:

- [Jekyll: Front Matter defaults](http://jekyllrb.com/docs/configuration/#front-matter-defaults)
