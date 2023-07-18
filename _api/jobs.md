---
title: Jobs
date: 2016-01-15 16:22:00 -05:00
position: 11
---

### Overview

The Jobs endpoint can be used to monitor long running tasks, such as syncing, previewing, or [publishing a site](/api/sites#publish-a-site).

1. [Listen to a job](#listen-to-a-job)
1. [Cancel a job](#cancel-a-job)
{: .api__toc}



### Listen to a job

This endpoint uses [Server Sent Events](https://html.spec.whatwg.org/multipage/comms.html#server-sent-events) (SSE) to communicate with the client. Events are streamed in real time, with event data encoded as JSON. When the job completes or fails the server will close the connection.  The last event is available for 30 minutes, after which the Job ID expires.

Current Job IDs can be retrieved from the [Site endpoint](https://learn.siteleaf.com/api/sites/#get-a-site).

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


### Cancel a job

Active jobs can be aborted using the following request.

#### Endpoint

~~~
DELETE {{ site.data.api.url | append: 'jobs/:job_id' }}
~~~

#### Response

{{ site.data.api.status_ok }}