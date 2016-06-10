---
title: Hosting
date: 2015-12-17 08:02:00 -05:00
position: 1
---

### GitHub Pages

To publish to [GitHub Pages](https://pages.github.com/), first connect your GitHub account to Siteleaf. You can choose the repository you're using, domain (by default it will use `username.github.io/repo`), and branch (`gh-pages` by default).

The repository you use must already exist. To make things easier, we suggest that you put your theme files on the `master` branch and the published site on the `gh-pages` branch.

For help with GitHub Pages, check out [their help page](https://help.github.com/categories/github-pages-basics/).

#### Machine users

If you're uncomfortable with giving Siteleaf permission to all of your GitHub repositories, you can avoid this by creating a [machine user](https://developer.github.com/guides/managing-deploy-keys/#machine-users). This is a new GitHub user that you create that will have access to only the repositories you want Siteleaf to also have access to. When you connect GitHub to Siteleaf, use this user instead, and Siteleaf will only have access to those repositories.

#### Configuring GitHub Pages

There are a few pieces of site metadata that you can override:

{% highlight yaml %}
github: [metadata]
kramdown:
  input: GFM
  hard_wrap: false
gems:
  - jekyll-coffeescript
  - jekyll-paginate
{% endhighlight %}

There are also a few settings that you _cannot_ override:

{% highlight yaml %}
lsi: false
safe: true
source: [your repo's top level directory]
incremental: false
highlighter: rouge
gist:
  noscript: false
{% endhighlight %}

### Amazon S3

To publish to [Amazon S3](https://aws.amazon.com/s3/), you'll first need your access key and secret key. You can either use existing keys or [create an Identity and Access Management user](https://console.aws.amazon.com/iam/home#home).

You can use an existing bucket, or create a new one. Make sure you take note of the region!

For more information on Amazon S3, take a look at [their documentation](https://aws.amazon.com/documentation/s3/).

### Rackspace Cloud Files

To publish to [Rackspace Cloud Files](https://www.rackspace.com/cloud/files), you'll need your Rackspace username and an API key, which can be found in your Account Settings. You can use an existing container, just make sure you know which region it is in.

For more help with Rackspace Cloud Files, see [their documentation](https://www.rackspace.com/knowledge_center/getting-started/cloud-files).

### FTP or SFTP

If you'd like to use your own server, you can use FTP/SFTP. Make sure you know the host, port, username, and password, as well as the path you'd like to compile to.
