---
title: GitHub Sync
date: 2015-10-31 20:03:00 -04:00
position: 11
---

When working on your site, you'll want to keep your theme and content in sync. This is exactly what GitHub Sync was made for. Once GitHub Sync is enabled, every time you update your Siteleaf site or your [GitHub](https://github.com) repo, the changes will be synced between the two.

### Enable GitHub Sync

1. After creating a site, go to the **Sync** tab under **Settings**
2. Connect to GitHub
3. Choose a repo, and optionally a branch name. We generally recommend using the `master` branch for syncing source files, and if using GitHub Pages for hosting, the `gh-pages` branch in the same repo for published sites. However you may use two separate repos, or any configuration you wish.


Third-party application access needs to be turned **on** in order for Siteleaf to see your repositories. If you don't see a repository when you connect your GitHub account, go to the organization's settings and [enable third-party application access](https://help.github.com/articles/approving-third-party-applications-for-your-organization/).
{: .warning}

### Local development with GitHub Sync

1) Initialize or clone your GitHub repo locally to your machine

2) Create a file called `Gemfile` in your site's root folder on your machine and add the `jekyll` gem to your bundle. This will install Jekyll:

{% highlight ruby %}
source 'http://rubygems.org'
gem 'jekyll'
{% endhighlight %}

3) Install the bundle:

{% highlight bash %}
$ gem install bundler
$ bundle install
{% endhighlight %}

4) Start the Jekyll server:

{% highlight bash %}
$ bundle exec jekyll serve
{% endhighlight %}

Now visit [localhost:4000](http://localhost:4000) to see your site!

5) Make some changes then sync them

If pushing and pulling changes from the command line isn't your thing, you can download [GitHub Desktop](https://desktop.github.com/) to do it through a user-friendly interface.
{: .tip}

Push local changes to GitHub and Siteleaf:

{% highlight bash %}
$ git add .
$ git commit -m "Describe your changes here"
$ git push
{% endhighlight %}

Or pull the latest changes from GitHub and Siteleaf:

{% highlight bash %}
$ git pull
{% endhighlight %}

### FAQ

##### Why is Siteleaf changing my YAML formatting after I make a commit?

In some cases, you might notice a commit from Siteleaf directly after you commit a change to GitHub. This typically arises when your YAML formatting is inconsistent with the output of our YAML parser. Jekyll uses [SafeYAML](https://github.com/dtao/safe_yaml) to parse front matter and we use the same. These changes shouldn't affect your final output when your front matter is rendered.

##### What happens when I setup syncing on an existing Siteleaf site?

During initial sync, all current files in Siteleaf will be saved into your repo. If you do not wish to merge or overwrite your GitHub content, you can import your repo as a new site. If you are unsure, be safe and back up your content.

##### What happens when I change my sync settings repo or branch?

Any files edited in Siteleaf since your site was last synced will be saved into the new repo or branch. All files already synced with the _old_ repo or branch will be replaced or removed from Siteleaf with the contents of the _new_ repo or branch. If you do not wish to merge or replace your content, you can import your repo as a new site. If you are unsure, be safe and back up your content.

---

### Further Reading

- [Connecting GitHub and Siteleaf](http://www.siteleaf.com/blog/connecting-github/)