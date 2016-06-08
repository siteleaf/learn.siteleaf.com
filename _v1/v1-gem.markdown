---
title: V1 Gem
date: 2016-06-05 14:54:00 -04:00
position: 3
---

The v1 gem is not compatible with v2 sites (and vice versa), so we recommend using a [Gemfile](http://bundler.io/gemfile.html) to allow both versions to be installed.

**Important:** When using `push`/`pull` in v2, both theme and content files are included. Always make sure to do a `pull` first to avoid overwriting your Siteleaf content on `push`. Your local directory must have a `_config.yml` in order to push.