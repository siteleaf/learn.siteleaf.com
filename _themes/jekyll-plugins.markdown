---
title: Jekyll Plugins
date: 2016-09-20 00:00:00 -04:00
position: 9
---

Jekyll and Siteleaf support a variety of [plugins](https://jekyllrb.com/docs/plugins/) to extend core functionality, from [CoffeeScript conversion](https://github.com/jekyll/jekyll-coffeescript) to [embeddable GitHub Gists](https://github.com/jekyll/jekyll-gist). Depending on your site's plan, you can take advantage of [whitelisted](#whitelisted-plugins) or [third-party plugins](#third-party-plugins).

Third-party or custom plugins are supported for sites our new [Team, Business, and Enterprise plans](https://www.siteleaf.com/plans). For all other plans, including legacy or the free developer plan, your site can use whitelisted plugins. These whitelisted plugins are also supported by GitHub Pages, so your site will render as expected whether compiled by Siteleaf or GitHub.

### Whitelisted plugins

<ul class="supported-plugins"></ul>

#### Using the GitHub Pages gem

You can install Jekyll and all whitelisted plugins by using the [`github-pages`](https://github.com/github/pages-gem) gem:

{% highlight ruby %}
source 'http://rubygems.org'
gem 'github-pages', group: :jekyll_plugins
{% endhighlight %}

If you run into the following error, you will need to add a `repository: username/repo-name` key to your `_config.yml` file:

> Liquid Exception: No repo name found. Specify using PAGES_REPO_NWO environment variables, 'repository' in your configuration, or set up an 'origin' git remote pointing to your github.com repository.

### Third-party plugins

Siteleaf will look for an optional `Gemfile` and install any custom plugins prior to building.

If you're writing your own plugins, you can also include custom Ruby code in the `_plugins` directory as outlined in the [Jekyll docs](https://jekyllrb.com/docs/plugins/).

### Installing plugins

Installation may vary depending on the plugin, but typically involves two steps.

1) Add to or create a `Gemfile` for your site, and reference any plugins you wish to use within the `:jekyll_plugins` group. For example, we've added the plugin [`jekyll-feed`](https://github.com/jekyll/jekyll-feed) here:

```ruby
source 'https://rubygems.org'
gem 'jekyll'
group :jekyll_plugins do
  gem 'jekyll-feed'
end
```

2) Next, enable your plugins within the `gems` array in your site's `_config.yml` file:


```yaml
gems:
- jekyll-feed
```

You may need to follow additional instructions, so make sure to review the plugin's documentation.

To test your site locally, install and build your site using `bundle exec`:

```
$ bundle install
$ bundle exec jekyll serve
```

When previewing or publishing your site within Siteleaf, plugins defined in your `Gemfile` will be automatically installed.

#### Gem versioning

`Gemfile.lock` is ignored to avoid unintentional version locking. If you require a specific version of Jekyll or a plugin, specify it in your `Gemfile` instead (in most cases you shouldn't need to do this):

```ruby
source 'https://rubygems.org'
gem 'jekyll', '~>3.2.1'
group :jekyll_plugins do
  gem 'jekyll-feed', '>=0.7.0'
end
```

Gems can also be installed from public Git or GitHub repositories:

```ruby
gem 'minima', github: 'jekyll/jekyll-feed', tag: 'v0.7.0'
```

#### Using third-party plugins with GitHub Pages

To use non-whitelisted plugins with GitHub Pages, make sure to choose the "Compiled by Siteleaf" format in your hosting settings. With this option, Siteleaf will pre-compile your site before pushing it to GitHub.

---

### Further Reading

- [Jekyll: Plugins](https://jekyllrb.com/docs/plugins/)
- [Bundler: Gemfile Guide](http://bundler.io/v1.13/gemfile.html)
- [Bundler: Gems from Git repositories](http://bundler.io/git.html)
