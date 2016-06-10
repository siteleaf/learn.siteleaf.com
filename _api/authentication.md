---
title: Authentication
date: 2016-01-15 16:22:50.771000000 -05:00
position: 2
---

### Overview

The Siteleaf API requires all requests to be authenticated via Basic Auth with an API key and secret. These can be found on [your account page]({{ site.data.api.manage_url | append: 'account' }}) in the web app, or programmatically via the API as described below.

### Get an API key and secret

The authentication endpoint requires Basic Auth with a users email and password, and is the only endpoint that accepts this method of authentication. It returns the unique key and secret that can be used to authenticate with the rest of the Siteleaf API.

#### Endpoint

~~~
POST {{ site.data.api.url | append: 'auth' }}
~~~

#### Response
{{ site.data.api.status_ok }}
~~~
{
  "api_key": "pgYWJZyGvCY60Eys...",
  "api_secret": "m8IibnCkXISebc9b..."
}
~~~
