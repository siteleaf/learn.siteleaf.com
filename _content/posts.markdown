---
title: Posts
date: 2015-11-03 08:01:00 -05:00
position: 5
---

Blogging is built right into Siteleaf. This means that you can just go ahead and start writing your posts and we'll handle it for you!

Posts are a bit like special documents — they belong to the Posts collection, but unlike regular documents, you can set them to be a draft.

Creating a post will create a Markdown file in the `_posts/` directory that will include the timestamp and date (for example, a post titled "New York" that was created on January 6th, 2016 will turn into `2016-01-06-new-york.markdown`).
{: .note}

### Options

##### Path

The path changes the URL this post is accessible at on your site within the `/posts/` path.

##### Visibility

By default, posts are visible. You can change them to hidden or draft. Hidden posts set `published: false` in the metadata, while draft posts are moved to the `_drafts/` directory.

Hidden posts and drafts are shown when previewing the site, but are safely hidden when you publish.
{: .tip}

##### Tags

Tags are a way to link common posts with each other. Separate multiple tags with a comma.

##### Categories

A category is an overarching theme that a post has. Separate multiple categories with a comma.

##### Date

This changes the timestamp associated with the post.

##### Permalink

The permalink changes the URL this post is accessible at on your site. Unlike a path, this can change the URL to be anywhere on the site, not just under `/posts/`.

##### Layout

Choose which layout you'd like to use. Any layout you have in `_layouts` will be listed here.

### Using a custom permalink for posts

By default, posts are published with the permalink template `/posts/:title/`, however you can customize this using [defaults](/content/defaults/). For example, we could use `/articles/:title/` instead:

```yaml
defaults:
- scope:
    path: ''
    type: posts
  values:
    permalink: "/articles/:title/" # replace "articles" with name of your choice
```

You can also rename the Posts collection to a name of your choice, this is what content editors will see in the Siteleaf interface. For example, instead of "Posts" we could call it "Articles":

```yaml
collections:
  posts:
    title: "Articles" # replace "Articles" with name of your choice
    output: true
```

---

### Further Reading

- [Jekyll: Writing posts](http://jekyllrb.com/docs/posts/)
- [Jekyll: Working with drafts](http://jekyllrb.com/docs/drafts/)
- [Jekyll: Permalinks](https://jekyllrb.com/docs/permalinks/)