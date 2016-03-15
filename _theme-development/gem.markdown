---
title: Siteleaf Gem
date: 2015-10-31 20:03:00 -04:00
position: 3
layout: page
---

We recommend using [GitHub sync](/theme-development/github-sync/) for local development, but you can still use the Gem if that's your preferred workflow.
{: .note__info.ss-info}

## Differences between v1 and v2 gems

The v1 gem is not compatible with v2 sites (and vice versa), so we recommend using a [Gemfile](http://bundler.io/gemfile.html) to allow both versions to be installed.

**Important:** When using `push`/`pull` in v2, both theme and content files are included. Always make sure to do a `pull` first to avoid overwriting your Siteleaf content on `push`. Your local directory must have a `_config.yml` in order to push.

## Local development using the Siteleaf gem

1) Create a file called `Gemfile` in your site's root folder and add the v2 beta gem and Jekyll to your bundle:

{% highlight ruby %}
source 'http://rubygems.org'

gem 'siteleaf', '2.0.0.pre.beta9'
gem 'jekyll'
{% endhighlight %}

<small>For help with Bundler or Gemfiles, please see: <http://bundler.io/gemfile.html></small>

2) Install the bundle:

{% highlight plain %}
$ gem install bundler
$ bundle install
{% endhighlight %}

3) Authorize your Siteleaf account:

{% highlight plain %}
$ bundle exec siteleaf auth
{% endhighlight %}

4) Create or connect to a Siteleaf v2 site:

**To create a new Siteleaf site:**

{% highlight plain %}
$ bundle exec siteleaf new yoursite.com
{% endhighlight %}

This will create a new theme folder called `yoursite.com` in the directory where you ran this command. It will also create the site for you in your Siteleaf account. If you prefer not to create a new directory, run `bundle exec siteleaf new yoursite.com .` instead.

**To use an existing Siteleaf site:**

{% highlight plain %}
$ bundle exec siteleaf config yoursite.com
{% endhighlight %}

You can then pull the Jekyll configuration, content, and current theme:

{% highlight plain %}
$ bundle exec siteleaf pull
{% endhighlight %}

5) Start the Jekyll server:

{% highlight plain %}
$ bundle exec jekyll serve
{% endhighlight %}

Now visit [localhost:4000](http://localhost:4000) to see your site!

5) Push your content and theme to Siteleaf:

{% highlight plain %}
$ bundle exec siteleaf push
{% endhighlight %}

## Backing up your site

Creating a full backup of your v2 site is simple. Just copy your `Gemfile` to an empty directory and do a `pull`:

{% highlight plain %}
cp Gemfile /path/to/backup/
cd /path/to/backup/
bundle install
bundle exec siteleaf config yoursite.com
bundle exec siteleaf pull
{% endhighlight %}

This will include your entire site, including theme files, assets, content, and site metadata.