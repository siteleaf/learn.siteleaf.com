---
title: Collections
date: 2015-12-17 08:02:00 -05:00
position: 3
---

There will be times where you don't need a page or a post, but still need to group bits of content together. This is exactly what collections are: they are groups of [documents](/content/documents/) that aren't in any particular order.

{: .note}
For each collection, a new directory will be created in your project called `_[collection name]/` (e.g., `_people/`). Additionally, a piece of configuration will be added to your `_config.yml` file that defines the collection with its title and any metadata attached to it.


### Options

##### Output

By default, a collection's documents are generated into their own pages when they're published. It will generate these pages out into children of the parent collection. For example, if you had a document called `Ethan` in a collection called `People`, it will generate a page located at `/people/ethan`.

If you turn this option off, you'll still be able to access your documents in your layouts through the Collection Liquid attribute. For example, you'd be able to access the documents in the `People` collection by calling `site.people`.

##### Path

Changing the path changes the location of the generated collection directory and the path the collection is accessible at on your site.

##### Permalink

The permalink changes the path the collection is accessible at on your site.

---

### Further Reading

- [Jekyll: Collections](http://jekyllrb.com/docs/collections/)
