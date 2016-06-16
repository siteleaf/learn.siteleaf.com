---
title: New development workflow
date: 2016-01-15 19:38:00 -05:00
position: 3
---

Every developer has their own preferred workflow, but sometimes it's helpful to see another developer's workflow when learning a new platform or system.

**Here's our workflow while developing new Siteleaf v2 sites**, taking advantage of local development using the Jekyll gem and Siteleaf's GitHub syncing feature:

1. Create a new site
2. Create a new, empty [GitHub](http://github.com) repository for our site content and theme.
3. In Siteleaf, we setup [GitHub Sync](/themes/github-sync/) by connecting our GitHub repo through the "Sync" tab on our site's Settings page.
4. We add our initial content in Siteleaf. The structure of this content really depends on your content. If you're unsure of the exact structure, don't stress too much — it's pretty simple to move things around (everything is essentially a Markdown file)!
5. Once our [local development environment](/themes/local-development/) is setup, we clone our GitHub repo locally to our computer. Since our Siteleaf site and repo are synced, this also pulls any content we've added.
6. Now we start [developing our theme](/themes/intro/) and run our site locally by running `bundle exec jekyll serve` from the command line. This lets us preview our site locally using the content we added in step 4.
7. When we're done building the theme, we push our changes to GitHub. This then syncs the theme to Siteleaf and you're able to publish the site!

Obviously this is a bit simplified. Typically there's a series of pushing and pulling to and from GitHub as you build the theme and are adding or changing content in Siteleaf.
