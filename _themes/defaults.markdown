---
title: Defaults
date: 2016-05-25 22:00:00 -04:00
position: 11
layout: page
---

Instead of restating the same frontmatter and metadata across all of your pages, posts or documents in a collection, you can set defaults in your Jekyll configuration file.

Stay tuned: you'll be able to edit post and collection defaults within Siteleaf soon!
{: .note__aside}

The `defaults` key in your `_config.yml` file is a list of different defaults. Each list item has two objects: `scope` and `value`. `scope` is how you choose which collection and files you're setting values to. `values` is where you define the actual metadata you want to apply.

{% highlight yaml %}
defaults:
  - scope:
      path: ""
      type: "posts"
    values:
      layout: "default"
      author: "Ethan"
  - scope:
      path: ""
      type: "pages"
    value:
      layout: "page"
{% endhighlight %}

In this case, we're setting the `layout` and `author` for posts, and the `layout` for pages. Note that we can easily replace `posts` or `pages` with any other collection name.

## Further Reading:

- [Jekyll: Configuration](http://jekyllrb.com/docs/configuration/#front-matter-defaults)
