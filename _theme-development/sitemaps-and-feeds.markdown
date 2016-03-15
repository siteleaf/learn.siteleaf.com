---
title: Sitemaps and Feeds
date: 2015-10-31 20:03:00 -04:00
position: 7
layout: page
---

## Sitemaps

If you have a large site, you may want to have a sitemap. Adding a sitemap is easy — and it's even easier if you use GitHub Pages.

### GitHub Pages

If you're using GitHub Pages as your host, head into your Site Settings and add a new [list metadata](/managing-content/metadata/#list) called `gems`, with an entry called `jekyll-sitemap`. Save, publish, and you're done! GitHub Pages will automatically see you'd like to use the [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap) Gem and add a sitemap.

### Other Hosts

With other hosts, you'll need to make the sitemap yourself. Create a new file on the root of your theme called `sitemap.xml` and add the following:

~~~ xml
{% raw %}
---
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  {% capture site_url %}{% if site.url %}{{ site.url | append: site.baseurl }}{% else %}{{ site.github.url }}{% endif %}{% endcapture %}
  {% for post in site.posts %}{% unless post.sitemap == false %}
  <url>
    <loc>{{ post.url | prepend: site_url | uri_escape }}</loc>
    {% if post.last_modified_at %}
    <lastmod>{{ post.last_modified_at | date_to_xmlschema }}</lastmod>
    {% else %}
    <lastmod>{{ post.date | date_to_xmlschema }}</lastmod>
    {% endif %}
  </url>
  {% endunless %}{% endfor %}
  {% for page in site.html_pages %}{% unless page.sitemap == false %}
  <url>
    <loc>{{ page.url | replace:'/index.html','/' | prepend: site_url | uri_escape }}</loc>
    {% if page.last_modified_at %}
    <lastmod>{{ page.last_modified_at | date_to_xmlschema }}</lastmod>
    {% endif %}
  </url>
  {% endunless %}{% endfor %}
  {% for collection in site.collections %}{% unless collection.last.output == false or collection.output == false or collection.label == 'posts' %}
  {% for doc in collection.last.docs %}{% unless doc.sitemap == false %}
  <url>
    <loc>{{ doc.url | replace:'/index.html','/' | prepend: site_url | uri_escape }}</loc>
    {% if doc.last_modified_at %}
    <lastmod>{{ doc.last_modified_at | date_to_xmlschema }}</lastmod>
    {% endif %}
  </url>
  {% endunless %}{% endfor %}
  {% for doc in collection.docs %}{% unless doc.sitemap == false %}
    <url>
      <loc>{{ doc.url | replace:'/index.html','/' | prepend: site_url | uri_escape }}</loc>
      {% if doc.last_modified_at %}
      <lastmod>{{ doc.last_modified_at | date_to_xmlschema }}</lastmod>
      {% endif %}
    </url>
  {% endunless %}{% endfor %}
  {% endunless %}{% endfor %}
  {% for file in site.html_files %}
  <url>
    <loc>{{ file.path | prepend: site_url | uri_escape }}</loc>
    <lastmod>{{ file.modified_time | date_to_xmlschema }}</lastmod>
  </url>
  {% endfor %}
</urlset>
{% endraw %}
~~~

## Feeds

Adding an Atom or RSS feed is similar to adding a sitemap.

### GitHub Pages

If you're using GitHub Pages as your host, head into your Site Settings and add a new [list metadata](/managing-content/metadata/#list) called `gems`, with an entry called `jekyll-rss`. Save, publish, and you're done! GitHub Pages will automatically see you'd like to use the [jekyll-feed](https://github.com/jekyll/jekyll-feed) Gem and add an Atom feed.

### Other Hosts

With other hosts, you'll need to make the feed yourself. Create a new file on the root of your theme called `feed.xml` (or whatever you'd like to call your feed) and add the following:

~~~ xml
{% raw %}
---
---
<?xml version="1.0" encoding="utf-8"?>
{% if site.url %}
  {% assign url_base = site.url | append: site.baseurl %}
{% else %}
  {% assign url_base = site.github.url %}
{% endif %}
<feed xmlns="http://www.w3.org/2005/Atom">
  <generator uri="http://jekyllrb.com" version="{{ jekyll.version }}">Jekyll</generator>
  <link href="{{ page.url | prepend: url_base }}" rel="self" type="application/atom+xml" />
  <link href="{{ url_base }}/" rel="alternate" type="text/html" />
  <updated>{{ site.time | date_to_xmlschema }}</updated>
  <id>{{ url_base | xml_escape }}/</id>

  {% if site.title %}
    <title>{{ site.title | xml_escape }}</title>
  {% elsif site.name %}
    <title>{{ site.name | xml_escape }}</title>
  {% endif %}

  {% if site.description %}
    <subtitle>{{ site.description | xml_escape }}</subtitle>
  {% endif %}

  {% if site.author %}
    <author>
      {% if site.author.name %}
        <name>{{ site.author.name | xml_escape }}</name>
      {% else %}
        <name>{{ site.author | xml_escape }}</name>
      {% endif %}
      {% if site.author.email %}
        <email>{{ site.author.email | xml_escape }}</email>
      {% endif %}
      {% if site.author.uri %}
        <uri>{{ site.author.uri | xml_escape }}</uri>
      {% endif %}
    </author>
  {% endif %}

  {% for post in site.posts limit: 10 %}
    <entry>
      <title>{{ post.title | markdownify | strip_html | replace: '\n', ' ' | strip | xml_escape }}</title>
      <link href="{{ post.url | prepend: url_base }}" rel="alternate" type="text/html" title="{{ post.title | xml_escape }}" />
      <published>{{ post.date | date_to_xmlschema }}</published>
      {% if post.last_modified_at %}
        <updated>{{ post.last_modified_at | date_to_xmlschema }}</updated>
      {% else %}
        <updated>{{ post.date | date_to_xmlschema }}</updated>
      {% endif %}

      <id>{{ post.id | prepend: url_base | xml_escape }}</id>
      <content type="html" xml:base="{{ post.url | prepend: url_base | xml_escape }}">{{ post.content | strip | xml_escape }}</content>

      {% if post.author %}
        <author>
          {% if post.author.name %}
            <name>{{ post.author.name | xml_escape }}</name>
          {% else %}
            <name>{{ post.author | xml_escape }}</name>
          {% endif %}
          {% if post.author.email %}
            <email>{{ post.author.email | xml_escape }}</email>
          {% endif %}
          {% if post.author.uri %}
            <uri>{{ post.author.uri | xml_escape }}</uri>
          {% endif %}
        </author>
      {% endif %}

      {% if post.category %}
        <category term="{{ post.category | xml_escape }}" />
      {% endif %}

      {% for tag in post.tags %}
        <category term="{{ tag | xml_escape }}" />
      {% endfor %}

      {% if post.excerpt and post.excerpt != empty %}
        <summary>{{ post.excerpt | strip_html | replace: '\n', ' ' | strip | xml_escape }}</summary>
      {% endif %}
    </entry>
  {% endfor %}
</feed>
{% endraw %}
~~~
