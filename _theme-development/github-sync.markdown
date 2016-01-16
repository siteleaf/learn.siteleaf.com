---
title: GitHub Sync
date: 2015-10-31 20:03:00 -04:00
weight: 5
layout: page
---

When you're working on a site, you'll want to keep your theme and content in sync. This is exactly what GitHub Sync was made for.

**To enable GitHub Sync:**

1) After creating a site, go to the Sync tab under Settings

2) Choose a repo, and optionally a branch name.

We generally recommend using the `master` branch for syncing source files, and if using GitHub Pages for hosting, the `gh-pages` branch in the same repo for published sites. However you may use two separate repos, or any configuration you wish.

3) Commit changes to this branch using your favorite Git tools (like [GitHub Desktop](https://desktop.github.com/)), and Siteleaf will automatically pick up on any changes using webhooks.

Once this is all set up, every time you update your Siteleaf site or your GitHub repo, the changes will be synced between the two.