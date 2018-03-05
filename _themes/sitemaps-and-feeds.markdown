---
title: Sitemaps and Feeds
date: 2015-10-31 20:03:00 -04:00
position: 7
---

### Sitemaps

If you have a large site, you may want to have a sitemap.

To enable sitemaps, head into your Site Settings and add a new [list metadata](/content/metadata/#list) called `gems`, with an entry called `jekyll-sitemap`. Save, publish, and you're done! This will automatically create a `/sitemap.xml` for you.

![Enabling sitemaps](/uploads/jekyll-sitemap.png)

For more info, view the [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap) docs.

### Feeds

Adding an Atom or RSS feed is similar to adding a sitemap.

Head into your Site Settings and add a new [list metadata](/content/metadata/#list) called `gems`, with an entry called `jekyll-feed`. Save, publish, and you're done! This will automatically create a `feed.xml` file for you.

For more info, view the [jekyll-feed](https://github.com/jekyll/jekyll-feed) docs.