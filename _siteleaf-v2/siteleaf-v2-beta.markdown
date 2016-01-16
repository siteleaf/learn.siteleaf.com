---
title: Version 2 Beta
date: 2015-10-31 20:03:00 -04:00
weight: 2
layout: page
---

## Jekyll

All Siteleaf sites are Jekyll 3.0 compatible, so all [Jekyll documentation](http://jekyllrb.com/docs/home/) can be applied to your Siteleaf site.

### Local development

1) Install Jekyll:
```
gem install jekyll
```

<small>For help with Jekyll installation, please see: <http://jekyllrb.com/docs/installation/></small>

2) Start a local server:
```
jekyll serve
```

## Syncing with GitHub

Siteleaf now automatically syncs theme and content changes directly with GitHub, with no need to install a Siteleaf gem and manually push/pull changes. To enable sync:

1) After creating a v2 site, go to the **Sync** tab under **Settings**:

![](http://drp.mk/i/FvgLjssgFN.png)

2) Choose a repo, and optionally a branch name.

<small>We generally recommend using the `master` branch for syncing source files, and if using GitHub Pages for hosting, the `gh-pages` branch in the same repo for published sites. However you may use two separate repos, or any configuration you wish.</small>

3) Commit changes to this branch using your favorite Git tools, and Siteleaf will automatically pick up on any changes using webhooks.

<small>Note: While we recommend GitHub sync for a better workflow, a [v2 beta gem](/help/v2/gem) is also available.</small>

## Backing up your site

To avoid any accidental data loss during beta testing, we strongly encourage you to back up your v2 sites. You can easily back up your site by forking or cloning your GitHub repo, or create an [offline backup](/help/v2/gem#backup) using the v2 beta gem.

## Further Reading

- [Export your v1 site to Jekyll-ready format](/getting-started/export-v1)
- [Using the v2 beta gem (optional)](/getting-started/v2-gem)
- [Improved metadata in V2](/getting-started/improved-metadata-in-v2)
- [Jekyll Docs](http://jekyllrb.com/docs/home/)
- [Jekyll Help](https://talk.jekyllrb.com)
- [Sass support in Jekyll](http://jekyllrb.com/docs/assets/#sassscss)
- [Liquid for Designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
- [Liquid syntax highlighting for Sublime Text 2](https://bitbucket.org/granteagon/shopify-liquid/src/ccb7a8040615/README.rst)
- [Liquid Wiki](http://wiki.shopify.com/Liquid)
- [GitHub Help](https://help.github.com)