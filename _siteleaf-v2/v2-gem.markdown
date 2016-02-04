---
title: Using the v2 Gem
date: 2015-10-31 20:03:00 -04:00
weight: 3
layout: page
---

**We recommend using [GitHub sync](/theme-development/github-sync/) with v2, but you can still use the Gem if that's your preferred workflow.**

The v1 gem is not compatible with v2 sites (and vice versa), so we recommend using a [Gemfile](http://bundler.io/gemfile.html) to allow both versions to be installed.

**Important note:** when using push/pull in v2, both theme and content files are included. Always make sure to do a `pull` first to avoid overwriting your Siteleaf content on `push`. Your local directory must have a `_config.yml` in order to push.

1) Create a file called `Gemfile` in your site's root folder and add the v2 beta gem to your bundle:

{% highlight ruby %}
source 'http://rubygems.org'

gem 'siteleaf', github: 'siteleaf/siteleaf-gem', branch: '2.0.0.pre'
{% endhighlight %}

<small>For help with Bundler or Gemfiles, please see: <http://bundler.io/gemfile.html></small>

2) Install the bundle:

{% highlight plain %}
$ gem install bundler
$ bundle install
{% endhighlight %}

3) Configure your v2 site:

{% highlight plain %}
$ bundle exec siteleaf config yoursite.com
{% endhighlight %}

4) Pull your content and theme from Siteleaf:

{% highlight plain %}
$ bundle exec siteleaf pull
{% endhighlight %}


5) Push your content and theme to Siteleaf:

{% highlight plain %}
$ bundle exec siteleaf push
{% endhighlight %}

## <a name="backup"></a>Backing up your site

Creating a full backup of your v2 site is simple. Just copy your `Gemfile` to an empty directory and do a `pull`:

{% highlight plain %}
$ cp Gemfile /path/to/backup/
$ cd /path/to/backup/
$ bundle install
$ bundle exec siteleaf config yoursite.com
$ bundle exec siteleaf pull
{% endhighlight %}

This will include your entire site, including theme files, assets, content, and site metadata.
