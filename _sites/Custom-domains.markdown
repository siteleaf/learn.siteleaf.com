---
title: Custom domains
date: 2019-04-26 11:30:00 -04:00
position: 2
---

To use your own domain with Siteleaf (e.g. \`www.example.com\`), check the “Use custom domain” option under your site’s settings.

![Screen Shot of Siteleaf settings](/uploads/Screen%20Shot%202019-04-26%20at%2011.19.28%20AM.png)

If you are using GitHub Hosting, [refer to their help docs on using a custom domain](https://help.github.com/en/articles/adding-or-removing-a-custom-domain-for-your-github-pages-site). If you are using S3, [refer to their walkthrough here](https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html).

## Subdomains

To use a custom subdomain (e.g. `blog.example.com`), create a CNAME record in your domain provider’s DNS settings. This should point to your unique CDN address.

| Record | Name | Target             |
|--------|------|--------------------|
| `CNAME`  | `blog` | `abc123.rackcdn.com` |

## Root domains

Since CNAME records are not generally supported on root domains (e.g. `example.com`), you will need to redirect your root domain to a subdomain (generally `www`). In your domain provider’s DNS settings, follow these settings:

Redirect your root domain to its `www` version (e.g. `www.example.com`).
Edit the CNAME for www and point it to your unique CDN address.

| Record             | Name                 | Target            |
|--------------------|----------------------|-------------------|
| `URL` or `Forward` | `@` or `example.com` | `www.example.com` |
| `CNAME`  | `blog` | `abc123.rackcdn.com` |

Note: If your domain provider does not support redirects (sometimes called URL records), you can use the free service [wwwizer](http://wwwizer.com/naked-domain-redirect).