---
title: Jobs
date: 2016-01-15 16:22:50.771000000 -05:00
position: 10
---

### Overview

The Jobs endpoint can be used to monitor long running tasks, such as [publishing a site](/api/sites#publish-a-site).
It uses [Server Sent Events](https://html.spec.whatwg.org/multipage/comms.html#server-sent-events) (SSE) to comunicate with the client.

### Listen to a job

Events are streamed to the client in real time, with event data encoded as JSON. When the job completes or fails the server will close the connection.  The last event is available for 30 minutes, after which the job id expires.

#### Endpoint

~~~
GET {{ site.data.api.url | append: 'jobs/:job_id' }}
~~~

#### Response

{{ site.data.api.status_sse_ok }}
~~~
event:status
data:{"status":"working","message":"Working...","updated_at":"1452890740"}

event:status
data:{"status":"working","message":"Working...","updated_at":"1452890744"}

event:status
data:{"status":"complete","message":"Done!","updated_at":"1452890745"}
~~~

#### Response after job expires

{{ site.data.api.status_sse_gone }}
~~~
event:status
data:{"status":"error","message":"Job not found"}
~~~
