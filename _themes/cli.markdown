---
title: Siteleaf CLI
date: 2015-10-31 20:03:00 -04:00
position: 12
redirect_from: "/themes/gem/"
---

We recommend using [GitHub Sync](/themes/github-sync/) for local development, but you can use the Siteleaf command line interface (CLI) if that's your preferred workflow.
{: .warning}

The Siteleaf CLI ships as an open source Ruby gem. To fork and contribute see: <https://github.com/siteleaf/siteleaf-gem>

## Local development using the Siteleaf CLI

1) Create a file called `Gemfile` in your site's root folder and add the Siteleaf gem and Jekyll to your bundle:

{% highlight ruby %}
source 'http://rubygems.org'

gem 'jekyll'

group :development do
  gem 'siteleaf', '~>2'
end
{% endhighlight %}

<small>For help with Bundler or Gemfiles, please see: <http://bundler.io/gemfile.html></small>

2) Install the bundle:

{% highlight bash %}
$ gem install bundler
$ bundle install
{% endhighlight %}

3) Authorize your Siteleaf account:

{% highlight bash %}
$ bundle exec siteleaf auth
{% endhighlight %}

4) Create or connect to a Siteleaf site:

**To create a new Siteleaf site:**

{% highlight bash %}
$ bundle exec siteleaf new yoursite.com
{% endhighlight %}

This will create a new theme folder called `yoursite.com` in the directory where you ran this command. It will also create the site for you in your Siteleaf account. If you prefer not to create a new directory, run `bundle exec siteleaf new yoursite.com .` instead.

**To use an existing Siteleaf site:**

{% highlight bash %}
$ bundle exec siteleaf config yoursite.com
{% endhighlight %}

You can then pull the Jekyll configuration, content, and current theme:

{% highlight bash %}
$ bundle exec siteleaf pull
{% endhighlight %}

5) Start the Jekyll server:

{% highlight bash %}
$ bundle exec jekyll serve
{% endhighlight %}

Now visit [localhost:4000](http://localhost:4000) to see your site!

5) Push your content and theme to Siteleaf:

{% highlight bash %}
$ bundle exec siteleaf push
{% endhighlight %}

**Important:** When using `push`/`pull` in v2, both theme and content files are included. Always make sure to do a `pull` first to avoid overwriting your Siteleaf content on `push`. Your local directory must have a `_config.yml` in order to push.

## Backing up your site

Creating a full backup of your site is simple. Just copy your `Gemfile` to an empty directory and do a `pull`:

{% highlight bash %}
cp Gemfile /path/to/backup/
cd /path/to/backup/
bundle install
bundle exec siteleaf config yoursite.com
bundle exec siteleaf pull
{% endhighlight %}

This will include your entire site, including theme files, assets, content, and site metadata.