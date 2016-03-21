---
title: Metadata
date: 2015-12-17 08:02:00 -05:00
position: 1
prep time: blah
layout: page
---

Metadata are additional pieces of data which you can attach to your pages, documents, collections, and even site-wide. Metadata fields give you a ton of power and flexibility to create a system that fits your content.

Metadata is the equivalent of [Jekyll's YAML frontmatter](https://jekyllrb.com/docs/frontmatter/). When syncing, Siteleaf exports metadata as frontmatter for Pages and Documents and edits the config file for Collections and Sites.
{: .note__aside}

## Field types

There are three types of metadata fields you can create in Siteleaf: Simple, List, and Object. These three types of fields give you a ton of flexibility when setting up your content structure and you're even able to nest different field types within each other. No single person should have all this power! But we're giving it to you&hellip;

### Simple

A "Simple" metadata field accepts a name and text value. These fields might be simple, but they're also smart. See the "Smart Field Names" section below for more info.

![Simple metadata](/uploads/metadata/simple.png)

Accessing this page field in your template would look like this:

{% highlight liquid %}
{% raw %}
{{ page['prep time'] }}
{% endraw %}
{% endhighlight %}

### List

A "List" metadata field accepts a name and a list (AKA an array) of other metadata fields, which can be any field type. You can have a list of simple metadata fields, a list of lists, or a list of objects. This makes entering repeatable content very easy.

![List metadata](/uploads/metadata/list.png)

An example of looping through this page field in your template would look like:

{% highlight liquid %}
{% raw %}
{% for ingredient in page.ingredients %}
  {{ ingredient }}
{% endfor %}
{% endraw %}
{% endhighlight %}

### Objects

An "Object" metadata field is the most descriptive of field types, allowing you to create a field that has many name/value pairs, where the value can be a field of any type (simple, list, or object). For example, you could create an "Author" object field where you could set their name, bio, and list of links.

![Object metadata](/uploads/metadata/object.png)

Accessing this page field in your template would look like this:

{% highlight liquid %}
{% raw %}
{{ author.name }}

<img src="{{ author.image }}" />

{{ author.bio }}
{% endraw %}
{% endhighlight %}

## Smart Field Names

To get the most out of Siteleaf, you should know about the different "Smart Field Names" you can enter for a metadata field to enable additional user-friendly functionality, like file pickers, autocompletion, and visual text editing.

### File fields

If you have metadata field with a name ending in `asset`, `assets`, `file`, `files`, `image`, or `images` Siteleaf will place a file picker button within the field, making it easy to quickly upload or select an existing upload.

For example you could take things to the next level by creating a "List" metadata field and give it a name of `assets` or `portfolio_images`. If you want to add assets with additional metadata (like maybe a caption), you could create a "List" metadata field and add "Object" fields to the list. Your object field could have names like `file` and `caption`. When you add a new item to the list, a new object with those same names will be added for you, making it easy to add multiple assets with the same structure.

### Collection fields

To create a field for "associated" documents, create a new field with a name of the singular or plural collection name. For example, if you have a post and want to have an autocomplete field for documents in your "People" collection, create a field with a name of `person` or `people`.

### Text editors

To create a field with markdown or visual text editing functionality (like the body text field), create a new field with a name ending in `body`, `description`, `excerpt`, `markdown`, `md`, or `text`.

**Note**: When you reference this field in your template, it won't automatically output in HTML. You can achieve this though using the [`markdownify` Liquid filter](http://jekyllrb.com/docs/templates/). For example:

{% highlight liquid %}
{% raw %}
{{ page.caption_markdown | markdownify }}
{% endraw %}
{% endhighlight %}

## Defining default fields

You can define defaults for all your content (or by collection) in your config file. [More information on setting defaults can be found in the Jekyll docs.](http://jekyllrb.com/docs/configuration/#front-matter-defaults)

## Further reading

- [Jekyll Frontmatter](https://jekyllrb.com/docs/frontmatter/)