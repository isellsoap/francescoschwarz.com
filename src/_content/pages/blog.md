---
title: Blog
permalink: blog/index.html
pagination:
  data: collections.post
  size: 24
---

{% include 'posts'
  items: pagination.items
%}
