---
title: Pagination
date: 2016-01-15 16:22:50.771000000 -05:00
position: 8
---

### Overview

`GET` endpoints that return multiple resources support pagination. You can change the page you are on using a `page` query string, and change the size of the page using the `per_page` query string. By default you start on page 1 and the page size is 30.

The presence of a [Link header](http://tools.ietf.org/html/rfc5988) signifies that a response has been paginated, and includes full urls to the surrounding pages. It is recommended to follow the provided urls and not assemble your own.

An example:

Listing the first page of my sites.

~~~ bash
$ curl -I '{{ site.data.api.url }}sites'

HTTP/1.1 200 OK
Link: <{{ site.data.api.url }}sites?page=2>; rel="next",
      <{{ site.data.api.url }}sites?page=3>; rel="last"
~~~

Listing my sites and specifying the `per_page` attribute (note the last page is now 18).

~~~ bash
$ curl -I '{{ site.data.api.url }}sites?per_page=2'

HTTP/1.1 200 OK
Link: <{{ site.data.api.url }}sites?page=2&per_page=2>; rel="next",
      <{{ site.data.api.url }}sites?page=18&per_page=2>; rel="last"
~~~

And following the next link from above to get to page 2.

~~~ bash
$ curl -I -n '{{ site.data.api.url }}sites?page=2&per_page=2'

HTTP/1.1 200 OK
Link: <{{ site.data.api.url }}sites?page=3&per_page=2>; rel="next",
      <{{ site.data.api.url }}sites?page=18&per_page=2>; rel="last",
      <{{ site.data.api.url }}sites?page=1&per_page=2>; rel="first",
      <{{ site.data.api.url }}sites?page=1&per_page=2>; rel="prev"
~~~
