---
title: Collections
date: 2015-12-17 08:02:00 -05:00
layout: page
weight: 3
---

There will be times where you don't need a page or a post, but still need to group bits of content together. This is exactly what _collections_ are: they are groups of [_documents_](/managing-content/documents.html) that aren't in any particular order.

For each collection, a new directory will be created in your project called `_[collection name]/` (e.g., `_people/`). Additionally, a piece of configuration will be added to your `_config.yml` file that defines the collection with its title and some metadata:

{% highlight yaml %}
collections:
  people:
    title: People
    output: true
{% endhighlight %}

## Options

### Path

Changing the path changes the location of the generated collection directory and the path the collection is accessible at on your site.

### Permalink

The permalink changes the path the collection is accessible at on your site.

## Further Reading

- [Jekyll: Collections](http://jekyllrb.com/docs/collections/)
