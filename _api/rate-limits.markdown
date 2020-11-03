---
title: Rate limits
date: 2020-11-03 13:26:00 -05:00
---

Using the Siteleaf API, you can make up to 500 requests per 5 minute interval.

If the API rate limit is reached, the Siteleaf API will return a `403 Forbidden` error. In this case, you may resume making API requests once the 5 minute interval has passed.

#### Response

{{ site.data.api.status_forbidden }}

When running a large number of API requests, we recommend using a timeout or delay to avoid hitting the limit.

Higher rate limits are available on our [Enterprise plan](https://www.siteleaf.com/plans/).
{: .tip}