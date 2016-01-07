---
title: Collections and documents
date: 2015-12-17 08:02:00 -05:00
layout: page
---

There will be times where you don't need a page or a post, but still need to group bits of content together. This is exactly what _collections_ are: they are groups of _documents_ that aren't in any particular order.

For each collection, a new directory will be created in your project called `_[collection name]/` (e.g., `_people/`). Additionally, a piece of configuration will be added to your `_config.yml` file that defines the collection with its title and some metadata:

{% highlight yaml %}
collections:
  people:
    title: People
    output: true
{% endhighlight %}

When you create a document, a new file in your collections directory is also created, named `[permalink].markdown`. The document includes some frontmatter (like any other bit of content).
