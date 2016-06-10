---
title: Custom build servers
date: 2016-04-05 22:00:00 -04:00
position: 6
---

If you need to use custom Jekyll plugins or if you'd like to have complete control over the build process for your site, you can use a custom build server or service like [DeployBot](http://deploybot.com/).

1. In your Hosting settings, choose GitHub Pages as your host.
2. Change the publish format to be "Compile by GitHub Pages". Now instead of publishing generated HTML files, it will publish the raw Jekyll files (`.markdown` instead of `.html`). You can also use whichever branch you'd like.
3. Go to your GitHub repository and create a new custom webhook. This will alert your build server when the branch you chose is updated.

After your server receives the webhook, you'll need to pull the new content and then you can compile it with Jekyll however you'd wish.

Siteleaf's preview excludes unsupported plugins, so you may see slightly different output when using it.
{: .note}
