---
title: Settings
date: 2015-12-17 08:02:00 -05:00
layout: page
---

Under the "General" tab in your site settings, you can change several aspects of the site.

### Site title (`site.title`)

The site title is required.

### Timezone

This is what Siteleaf bases your timestamps off of.

### Permalink

This is an advanced Jekyll option that changes the format of your permalinks. By default, Siteleaf uses the `pretty` permalink style.

Style | URL Template
------|-------------
`date` | `/:categories/:year/:month/:day/:title.html`
`pretty` | `/:categories/:year/:month/:day/:title`
`ordinal` | `/:categories/:year/:y_day/:title.html`
`none` | `/:categories/:title.html`

### Meta fields (`site.meta`)

You can also add meta fields to your site. See the [meta fields](/managing-content/meta-fields) documentation for more information.
