---
title: Siteleaf for Developers
date: 2016-05-30 23:00:00 -04:00
position: 2
---

Siteleaf aims to be a content management system that bridges the gap between easy to develop for and easy to use for clients. Static site generators are great for developers: they're wicked fast, work easily with version control, and are much easier to set up compared to other content management systems. But when it comes to people that are less tech-savvy, static site generators are difficult to use. They often require knowledge of the command line, and text editors aren’t always the easiest programs to manage content in.

Siteleaf gives you the ability to enjoy the benefits of a static site generator, along with an easy to use interface for managing your site's content. 

**We are fully integrated with [Jekyll](http://jekyllrb.com)**, a popular static site generator that GitHub uses to power over half a million websites. You can enjoy the benefits of a large open source community — there are thousands of open source Jekyll themes, or you can build your own.

### Templating

Siteleaf templates use [Liquid](https://shopify.github.io/liquid/), a template language created by Shopify. Liquid makes it incredibly easy to create themes.

{% highlight html %}
{% raw %}
<!DOCTYPE html>
<html>

  {% include head.html %}

  <body>

    {% include header.html %}

    <div class="page-content">
      <div class="wrapper">
        {{ content }}
      </div>
    </div>

    {% include footer.html %}

  </body>

</html>
{% endraw %}
{% endhighlight %}

### GitHub Sync

Siteleaf also offers [GitHub Sync](/themes/github-sync/). With this enabled, any changes that are made to the site's content on Siteleaf are committed and pushed to your site's GitHub repository. Conversely, if you commit changes to the site on GitHub, those changes will be reflected on Siteleaf.

### Hosting

[Hosting](/sites/hosting/) is incredibly easy to set up with Siteleaf. You can choose between pushing straight to [GitHub Pages](/sites/hosting#github-pages), [Amazon S3](/sites/hosting#amazon-s3), [Rackspace Cloud Files](/sites/hosting#rackspace-cloud-files), or to your own server with [FTP/SFTP](/sites/hosting#ftp-or-sftp).

### Plugins

Jekyll and GitHub Pages support a variety of external [plugins](/themes/jekyll-plugins/). Siteleaf supports the same subset of plugins that GitHub supports.

### API

We also have a robust [API](/api) that allows you to integrate Siteleaf with your own site or app. With the API, you can do everything the interface can do, from publishing sites to editing content.
