---
title: The front-end side of news
summary: Gathering and visualizing data of big news sites around the world.
date: 2016-04-28
tags:
  - data
  - performance
  - websites
twitterTimeline: '1063059280822185984'
---
I created a [GitHub repository](https://github.com/isellsoap/front-end-side-of-news/) featuring front-end metrics from big news sites around the world. For the start I gathered data of around 40 news sites from Germany and the USA, ranging from [abc.com](http://abc.com) to [zeit.de](https://www.zeit.de/). The plan is to add a lot of other sites from other countries step by step, like UK, France and Italy.

{% include 'figure' with '/images/2016/04/front-end-side-of-news.png'
  alt: 'Screenshot of the GitHub repository and the data table of the news websites'
  linkExternal: 'https://isellsoap.github.io/front-end-side-of-news/'
%}

The metrics range from the page weight (both not cached and cached) to if the website is SSL encrypted and how the usage of heading elements is handled. For example I found out that the <cite>Washington Post</cite> has a fully encrypted website – pretty cool – but that the front-end developers apparently don’t seem to be aware of the existence of heading elements in HTML (they actually use **none**, not a single `h1`, `h2`, `h3`, `h4`, `h5`, or `h6`) – pretty not cool. News sites are generally good in caching content ([cnn.com](http://cnn.com) being the exception, their site is around 965 KB (!) big when served from cache) but almost all do a horrible job in the initial, not-cached page call. Most are 2, 3 or even 4 MB big. At the time of writing [morgenweb.de](http://morgenweb.de) is around 5.4 MB big (generously calculated, because a special module for a special occasion was placed on the page during the measurement).

Some of the metrics are highly subjective, like the correct usage of headings, the markup and implementation of the site logo or the usability of a site without JavaScript enabled.

I really don’t know if all this is of any use to anyone, but I find it quite handy and maybe some front-end developers of a mentioned news site see it and try to fix some of the things that could be improved.

### Motivation

On March 30th 2015 [I tweeted an image](https://twitter.com/isellsoap/status/582456573139804160) of a weekend project I did showing a chart of HTTP requests and page weights of big news sites from various countries. I got a lot of feedback from that tweet (at least for my standards). [Anselm Hannemann asked](https://twitter.com/helloanselm/status/582457282111356928) if I would put up a HTML version of the image, so this is my attempt to do it.

I think especially big news sites have a certain responsibility of delivering a certain quality of front-end code to their customers because they normally have **massive reach**, **massive traffic**, **loyal readers** and are confronted with a **heterogeneous pallet of end-user devices** they have to serve. Lastly, they offer **information people want to consume** if they visit their site, so the information should be served as **fast** and **accessible** as possible.
