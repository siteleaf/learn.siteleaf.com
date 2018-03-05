---
title: Sass and SCSS
date: 2015-10-31 20:03:00 -04:00
position: 6
---

Siteleaf comes with support for [Sass and SCSS](http://sass-lang.com/) preprocessing right out of the box! It's pretty easy to get going, too: just put a `.scss` or `.sass` anywhere in your theme with added front matter to have Jekyll compile the Sass/SCSS to CSS. For example:

{% highlight sass %}
---
---

body
  color: red
{% endhighlight %}

Saving this file to `assets/stylesheet.sass` will process it and create `assets/stylesheet.css` on your site.

### Partials

Any partials that you're importing with `@import` should be placed in the `_sass/` directory. All the files you put into this directory should begin with an underscore (e.g., `_sass/_header.sass`).

---

### Further Reading

- [Jekyll: Assets](https://jekyllrb.com/docs/assets/)
