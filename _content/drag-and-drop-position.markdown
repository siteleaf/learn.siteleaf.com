---
title: Drag and drop position
date: 2016-09-27 13:30:00 -04:00
position: 7
---

In the Siteleaf UI, you can drag and drop pages and documents to change their sort position. Siteleaf will then save a numeric `position` field to each page/document's front matter for you, so you can then sort the items in your template. 

For example, here's how you'd sort your "Artists" documents by their position in the Siteleaf UI:

{% raw %}
```
{% assign sorted_artists = site.artists | sort:"position" %}
{% for artist in sorted_artists %}
  <li>{{ artist.title }}</li>
{% endfor %}
```
{% endraw %}

### Handling new or unsorted documents

Documents added outside of Siteleaf may not have an explicit `position` set (i.e. `null`). By default, these documents will be positioned first when using Jekyll's [sort filter](https://jekyllrb.com/docs/templates/). If you prefer to position these documents last, you can add an optional `"last"` parameter to your sort:

{% raw %}
```
{% assign sorted_artists = site.artists | sort:"position", "last" %}
```
{% endraw %}