---
title: Exporting a legacy site
date: 2015-10-31 20:03:00 -04:00
position: 1
---

You can export your v1 site to Jekyll-ready format using the [Siteleaf Gem](https://github.com/siteleaf/siteleaf-gem).

Included in the export will be all your pages, posts, site metadata, and uploaded assets. It will not include theme files.

1) First, make sure to update to the latest Siteleaf v1 Gem (1.0.8 or higher, but below 2.0.0). If you need to update your Gem, run:

{% highlight bash %}
$ gem install siteleaf -v '~>1'
{% endhighlight %}

To confirm, make sure you have the latest v1 Gem installed:

{% highlight bash %}
$ siteleaf -v
1.0.7
{% endhighlight %}

If you have v2 installed, you may want to use a [Gemfile](/themes/gem/) to support multiple versions.

2) If you do not already have your v1 site configured, change your site's directory and run `config`, where `yoursite.com` is the domain name as it appears under your site's Settings (skip if already configured):

{% highlight bash %}
$ cd /path/to/yoursite
$ siteleaf config yoursite.com
{% endhighlight %}

3) Now you can export your site:

{% highlight bash %}
$ siteleaf export
{% endhighlight %}

4) Finally, you will be asked to enter your site's main posts path. This should be the slug where we can find your site's posts. For example, if your site uses `/blog/hello-world`, you would enter `blog`. Press enter to accept the default name `posts`.

{% highlight bash %}
Enter your main posts path (default "posts"):
{% endhighlight %}

Your site will be exported to a folder called `export` within the current directory.

You can also export your site to a directory of your choice by adding an argument to the export command:
{: .tip}

{% highlight bash %}
$ siteleaf export mydir
{% endhighlight %}

In this case your export will be saved to a folder called `mydir`.
