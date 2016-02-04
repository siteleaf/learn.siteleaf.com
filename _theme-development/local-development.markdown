---
title: Local development
date: 2015-10-31 20:03:00 -04:00
layout: page
weight: 2
---

Siteleaf is incredibly easy to develop for. With GitHub Sync, local development is even easier.

# Requirements

Siteleaf and Jekyll both run using [Ruby](http://ruby-lang.org) and you’ll need it installed. The Ruby website [lists various ways of installing Ruby and RubyGems](https://www.ruby-lang.org/en/documentation/installation).

After that’s installed, head into your terminal and install Bundler.

{% highlight plain %}
$ gem install bundler
{% endhighlight %}

Installing Bundler will allow you to use `Gemfile`s. Typically, a theme will use a `Gemfile` to dictate which RubyGems it uses. In most cases, your `Gemfile` will look something like this:

{% highlight ruby %}
source 'https://rubygems.org'

gem 'jekyll'
gem 'siteleaf'
{% endhighlight %}

Now, you can just use Bundler to install your dependencies:

{% highlight plain %}
$ bundle install
{% endhighlight %}

# Running your site locally

Using Jekyll, you can preview your site locally. Just run the built-in server:

{% highlight plain %}
$ bundle exec jekyll serve
{% endhighlight %}

Now you can head on over to [localhost:3000](http://localhost:3000) and see your site.

## Further Reading

- [GitHub: Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-with-pages/)
