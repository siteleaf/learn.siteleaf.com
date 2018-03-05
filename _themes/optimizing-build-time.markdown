---
title: Optimizing build time
date: 2016-03-24 12:15:00 -04:00
position: 8
---

As the size and complexity of your site grows, sometimes the amount of time Jekyll needs to build your site grows with it. There are several strategies you can use to keep your build times down.

### Excluding unnecessary files and folders

A lot of the time there will be files and folders in your site directory that aren't necessary for building the site. For example, if you're using Bower, the `bower_components` directory stores external packages that are not necessary for Jekyll to build the site.

You can exclude files and folders from the Jekyll build by adding `exclude` [list metadata](/content/metadata/#list) to your site. It works the similarly to a `.gitignore` file.

![Exclude files and folders](/uploads/optimization-exclude.png)

### Limiting large and nested `for` loops

`for` loops can make building your site very slow, especially if you have a lot of content. For example, if you have 1,000 posts, and on each post page you are showing a full archive of your posts, Jekyll will need to loop through your entire set of posts 1,000,000 times! Nesting multiple `for` loops inside each other can also significantly increase your site build times.

### Using incremental builds

When you're in development, you can have Jekyll only rebuild parts of the site that it needs to by using the `--incremental` flag:

{% highlight bash %}
jekyll serve --incremental
{% endhighlight %}

---

### Further Reading

- [13 steps to a faster Jekyll website](https://wiredcraft.com/blog/make-jekyll-fast/)