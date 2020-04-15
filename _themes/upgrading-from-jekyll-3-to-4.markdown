---
title: Upgrading from Jekyll 3.x to 4.x
date: 2020-04-15 11:24:00 -04:00
position: 11
---

Jekyll 4.x brings upon many improvements — most notably, faster build time. You can see a [full list of changes here](https://jekyllrb.com/news/2019/08/20/jekyll-4-0-0-released/).

While GitHub Pages is still pinned to [Jekyll 3.8.x](https://pages.github.com/versions/), it’s possible to start using Jekyll 4 today with a little help from Siteleaf.

This upgrade requires any [paid plan](https://www.siteleaf.com/plans) (i.e. Personal or higher).
{: .note}

### Updating your theme

First of all, make sure to review Jekyll’s guide on [Upgrading from 3.x to 4.x](https://jekyllrb.com/docs/upgrading/3-to-4/) to see if you need to make any changes to your theme. 

If you are using `post_url`, you no longer need to prepend `site.baseurl`:

{% raw %}
```diff
- {{ site.baseurl }}/{% post_url 2018-03-20-hello-world.markdown %}
+ {% post_url 2018-03-20-hello-world.markdown %}
```
{% endraw %}

### Updating your `Gemfile`

To start using Jekyll 4, you’ll need to update (or create) your `Gemfile` replacing references to `github-pages` like this:

```rb
source 'https://rubygems.org'

gem 'github-pages', group: :jekyll_plugins
```

With `jekyll` itself:

```rb
source 'https://rubygems.org'

gem 'jekyll', '~>4'
```

If you are using any of the plugins that come included with `github-pages` (like the popular [SEO](https://github.com/jekyll/jekyll-seo-tag) or [Sitemap](https://github.com/jekyll/jekyll-sitemap) plugin), you’ll need to reference those as well:

```rb
source 'https://rubygems.org'

gem 'jekyll', '~>4'

group :jekyll_plugins do
  gem 'jekyll-redirect-from'
  gem 'jekyll-sitemap'
  gem 'jekyll-feed'
  gem 'jekyll-paginate'
  gem 'jekyll-seo-tag'
end
```

Here’s a full list of plugins that GitHub Pages comes with: <https://pages.github.com/versions>

After making these changes make sure to run the following commands to ensure your site is working as expected:

```sh
$ bundle update
$ bundle exec jekyll serve
```

### Updating your `_config.yml`

Jekyll excludes `Gemfile` [by default](https://jekyllrb.com/docs/configuration/default/), so to ensure Siteleaf picks up these changes, we recommend updating your `_config.yml` to something like this:

```yml
exclude: ["Gemfile.lock", "node_modules"]
```

You can exclude additional files as needed, just ensure `Gemfile` is not being excluded.

### Updating your Hosting settings

If using GitHub Pages for hosting, you'll also need to update your Siteleaf [Hosting settings](/sites/hosting/) to use the `Compile by Siteleaf` option. This option is available on all paid plans, and will ensure your site is built by Siteleaf instead of GitHub Pages. When compiling with Siteleaf on our Team and higher plans, you can also use [custom plugins](/themes/jekyll-plugins/) or gems not supported by GitHub Pages.

No changes are required if using other hosting options like S3 or SFTP.