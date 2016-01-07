---
title: Meta fields
date: 2015-12-17 08:02:00 -05:00
layout: page
---

Meta fields are bits of data that are attached to your pages, posts, collections, or documents, as well as your site itself. There are a few different types of meta fields that you can use: simple, list, and object.

Meta fields are converted to YAML when saved. For meta fields on pages, posts, and documents, the field will be added to its frontmatter. For sites and collections, it will be added to your `_config.yml` file.

### Simple

A simple meta field consists of two bits of text: a key that will let you look up the field, and a value that belongs to that key.

_Tip:_ If you end your key in `file`, `image`, or `asset`, the value field will reveal an upload button. You can then upload a file and insert the URL of the file into the value field.

{% highlight plain %}
key: value
{% endhighlight %}

### List

A list meta field contains a key and many values.

_Tip:_ A list value can contain a simple meta field, or it can contain other lists or objects.

{% highlight plain %}
key:
  - value1
  - value2
  - value3:
    - subvalue1
    - subvalue2
{% endhighlight %}

### Objects

An object meta field is similar to a simple meta field, but is inside the value field.

{% highlight plain %}
key:
  key1: value1
{% endhighlight %}
