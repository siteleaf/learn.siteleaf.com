---
title: GitHub Sync
date: 2015-10-31 20:03:00 -04:00
weight: 7
layout: page
---

When working on your site, you'll want to keep your theme and content in sync. This is exactly what GitHub Sync was made for. Once GitHub Sync is enabled, every time you update your Siteleaf site or your [GitHub](https://github.com) repo, the changes will be synced between the two.

## Enable GitHub Sync

1. After creating a site, go to the **Sync** tab under **Settings**
2. Connect to GitHub
3. Choose a repo, and optionally a branch name. We generally recommend using the `master` branch for syncing source files, and if using GitHub Pages for hosting, the `gh-pages` branch in the same repo for published sites. However you may use two separate repos, or any configuration you wish.

## Local development with GitHub Sync

1) Initialize or clone your GitHub repo locally to your machine

2) Create a file called `Gemfile` in your site's root folder on your machine and add the Jekyll gem to your bundle:

{% highlight ruby %}
source 'http://rubygems.org'
gem 'jekyll'
{% endhighlight %}

3) Install the bundle:

{% highlight plain %}
$ gem install bundler
$ bundle install
{% endhighlight %}

4) Start the Jekyll server:

{% highlight plain %}
$ bundle exec jekyll serve
{% endhighlight %}

Now visit [localhost:4000](http://localhost:4000) to see your site!

5) Make some changes then sync them

If pushing and pulling changes from the command line isn't your thing, you can download [GitHub Desktop](https://desktop.github.com/) to do it through a user-friendly interface.
{: .note__info.ss-info}

Push local changes to GitHub and Siteleaf:

{% highlight plain %}
$ git add .
$ git commit -m "Describe your changes here"
$ git push
{% endhighlight %}

Or pull the latest changes from GitHub and Siteleaf:

{% highlight plain %}
$ git pull
{% endhighlight %}
