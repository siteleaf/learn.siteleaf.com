---
title: Authentication
date: 2016-01-15 16:22:00 -05:00
position: 2
---

### Overview

The Siteleaf API requires all requests to be authenticated via [Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication) with an API Key and Secret. These can be found on [your account page]({{ site.data.api.manage_url | append: 'account' }}) in the web app, or programmatically via the API as described below.

### Get an API Key and Secret

The authentication endpoint requires Basic Auth with a users email and password, and is the only endpoint that accepts this method of authentication. It returns the unique Key and Secret that can be used to authenticate with the rest of the Siteleaf API.

#### Endpoint

~~~
POST {{ site.data.api.url | append: 'auth' }}
~~~

#### Example

~~~
$ curl --user "email:password" \
       --request POST {{ site.data.api.url | append: 'auth' }}
~~~

#### Response
{{ site.data.api.status_ok }}
~~~
{
  "api_key": "pgYWJZyGvCY60Eys...",
  "api_secret": "m8IibnCkXISebc9b..."
}
~~~

### Using your API credentials

Once you have your API Key and Secret, you can use these to authenticate on all other endpoints with Basic Auth. Use your API Key in place of username, and API Secret in place of password, combined with a single colon (`:`) as shown in the example below.

#### Example

~~~
$ curl --user "api_key:api_secret" \
       --request GET {{ site.data.api.url | append: 'sites' }}
~~~