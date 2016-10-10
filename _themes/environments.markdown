---
title: Environments
date: 2016-10-10 11:30:00 -04:00
position: 5
---

When working with Jekyll and Siteleaf, you typically have 3 distinct environments to help you code, preview, and publish your site:

1. `development` - this is your local machine where theme development takes place. Run `jekyll serve` and your site will be accessible at `http://localhost:4000`.

2. `staging` - sites on paid plans come with [preview functionality](/sites/preview/). Hit the "Generate preview" button in Siteleaf, and your site will be built with a unique URL without affecting your live site. This URL is shareable, so you can send it to colleagues outside of Siteleaf for feedback or proofreading.

3. `production` - where your final website is generated and hosted. This could be GitHub Pages, Amazon S3, Rackspace Cloud Files, or any host that supports (S)FTP (DigitalOcean, MediaTemple, etc).

Siteleaf will set the {% raw %}`{{ jekyll.environment }}`{% endraw %} variable to one of the environments above.

This allows you to set up conditional code in your theme to render content or add functionality based on the current environment. For example:

{% raw %}
```html
{% if jekyll.environment == 'production' %}
   <!-- your code here -->
{% endif %}
```
{% endraw %}

You can use this to alter image processing, insert a message, disable analytics, or even conduct user testing in one of your environments.

For more examples [see our blog post](https://www.siteleaf.com/blog/jekyll-environments/#example-1-client-feedback-on-staging).

### Testing environments

To test this functionality locally and ensure your conditionals work as intended, set `JEKYLL_ENV` when running `jekyll serve`. For example we could see how `production` would render:

```sh
$ JEKYLL_ENV=production bundle exec jekyll serve
```