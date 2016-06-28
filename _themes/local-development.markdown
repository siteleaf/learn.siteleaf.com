---
title: Local development
date: 2015-10-31 20:03:00 -04:00
position: 4
---

Siteleaf uses Ruby and RubyGems, and you’ll need them installed to start developing your own themes locally. The [Ruby website](https://www.ruby-lang.org/en/documentation/installation/) describes how to install Ruby and RubyGems for various platforms. You’ll also need to install Bundler, a package manager for Ruby:

``` bash
$ gem install bundler
```

Once you have everything installed, we’ll go ahead and create a new project. Create a new directory on your machine (eg. `my-site`), and then create a new `Gemfile` within that directory.

The gems you include in the `Gemfile` and the method for sycning your site's content depends on your preferred development workflow. **Below are the two options available:**

### Option 1: GitHub Sync (suggested)

This is our suggested workflow for local development and eliminates the need for the Siteleaf Gem.

**[Learn how to develop your site locally using Jekyll and GitHub Sync](/themes/github-sync/)** &rarr;

### Option 2: Siteleaf Gem

**[Learn how to develop your site locally using Jekyll and the Siteleaf Gem](/themes/gem/)** &rarr;

---

### Further Reading

- [GitHub: Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-with-pages/)
- [Connecting GitHub and Siteleaf](http://www.siteleaf.com/blog/connecting-github/)