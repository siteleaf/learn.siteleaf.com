---
title: Settings
date: 2015-12-17 08:02:00 -05:00
position: 4
---

Under the "General" tab in your site settings, you can change several aspects of the site.

### Title

The site title is required. This can be accessed through the `title` attribute on your site:

{% highlight liquid %}
{% raw %}
{{ site.title }}
{% endraw %}
{% endhighlight %}

### Timezone

This is what Siteleaf bases your timestamps off of.

### Metadata

You can also set [metadata](/content/metadata) for the entire site here. In your theme, you can access this metadata on the `site` object. For example, if you had a piece of metadata called `description`, you can access it like this:

{% highlight liquid %}
{% raw %}
{{ site.description }}
{% endraw %}
{% endhighlight %}
