---
title: Rate limits
date: 2020-11-03 13:26:00 -05:00
position: 3
---

Using the Siteleaf API, you can make up to 500 requests per 5 minute period.

Higher rate limits are available on our [Enterprise plan](https://www.siteleaf.com/plans/).
{: .tip}

If the API rate limit is reached, the Siteleaf API will return a `403 Forbidden` error. After the 5 minute period has passed you may resume making API requests.

When planning to make a large number of API requests, we recommend using a timeout or delay between requests to avoid hitting the limit.

#### Response

{{ site.data.api.status_forbidden }}