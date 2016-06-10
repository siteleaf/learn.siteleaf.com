---
title: Hosting and Sync
date: 2016-03-03 15:51:00 -05:00
position: 12
---

### Overview

1. [Hosting options](#hosting-options)
1. [Sync options](#sync-options)

### Hosting options

Depending on your sites `hosting` value, the `hosting_options` fields are:

#### Hosting: `github`

| Key | Value |
|------|------|
| `access_token` | Github Access Token **(required)** |
| `path` | Full repository name `<user name>/<repo name>` **(required)** |
| `branch` | Branch name, `gh-pages` by default |
| `format` | `raw` or `compiled` (Github Pages or Siteleaf compile) **(required)** |

#### Hosting: `s3`

| Key | Value |
|------|------|
| `access_key` | AWS Access Key **(required)** |
| `secret_key` | AWS Secret Key **(required)** |
| `path` | S3 bucket name **(required)** |
| `region` | Region of S3 bucket **(required)** |

#### Hosting: `ftp`

| Key | Value |
|------|------|
| `protocol` | `ftp` or `sftp` **(required)** |
| `host` | Host name **(required)** |
| `port` | Port number, 21 if ftp or 22 if sftp by default |
| `username` | FTP username **(required)** |
| `password` | FTP password **(required)** |
| `path` | Path where site will be published **(required)** |

#### Hosting: `cloudfiles`

| Key | Value |
|------|------|
| `username` | Rackspace username **(required)** |
| `api_key` | Rackspace API key **(required)** |
| `path` | Container name **(required)** |
| `region` | Region of container **(required)** |


### Sync options

Github is currently the only `sync` provider, the `sync_options` are:

#### Sync: `github`

| Key | Value |
|------|------|
| `access_token` | Github Access Token **(required)** |
| `path` | Full repository name `<user name>/<repo name>` **(required)** |
| `branch` | Branch name, `master` by default |