---
title: Gem-based Themes
date: 2016-09-20 00:00:00 -04:00
position: 10
---

Beginning with version 3.2, Jekyll introduced a [Gem-based theme system](https://jekyllrb.com/docs/themes/), which allows you to leverage community-maintained templates and styles to customize your site’s presentation. Jekyll themes package layouts, includes, and stylesheets in a way that can be overridden by your site’s content. It's a great way to maintain a separation of content and code, and makes it possible to share themes across multiple sites.

Sites on the free developer plan can make use of the new GitHub Pages-approved [Minima theme](https://github.com/jekyll/minima), while [all paid plans](https://www.siteleaf.com/plans) (including legacy and Personal plans) can take full advantage of custom themes. 

### Installing themes

Installation may vary depending on the theme, but typically involves two steps.

1) Add to or create a `Gemfile` for your site, and reference your theme. For example, we've added the [Minima](https://github.com/jekyll/minima) theme here:

```ruby
source 'https://rubygems.org'
gem 'jekyll'
gem 'minima'
```

2) Next, enable theme theme in your site's `_config.yml` file:


```yaml
theme: minima
```

You may need to follow additional instructions, so make sure to review the theme's documentation.

To test your site locally, install and build your site using `bundle exec`:

```
$ bundle install
$ bundle exec jekyll serve
```

When previewing or publishing your site within Siteleaf, themes defined in your `Gemfile` will be automatically installed.

#### Installing themes from Git repositories

Themes are installed from [RubyGems](https://rubygems.org) by default, but can also be installed from any public Git repository.

Here's how to install Minima from GitHub:

```ruby
gem 'minima', git: 'https://github.com/jekyll/minima.git'
```

You can use shortcuts for `:github`, `:gist`, and `:bitbucket`:

```ruby
gem 'minima', github: 'jekyll/minima'
```

You can also specify a particular `:ref`, `:branch`, or `:tag`:


```ruby
gem 'minima', github: 'jekyll/minima', tag: 'v1.2.0'
```

The Git repository must be publicly accessible for Siteleaf to access install your theme.
{: .warning}

#### Using third-party themes with GitHub Pages

To use a theme other than Minima with GitHub Pages, make sure to choose the "Compiled by Siteleaf" format in your hosting settings. With this option, Siteleaf will pre-compile your site before pushing it to GitHub.

---

### Further Reading

- [Jekyll: Themes](https://jekyllrb.com/docs/themes/)
- [GitHub: Supported themes](https://pages.github.com/themes/)
- [Bundler: Gemfile Guide](http://bundler.io/v1.13/gemfile.html)
- [Bundler: Gems from Git repositories](http://bundler.io/git.html)
