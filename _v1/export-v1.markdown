---
title: Exporting a legacy site
date: 2015-10-31 20:03:00 -04:00
position: 2
layout: page
---

You can export your v1 site to Jekyll-ready format using the [Siteleaf Gem](https://github.com/siteleaf/siteleaf-gem).

Included in the export will be all your pages, posts, site metadata, and uploaded assets. It will not include theme files.

1) First, make sure to update to the latest Siteleaf Gem (1.0.3 or higher). If you need to update your Gem, run:

{% highlight plain %}
$ gem update siteleaf
{% endhighlight %}

2) If you do not already have your v1 site configured, change your site's directory and run config (skip if already configured):

{% highlight plain %}
$ cd /path/to/yoursite
$ siteleaf config yoursite.com
{% endhighlight %}

3) Now you can export your site:

{% highlight plain %}
$ siteleaf export
{% endhighlight %}

4) Finally, you will be asked to enter your site's main posts path. This should be the slug where we can find your site's posts. For example, if your site uses `/blog/hello-world`, you would enter `blog`. Press enter to accept the default name `posts`.

{% highlight plain %}
Enter your main posts path (default "posts"):
{% endhighlight %}

Your site will be exported to a folder called `export` within the current directory.

**Tip**: You can also export your site to a directory of your choice by adding an argument to the export command:

{% highlight plain %}
$ siteleaf export mydir
{% endhighlight %}

In this case your export will be saved a folder called `mydir`.
