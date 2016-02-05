---
title: Local development
date: 2015-10-31 20:03:00 -04:00
position: 1
weight: 2
layout: page
---

Siteleaf uses Ruby and RubyGems, and you’ll need them installed to start developing your own themes. The [Ruby website](https://www.ruby-lang.org/en/documentation/installation/) describes how to install Ruby and RubyGems for various platforms. You’ll also need to install Bundler, a package manager for Ruby:
 
```
$ gem install bundler
```

Once you have everything installed, we’ll go ahead and create a new project. Create a new directory, and we’ll make a new `Gemfile`:

{% highlight ruby %}
source 'https://rubygems.org'

gem 'siteleaf', '2.0.0.pre.beta7'
gem 'jekyll'
{% endhighlight %}

Once you run `bundle install`, authorize your Siteleaf account:

```
$ bundle exec siteleaf auth
```

At this point you have everything you need to get going. Go ahead and run:

```
$ bundle exec jekyll serve
```

Now go and visit [localhost:4000](http://localhost:4000) to see your site!

## Creating a new site

```
$ siteleaf new yoursite.com
```

This will create a new theme folder called `yoursite.com` in the directory where you ran this command. It will also create the site for you in your Siteleaf account. If you prefer not to create a new directory, run `siteleaf new yoursite.com .` instead.

## Using an existing site

In a new directory, configure your site:

```
$ siteleaf config yoursite.com
```

You can then pull the Jekyll configuration, content, and current theme:

```
$ siteleaf pull
```

At this point, it's probably a good idea to add a `Gemfile` (see above).

## Further Reading

- [GitHub: Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-with-pages/)