---
title: Theme structure
date: 2015-10-31 20:03:00 -04:00
position: 3
---

Directory structure and naming is very important to Jekyll.

{% highlight bash %}
_layouts/
  default.html
_includes/
  partial.html
_posts/
  2016-01-02-2015-a-post.markdown
_sass/
  _partial.sass
_stuff/
  a-thing.markdown
_site/
  ...
_config.yml
index.markdown
{% endhighlight %}

### `_layouts/`

The `_layouts/` directory contains the layouts that Jekyll will use to render content. The default template (`default.html`) is what Jekyll will use if it isn't told to use another layout. Generally, the layout is defined in the front matter of the content by giving the file name without an extension:

{% highlight bash %}
---
layout: other
---
{% endhighlight %}

You can also define the default layout to use. [Read more about defining defaults here](/content/defaults).

### `_includes/`

The `_includes/` directory contains fragments of code that aren't necessarily entire templates. For example, you could contain the code for a blog post in one file and use it in multiple places.

### `_posts/`

The `_posts/` directory is where your posts will reside. Posts filenames include the timestamp and date (for example, a post titled "New York" that was created on January 6th, 2016 will turn into `2016-01-06-new-york.markdown`).

### `_sass/`

Jekyll will automatically compile Sass/SCSS. You can add a partial to this directory (prefaced with a `_`), and then reference it in another file. [Read more about using Sass here](/themes/sass/).

### `_site/`

This is the directory where your site gets generated into. It's a good idea to keep this out of version control!

### `_config.yml`

This is your Jekyll configuration file. The [Jekyll documentation](http://jekyllrb.com/docs/configuration/) goes into great detail about configuration.

---

### Further Reading

- [Jekyll: Directory Structure](http://jekyllrb.com/docs/structure/)
- [Siteleaf: Jekyll from scratch](http://www.siteleaf.com/blog/jekyll-from-scratch/)
