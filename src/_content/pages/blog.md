---
title: Blog
summary: Be sure to subscribe to the [feed](/feed.xml). All the cool kids in town use RSS these days!
permalink: blog/index.html
pagination:
  data: collections.post
  size: 24
---
{% include 'posts'
  items: pagination.items
%}
